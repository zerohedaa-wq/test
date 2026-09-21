#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build-seo.py — генератор мультиязычного SEO для сайта проверки стабильности интернета.

Что делает:
  * перегенерирует блок <!-- SEO:START --> ... <!-- SEO:END --> в корневом index.html
    (корень = x-default);
  * создаёт /test/<lang>/index.html для всех 8 языков — это отдельные URL,
    которые индексируются поисковиками;
  * пишет sitemap.xml со всеми языковыми URL и alternate-ссылками;
  * пишет robots.txt со ссылкой на sitemap.

Источник переводов — i18n.js. Отдельного словаря здесь нет: title и description
читаются из него, чтобы не было двух расходящихся копий текстов.

Запуск:
    python3 build-seo.py https://ваш-домен.ru
    python3 build-seo.py https://логин.github.io/название-репозитория

Если аргумент не передан, берётся SITE_URL ниже.
"""

import io
import os
import re
import sys

# ----------------------------------------------------------------------------
# !!! ЗАМЕНИТЕ НА СВОЙ АДРЕС и запустите скрипт заново.
#     Без правильного домена hreflang и sitemap.xml работать не будут.
# ----------------------------------------------------------------------------
SITE_URL = "https://example.com"

LANGS = ["ru", "en", "kk", "zh", "es", "de", "fr", "tr"]
X_DEFAULT = "en"          # язык статического head в корне (совпадает с fallback в i18n.js)

ROOT = os.path.dirname(os.path.abspath(__file__))
INDEX = os.path.join(ROOT, "index.html")
I18N = os.path.join(ROOT, "i18n.js")

OG_LOCALE = {
    "ru": "ru_RU", "en": "en_US", "kk": "kk_KZ", "zh": "zh_CN",
    "es": "es_ES", "de": "de_DE", "fr": "fr_FR", "tr": "tr_TR",
}

# hreflang-коды для <link rel="alternate">
HREFLANG = {
    "ru": "ru", "en": "en", "kk": "kk", "zh": "zh-Hans",
    "es": "es", "de": "de", "fr": "fr", "tr": "tr",
}

SEO_START = "<!-- SEO:START"
SEO_END = "<!-- SEO:END -->"


def read(path):
    with io.open(path, encoding="utf-8") as f:
        return f.read()


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with io.open(path, "w", encoding="utf-8") as f:
        f.write(text)


def load_translations():
    """Достаёт title / description / html.lang из i18n.js для каждого языка."""
    src = read(I18N)
    out = {}
    for lang in LANGS:
        m = re.search(r"^%s: \{(.*?)^\}" % lang, src, re.S | re.M)
        if not m:
            sys.exit("!! в i18n.js не найден блок языка: %s" % lang)
        block = m.group(1)

        def field(key):
            fm = re.search(r'"%s":\s*"((?:[^"\\]|\\.)*)"' % re.escape(key), block)
            if not fm:
                sys.exit("!! в i18n.js нет ключа %s для языка %s" % (key, lang))
            return fm.group(1)

        out[lang] = {
            "title": field("app.title"),
            "description": field("seo.description"),
            "html_lang": field("html.lang"),
        }
    return out


def esc(text):
    """Экранирование для значения HTML-атрибута."""
    return (text.replace("&", "&amp;").replace('"', "&quot;")
                .replace("<", "&lt;").replace(">", "&gt;"))


def url_for(lang):
    return "%s/test/%s/" % (SITE_URL, lang)


def alternates():
    """Одинаковый набор hreflang на всех страницах — как требует спецификация Google."""
    lines = []
    for lang in LANGS:
        lines.append('<link rel="alternate" hreflang="%s" href="%s">'
                     % (HREFLANG[lang], url_for(lang)))
    lines.append('<link rel="alternate" hreflang="x-default" href="%s/">' % SITE_URL)
    return "\n".join(lines)


def seo_block(lang, canonical):
    tr = TRANSLATIONS[lang]
    title, description = esc(tr["title"]), esc(tr["description"])
    return "\n".join([
        "<!-- SEO:START \u2014 \u0431\u043b\u043e\u043a \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f build-seo.py, \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u0442\u044c -->",
        "<title>%s</title>" % title,
        '<meta name="description" content="%s">' % description,
        '<link rel="canonical" href="%s">' % canonical,
        alternates(),
        '<meta property="og:type" content="website">',
        '<meta property="og:site_name" content="%s">' % esc(TRANSLATIONS[X_DEFAULT]["title"]),
        '<meta property="og:title" content="%s">' % title,
        '<meta property="og:description" content="%s">' % description,
        '<meta property="og:url" content="%s">' % canonical,
        '<meta property="og:locale" content="%s">' % OG_LOCALE[lang],
        '<meta name="twitter:card" content="summary">',
        '<meta name="twitter:title" content="%s">' % title,
        '<meta name="twitter:description" content="%s">' % description,
        SEO_END,
    ])


def replace_block(html, block):
    start = html.find(SEO_START)
    end = html.find(SEO_END)
    if start == -1 or end == -1:
        sys.exit("!! в index.html не найдены маркеры SEO:START / SEO:END")
    return html[:start] + block + html[end + len(SEO_END):]


def build():
    html = read(INDEX)

    # --- корень: x-default ---
    root_html = replace_block(html, seo_block(X_DEFAULT, SITE_URL + "/"))
    root_html = re.sub(r'<html\b[^>]*>', '<html lang="%s">' % TRANSLATIONS[X_DEFAULT]["html_lang"],
                       root_html, count=1)
    write(INDEX, root_html)
    made = ["index.html"]

    # --- языковые версии ---
    for lang in LANGS:
        page = replace_block(html, seo_block(lang, url_for(lang)))
        page = re.sub(
            r'<html\b[^>]*>',
            '<html lang="%s" data-seo-lang="%s">' % (TRANSLATIONS[lang]["html_lang"], lang),
            page, count=1)
        # страница лежит на два уровня глубже — поправляем путь к общему скрипту
        page = page.replace('<script src="i18n.js">', '<script src="../../i18n.js">')
        rel = os.path.join("test", lang, "index.html")
        write(os.path.join(ROOT, rel), page)
        made.append(rel.replace(os.sep, "/"))

    # --- sitemap.xml ---
    entries = [(SITE_URL + "/", X_DEFAULT)] + [(url_for(l), l) for l in LANGS]
    xml = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
           '        xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for loc, _lang in entries:
        xml.append("  <url>")
        xml.append("    <loc>%s</loc>" % loc)
        for l in LANGS:
            xml.append('    <xhtml:link rel="alternate" hreflang="%s" href="%s"/>'
                       % (HREFLANG[l], url_for(l)))
        xml.append('    <xhtml:link rel="alternate" hreflang="x-default" href="%s/"/>' % SITE_URL)
        xml.append("    <changefreq>weekly</changefreq>")
        xml.append("    <priority>%s</priority>" % ("1.0" if loc.endswith("/test/en/") or loc == SITE_URL + "/" else "0.9"))
        xml.append("  </url>")
    xml.append("</urlset>")
    write(os.path.join(ROOT, "sitemap.xml"), "\n".join(xml) + "\n")
    made.append("sitemap.xml")

    # --- robots.txt ---
    write(os.path.join(ROOT, "robots.txt"),
          "User-agent: *\nAllow: /\n\nSitemap: %s/sitemap.xml\n" % SITE_URL)
    made.append("robots.txt")

    print("SITE_URL = %s" % SITE_URL)
    if "example.com" in SITE_URL:
        print("\n!!! SITE_URL \u043d\u0435 \u0437\u0430\u043c\u0435\u043d\u0451\u043d. \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435: python3 build-seo.py https://\u0432\u0430\u0448-\u0434\u043e\u043c\u0435\u043d\n")
    print("\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e:")
    for f in made:
        print("  " + f)


if __name__ == "__main__":
    if len(sys.argv) > 1:
        SITE_URL = sys.argv[1].rstrip("/")
    TRANSLATIONS = load_translations()
    build()
