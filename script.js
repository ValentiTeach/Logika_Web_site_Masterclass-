/* ============================================================
   LOGIKA SCHOOL // WEB-DEV WORKSHOP V.2.1
   ============================================================ */

const TASKS = [
  {
    num: 1,
    name: "МАЙНКРАФТ-БУДІВЕЛЬНИКИ",
    emoji: "⛏️",
    trend: "Pixel / Gaming",
    trendDesc: "Зелений, коричневий, чорний фон, моноширинний шрифт. Стиль як у самій грі — блочний і впізнаваний.",
    topic: "Сторінка-промо Minecraft сервера",
    topicDesc: "Зроби сайт, на який міг би зайти кожен гравець: назва сервера, IP-адреса, скріншот, інструкція як зайти, особливості.",
    palette: [
      { c: "#5C9F38", t: "#000" },
      { c: "#3F2615", t: "#fff" },
      { c: "#000000", t: "#5C9F38" },
      { c: "#FFD60A", t: "#000" }
    ],
    template: `<!DOCTYPE html>
<html>
<head><title>Logika Craft</title></head>
<body style="background:#3F2615; color:#fff; font-family:'Courier New', monospace; margin:0;">

  <div style="background:#5C9F38; padding:40px 20px; text-align:center; border-bottom:8px solid #2D5016;">
    <h1 style="font-size:54px; text-shadow:4px 4px 0 #000; margin:0; letter-spacing:4px;">⛏ LOGIKA CRAFT ⛏</h1>
    <h2 style="background:#000; color:#5C9F38; display:inline-block; padding:10px 20px; margin-top:15px;">IP: play.logikacraft.ua</h2>
  </div>

  <div style="padding:30px; max-width:700px; margin:auto;">

    <img src="https://picsum.photos/700/350?random=1" width="100%" style="border:6px solid #000;">

    <h2 style="background:#FFD60A; color:#000; padding:15px; margin-top:25px; border:4px solid #000;">🎮 ЯК ЗАЙТИ НА СЕРВЕР</h2>
    <p style="font-size:18px; line-height:2;">1. Відкрий Minecraft (1.20+)<br>2. Натисни "Мережева гра"<br>3. Введи IP сервера<br>4. Грай з друзями!</p>

    <h2 style="background:#FF006E; color:#fff; padding:15px; border:4px solid #000;">🏆 ОСОБЛИВОСТІ</h2>
    <p style="font-size:18px;">SkyWars, BedWars, виживання, міні-ігри і дружня спільнота гравців з усієї України!</p>

  </div>

</body>
</html>`
  },
  {
    num: 2,
    name: "АНІМЕ-АГЕНТИ",
    emoji: "🌸",
    trend: "Manga Card / Magazine",
    trendDesc: "Рожеві відтінки, чорні товсті рамки, ілюстративний підхід — як обкладинка манги чи аніме-журналу.",
    topic: "Картка аніме (як в онлайн-каталозі)",
    topicDesc: "Створи сторінку для свого улюбленого аніме: назва, рейтинг, постер, жанр, короткий сюжет.",
    palette: [
      { c: "#FFE5EC", t: "#000" },
      { c: "#FF006E", t: "#fff" },
      { c: "#000000", t: "#fff" },
      { c: "#FFFFFF", t: "#FF006E" }
    ],
    template: `<!DOCTYPE html>
<html>
<head><title>Аніме Картка</title></head>
<body style="background:#FFE5EC; font-family:Arial; padding:30px; margin:0;">

  <div style="background:#fff; border:5px solid #000; padding:25px; max-width:550px; margin:auto; box-shadow:10px 10px 0 #FF006E;">

    <p style="background:#FF006E; color:#fff; padding:6px 14px; display:inline-block; font-weight:bold; font-size:14px;">★ РЕЙТИНГ 9.8 / 10</p>

    <h1 style="font-size:46px; margin:10px 0; line-height:1;">Атака Титанів</h1>

    <h2 style="color:#FF006E; font-size:20px;">進撃の巨人 // Shingeki no Kyojin</h2>

    <img src="https://picsum.photos/500/300?random=2" width="100%" style="border:4px solid #000; margin:15px 0;">

    <h2 style="background:#000; color:#fff; padding:10px;">📺 ЖАНР</h2>
    <p style="font-size:17px; line-height:1.6;">Екшн, фентезі, постапокаліпсис, драма</p>

    <h2 style="background:#000; color:#fff; padding:10px; margin-top:15px;">📖 СЮЖЕТ</h2>
    <p style="font-size:17px; line-height:1.6;">Людство ховається у місті за велетенськими стінами від загадкових Титанів. Ерен мріє вирватися на свободу і помститися за родину.</p>

  </div>

</body>
</html>`
  },
  {
    num: 3,
    name: "КРОСИ-ПРО",
    emoji: "👟",
    trend: "E-commerce / Brutalism",
    trendDesc: "Великі цифри, контрастні рамки, акцент на товарі — як на сучасному сайті дорогого магазину кросівок.",
    topic: "Картка товару для онлайн-магазину",
    topicDesc: "Зроби сторінку товару: фото, назва, опис, ціна, кнопка купити. Можна обрати кросівки, телефон, скейт — будь-що.",
    palette: [
      { c: "#F5F5F0", t: "#000" },
      { c: "#000000", t: "#fff" },
      { c: "#FF3D00", t: "#fff" },
      { c: "#FFD60A", t: "#000" }
    ],
    template: `<!DOCTYPE html>
<html>
<head><title>Nike Air Max</title></head>
<body style="background:#F5F5F0; font-family:Arial; padding:0; margin:0;">

  <div style="max-width:700px; margin:30px auto; background:#fff; border:5px solid #000; padding:30px;">

    <p style="background:#FF3D00; color:#fff; padding:5px 12px; display:inline-block; font-weight:bold; font-size:12px;">🔥 ТОП ПРОДАЖ</p>

    <h1 style="font-size:42px; line-height:1; margin:10px 0;">NIKE AIR MAX 90</h1>

    <p style="color:#666; font-size:16px;">Класика street-стилю // унісекс</p>

    <img src="https://picsum.photos/600/400?random=3" width="100%" style="border:4px solid #000; margin:20px 0;">

    <div style="background:#000; color:#fff; padding:25px; margin-bottom:15px;">
      <p style="font-size:14px; opacity:0.6;">ЦІНА</p>
      <h2 style="font-size:48px; margin:0;">4 999 ₴</h2>
      <p style="font-size:14px; text-decoration:line-through; opacity:0.5;">5 999 ₴</p>
    </div>

    <h2>📦 ПРО ТОВАР</h2>
    <p style="line-height:1.6; font-size:16px;">Легендарні кросівки з амортизацією Air, шкіряний верх, гумова підошва. Підходять для бігу, прогулянок та спорту.</p>

    <p style="background:#FFD60A; padding:15px; border:4px solid #000; text-align:center; font-weight:bold; font-size:20px; margin-top:20px;">КУПИТИ ЗА 4 999 ₴ →</p>

  </div>

</body>
</html>`
  },
  {
    num: 4,
    name: "РОБЛОКС-СТУДІЯ",
    emoji: "🎮",
    trend: "Roblox / Gaming UI",
    trendDesc: "Темно-сірий фон, яскравий синій акцент, заокруглені блоки. Виглядає як справжня сторінка гри в Roblox.",
    topic: "Сторінка-промо твоєї Roblox гри",
    topicDesc: "Створи сторінку для гри, яку ти зробив(ла) у Roblox Studio: назва, скріншот, кількість гравців, опис, кнопка \"грати\".",
    palette: [
      { c: "#232527", t: "#fff" },
      { c: "#00B2FF", t: "#fff" },
      { c: "#FF006E", t: "#fff" },
      { c: "#00FF00", t: "#000" }
    ],
    template: `<!DOCTYPE html>
<html>
<head><title>Моя Roblox Гра</title></head>
<body style="background:#232527; color:#fff; font-family:Arial; padding:30px; margin:0;">

  <div style="max-width:800px; margin:auto;">

    <h1 style="font-size:48px; color:#fff; margin:0;">⚡ TYCOON: КОЛОМИЯ EDITION</h1>
    <p style="color:#00B2FF; font-size:18px;">від <b>ValentiTeach</b> · Roblox Studio</p>

    <img src="https://picsum.photos/800/400?random=4" width="100%" style="border-radius:10px; margin-top:15px;">

    <div style="background:#393B3D; padding:20px; border-radius:10px; margin-top:20px;">
      <p style="font-size:14px; color:#999;">🟢 ОНЛАЙН ЗАРАЗ</p>
      <h2 style="color:#00FF00; font-size:32px;">1 247 гравців</h2>
    </div>

    <h2 style="background:#00B2FF; padding:15px; border-radius:10px; margin-top:20px;">🎮 ЯК ГРАТИ</h2>
    <p style="font-size:17px; line-height:1.7;">Будуй власну імперію, заробляй гроші, наймай робітників і ставай найбагатшим гравцем на сервері!</p>

    <h2 style="background:#FF006E; padding:15px; border-radius:10px;">⭐ ОЦІНКИ</h2>
    <p style="font-size:30px;">👍 95% &nbsp;·&nbsp; ⭐ 4.8/5</p>

    <p style="background:#00B2FF; color:#fff; padding:18px; text-align:center; border-radius:10px; font-size:22px; font-weight:bold; margin-top:20px;">▶ ГРАТИ БЕЗКОШТОВНО</p>

  </div>

</body>
</html>`
  },
  {
    num: 5,
    name: "ЮТУБ-ТВОРЦІ",
    emoji: "📺",
    trend: "YouTube Channel",
    trendDesc: "Темне тло, червоний YouTube-акцент, картки з відео — точна копія стилю YouTube.",
    topic: "Сторінка YouTube каналу",
    topicDesc: "Зроби сторінку для свого вигаданого каналу: банер, аватарка, кількість підписників, останнє відео, опис.",
    palette: [
      { c: "#0F0F0F", t: "#fff" },
      { c: "#FF0000", t: "#fff" },
      { c: "#272727", t: "#fff" },
      { c: "#aaaaaa", t: "#000" }
    ],
    template: `<!DOCTYPE html>
<html>
<head><title>Мій YouTube Канал</title></head>
<body style="background:#0F0F0F; color:#fff; font-family:Roboto, Arial; padding:0; margin:0;">

  <div style="background:linear-gradient(135deg,#FF0000,#cc0000); height:200px;"></div>

  <div style="max-width:900px; margin:-80px auto 0; padding:0 20px;">

    <img src="https://picsum.photos/160/160?random=5" width="160" style="border-radius:50%; border:6px solid #0F0F0F;">

    <h1 style="font-size:42px; margin:15px 0 5px;">Тех-Бро Україна 🇺🇦</h1>

    <p style="color:#aaa; font-size:16px;">@techBro_ua · 247 тис. підписників · 156 відео</p>

    <p style="background:#FF0000; color:#fff; padding:10px 24px; display:inline-block; font-weight:bold; font-size:16px; border-radius:20px; margin:15px 0;">🔔 ПІДПИСАТИСЯ</p>

    <h2 style="font-size:24px; margin-top:30px;">📺 ОСТАННЄ ВІДЕО</h2>

    <img src="https://picsum.photos/700/400?random=6" width="100%" style="border-radius:12px; margin-top:10px;">

    <h2 style="font-size:20px; margin:10px 0;">Як я зробив свій перший сайт за 1 годину</h2>

    <p style="color:#aaa;">324 тис. переглядів · 2 дні тому · 🎓 Програмування</p>

    <p style="background:#272727; padding:15px; border-radius:10px; margin-top:20px; line-height:1.6;">У цьому відео я показую покроково, як з нуля зробити свій перший сайт використовуючи тільки HTML і CSS!</p>

  </div>

</body>
</html>`
  },
  {
    num: 6,
    name: "СТРИМ-ЗІРКИ",
    emoji: "🟣",
    trend: "Twitch / Streamer",
    trendDesc: "Чорно-фіолетовий фон, червоний LIVE-індикатор. Точна стилістика стрімінгової платформи Twitch.",
    topic: "Сторінка стримера на Twitch",
    topicDesc: "Уяви, що ти стример. Створи свою сторінку: ник, гра, кількість глядачів, червона LIVE-плашка, опис каналу.",
    palette: [
      { c: "#0E0E10", t: "#fff" },
      { c: "#9146FF", t: "#fff" },
      { c: "#18181B", t: "#fff" },
      { c: "#FF0000", t: "#fff" }
    ],
    template: `<!DOCTYPE html>
<html>
<head><title>Twitch Стрім</title></head>
<body style="background:#0E0E10; color:#fff; font-family:Inter, Arial; padding:30px; margin:0;">

  <div style="max-width:900px; margin:auto;">

    <h1 style="font-size:36px; color:#9146FF;">🟣 TWITCH</h1>

    <img src="https://picsum.photos/900/450?random=7" width="100%" style="border-radius:10px;">

    <p style="background:#FF0000; color:#fff; padding:5px 12px; display:inline-block; border-radius:5px; font-weight:bold; margin:-50px 0 0 20px;">🔴 LIVE</p>

    <h2 style="font-size:32px; margin:20px 0 5px;">Граю в CS2 на FACEIT! Шлях до Global Elite</h2>

    <div style="background:#18181B; padding:20px; border-radius:10px; margin-top:15px;">
      <h2 style="color:#fff; margin:0;">Ksardas_UA</h2>
      <p style="color:#9146FF;">Counter-Strike 2 · Українська</p>
    </div>

    <p style="background:#9146FF; color:#fff; padding:15px; border-radius:5px; font-weight:bold; text-align:center; font-size:18px; margin-top:20px;">👁️ 12 847 ГЛЯДАЧІВ ДИВЛЯТЬСЯ</p>

    <p style="background:#18181B; padding:20px; border-radius:10px; line-height:1.7; margin-top:20px;">Привіт, я Кардас! Стрімлю Counter-Strike 2 щодня з 19:00. Розіграші скінів, спілкування з чатом і багато тильту 😅</p>

  </div>

</body>
</html>`
  },
  {
    num: 7,
    name: "ПІЦЕРІЯ-МАЙСТРИ",
    emoji: "🍕",
    trend: "Italian / Food",
    trendDesc: "Кольори італійського прапора (зелений-білий-червоний), серифний шрифт, теплі відтінки. Як у класичній траторії.",
    topic: "Меню піцерії",
    topicDesc: "Створи односторінкове меню: назва закладу, 2-3 страви з фото та цінами, контакти для замовлення.",
    palette: [
      { c: "#FFF8E7", t: "#000" },
      { c: "#C8102E", t: "#fff" },
      { c: "#008C45", t: "#fff" },
      { c: "#FFD60A", t: "#000" }
    ],
    template: `<!DOCTYPE html>
<html>
<head><title>Піца Меню</title></head>
<body style="background:#FFF8E7; font-family:Georgia, serif; padding:30px; margin:0;">

  <div style="max-width:700px; margin:auto;">

    <h1 style="text-align:center; font-size:54px; color:#C8102E; letter-spacing:3px; margin:0;">🍕 PIZZERIA MAMMA</h1>
    <p style="text-align:center; font-style:italic; color:#666;">— автентична італійська піца у Коломиї —</p>

    <h2 style="background:#C8102E; color:#fff; padding:15px 20px; margin-top:30px; font-size:24px;">МЕНЮ ДНЯ</h2>

    <img src="https://picsum.photos/700/350?random=9" width="100%" style="border:4px solid #C8102E; margin-top:20px;">

    <h2 style="font-size:32px; color:#C8102E; margin-top:20px;">🍕 МАРГАРІТА</h2>
    <p style="font-size:17px; line-height:1.6;">Класична італійська піца: моцарела, томатний соус, базилік, оливкова олія. На тонкому тісті.</p>
    <p style="background:#008C45; color:#fff; padding:8px 16px; display:inline-block; font-weight:bold; font-size:20px;">189 ₴ · 30 см</p>

    <h2 style="font-size:32px; color:#C8102E; margin-top:30px;">🍕 ПЕПЕРОНІ</h2>
    <p style="font-size:17px; line-height:1.6;">Гостра ковбаса пеперроні, моцарела, томатний соус.</p>
    <p style="background:#008C45; color:#fff; padding:8px 16px; display:inline-block; font-weight:bold; font-size:20px;">219 ₴ · 30 см</p>

    <p style="background:#FFD60A; padding:15px; text-align:center; margin-top:30px; border:3px solid #C8102E; font-weight:bold; font-size:18px;">📞 ЗАМОВИТИ: 098-123-45-67</p>

  </div>

</body>
</html>`
  },
  {
    num: 8,
    name: "ESPORTS-ВОЇНИ",
    emoji: "⚔️",
    trend: "Cyberpunk / Esports",
    trendDesc: "Чорний фон, неоновий блакитний акцент, моноширинний шрифт. Стилістика професійних кіберспортивних організацій.",
    topic: "Сторінка кіберспортивної команди",
    topicDesc: "Зроби сайт для уявної команди по CS2, Dota 2 чи Valorant: логотип, гра, склад гравців з ніками, досягнення.",
    palette: [
      { c: "#000000", t: "#00F0FF" },
      { c: "#001f3f", t: "#fff" },
      { c: "#00F0FF", t: "#000" },
      { c: "#FF006E", t: "#fff" }
    ],
    template: `<!DOCTYPE html>
<html>
<head><title>Esports Команда</title></head>
<body style="background:#000; color:#fff; font-family:Arial; padding:0; margin:0;">

  <div style="background:linear-gradient(135deg,#001f3f,#000); padding:50px 20px; text-align:center;">
    <h1 style="font-size:60px; color:#00F0FF; text-shadow:0 0 20px #00F0FF; margin:0; letter-spacing:6px;">[ NEON.GG ]</h1>
    <p style="color:#888; letter-spacing:4px; font-size:14px;">// UKRAINIAN ESPORTS TEAM //</p>
  </div>

  <div style="max-width:800px; margin:30px auto; padding:0 20px;">

    <img src="https://picsum.photos/800/400?random=10" width="100%" style="border:2px solid #00F0FF;">

    <h2 style="color:#00F0FF; font-size:28px; margin-top:25px;">▸ ГРА: COUNTER-STRIKE 2</h2>

    <p style="background:#00F0FF; color:#000; padding:15px; font-weight:bold; font-size:18px; letter-spacing:1px;">🏆 ТОП-3 В УКРАЇНІ · ВИГРАНО 47 ТУРНІРІВ</p>

    <h2 style="color:#FF006E; font-size:24px; margin-top:30px;">▸ СКЛАД КОМАНДИ</h2>

    <p style="line-height:2; font-size:18px;">
      🎯 <b style="color:#00F0FF;">w0nder</b> — капітан, AWP<br>
      💥 <b style="color:#00F0FF;">flash3r</b> — entry fragger<br>
      🛡️ <b style="color:#00F0FF;">guardian</b> — support<br>
      🧠 <b style="color:#00F0FF;">brain</b> — IGL<br>
      ⚡ <b style="color:#00F0FF;">rush</b> — rifler
    </p>

    <p style="background:#001f3f; border:1px solid #00F0FF; padding:20px; margin-top:30px; line-height:1.7;">Створили команду в 2024 році в Києві. Тренуємось 6 годин на день. Мета — потрапити на Major.</p>

  </div>

</body>
</html>`
  },
  {
    num: 9,
    name: "МУЗИЧНІ-ПРОДЮСЕРИ",
    emoji: "🎵",
    trend: "Spotify / Music",
    trendDesc: "Темно-зелений градієнт, велика обкладинка альбому, треклист. Точна стилістика Spotify.",
    topic: "Картка музичного альбому",
    topicDesc: "Зроби сторінку улюбленого альбому: обкладинка, виконавець, рік, треклист (5-7 пісень), кнопка \"слухати\".",
    palette: [
      { c: "#1DB954", t: "#000" },
      { c: "#191414", t: "#fff" },
      { c: "#000000", t: "#1DB954" },
      { c: "#FFFFFF", t: "#1DB954" }
    ],
    template: `<!DOCTYPE html>
<html>
<head><title>Альбом</title></head>
<body style="background:linear-gradient(180deg,#1DB954 0%,#191414 50%); color:#fff; font-family:Arial; padding:30px; margin:0; min-height:100vh;">

  <div style="max-width:700px; margin:auto;">

    <p style="font-size:13px; letter-spacing:2px; opacity:0.7;">АЛЬБОМ · 2024</p>

    <img src="https://picsum.photos/350/350?random=11" width="350" style="box-shadow:0 25px 50px rgba(0,0,0,0.6);">

    <h1 style="font-size:60px; line-height:1; margin:20px 0 5px;">МАМА АНАРХІЯ</h1>

    <h2 style="font-size:22px; opacity:0.8; font-weight:normal;">КАЛУШ · 12 треків · 38 хв</h2>

    <p style="background:#1DB954; color:#000; padding:14px 32px; display:inline-block; border-radius:30px; font-weight:bold; font-size:18px; margin-top:20px;">▶ СЛУХАТИ</p>

    <h2 style="margin-top:40px; font-size:24px;">🎵 ТРЕКЛИСТ</h2>

    <p style="line-height:2.2; font-size:17px;">
      1. Стефанія<br>
      2. Шум<br>
      3. Гори ясні<br>
      4. Думи мої<br>
      5. Невже...
    </p>

    <p style="opacity:0.7; line-height:1.7; margin-top:30px;">Цей альбом українського гурту став хітом не лише в Україні, а й у всьому світі.</p>

  </div>

</body>
</html>`
  },
  {
    num: 10,
    name: "МОБІЛЬНА-ЛЕГІЯ",
    emoji: "📱",
    trend: "Mobile App / iOS",
    trendDesc: "Яскраві градієнти зверху, заокруглені іконки, картки. Сучасна стилістика iOS App Store.",
    topic: "Сторінка мобільної гри в App Store",
    topicDesc: "Зроби сторінку гри як в магазині додатків: іконка, назва, рейтинг, скріншоти, опис, кнопка завантажити.",
    palette: [
      { c: "#7C3AED", t: "#fff" },
      { c: "#EC4899", t: "#fff" },
      { c: "#F2F2F7", t: "#000" },
      { c: "#FFFFFF", t: "#7C3AED" }
    ],
    template: `<!DOCTYPE html>
<html>
<head><title>Мобільна Гра</title></head>
<body style="background:#F2F2F7; font-family:-apple-system, Arial; padding:0; margin:0;">

  <div style="background:linear-gradient(135deg,#7C3AED,#EC4899); padding:60px 20px 80px; color:#fff; text-align:center;">
    <img src="https://picsum.photos/130/130?random=12" width="130" style="border-radius:30px; box-shadow:0 15px 40px rgba(0,0,0,0.3);">

    <h1 style="font-size:38px; margin:20px 0 5px;">SUBWAY ULTRA</h1>
    <p style="opacity:0.9; font-size:16px;">Endless Runner · Gameloft</p>

    <p style="background:rgba(255,255,255,0.25); display:inline-block; padding:8px 20px; border-radius:20px; margin-top:15px; font-weight:bold;">⭐ 4.8 · 1.2M відгуків</p>
  </div>

  <div style="max-width:600px; margin:-40px auto 0; padding:0 20px;">

    <p style="background:#fff; color:#7C3AED; padding:18px 32px; text-align:center; border-radius:15px; font-weight:bold; font-size:20px; box-shadow:0 5px 20px rgba(0,0,0,0.1);">📲 ЗАВАНТАЖИТИ БЕЗКОШТОВНО</p>

    <div style="background:#fff; padding:25px; border-radius:15px; margin-top:20px; box-shadow:0 5px 20px rgba(0,0,0,0.05);">

      <h2 style="font-size:22px; margin-bottom:10px;">Про гру</h2>
      <p style="line-height:1.6; color:#333;">Біжи через метро, ухиляйся від поїздів, збирай монети та апгрейди. Найкращий ендлес-ранер 2025 року!</p>

      <img src="https://picsum.photos/550/300?random=13" width="100%" style="border-radius:10px; margin-top:15px;">

    </div>

  </div>

</body>
</html>`
  }
];

const REMINDERS = [
  "&lt;h1&gt;, &lt;h2&gt; — заголовки",
  "&lt;p&gt; — абзаци тексту",
  "&lt;img src=\"...\"&gt; — зображення",
  "style=\"color:..\" — кольори",
  "style=\"background:..\" — тло",
  "&lt;br&gt; — перенесення рядка"
];

const CONFETTI_COLORS = ["#7C3AED", "#EC4899", "#FBBF24", "#06B6D4", "#A3E635", "#A78BFA"];

const opened = new Set();

/* ============ RENDER CARDS ============ */
const grid = document.getElementById("grid");
TASKS.forEach(t => {
  const wrap = document.createElement("div");
  wrap.className = "card-wrap";

  const card = document.createElement("div");
  card.className = "card";
  card.dataset.num = t.num;
  card.innerHTML = `
    <div class="corner"><span class="corner-text">${String(t.num).padStart(2, "0")}</span></div>
    <div class="num">${t.num}</div>
    <div class="team-hint">
      <div class="emoji-hint">${t.emoji}</div>
      ${t.name}
    </div>
  `;
  card.addEventListener("click", () => openTask(t.num));

  wrap.appendChild(card);
  grid.appendChild(wrap);
});

/* ============ SYNTAX HIGHLIGHT ============ */
function highlight(code) {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="com">$1</span>')
    .replace(/(&lt;\/?)([a-zA-Z0-9]+)/g, '$1<span class="tag">$2</span>')
    .replace(/([a-zA-Z-]+)=/g, '<span class="attr">$1</span>=')
    .replace(/="([^"]*)"/g, '="<span class="str">$1</span>"');
}

/* ============ CONFETTI ============ */
function fireConfetti(x, y, count = 60) {
  const layer = document.getElementById("confettiLayer");
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = (x + (Math.random() - 0.5) * 200) + "px";
    piece.style.top = (y - 20) + "px";
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.width = (6 + Math.random() * 10) + "px";
    piece.style.height = (6 + Math.random() * 10) + "px";
    if (Math.random() > 0.5) piece.style.borderRadius = "50%";
    const duration = 2 + Math.random() * 2;
    piece.style.animationDuration = duration + "s";
    piece.style.transform = `translateX(${(Math.random() - 0.5) * 400}px)`;

    layer.appendChild(piece);
    setTimeout(() => piece.remove(), duration * 1000);
  }
}

function bigCelebration() {
  const w = window.innerWidth;
  for (let i = 0; i < 5; i++) {
    setTimeout(() => fireConfetti(Math.random() * w, 0, 50), i * 200);
  }
}

/* ============ OPEN TASK MODAL ============ */
function openTask(num) {
  const t = TASKS.find(x => x.num === num);
  if (!t) return;

  const card = document.querySelector(`.card[data-num="${num}"]`);
  const isNew = !opened.has(num);

  if (card && isNew) {
    card.classList.add("opened");
    opened.add(num);
    updateProgress();

    // confetti from card position
    const rect = card.getBoundingClientRect();
    fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 50);

    // celebration if all 10 done
    if (opened.size === 10) {
      setTimeout(showCelebration, 800);
    }
  }

  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  const swatchHTML = t.palette.map(p =>
    `<div class="swatch" style="background:${p.c}; color:${p.t};">${p.c}</div>`
  ).join("");

  const remindersHTML = REMINDERS.map(r => `<li>${r}</li>`).join("");

  content.innerHTML = `
    <div class="modal-head">
      <div class="num-big">${String(t.num).padStart(2, "0")}</div>
      <div class="head-meta">
        <div class="meta-line">// КОМАНДА #${t.num}</div>
        <div class="team">${t.name} ${t.emoji}</div>
        <div class="meta-line">[ СТИЛЬ: ${t.trend.toUpperCase()} ]</div>
      </div>
      <button class="close-btn" id="closeModal" aria-label="Закрити">×</button>
    </div>

    <div class="modal-body">

      <div class="trend-card">
        <div class="section-label">Стиль / Тренд</div>
        <h3>${t.trend}</h3>
        <p>${t.trendDesc}</p>
      </div>

      <div class="topic-card">
        <div class="section-label">Завдання</div>
        <h3>${t.topic}</h3>
        <p>${t.topicDesc}</p>
      </div>

      <div class="section-label">Кольорова палітра</div>
      <div class="palette">${swatchHTML}</div>

      <div class="reminders">
        <h3>📌 Що використовувати</h3>
        <ul>${remindersHTML}</ul>
      </div>

      <div class="section-label">Шаблон-старт (копіюй та змінюй під себе)</div>
      <div class="code-section">
        <div class="code-head">
          <div class="dots"><span></span><span></span><span></span></div>
          <span class="label">index.html</span>
          <button class="copy" id="copyBtn">📋 КОПІЮВАТИ</button>
        </div>
        <pre class="code" id="codeBlock">${highlight(t.template)}</pre>
      </div>

      <button class="preview-toggle" id="previewBtn">👁️ ПОКАЗАТИ ПРЕВ'Ю ШАБЛОНУ</button>
      <iframe class="preview-frame" id="previewFrame" srcdoc=""></iframe>

    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("copyBtn").addEventListener("click", () => copyCode(t.template));
  document.getElementById("previewBtn").addEventListener("click", () => togglePreview(t.template));
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ============ COPY CODE ============ */
function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById("copyBtn");
    btn.textContent = "✓ СКОПІЙОВАНО";
    btn.classList.add("copied");
    showToast();
    setTimeout(() => {
      btn.textContent = "📋 КОПІЮВАТИ";
      btn.classList.remove("copied");
    }, 1800);
  }).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = code;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast();
  });
}

/* ============ PREVIEW ============ */
function togglePreview(code) {
  const frame = document.getElementById("previewFrame");
  const btn = document.getElementById("previewBtn");
  if (frame.classList.contains("active")) {
    frame.classList.remove("active");
    frame.srcdoc = "";
    btn.textContent = "👁️ ПОКАЗАТИ ПРЕВ'Ю ШАБЛОНУ";
  } else {
    frame.srcdoc = code;
    frame.classList.add("active");
    btn.textContent = "✕ СХОВАТИ ПРЕВ'Ю";
  }
}

/* ============ TOAST ============ */
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ============ RANDOM PICK ============ */
document.getElementById("randomPick").addEventListener("click", () => {
  const remaining = TASKS.filter(t => !opened.has(t.num));
  if (remaining.length === 0) {
    const toast = document.getElementById("toast");
    toast.textContent = "УСІ КАРТКИ ВЖЕ ВІДКРИТІ ✓";
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => { toast.textContent = "КОД СКОПІЙОВАНО ✓"; }, 300);
    }, 2200);
    return;
  }

  const cards = document.querySelectorAll(".card:not(.opened)");
  let count = 0;
  const totalSpins = 10;
  const interval = setInterval(() => {
    cards.forEach(c => c.classList.remove("spinning"));
    const rnd = cards[Math.floor(Math.random() * cards.length)];
    if (rnd) rnd.classList.add("spinning");
    count++;
    if (count >= totalSpins) {
      clearInterval(interval);
      cards.forEach(c => c.classList.remove("spinning"));
      const winner = remaining[Math.floor(Math.random() * remaining.length)];
      const winnerCard = document.querySelector(`.card[data-num="${winner.num}"]`);
      if (winnerCard) winnerCard.classList.add("spinning");
      setTimeout(() => {
        if (winnerCard) winnerCard.classList.remove("spinning");
        openTask(winner.num);
      }, 400);
    }
  }, 110);
});

/* ============ RESET ============ */
document.getElementById("resetAll").addEventListener("click", () => {
  if (opened.size === 0) return;
  if (!confirm("Скинути всі відкриті завдання?")) return;
  document.querySelectorAll(".card.opened").forEach(c => c.classList.remove("opened"));
  opened.clear();
  updateProgress();
});

/* ============ PROGRESS ============ */
function updateProgress() {
  document.getElementById("progress").textContent = `${opened.size} / 10`;
  const fill = document.getElementById("progressFill");
  if (fill) fill.style.width = (opened.size * 10) + "%";
}

/* ============ CELEBRATION ============ */
function showCelebration() {
  document.getElementById("celebration").classList.add("active");
  bigCelebration();
  // continuous confetti for a moment
  let bursts = 0;
  const burstInterval = setInterval(() => {
    bigCelebration();
    bursts++;
    if (bursts >= 3) clearInterval(burstInterval);
  }, 1200);
}

document.getElementById("celClose").addEventListener("click", () => {
  document.getElementById("celebration").classList.remove("active");
});

/* ============ SUBTLE CURSOR PARALLAX ON DECO ============ */
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  document.querySelectorAll(".deco").forEach((el, i) => {
    const speed = (i % 3 + 1) * 6;
    el.style.translate = `${x * speed}px ${y * speed}px`;
  });
});
