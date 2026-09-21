/* ==========================================================================
   i18n: словарь + рантайм. Подключается ДО основного скрипта теста.
   Никак не меняет логику измерений — только тексты интерфейса.
   ========================================================================== */
window.I18N_DICT = {

ru: {
  "html.lang": "ru", "locale": "ru-RU", "lang.name": "Русский", "lang.aria": "Язык интерфейса",
  "app.title": "Проверка стабильности интернета",
  "app.h1": "Проверка стабильности интернета",
  "app.desc": "Проверьте задержку, джиттер и потери пакетов вашего соединения",
  "seo.description": "Бесплатный онлайн-тест стабильности интернета: измерьте ping, джиттер и потери пакетов прямо в браузере. График в реальном времени, история тестов и советы по улучшению связи.",
  "status.idle.title": "Готово к тесту",
  "status.idle.desc": "Выберите длительность и нажмите «Начать тест».",
  "dur.sec": "{n} сек",
  "autorepeat": "Автоповтор каждые 5 минут",
  "btn.start": "Начать тест",
  "btn.running": "Тест идёт...",
  "select.title": "Куда пинговать",
  "res.min": "Мин. ping", "res.avg": "Средний ping", "res.max": "Макс. ping",
  "res.loss": "Потери", "res.jitter": "Jitter",
  "sect.export": "Копировать / экспорт",
  "btn.copy": "Скопировать результат", "btn.share": "Поделиться", "btn.exportCsv": "Экспорт CSV",
  "toast.copied": "Скопировано!",
  "sect.history": "История тестов", "btn.clear": "Очистить",
  "history.empty": "Пока нет сохранённых тестов",
  "history.th.time": "Время", "history.th.ping": "Ping", "history.th.jitter": "Jitter",
  "history.th.loss": "Потери", "history.th.quality": "Оценка",
  "history.showAll": "Показать всю историю ({n})",
  "history.collapse": "Свернуть (только последние {n})",
  "history.aria": "Полная история тестов",
  "q.excellent": "Отлично", "q.good": "Хорошо", "q.fair": "Средне", "q.poor": "Плохо",
  "sect.advice": "Рекомендации",
  "advice.default": "Запустите тест — подскажем, что стоит проверить, исходя из результата.",
  "advice.banner.excellent": "Всё отлично — соединение стабильное, дополнительных действий не требуется.",
  "advice.banner.good": "Соединение хорошее. Если хочется выжать максимум, вот пара идей:",
  "advice.banner.fair": "Заметна небольшая нестабильность. Попробуйте один из вариантов ниже:",
  "advice.banner.poor": "Соединение нестабильно. Рекомендуем пройтись по списку ниже:",
  "advice.1": "Перезагрузите роутер и модем — простое, но часто самое эффективное решение.",
  "advice.2": "Подключитесь по кабелю (Ethernet) вместо Wi-Fi, если есть возможность.",
  "advice.3": "Закройте программы и вкладки, которые качают трафик в фоне (торренты, облачные бэкапы, обновления).",
  "advice.4": "Проверьте, сколько устройств одновременно сидят в сети и не идёт ли где-то тяжёлая загрузка/стрим.",
  "advice.5": "Расположите роутер ближе, на возвышении и без препятствий (стен, металла, техники).",
  "advice.6": "Смените Wi-Fi канал в настройках роутера — соседние сети могут создавать помехи.",
  "advice.7": "Если проблема повторяется постоянно — обратитесь в поддержку провайдера с этими результатами.",
  "sect.glossary": "Что означают эти показатели",
  "gloss.ping.t": "Ping (пинг)",
  "gloss.ping.d": "Время, за которое сигнал доходит от вашего устройства до сервера и обратно. Измеряется в миллисекундах (мс). Чем меньше — тем быстрее реагирует соединение. До 50 мс — отлично для игр и звонков, 50–100 мс — комфортно для большинства задач, выше 150–200 мс уже заметны задержки.",
  "gloss.jitter.t": "Jitter (джиттер)",
  "gloss.jitter.d": "Насколько сильно колеблется пинг от одного измерения к другому. Даже при невысоком среднем пинге большой джиттер делает видеозвонки и онлайн-игры рваными, потому что задержка постоянно «прыгает».",
  "gloss.loss.t": "Потери пакетов (Packet Loss)",
  "gloss.loss.d": "Процент данных, которые не дошли до сервера или обратно и потребовали повторной отправки. В норме — 0%. Уже 2–5% заметны как подвисания и прерывания в звонках, а от 10% и выше соединение можно считать нестабильным.",
  "gloss.minmax.t": "Мин. / Макс. ping",
  "gloss.minmax.d": "Самое быстрое и самое медленное измерение за время теста. Большой разброс между ними — ещё один признак нестабильного соединения, даже если средний пинг выглядит неплохо.",
  "sect.extra": "Дополнительно",
  "speed.summary": "Тест скорости (download / upload)",
  "speed.note": "Необязательная проверка, не связана с основным тестом стабильности выше.",
  "speed.btn": "Запустить тест скорости", "speed.btnRunning": "Измеряем...",
  "speed.download": "Download", "speed.upload": "Upload",
  "speed.measuringDown": "Измеряем скорость загрузки...",
  "speed.measuringUp": "Измеряем скорость отдачи...",
  "speed.done": "Готово. Это приблизительная оценка, не заменяет специализированные спидтесты.",
  "speed.error": "Не удалось измерить скорость — проверьте соединение и попробуйте снова.",
  "chart.label": "Ping (мс)", "chart.y": "Ping, мс", "chart.x": "Время", "chart.secSuffix": "с",
  "run.title": "Тест выполняется...",
  "run.checking": "Проверяем доступность серверов...",
  "run.fallback": "Внешние сайты недоступны из этой среды — измеряем задержку до сервера этой страницы.",
  "run.otherServer": "Выбранный сервер не отвечает — измеряем задержку до: {server}.",
  "run.measuring": "Измеряем задержку до: {server}. Подождите.",
  "fallback.serverLabel": "сервер этой страницы",
  "err.noConn.title": "Нет соединения",
  "err.offline": "Устройство не подключено к сети. Проверьте Wi-Fi или кабель.",
  "err.blocked": "Ни один сервер не ответил. Проверьте интернет, отключите VPN/блокировщик рекламы или файрвол; если страница открыта в среде, где внешние запросы запрещены, запустите файл локально.",
  "err.noMeasure": "Не удалось выполнить ни одного измерения. Проверьте подключение к интернету.",
  "eval.excellent.t": "Отличное соединение",
  "eval.excellent.d": "Низкий пинг и минимальный джиттер — идеально для игр и звонков.",
  "eval.good.t": "Хорошее соединение",
  "eval.good.d": "Соединение стабильное, подходит для большинства задач.",
  "eval.fair.t": "Среднее соединение",
  "eval.fair.d": "Возможны небольшие задержки в видеозвонках и играх.",
  "eval.poor.t": "Плохое соединение",
  "eval.poor.d": "Высокий пинг или нестабильность — возможны проблемы с соединением.",
  "eval.lossPoor.d": "Высокий процент потерь пакетов — возможны обрывы и подвисания.",
  "result.fallbackNote": " Замер выполнен до сервера этой страницы, а не до внешнего сайта.",
  "copy.header": "Проверка соединения ({time})",
  "copy.avg": "Средний ping: {v} ms", "copy.minmax": "Мин/Макс: {min} / {max} ms",
  "copy.jitter": "Jitter: {v} ms", "copy.loss": "Потери пакетов: {v} %", "copy.quality": "Оценка: {v}",
  "share.text": "Проверка стабильности интернета ({time}): ping {avg} ms, jitter {jitter} ms, потери {loss}% — {quality}",
  "footer.feedback": "Обратная связь"
},

en: {
  "html.lang": "en", "locale": "en-US", "lang.name": "English", "lang.aria": "Interface language",
  "app.title": "Internet Stability Test",
  "app.h1": "Internet Stability Test",
  "app.desc": "Check the latency, jitter and packet loss of your connection",
  "seo.description": "Free online internet stability test: measure ping, jitter and packet loss right in your browser. Live chart, test history and tips to fix an unstable connection.",
  "status.idle.title": "Ready to test",
  "status.idle.desc": "Pick a duration and press “Start test”.",
  "dur.sec": "{n} sec",
  "autorepeat": "Auto-repeat every 5 minutes",
  "btn.start": "Start test",
  "btn.running": "Test running...",
  "select.title": "Ping target",
  "res.min": "Min ping", "res.avg": "Average ping", "res.max": "Max ping",
  "res.loss": "Loss", "res.jitter": "Jitter",
  "sect.export": "Copy / export",
  "btn.copy": "Copy result", "btn.share": "Share", "btn.exportCsv": "Export CSV",
  "toast.copied": "Copied!",
  "sect.history": "Test history", "btn.clear": "Clear",
  "history.empty": "No saved tests yet",
  "history.th.time": "Time", "history.th.ping": "Ping", "history.th.jitter": "Jitter",
  "history.th.loss": "Loss", "history.th.quality": "Rating",
  "history.showAll": "Show full history ({n})",
  "history.collapse": "Collapse (last {n} only)",
  "history.aria": "Full test history",
  "q.excellent": "Excellent", "q.good": "Good", "q.fair": "Fair", "q.poor": "Poor",
  "sect.advice": "Recommendations",
  "advice.default": "Run a test — we will suggest what to check based on the result.",
  "advice.banner.excellent": "All good — your connection is stable, nothing else to do.",
  "advice.banner.good": "The connection is good. If you want to squeeze out more, try these:",
  "advice.banner.fair": "Some instability is noticeable. Try one of the options below:",
  "advice.banner.poor": "The connection is unstable. We recommend going through the list below:",
  "advice.1": "Restart your router and modem — simple, but often the most effective fix.",
  "advice.2": "Use a wired (Ethernet) connection instead of Wi-Fi if you can.",
  "advice.3": "Close apps and tabs that use traffic in the background (torrents, cloud backups, updates).",
  "advice.4": "Check how many devices are online at once and whether a heavy download or stream is running.",
  "advice.5": "Move the router closer, place it higher and clear of obstacles (walls, metal, appliances).",
  "advice.6": "Change the Wi-Fi channel in the router settings — neighbouring networks can cause interference.",
  "advice.7": "If the problem keeps coming back, contact your ISP support with these results.",
  "sect.glossary": "What these numbers mean",
  "gloss.ping.t": "Ping",
  "gloss.ping.d": "The time a signal takes to travel from your device to the server and back, measured in milliseconds (ms). Lower is better. Under 50 ms is great for gaming and calls, 50–100 ms is comfortable for most tasks, and above 150–200 ms delays become noticeable.",
  "gloss.jitter.t": "Jitter",
  "gloss.jitter.d": "How much ping varies from one measurement to the next. Even with a low average ping, high jitter makes video calls and online games choppy because the delay keeps jumping around.",
  "gloss.loss.t": "Packet loss",
  "gloss.loss.d": "The percentage of data that never reached the server (or came back) and had to be resent. Normally it should be 0%. Even 2–5% shows up as freezes and dropouts in calls, and 10% or more means the connection is unstable.",
  "gloss.minmax.t": "Min / Max ping",
  "gloss.minmax.d": "The fastest and the slowest measurement during the test. A large gap between them is another sign of an unstable connection, even if the average ping looks fine.",
  "sect.extra": "Extras",
  "speed.summary": "Speed test (download / upload)",
  "speed.note": "Optional check, unrelated to the main stability test above.",
  "speed.btn": "Run speed test", "speed.btnRunning": "Measuring...",
  "speed.download": "Download", "speed.upload": "Upload",
  "speed.measuringDown": "Measuring download speed...",
  "speed.measuringUp": "Measuring upload speed...",
  "speed.done": "Done. This is a rough estimate and does not replace dedicated speed tests.",
  "speed.error": "Could not measure speed — check your connection and try again.",
  "chart.label": "Ping (ms)", "chart.y": "Ping, ms", "chart.x": "Time", "chart.secSuffix": "s",
  "run.title": "Test in progress...",
  "run.checking": "Checking which servers respond...",
  "run.fallback": "External sites are unreachable from this environment — measuring latency to this page's own server.",
  "run.otherServer": "The selected server is not responding — measuring latency to: {server}.",
  "run.measuring": "Measuring latency to: {server}. Please wait.",
  "fallback.serverLabel": "this page's server",
  "err.noConn.title": "No connection",
  "err.offline": "The device is offline. Check your Wi-Fi or cable.",
  "err.blocked": "No server responded. Check your internet, disable VPN / ad blocker or firewall; if the page is open in an environment that blocks external requests, run the file locally.",
  "err.noMeasure": "Not a single measurement succeeded. Check your internet connection.",
  "eval.excellent.t": "Excellent connection",
  "eval.excellent.d": "Low ping and minimal jitter — perfect for gaming and calls.",
  "eval.good.t": "Good connection",
  "eval.good.d": "The connection is stable and fine for most tasks.",
  "eval.fair.t": "Fair connection",
  "eval.fair.d": "Minor delays in video calls and games are possible.",
  "eval.poor.t": "Poor connection",
  "eval.poor.d": "High ping or instability — connection problems are likely.",
  "eval.lossPoor.d": "High packet loss — dropouts and freezes are likely.",
  "result.fallbackNote": " The measurement was made against this page's own server, not an external site.",
  "copy.header": "Connection test ({time})",
  "copy.avg": "Average ping: {v} ms", "copy.minmax": "Min/Max: {min} / {max} ms",
  "copy.jitter": "Jitter: {v} ms", "copy.loss": "Packet loss: {v} %", "copy.quality": "Rating: {v}",
  "share.text": "Internet stability test ({time}): ping {avg} ms, jitter {jitter} ms, loss {loss}% — {quality}",
  "footer.feedback": "Feedback"
},

kk: {
  "html.lang": "kk", "locale": "kk-KZ", "lang.name": "Қазақша", "lang.aria": "Интерфейс тілі",
  "app.title": "Интернет тұрақтылығын тексеру",
  "app.h1": "Интернет тұрақтылығын тексеру",
  "app.desc": "Байланысыңыздың кідірісін, джиттерін және пакет жоғалтуын тексеріңіз",
  "seo.description": "Интернет тұрақтылығын тегін онлайн тексеру: браузерде ping, джиттер және пакет жоғалтуын өлшеңіз. Нақты уақыттағы график, тест тарихы және кеңестер.",
  "status.idle.title": "Тестке дайын",
  "status.idle.desc": "Ұзақтығын таңдап, «Тестті бастау» түймесін басыңыз.",
  "dur.sec": "{n} сек",
  "autorepeat": "Әр 5 минут сайын автоқайталау",
  "btn.start": "Тестті бастау",
  "btn.running": "Тест жүріп жатыр...",
  "select.title": "Қай серверге ping жіберу",
  "res.min": "Мин. ping", "res.avg": "Орташа ping", "res.max": "Макс. ping",
  "res.loss": "Жоғалту", "res.jitter": "Jitter",
  "sect.export": "Көшіру / экспорт",
  "btn.copy": "Нәтижені көшіру", "btn.share": "Бөлісу", "btn.exportCsv": "CSV экспорты",
  "toast.copied": "Көшірілді!",
  "sect.history": "Тест тарихы", "btn.clear": "Тазалау",
  "history.empty": "Сақталған тестер әзірге жоқ",
  "history.th.time": "Уақыт", "history.th.ping": "Ping", "history.th.jitter": "Jitter",
  "history.th.loss": "Жоғалту", "history.th.quality": "Бағасы",
  "history.showAll": "Толық тарихты көрсету ({n})",
  "history.collapse": "Жию (тек соңғы {n})",
  "history.aria": "Тесттердің толық тарихы",
  "q.excellent": "Өте жақсы", "q.good": "Жақсы", "q.fair": "Орташа", "q.poor": "Нашар",
  "sect.advice": "Ұсыныстар",
  "advice.default": "Тестті іске қосыңыз — нәтижеге қарай не тексеру керегін айтамыз.",
  "advice.banner.excellent": "Бәрі тамаша — байланыс тұрақты, қосымша әрекет қажет емес.",
  "advice.banner.good": "Байланыс жақсы. Одан да жақсартқыңыз келсе, мына идеялар бар:",
  "advice.banner.fair": "Шамалы тұрақсыздық байқалады. Төмендегі нұсқалардың бірін қолданып көріңіз:",
  "advice.banner.poor": "Байланыс тұрақсыз. Төмендегі тізімді қарап шығуды ұсынамыз:",
  "advice.1": "Роутер мен модемді қайта қосыңыз — қарапайым, бірақ көбіне ең тиімді шешім.",
  "advice.2": "Мүмкіндік болса, Wi-Fi орнына кабельмен (Ethernet) қосылыңыз.",
  "advice.3": "Фонда трафик жұмсайтын бағдарламалар мен қойындыларды жабыңыз (торрент, бұлттық сақтық көшірме, жаңартулар).",
  "advice.4": "Желіде бір мезгілде қанша құрылғы бар екенін және ауыр жүктеме/стрим жүріп жатқанын тексеріңіз.",
  "advice.5": "Роутерді жақынырақ, биіктеу және кедергісіз жерге қойыңыз (қабырға, металл, техника).",
  "advice.6": "Роутер параметрлерінде Wi-Fi арнасын ауыстырыңыз — көрші желілер кедергі келтіруі мүмкін.",
  "advice.7": "Мәселе үнемі қайталанса — осы нәтижелермен провайдер қолдау қызметіне хабарласыңыз.",
  "sect.glossary": "Бұл көрсеткіштер нені білдіреді",
  "gloss.ping.t": "Ping (пинг)",
  "gloss.ping.d": "Сигналдың құрылғыдан серверге барып қайту уақыты. Миллисекундпен (мс) өлшенеді. Неғұрлым аз болса, байланыс соғұрлым жылдам. 50 мс-қа дейін — ойындар мен қоңырауларға өте жақсы, 50–100 мс — көптеген тапсырмаларға ыңғайлы, 150–200 мс-тан жоғары кідіріс байқалады.",
  "gloss.jitter.t": "Jitter (джиттер)",
  "gloss.jitter.d": "Пингтің өлшеуден өлшеуге қаншалықты ауытқитыны. Орташа пинг төмен болса да, жоғары джиттер бейнеқоңыраулар мен онлайн ойындарды үзік-үзік етеді, себебі кідіріс үнемі «секіреді».",
  "gloss.loss.t": "Пакет жоғалту (Packet Loss)",
  "gloss.loss.d": "Серверге жетпей қалып, қайта жіберуді талап еткен деректер пайызы. Қалыпты жағдайда — 0%. 2–5% қазірдің өзінде қоңыраулардағы іліну мен үзіліс түрінде байқалады, ал 10%-дан жоғары болса, байланысты тұрақсыз деуге болады.",
  "gloss.minmax.t": "Мин. / Макс. ping",
  "gloss.minmax.d": "Тест кезіндегі ең жылдам және ең баяу өлшеу. Олардың арасындағы үлкен айырмашылық — орташа пинг жақсы көрінсе де, тұрақсыз байланыстың тағы бір белгісі.",
  "sect.extra": "Қосымша",
  "speed.summary": "Жылдамдық тесті (download / upload)",
  "speed.note": "Міндетті емес тексеру, жоғарыдағы негізгі тұрақтылық тестіне қатысы жоқ.",
  "speed.btn": "Жылдамдық тестін іске қосу", "speed.btnRunning": "Өлшеніп жатыр...",
  "speed.download": "Download", "speed.upload": "Upload",
  "speed.measuringDown": "Жүктеп алу жылдамдығы өлшенуде...",
  "speed.measuringUp": "Жүктеп жіберу жылдамдығы өлшенуде...",
  "speed.done": "Дайын. Бұл шамамен бағалау, мамандандырылған спидтестерді алмастырмайды.",
  "speed.error": "Жылдамдықты өлшеу мүмкін болмады — байланысты тексеріп, қайта көріңіз.",
  "chart.label": "Ping (мс)", "chart.y": "Ping, мс", "chart.x": "Уақыт", "chart.secSuffix": "с",
  "run.title": "Тест орындалуда...",
  "run.checking": "Серверлердің қолжетімділігі тексерілуде...",
  "run.fallback": "Сыртқы сайттар бұл ортадан қолжетімсіз — осы беттің серверіне дейінгі кідіріс өлшенуде.",
  "run.otherServer": "Таңдалған сервер жауап бермейді — кідіріс мына серверге өлшенуде: {server}.",
  "run.measuring": "Кідіріс мына серверге өлшенуде: {server}. Күте тұрыңыз.",
  "fallback.serverLabel": "осы беттің сервері",
  "err.noConn.title": "Байланыс жоқ",
  "err.offline": "Құрылғы желіге қосылмаған. Wi-Fi немесе кабельді тексеріңіз.",
  "err.blocked": "Бірде-бір сервер жауап бермеді. Интернетті тексеріңіз, VPN/жарнама бұғаттағышты немесе брандмауэрді өшіріңіз; бет сыртқы сұрауларға тыйым салынған ортада ашылса, файлды жергілікті түрде іске қосыңыз.",
  "err.noMeasure": "Бірде-бір өлшеу орындалмады. Интернет байланысын тексеріңіз.",
  "eval.excellent.t": "Өте жақсы байланыс",
  "eval.excellent.d": "Төмен пинг және минималды джиттер — ойындар мен қоңырауларға тамаша.",
  "eval.good.t": "Жақсы байланыс",
  "eval.good.d": "Байланыс тұрақты, көптеген тапсырмаларға жарайды.",
  "eval.fair.t": "Орташа байланыс",
  "eval.fair.d": "Бейнеқоңыраулар мен ойындарда шамалы кідіріс болуы мүмкін.",
  "eval.poor.t": "Нашар байланыс",
  "eval.poor.d": "Жоғары пинг немесе тұрақсыздық — байланыс мәселелері болуы мүмкін.",
  "eval.lossPoor.d": "Пакет жоғалту пайызы жоғары — үзілістер мен ілінулер болуы мүмкін.",
  "result.fallbackNote": " Өлшеу сыртқы сайтқа емес, осы беттің серверіне дейін жасалды.",
  "copy.header": "Байланысты тексеру ({time})",
  "copy.avg": "Орташа ping: {v} ms", "copy.minmax": "Мин/Макс: {min} / {max} ms",
  "copy.jitter": "Jitter: {v} ms", "copy.loss": "Пакет жоғалту: {v} %", "copy.quality": "Бағасы: {v}",
  "share.text": "Интернет тұрақтылығын тексеру ({time}): ping {avg} ms, jitter {jitter} ms, жоғалту {loss}% — {quality}",
  "footer.feedback": "Кері байланыс"
},

zh: {
  "html.lang": "zh-CN", "locale": "zh-CN", "lang.name": "中文", "lang.aria": "界面语言",
  "app.title": "互联网稳定性测试",
  "app.h1": "网络稳定性测试",
  "app.desc": "检测您网络连接的延迟、抖动和丢包率",
  "seo.description": "免费在线互联网稳定性测试：直接在浏览器中测量延迟、抖动和丢包率。实时图表、测试历史记录以及改善连接的建议。",
  "status.idle.title": "准备就绪",
  "status.idle.desc": "请选择测试时长并点击“开始测试”。",
  "dur.sec": "{n} 秒",
  "autorepeat": "每 5 分钟自动重复",
  "btn.start": "开始测试",
  "btn.running": "测试进行中…",
  "select.title": "测试目标服务器",
  "res.min": "最低延迟", "res.avg": "平均延迟", "res.max": "最高延迟",
  "res.loss": "丢包率", "res.jitter": "抖动",
  "sect.export": "复制 / 导出",
  "btn.copy": "复制结果", "btn.share": "分享", "btn.exportCsv": "导出 CSV",
  "toast.copied": "已复制！",
  "sect.history": "测试历史", "btn.clear": "清空",
  "history.empty": "暂无保存的测试记录",
  "history.th.time": "时间", "history.th.ping": "延迟", "history.th.jitter": "抖动",
  "history.th.loss": "丢包", "history.th.quality": "评价",
  "history.showAll": "显示全部历史（{n}）",
  "history.collapse": "收起（仅最近 {n} 条）",
  "history.aria": "完整测试历史",
  "q.excellent": "优秀", "q.good": "良好", "q.fair": "一般", "q.poor": "较差",
  "sect.advice": "改善建议",
  "advice.default": "先运行一次测试，我们会根据结果给出检查建议。",
  "advice.banner.excellent": "一切正常 — 连接稳定，无需额外操作。",
  "advice.banner.good": "连接良好。如果想进一步优化，可以试试：",
  "advice.banner.fair": "存在轻微不稳定。可以尝试下面的方法：",
  "advice.banner.poor": "连接不稳定。建议逐项检查下面的清单：",
  "advice.1": "重启路由器和调制解调器 — 方法简单，但往往最有效。",
  "advice.2": "如果条件允许，改用网线（以太网）代替 Wi-Fi。",
  "advice.3": "关闭在后台占用流量的程序和标签页（BT 下载、云备份、系统更新）。",
  "advice.4": "检查同时联网的设备数量，以及是否有大文件下载或视频推流。",
  "advice.5": "把路由器放得更近、位置更高，避开墙体、金属和家电的遮挡。",
  "advice.6": "在路由器设置中更换 Wi-Fi 信道 — 邻近网络可能造成干扰。",
  "advice.7": "如果问题反复出现，请携带这些测试结果联系宽带运营商客服。",
  "sect.glossary": "这些指标的含义",
  "gloss.ping.t": "Ping（延迟）",
  "gloss.ping.d": "信号从您的设备到服务器并返回所需的时间，单位为毫秒（ms）。数值越小，连接响应越快。低于 50 ms 非常适合游戏和通话，50–100 ms 能满足大多数场景，超过 150–200 ms 就会明显感到卡顿。",
  "gloss.jitter.t": "Jitter（抖动）",
  "gloss.jitter.d": "相邻两次测量之间延迟的波动幅度。即使平均延迟不高，抖动过大也会让视频通话和网络游戏断断续续，因为延迟始终在跳变。",
  "gloss.loss.t": "丢包率（Packet Loss）",
  "gloss.loss.d": "未能送达服务器或返回、需要重新发送的数据占比。正常应为 0%。2–5% 就会表现为通话卡顿和中断，达到 10% 以上则可视为连接不稳定。",
  "gloss.minmax.t": "最低 / 最高延迟",
  "gloss.minmax.d": "测试期间最快和最慢的一次测量结果。两者差距过大同样说明连接不稳定，即使平均延迟看起来不错。",
  "sect.extra": "附加功能",
  "speed.summary": "速度测试（下载 / 上传）",
  "speed.note": "可选检测，与上方的主稳定性测试无关。",
  "speed.btn": "开始速度测试", "speed.btnRunning": "测量中…",
  "speed.download": "下载", "speed.upload": "上传",
  "speed.measuringDown": "正在测量下载速度…",
  "speed.measuringUp": "正在测量上传速度…",
  "speed.done": "完成。这只是粗略估算，不能替代专业测速工具。",
  "speed.error": "速度测量失败 — 请检查网络连接后重试。",
  "chart.label": "延迟 (ms)", "chart.y": "延迟, ms", "chart.x": "时间", "chart.secSuffix": "秒",
  "run.title": "测试进行中…",
  "run.checking": "正在检测服务器可用性…",
  "run.fallback": "当前环境无法访问外部站点 — 改为测量到本页面服务器的延迟。",
  "run.otherServer": "所选服务器无响应 — 改为测量到 {server} 的延迟。",
  "run.measuring": "正在测量到 {server} 的延迟，请稍候。",
  "fallback.serverLabel": "本页面服务器",
  "err.noConn.title": "无连接",
  "err.offline": "设备未连接网络。请检查 Wi-Fi 或网线。",
  "err.blocked": "没有任何服务器响应。请检查网络，关闭 VPN／广告拦截或防火墙；如果页面运行在禁止外部请求的环境中，请在本地打开该文件。",
  "err.noMeasure": "没有完成任何一次测量。请检查网络连接。",
  "eval.excellent.t": "连接优秀",
  "eval.excellent.d": "延迟低、抖动小 — 非常适合游戏和通话。",
  "eval.good.t": "连接良好",
  "eval.good.d": "连接稳定，可以满足大多数使用场景。",
  "eval.fair.t": "连接一般",
  "eval.fair.d": "视频通话和游戏中可能出现轻微延迟。",
  "eval.poor.t": "连接较差",
  "eval.poor.d": "延迟过高或不稳定 — 可能出现连接问题。",
  "eval.lossPoor.d": "丢包率过高 — 可能出现掉线和卡顿。",
  "result.fallbackNote": " 本次测量的目标是本页面服务器，而非外部站点。",
  "copy.header": "网络连接测试（{time}）",
  "copy.avg": "平均延迟：{v} ms", "copy.minmax": "最低/最高：{min} / {max} ms",
  "copy.jitter": "抖动：{v} ms", "copy.loss": "丢包率：{v} %", "copy.quality": "评价：{v}",
  "share.text": "网络稳定性测试（{time}）：延迟 {avg} ms，抖动 {jitter} ms，丢包 {loss}% — {quality}",
  "footer.feedback": "反馈"
},
es: {
  "html.lang": "es", "locale": "es-ES", "lang.name": "Español", "lang.aria": "Idioma de la interfaz",
  "app.title": "Prueba de estabilidad de Internet",
  "app.h1": "Test de estabilidad de Internet",
  "app.desc": "Comprueba la latencia, el jitter y la pérdida de paquetes de tu conexión",
  "seo.description": "Prueba gratuita de estabilidad de Internet: mide el ping, el jitter y la pérdida de paquetes en tu navegador. Gráfico en vivo, historial y consejos para mejorar.",
  "status.idle.title": "Listo para la prueba",
  "status.idle.desc": "Elige la duración y pulsa «Iniciar prueba».",
  "dur.sec": "{n} s",
  "autorepeat": "Repetir automáticamente cada 5 minutos",
  "btn.start": "Iniciar prueba",
  "btn.running": "Prueba en curso...",
  "select.title": "Servidor de destino",
  "res.min": "Ping mín.", "res.avg": "Ping medio", "res.max": "Ping máx.",
  "res.loss": "Pérdida", "res.jitter": "Jitter",
  "sect.export": "Copiar / exportar",
  "btn.copy": "Copiar resultado", "btn.share": "Compartir", "btn.exportCsv": "Exportar CSV",
  "toast.copied": "¡Copiado!",
  "sect.history": "Historial de pruebas", "btn.clear": "Borrar",
  "history.empty": "Todavía no hay pruebas guardadas",
  "history.th.time": "Hora", "history.th.ping": "Ping", "history.th.jitter": "Jitter",
  "history.th.loss": "Pérdida", "history.th.quality": "Valoración",
  "history.showAll": "Ver historial completo ({n})",
  "history.collapse": "Contraer (solo las últimas {n})",
  "history.aria": "Historial completo de pruebas",
  "q.excellent": "Excelente", "q.good": "Buena", "q.fair": "Regular", "q.poor": "Mala",
  "sect.advice": "Recomendaciones",
  "advice.default": "Ejecuta una prueba y te diremos qué conviene revisar según el resultado.",
  "advice.banner.excellent": "Todo perfecto: la conexión es estable y no hace falta nada más.",
  "advice.banner.good": "La conexión es buena. Si quieres exprimirla al máximo, prueba esto:",
  "advice.banner.fair": "Se nota algo de inestabilidad. Prueba una de estas opciones:",
  "advice.banner.poor": "La conexión es inestable. Te recomendamos repasar la lista siguiente:",
  "advice.1": "Reinicia el router y el módem: es lo más sencillo y a menudo lo más eficaz.",
  "advice.2": "Conéctate por cable (Ethernet) en lugar de Wi-Fi si es posible.",
  "advice.3": "Cierra programas y pestañas que consuman tráfico en segundo plano (torrents, copias en la nube, actualizaciones).",
  "advice.4": "Comprueba cuántos dispositivos están conectados a la vez y si hay alguna descarga o emisión pesada.",
  "advice.5": "Coloca el router más cerca, elevado y sin obstáculos (paredes, metal, electrodomésticos).",
  "advice.6": "Cambia el canal Wi-Fi en los ajustes del router: las redes vecinas pueden causar interferencias.",
  "advice.7": "Si el problema se repite constantemente, contacta con el soporte de tu proveedor con estos resultados.",
  "sect.glossary": "Qué significan estos indicadores",
  "gloss.ping.t": "Ping (latencia)",
  "gloss.ping.d": "Tiempo que tarda la señal en ir de tu dispositivo al servidor y volver, medido en milisegundos (ms). Cuanto menor, más rápida responde la conexión. Menos de 50 ms es excelente para juegos y llamadas, entre 50 y 100 ms resulta cómodo para casi todo, y por encima de 150–200 ms los retardos ya se notan.",
  "gloss.jitter.t": "Jitter (fluctuación)",
  "gloss.jitter.d": "Cuánto varía el ping entre una medición y la siguiente. Incluso con un ping medio bajo, un jitter alto hace que las videollamadas y los juegos en línea se entrecorten, porque el retardo no para de saltar.",
  "gloss.loss.t": "Pérdida de paquetes",
  "gloss.loss.d": "Porcentaje de datos que no llegaron al servidor o de vuelta y hubo que reenviar. Lo normal es 0%. Entre un 2 y un 5% ya se percibe como cortes y bloqueos en las llamadas, y a partir del 10% la conexión puede considerarse inestable.",
  "gloss.minmax.t": "Ping mín. / máx.",
  "gloss.minmax.d": "La medición más rápida y la más lenta durante la prueba. Una diferencia grande entre ambas es otra señal de conexión inestable, aunque el ping medio parezca bueno.",
  "sect.extra": "Extras",
  "speed.summary": "Test de velocidad (descarga / subida)",
  "speed.note": "Comprobación opcional, no relacionada con el test de estabilidad principal.",
  "speed.btn": "Iniciar test de velocidad", "speed.btnRunning": "Midiendo...",
  "speed.download": "Descarga", "speed.upload": "Subida",
  "speed.measuringDown": "Midiendo la velocidad de descarga...",
  "speed.measuringUp": "Midiendo la velocidad de subida...",
  "speed.done": "Listo. Es una estimación aproximada y no sustituye a un test de velocidad especializado.",
  "speed.error": "No se pudo medir la velocidad: revisa la conexión e inténtalo de nuevo.",
  "chart.label": "Ping (ms)", "chart.y": "Ping, ms", "chart.x": "Tiempo", "chart.secSuffix": "s",
  "run.title": "Prueba en curso...",
  "run.checking": "Comprobando la disponibilidad de los servidores...",
  "run.fallback": "Los sitios externos no son accesibles desde este entorno: se mide la latencia al servidor de esta página.",
  "run.otherServer": "El servidor elegido no responde: se mide la latencia a {server}.",
  "run.measuring": "Midiendo la latencia a {server}. Espera un momento.",
  "fallback.serverLabel": "el servidor de esta página",
  "err.noConn.title": "Sin conexión",
  "err.offline": "El dispositivo no está conectado a la red. Revisa el Wi-Fi o el cable.",
  "err.blocked": "Ningún servidor respondió. Revisa tu conexión, desactiva la VPN, el bloqueador de anuncios o el cortafuegos; si la página se abre en un entorno que bloquea las peticiones externas, ejecuta el archivo en local.",
  "err.noMeasure": "No se completó ninguna medición. Revisa tu conexión a Internet.",
  "eval.excellent.t": "Conexión excelente",
  "eval.excellent.d": "Ping bajo y jitter mínimo: ideal para juegos y llamadas.",
  "eval.good.t": "Conexión buena",
  "eval.good.d": "La conexión es estable y sirve para la mayoría de las tareas.",
  "eval.fair.t": "Conexión regular",
  "eval.fair.d": "Puede haber pequeños retardos en videollamadas y juegos.",
  "eval.poor.t": "Conexión mala",
  "eval.poor.d": "Ping alto o inestabilidad: es probable que haya problemas de conexión.",
  "eval.lossPoor.d": "Alto porcentaje de pérdida de paquetes: son probables los cortes y bloqueos.",
  "result.fallbackNote": " La medición se hizo contra el servidor de esta página, no contra un sitio externo.",
  "copy.header": "Test de conexión ({time})",
  "copy.avg": "Ping medio: {v} ms", "copy.minmax": "Mín/Máx: {min} / {max} ms",
  "copy.jitter": "Jitter: {v} ms", "copy.loss": "Pérdida de paquetes: {v} %", "copy.quality": "Valoración: {v}",
  "share.text": "Test de estabilidad de Internet ({time}): ping {avg} ms, jitter {jitter} ms, pérdida {loss}% — {quality}",
  "footer.feedback": "Contacto"
},

de: {
  "html.lang": "de", "locale": "de-DE", "lang.name": "Deutsch", "lang.aria": "Sprache der Oberfläche",
  "app.title": "Internet-Stabilitätstest",
  "app.h1": "Internet-Stabilitätstest",
  "app.desc": "Prüfen Sie Latenz, Jitter und Paketverlust Ihrer Verbindung",
  "seo.description": "Kostenloser Online-Test für Internet-Stabilität: Ping, Jitter und Paketverlust direkt im Browser messen. Live-Diagramm, Testverlauf und Tipps zur Verbesserung.",
  "status.idle.title": "Bereit für den Test",
  "status.idle.desc": "Dauer wählen und auf „Test starten“ klicken.",
  "dur.sec": "{n} Sek.",
  "autorepeat": "Alle 5 Minuten automatisch wiederholen",
  "btn.start": "Test starten",
  "btn.running": "Test läuft...",
  "select.title": "Ping-Ziel",
  "res.min": "Min. Ping", "res.avg": "Durchschn. Ping", "res.max": "Max. Ping",
  "res.loss": "Verlust", "res.jitter": "Jitter",
  "sect.export": "Kopieren / Export",
  "btn.copy": "Ergebnis kopieren", "btn.share": "Teilen", "btn.exportCsv": "CSV-Export",
  "toast.copied": "Kopiert!",
  "sect.history": "Testverlauf", "btn.clear": "Löschen",
  "history.empty": "Noch keine gespeicherten Tests",
  "history.th.time": "Zeit", "history.th.ping": "Ping", "history.th.jitter": "Jitter",
  "history.th.loss": "Verlust", "history.th.quality": "Bewertung",
  "history.showAll": "Gesamten Verlauf anzeigen ({n})",
  "history.collapse": "Einklappen (nur die letzten {n})",
  "history.aria": "Vollständiger Testverlauf",
  "q.excellent": "Sehr gut", "q.good": "Gut", "q.fair": "Mittel", "q.poor": "Schlecht",
  "sect.advice": "Empfehlungen",
  "advice.default": "Starten Sie einen Test — wir sagen Ihnen anhand des Ergebnisses, was Sie prüfen sollten.",
  "advice.banner.excellent": "Alles bestens — die Verbindung ist stabil, es ist nichts weiter zu tun.",
  "advice.banner.good": "Die Verbindung ist gut. Wenn Sie noch mehr herausholen möchten:",
  "advice.banner.fair": "Eine leichte Instabilität ist erkennbar. Probieren Sie eine der folgenden Optionen:",
  "advice.banner.poor": "Die Verbindung ist instabil. Arbeiten Sie am besten die folgende Liste durch:",
  "advice.1": "Router und Modem neu starten — einfach, aber oft die wirksamste Lösung.",
  "advice.2": "Wenn möglich, per Kabel (Ethernet) statt über WLAN verbinden.",
  "advice.3": "Programme und Tabs schließen, die im Hintergrund Daten übertragen (Torrents, Cloud-Backups, Updates).",
  "advice.4": "Prüfen, wie viele Geräte gleichzeitig online sind und ob gerade ein großer Download oder Stream läuft.",
  "advice.5": "Den Router näher, höher und frei von Hindernissen aufstellen (Wände, Metall, Geräte).",
  "advice.6": "Den WLAN-Kanal in den Router-Einstellungen wechseln — Nachbarnetze können stören.",
  "advice.7": "Wenn das Problem dauerhaft auftritt, wenden Sie sich mit diesen Ergebnissen an den Support Ihres Anbieters.",
  "sect.glossary": "Was diese Werte bedeuten",
  "gloss.ping.t": "Ping (Latenz)",
  "gloss.ping.d": "Die Zeit, die ein Signal von Ihrem Gerät zum Server und zurück braucht, gemessen in Millisekunden (ms). Je niedriger, desto schneller reagiert die Verbindung. Unter 50 ms ist hervorragend für Spiele und Anrufe, 50–100 ms ist für die meisten Aufgaben angenehm, ab 150–200 ms werden Verzögerungen spürbar.",
  "gloss.jitter.t": "Jitter (Schwankung)",
  "gloss.jitter.d": "Wie stark der Ping von einer Messung zur nächsten schwankt. Selbst bei niedrigem Durchschnitts-Ping macht hoher Jitter Videoanrufe und Online-Spiele stockend, weil die Verzögerung ständig springt.",
  "gloss.loss.t": "Paketverlust",
  "gloss.loss.d": "Der Anteil der Daten, die den Server nicht erreicht haben oder nicht zurückkamen und erneut gesendet werden mussten. Normal sind 0%. Schon 2–5% machen sich als Hänger und Aussetzer bei Anrufen bemerkbar, ab 10% gilt die Verbindung als instabil.",
  "gloss.minmax.t": "Min. / Max. Ping",
  "gloss.minmax.d": "Die schnellste und die langsamste Messung während des Tests. Ein großer Abstand dazwischen ist ein weiteres Zeichen für eine instabile Verbindung, selbst wenn der Durchschnitts-Ping gut aussieht.",
  "sect.extra": "Zusätzlich",
  "speed.summary": "Geschwindigkeitstest (Download / Upload)",
  "speed.note": "Optionale Prüfung, unabhängig vom eigentlichen Stabilitätstest oben.",
  "speed.btn": "Geschwindigkeitstest starten", "speed.btnRunning": "Messung läuft...",
  "speed.download": "Download", "speed.upload": "Upload",
  "speed.measuringDown": "Download-Geschwindigkeit wird gemessen...",
  "speed.measuringUp": "Upload-Geschwindigkeit wird gemessen...",
  "speed.done": "Fertig. Das ist eine grobe Schätzung und ersetzt keinen spezialisierten Speedtest.",
  "speed.error": "Die Geschwindigkeit konnte nicht gemessen werden — Verbindung prüfen und erneut versuchen.",
  "chart.label": "Ping (ms)", "chart.y": "Ping, ms", "chart.x": "Zeit", "chart.secSuffix": "s",
  "run.title": "Test läuft...",
  "run.checking": "Verfügbarkeit der Server wird geprüft...",
  "run.fallback": "Externe Seiten sind aus dieser Umgebung nicht erreichbar — gemessen wird die Latenz zum Server dieser Seite.",
  "run.otherServer": "Der gewählte Server antwortet nicht — gemessen wird die Latenz zu: {server}.",
  "run.measuring": "Latenz zu {server} wird gemessen. Bitte warten.",
  "fallback.serverLabel": "Server dieser Seite",
  "err.noConn.title": "Keine Verbindung",
  "err.offline": "Das Gerät ist nicht mit dem Netz verbunden. Prüfen Sie WLAN oder Kabel.",
  "err.blocked": "Kein Server hat geantwortet. Prüfen Sie Ihre Internetverbindung, deaktivieren Sie VPN, Werbeblocker oder Firewall; wenn die Seite in einer Umgebung läuft, die externe Anfragen blockiert, öffnen Sie die Datei lokal.",
  "err.noMeasure": "Es konnte keine einzige Messung durchgeführt werden. Prüfen Sie Ihre Internetverbindung.",
  "eval.excellent.t": "Ausgezeichnete Verbindung",
  "eval.excellent.d": "Niedriger Ping und minimaler Jitter — ideal für Spiele und Anrufe.",
  "eval.good.t": "Gute Verbindung",
  "eval.good.d": "Die Verbindung ist stabil und für die meisten Aufgaben geeignet.",
  "eval.fair.t": "Mittelmäßige Verbindung",
  "eval.fair.d": "Kleine Verzögerungen bei Videoanrufen und Spielen sind möglich.",
  "eval.poor.t": "Schlechte Verbindung",
  "eval.poor.d": "Hoher Ping oder Instabilität — Verbindungsprobleme sind wahrscheinlich.",
  "eval.lossPoor.d": "Hoher Paketverlust — Abbrüche und Hänger sind wahrscheinlich.",
  "result.fallbackNote": " Die Messung erfolgte gegen den Server dieser Seite, nicht gegen eine externe Website.",
  "copy.header": "Verbindungstest ({time})",
  "copy.avg": "Durchschnittlicher Ping: {v} ms", "copy.minmax": "Min/Max: {min} / {max} ms",
  "copy.jitter": "Jitter: {v} ms", "copy.loss": "Paketverlust: {v} %", "copy.quality": "Bewertung: {v}",
  "share.text": "Internet-Stabilitätstest ({time}): Ping {avg} ms, Jitter {jitter} ms, Verlust {loss}% — {quality}",
  "footer.feedback": "Feedback"
},

fr: {
  "html.lang": "fr", "locale": "fr-FR", "lang.name": "Français", "lang.aria": "Langue de l'interface",
  "app.title": "Test de stabilité d’Internet",
  "app.h1": "Test de stabilité Internet",
  "app.desc": "Vérifiez la latence, la gigue et la perte de paquets de votre connexion",
  "seo.description": "Test gratuit de stabilité d’Internet : mesurez le ping, la gigue et la perte de paquets dans votre navigateur. Graphique en direct, historique et conseils.",
  "status.idle.title": "Prêt pour le test",
  "status.idle.desc": "Choisissez la durée et cliquez sur « Démarrer le test ».",
  "dur.sec": "{n} s",
  "autorepeat": "Répéter automatiquement toutes les 5 minutes",
  "btn.start": "Démarrer le test",
  "btn.running": "Test en cours...",
  "select.title": "Serveur cible",
  "res.min": "Ping min.", "res.avg": "Ping moyen", "res.max": "Ping max.",
  "res.loss": "Perte", "res.jitter": "Gigue",
  "sect.export": "Copier / exporter",
  "btn.copy": "Copier le résultat", "btn.share": "Partager", "btn.exportCsv": "Export CSV",
  "toast.copied": "Copié !",
  "sect.history": "Historique des tests", "btn.clear": "Effacer",
  "history.empty": "Aucun test enregistré pour l'instant",
  "history.th.time": "Heure", "history.th.ping": "Ping", "history.th.jitter": "Gigue",
  "history.th.loss": "Perte", "history.th.quality": "Évaluation",
  "history.showAll": "Afficher tout l'historique ({n})",
  "history.collapse": "Réduire (seulement les {n} derniers)",
  "history.aria": "Historique complet des tests",
  "q.excellent": "Excellent", "q.good": "Bon", "q.fair": "Moyen", "q.poor": "Mauvais",
  "sect.advice": "Recommandations",
  "advice.default": "Lancez un test — nous vous indiquerons quoi vérifier selon le résultat.",
  "advice.banner.excellent": "Tout va bien — la connexion est stable, rien d'autre à faire.",
  "advice.banner.good": "La connexion est bonne. Pour en tirer le maximum, voici quelques idées :",
  "advice.banner.fair": "Une légère instabilité est visible. Essayez l'une des options ci-dessous :",
  "advice.banner.poor": "La connexion est instable. Nous vous conseillons de parcourir la liste ci-dessous :",
  "advice.1": "Redémarrez le routeur et le modem — simple, mais souvent la solution la plus efficace.",
  "advice.2": "Connectez-vous par câble (Ethernet) plutôt qu'en Wi-Fi si possible.",
  "advice.3": "Fermez les programmes et onglets qui consomment du trafic en arrière-plan (torrents, sauvegardes cloud, mises à jour).",
  "advice.4": "Vérifiez combien d'appareils sont connectés en même temps et si un téléchargement ou un stream lourd est en cours.",
  "advice.5": "Rapprochez le routeur, placez-le en hauteur et sans obstacles (murs, métal, appareils).",
  "advice.6": "Changez le canal Wi-Fi dans les réglages du routeur — les réseaux voisins peuvent créer des interférences.",
  "advice.7": "Si le problème revient sans cesse, contactez le support de votre fournisseur avec ces résultats.",
  "sect.glossary": "Ce que signifient ces indicateurs",
  "gloss.ping.t": "Ping (latence)",
  "gloss.ping.d": "Le temps que met un signal pour aller de votre appareil au serveur et revenir, mesuré en millisecondes (ms). Plus c'est bas, plus la connexion réagit vite. Moins de 50 ms est excellent pour le jeu et les appels, 50–100 ms reste confortable pour la plupart des usages, et au-delà de 150–200 ms les délais deviennent perceptibles.",
  "gloss.jitter.t": "Gigue (jitter)",
  "gloss.jitter.d": "L'ampleur des variations du ping d'une mesure à l'autre. Même avec un ping moyen faible, une gigue élevée rend les appels vidéo et les jeux en ligne saccadés, car le délai ne cesse de fluctuer.",
  "gloss.loss.t": "Perte de paquets",
  "gloss.loss.d": "Le pourcentage de données qui n'ont pas atteint le serveur (ou ne sont pas revenues) et ont dû être renvoyées. La normale est de 0 %. Dès 2–5 %, cela se traduit par des blocages et des coupures pendant les appels, et à partir de 10 % la connexion peut être considérée comme instable.",
  "gloss.minmax.t": "Ping min. / max.",
  "gloss.minmax.d": "La mesure la plus rapide et la plus lente pendant le test. Un grand écart entre les deux est un autre signe de connexion instable, même si le ping moyen semble correct.",
  "sect.extra": "Options supplémentaires",
  "speed.summary": "Test de débit (download / upload)",
  "speed.note": "Vérification facultative, sans lien avec le test de stabilité principal ci-dessus.",
  "speed.btn": "Lancer le test de débit", "speed.btnRunning": "Mesure en cours...",
  "speed.download": "Téléchargement", "speed.upload": "Envoi",
  "speed.measuringDown": "Mesure du débit descendant...",
  "speed.measuringUp": "Mesure du débit montant...",
  "speed.done": "Terminé. Il s'agit d'une estimation approximative qui ne remplace pas un test de débit spécialisé.",
  "speed.error": "Impossible de mesurer le débit — vérifiez votre connexion et réessayez.",
  "chart.label": "Ping (ms)", "chart.y": "Ping, ms", "chart.x": "Temps", "chart.secSuffix": "s",
  "run.title": "Test en cours...",
  "run.checking": "Vérification de la disponibilité des serveurs...",
  "run.fallback": "Les sites externes sont inaccessibles depuis cet environnement — la latence est mesurée vers le serveur de cette page.",
  "run.otherServer": "Le serveur choisi ne répond pas — la latence est mesurée vers : {server}.",
  "run.measuring": "Mesure de la latence vers : {server}. Veuillez patienter.",
  "fallback.serverLabel": "le serveur de cette page",
  "err.noConn.title": "Pas de connexion",
  "err.offline": "L'appareil n'est pas connecté au réseau. Vérifiez le Wi-Fi ou le câble.",
  "err.blocked": "Aucun serveur n'a répondu. Vérifiez votre connexion, désactivez le VPN, le bloqueur de publicités ou le pare-feu ; si la page est ouverte dans un environnement qui interdit les requêtes externes, lancez le fichier en local.",
  "err.noMeasure": "Aucune mesure n'a pu être effectuée. Vérifiez votre connexion Internet.",
  "eval.excellent.t": "Excellente connexion",
  "eval.excellent.d": "Ping faible et gigue minimale — parfait pour le jeu et les appels.",
  "eval.good.t": "Bonne connexion",
  "eval.good.d": "La connexion est stable et convient à la plupart des usages.",
  "eval.fair.t": "Connexion moyenne",
  "eval.fair.d": "De légers retards sont possibles en appel vidéo et en jeu.",
  "eval.poor.t": "Mauvaise connexion",
  "eval.poor.d": "Ping élevé ou instabilité — des problèmes de connexion sont probables.",
  "eval.lossPoor.d": "Taux de perte de paquets élevé — coupures et blocages probables.",
  "result.fallbackNote": " La mesure a été effectuée vers le serveur de cette page, et non vers un site externe.",
  "copy.header": "Test de connexion ({time})",
  "copy.avg": "Ping moyen : {v} ms", "copy.minmax": "Min/Max : {min} / {max} ms",
  "copy.jitter": "Gigue : {v} ms", "copy.loss": "Perte de paquets : {v} %", "copy.quality": "Évaluation : {v}",
  "share.text": "Test de stabilité Internet ({time}) : ping {avg} ms, gigue {jitter} ms, perte {loss} % — {quality}",
  "footer.feedback": "Contact"
},

tr: {
  "html.lang": "tr", "locale": "tr-TR", "lang.name": "Türkçe", "lang.aria": "Arayüz dili",
  "app.title": "İnternet Stabilite Testi",
  "app.h1": "İnternet Kararlılık Testi",
  "app.desc": "Bağlantınızın gecikmesini, jitter değerini ve paket kaybını ölçün",
  "seo.description": "Ücretsiz çevrimiçi internet stabilite testi: ping, jitter ve paket kaybını tarayıcınızda ölçün. Canlı grafik, test geçmişi ve bağlantıyı iyileştirme ipuçları.",
  "status.idle.title": "Teste hazır",
  "status.idle.desc": "Süreyi seçin ve „Testi başlat“ düğmesine basın.",
  "dur.sec": "{n} sn",
  "autorepeat": "Her 5 dakikada bir otomatik tekrarla",
  "btn.start": "Testi başlat",
  "btn.running": "Test sürüyor...",
  "select.title": "Hedef sunucu",
  "res.min": "En düşük ping", "res.avg": "Ortalama ping", "res.max": "En yüksek ping",
  "res.loss": "Kayıp", "res.jitter": "Jitter",
  "sect.export": "Kopyala / dışa aktar",
  "btn.copy": "Sonucu kopyala", "btn.share": "Paylaş", "btn.exportCsv": "CSV dışa aktar",
  "toast.copied": "Kopyalandı!",
  "sect.history": "Test geçmişi", "btn.clear": "Temizle",
  "history.empty": "Henüz kayıtlı test yok",
  "history.th.time": "Saat", "history.th.ping": "Ping", "history.th.jitter": "Jitter",
  "history.th.loss": "Kayıp", "history.th.quality": "Değerlendirme",
  "history.showAll": "Tüm geçmişi göster ({n})",
  "history.collapse": "Daralt (yalnızca son {n})",
  "history.aria": "Tüm test geçmişi",
  "q.excellent": "Mükemmel", "q.good": "İyi", "q.fair": "Orta", "q.poor": "Kötü",
  "sect.advice": "Öneriler",
  "advice.default": "Bir test çalıştırın — sonuca göre neyi kontrol etmeniz gerektiğini söyleyelim.",
  "advice.banner.excellent": "Her şey yolunda — bağlantı kararlı, ek bir işlem gerekmiyor.",
  "advice.banner.good": "Bağlantı iyi. Daha da iyileştirmek isterseniz birkaç fikir:",
  "advice.banner.fair": "Hafif bir kararsızlık görülüyor. Aşağıdaki seçeneklerden birini deneyin:",
  "advice.banner.poor": "Bağlantı kararsız. Aşağıdaki listeyi baştan sona gözden geçirmenizi öneririz:",
  "advice.1": "Modemi ve yönlendiriciyi yeniden başlatın — basit ama çoğu zaman en etkili çözüm.",
  "advice.2": "Mümkünse Wi-Fi yerine kablo (Ethernet) ile bağlanın.",
  "advice.3": "Arka planda trafik tüketen program ve sekmeleri kapatın (torrent, bulut yedekleme, güncellemeler).",
  "advice.4": "Aynı anda kaç cihazın bağlı olduğunu ve ağır bir indirme/yayın olup olmadığını kontrol edin.",
  "advice.5": "Yönlendiriciyi daha yakına, yüksek ve engelsiz bir yere koyun (duvar, metal, beyaz eşya).",
  "advice.6": "Yönlendirici ayarlarından Wi-Fi kanalını değiştirin — komşu ağlar parazit yapabilir.",
  "advice.7": "Sorun sürekli tekrarlıyorsa bu sonuçlarla servis sağlayıcınızın desteğine başvurun.",
  "sect.glossary": "Bu değerler ne anlama geliyor",
  "gloss.ping.t": "Ping (gecikme)",
  "gloss.ping.d": "Sinyalin cihazınızdan sunucuya gidip geri dönmesi için geçen süre; milisaniye (ms) cinsinden ölçülür. Değer ne kadar düşükse bağlantı o kadar hızlı tepki verir. 50 ms'nin altı oyun ve görüşmeler için mükemmel, 50–100 ms çoğu iş için rahat, 150–200 ms üzerinde gecikmeler fark edilir hale gelir.",
  "gloss.jitter.t": "Jitter (dalgalanma)",
  "gloss.jitter.d": "Ping değerinin ölçümden ölçüme ne kadar değiştiği. Ortalama ping düşük olsa bile yüksek jitter, gecikme sürekli zıpladığı için görüntülü görüşmeleri ve çevrimiçi oyunları kesintili hale getirir.",
  "gloss.loss.t": "Paket kaybı (Packet Loss)",
  "gloss.loss.d": "Sunucuya ulaşmayan ya da geri dönmeyen ve yeniden gönderilmesi gereken verilerin yüzdesi. Normalde 0% olmalıdır. %2–5 bile görüşmelerde donma ve kopma olarak hissedilir, %10 ve üzeri ise bağlantının kararsız olduğu anlamına gelir.",
  "gloss.minmax.t": "En düşük / en yüksek ping",
  "gloss.minmax.d": "Test boyunca kaydedilen en hızlı ve en yavaş ölçüm. Aralarındaki büyük fark, ortalama ping iyi görünse bile kararsız bir bağlantının bir başka işaretidir.",
  "sect.extra": "Ek özellikler",
  "speed.summary": "Hız testi (indirme / yükleme)",
  "speed.note": "İsteğe bağlı bir kontrol; yukarıdaki asıl kararlılık testiyle ilgisi yoktur.",
  "speed.btn": "Hız testini başlat", "speed.btnRunning": "Ölçülüyor...",
  "speed.download": "İndirme", "speed.upload": "Yükleme",
  "speed.measuringDown": "İndirme hızı ölçülüyor...",
  "speed.measuringUp": "Yükleme hızı ölçülüyor...",
  "speed.done": "Hazır. Bu yaklaşık bir tahmindir, özel hız testlerinin yerini tutmaz.",
  "speed.error": "Hız ölçülemedi — bağlantınızı kontrol edip tekrar deneyin.",
  "chart.label": "Ping (ms)", "chart.y": "Ping, ms", "chart.x": "Zaman", "chart.secSuffix": "sn",
  "run.title": "Test yapılıyor...",
  "run.checking": "Sunucuların erişilebilirliği kontrol ediliyor...",
  "run.fallback": "Bu ortamdan dış sitelere erişilemiyor — gecikme bu sayfanın sunucusuna göre ölçülüyor.",
  "run.otherServer": "Seçilen sunucu yanıt vermiyor — gecikme şuraya ölçülüyor: {server}.",
  "run.measuring": "Gecikme şuraya ölçülüyor: {server}. Lütfen bekleyin.",
  "fallback.serverLabel": "bu sayfanın sunucusu",
  "err.noConn.title": "Bağlantı yok",
  "err.offline": "Cihaz ağa bağlı değil. Wi-Fi veya kabloyu kontrol edin.",
  "err.blocked": "Hiçbir sunucu yanıt vermedi. İnternetinizi kontrol edin, VPN/reklam engelleyici veya güvenlik duvarını kapatın; sayfa dış isteklere izin vermeyen bir ortamda açıldıysa dosyayı yerel olarak çalıştırın.",
  "err.noMeasure": "Tek bir ölçüm bile yapılamadı. İnternet bağlantınızı kontrol edin.",
  "eval.excellent.t": "Mükemmel bağlantı",
  "eval.excellent.d": "Düşük ping ve minimum jitter — oyun ve görüşmeler için ideal.",
  "eval.good.t": "İyi bağlantı",
  "eval.good.d": "Bağlantı kararlı, çoğu iş için uygun.",
  "eval.fair.t": "Orta düzey bağlantı",
  "eval.fair.d": "Görüntülü görüşme ve oyunlarda küçük gecikmeler olabilir.",
  "eval.poor.t": "Kötü bağlantı",
  "eval.poor.d": "Yüksek ping veya kararsızlık — bağlantı sorunları olasıdır.",
  "eval.lossPoor.d": "Paket kaybı oranı yüksek — kopmalar ve donmalar olabilir.",
  "result.fallbackNote": " Ölçüm dış bir siteye değil, bu sayfanın sunucusuna yapıldı.",
  "copy.header": "Bağlantı testi ({time})",
  "copy.avg": "Ortalama ping: {v} ms", "copy.minmax": "En düşük/En yüksek: {min} / {max} ms",
  "copy.jitter": "Jitter: {v} ms", "copy.loss": "Paket kaybı: {v} %", "copy.quality": "Değerlendirme: {v}",
  "share.text": "İnternet kararlılık testi ({time}): ping {avg} ms, jitter {jitter} ms, kayıp {loss}% — {quality}",
  "footer.feedback": "Geri bildirim"
}

};

/* ---------- Рантайм i18n ---------- */
(function () {
  var DICT = window.I18N_DICT;
  var SUPPORTED = ["ru", "en", "kk", "zh", "es", "de", "fr", "tr"];
  var FALLBACK = "en";
  var STORAGE_KEY = "netStabilityLang";
  var listeners = [];
  var current = FALLBACK;

  // SEO-версии живут по адресам /test/<lang>/ — отсюда берём язык и базовый путь.
  // Базовый путь вычисляется, а не задаётся жёстко: проект одинаково работает
  // и в корне домена, и в подпапке (GitHub Pages вида /<repo>/).
  var LANG_PATH_RE = /^(.*?)\/test\/(ru|en|kk|zh|es|de|fr|tr)\/(?:index\.html)?$/;

  var OG_LOCALE = {
    ru: "ru_RU", en: "en_US", kk: "kk_KZ", zh: "zh_CN",
    es: "es_ES", de: "de_DE", fr: "fr_FR", tr: "tr_TR"
  };

  function pathInfo() {
    var path = location.pathname;
    var m = path.match(LANG_PATH_RE);
    if (m) return { base: m[1], lang: m[2] };
    return { base: path.replace(/\/[^\/]*$/, ""), lang: null };
  }

  // Язык, заданный самой страницей: атрибут data-seo-lang или путь /test/<lang>/
  function pageLang() {
    var attr = document.documentElement.getAttribute("data-seo-lang");
    if (attr && SUPPORTED.indexOf(attr) !== -1) return attr;
    var info = pathInfo();
    return info.lang;
  }

  function langUrl(lang) {
    return location.origin + pathInfo().base + "/test/" + lang + "/";
  }

  function normalize(tag) {
    if (!tag) return null;
    var lower = String(tag).toLowerCase();
    var base = lower.split("-")[0];
    if (base === "zh") return "zh";
    if (base === "kk") return "kk";
    if (SUPPORTED.indexOf(base) !== -1) return base;
    return null;
  }

  function detect() {
    // 1) Язык языковой версии URL — пользователь (или поисковик) пришёл именно за ним.
    var fromPage = pageLang();
    if (fromPage) return fromPage;

    // 2) Ранее сохранённый выбор.
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;

    var langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage];

    for (var i = 0; i < langs.length; i++) {
      var hit = normalize(langs[i]);
      if (hit) return hit;
    }
    return FALLBACK; // язык браузера не поддерживается
  }

  function t(key, params) {
    var pack = DICT[current] || DICT[FALLBACK];
    var str = pack[key];
    if (str === undefined) str = DICT[FALLBACK][key];
    if (str === undefined) return key;
    if (params) {
      str = str.replace(/\{(\w+)\}/g, function (m, name) {
        return params[name] !== undefined ? params[name] : m;
      });
    }
    return str;
  }

  // Статические тексты, размеченные data-атрибутами
  function applyStatic(root) {
    var scope = root || document;

    scope.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var params = el.hasAttribute("data-duration") ? { n: el.getAttribute("data-duration") } : null;
      el.textContent = t(key, params);
    });

    scope.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });

    scope.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    updateSeo();
  }

  // ---------- SEO: title, description, lang, canonical, Open Graph ----------
  function setMeta(selector, attrName, attrValue, content) {
    var el = document.head && document.head.querySelector(selector);
    if (!el) {
      if (!document.head) return;
      el = document.createElement("meta");
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function setLink(rel, href) {
    var el = document.head && document.head.querySelector('link[rel="' + rel + '"]');
    if (!el) {
      if (!document.head) return;
      el = document.createElement("link");
      el.setAttribute("rel", rel);
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }

  function updateSeo() {
    var title = t("app.title");
    var description = t("seo.description");

    document.title = title;
    document.documentElement.setAttribute("lang", t("html.lang"));

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:locale"]', "property", "og:locale", OG_LOCALE[current] || "en_US");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    // На языковых версиях canonical следует за выбранным языком.
    // В корне canonical остаётся корневым — это x-default.
    var info = pathInfo();
    if (info.lang) {
      var url = langUrl(current);
      setLink("canonical", url);
      setMeta('meta[property="og:url"]', "property", "og:url", url);
    }
  }

  // Смена языка на /test/<lang>/ меняет и адрес — без перезагрузки страницы.
  function syncUrl() {
    var info = pathInfo();
    if (!info.lang || info.lang === current) return;
    document.documentElement.setAttribute("data-seo-lang", current);
    if (!window.history || typeof history.replaceState !== "function") return;
    try {
      history.replaceState(history.state, "",
        info.base + "/test/" + current + "/" + location.search + location.hash);
    } catch (e) {
      // file:// или иные ограничения — адрес просто останется прежним
    }
  }

  function setLang(lang, persist) {
    if (SUPPORTED.indexOf(lang) === -1) lang = FALLBACK;
    current = lang;
    if (persist !== false) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage off */ }
    }
    syncUrl();
    applyStatic();
    var select = document.getElementById("langSelect");
    if (select && select.value !== lang) select.value = lang;
    listeners.forEach(function (fn) {
      try { fn(lang); } catch (e) { /* один слушатель не должен ломать остальные */ }
    });
  }

  window.__i18n = {
    t: t,
    supported: SUPPORTED,
    get lang() { return current; },
    get locale() { return t("locale"); },
    setLang: setLang,
    onChange: function (fn) { listeners.push(fn); }
  };

  // Инициализация: определяем язык до первой отрисовки текстов
  current = detect();

  document.addEventListener("DOMContentLoaded", function () {
    var select = document.getElementById("langSelect");
    if (select) {
      select.value = current;
      select.addEventListener("change", function () { setLang(select.value, true); });
    }
    applyStatic();
  });
})();
