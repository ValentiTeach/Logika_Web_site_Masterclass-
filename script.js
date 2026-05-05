
const TASKS = [
  {
    num: 1,
    name: "КІБЕР-КОДЕРИ",
    emoji: "🎮",
    trend: "Кіберпанк / Неон",
    trendDesc: "Чорний фон, неонові зелені та рожеві кольори, моноширинний шрифт. Виглядає як сцена з фільму про хакерів.",
    topic: "Моя улюблена відеогра",
    topicDesc: "Створи сторінку про гру, в яку ти любиш грати: назва, жанр, чому вона крута, твій улюблений момент чи персонаж.",
    palette: [
      { c: "#0a0a0a", t: "#00ff88" },
      { c: "#00ff88", t: "#000" },
      { c: "#ff00ff", t: "#fff" },
      { c: "#ffff00", t: "#000" }
    ],
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Моя улюблена гра</title>
</head>
<body style="background:#0a0a0a; color:#00ff88; font-family:monospace; padding:30px;">

  <h1 style="color:#ff00ff; font-size:50px;">▓▓ MINECRAFT ▓▓</h1>

  <h2>&gt;&gt; Жанр: Пісочниця</h2>

  <img src="https://picsum.photos/400/250" width="400">

  <p>Я люблю цю гру тому що тут можна будувати все що захочеш!</p>

</body>
</html>`
  },
  {
    num: 2,
    name: "ВЕЙПОРВЕЙВ-ВОЇНИ",
    emoji: "💜",
    trend: "Vaporwave / Естетика 80-х",
    trendDesc: "Рожево-фіолетові градієнти, ретро шрифти, відчуття старих відеомагнітофонів і японських аркад.",
    topic: "Моя улюблена музика",
    topicDesc: "Розкажи про виконавця, гурт чи альбом, який тебе надихає. Що тобі подобається в цій музиці?",
    palette: [
      { c: "#ff006e", t: "#fff" },
      { c: "#8338ec", t: "#fff" },
      { c: "#3a86ff", t: "#fff" },
      { c: "#ffbe0b", t: "#000" }
    ],
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Моя музика</title>
</head>
<body style="background:linear-gradient(135deg,#ff006e,#8338ec); color:white; padding:40px; font-family:Georgia; text-align:center;">

  <h1 style="font-size:60px; letter-spacing:8px;">A E S T H E T I C</h1>

  <h2>★ Моя улюблена музика ★</h2>

  <img src="https://picsum.photos/300/300" width="300" style="border:5px solid white;">

  <p style="font-size:20px;">Цей жанр мене надихає, бо...</p>

</body>
</html>`
  },
  {
    num: 3,
    name: "БРУТАЛ-БРИГАДА",
    emoji: "🦸",
    trend: "Нео-брутализм",
    trendDesc: "Яскраві блокові кольори, товсті чорні рамки, грубі тіні. Сміливо, голосно, неможливо проігнорувати.",
    topic: "Мій улюблений супергерой",
    topicDesc: "Розкажи про супергероя (з фільму, гри, мультику чи власну вигадку). Сили, історія, чому він крутий?",
    palette: [
      { c: "#ffd60a", t: "#000" },
      { c: "#ff006e", t: "#fff" },
      { c: "#000000", t: "#fff" },
      { c: "#ffffff", t: "#000" }
    ],
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Мій герой</title>
</head>
<body style="background:#ffd60a; padding:30px; font-family:Arial, sans-serif;">

  <h1 style="background:black; color:white; padding:20px; border:6px solid black;">МІЙ ГЕРОЙ — БЕТМЕН</h1>

  <h2 style="background:#ff006e; color:white; padding:12px; border:6px solid black; display:inline-block;">Сили: розум і круті гаджети</h2>

  <img src="https://picsum.photos/350/350" style="border:8px solid black;">

  <p style="background:white; border:6px solid black; padding:18px; font-size:18px;">Він захищає Готем від злочинців!</p>

</body>
</html>`
  },
  {
    num: 4,
    name: "МІНІМАЛ-МАСТЕРИ",
    emoji: "📖",
    trend: "Мінімалізм",
    trendDesc: "Багато білого простору, тонкий шрифт, мало кольорів. Все спокійне і вишукане — як сторінка дорогого журналу.",
    topic: "Моя улюблена книга",
    topicDesc: "Розкажи про книгу, яку ти читав і яка тебе вразила. Про що вона? Які почуття залишила?",
    palette: [
      { c: "#fafafa", t: "#222" },
      { c: "#222222", t: "#fafafa" },
      { c: "#888888", t: "#fff" },
      { c: "#d4a574", t: "#fff" }
    ],
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Моя книга</title>
</head>
<body style="background:#fafafa; color:#222; font-family:Georgia, serif; padding:80px; max-width:600px; margin:auto;">

  <h1 style="font-weight:300; font-size:48px;">Гаррі Поттер</h1>

  <p style="color:#888; font-style:italic;">— книга, яка змінила мене.</p>

  <img src="https://picsum.photos/300/400" width="300">

  <h2 style="font-weight:400; margin-top:40px;">Про що ця книга</h2>

  <p style="line-height:1.7;">Сюжет розповідає про хлопчика-чарівника, який потрапляє у магічну школу...</p>

</body>
</html>`
  },
  {
    num: 5,
    name: "Y2K-ЗІРКИ",
    emoji: "🍕",
    trend: "Y2K / 2000-ні",
    trendDesc: "Блискучі градієнти, бабли, рожеве з блакитним, веселі шрифти. Як старий MSN-чат і MTV-кліпи.",
    topic: "Моя улюблена страва",
    topicDesc: "Що ти найбільше любиш їсти? Розкажи про страву: як виглядає, де її їсти найкраще, чому вона ідеальна.",
    palette: [
      { c: "#00d4ff", t: "#fff" },
      { c: "#ff00d4", t: "#fff" },
      { c: "#ffd60a", t: "#000" },
      { c: "#ffffff", t: "#ff00d4" }
    ],
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Моя страва</title>
</head>
<body style="background:linear-gradient(45deg,#00d4ff,#ff00d4); color:white; padding:30px; font-family:'Comic Sans MS', cursive;">

  <h1 style="text-shadow:4px 4px 0 #000; font-size:60px;">★ ПІЦА ★</h1>

  <img src="https://picsum.photos/300/300" style="border-radius:50%; border:6px solid yellow;">

  <h2 style="background:white; color:#ff00d4; padding:10px; border-radius:30px; display:inline-block;">♡ Мій топ-3 інгредієнтів ♡</h2>

  <p style="background:rgba(255,255,255,0.4); padding:18px; border-radius:25px; font-size:20px;">Сир, помідори, гриби — і це найкраща страва у світі!</p>

</body>
</html>`
  },
  {
    num: 6,
    name: "ТЕМНИЙ-ТРИБ",
    emoji: "🌌",
    trend: "Dark Mode",
    trendDesc: "Темне тло, контрастний текст, акценти яскравими кольорами. Зручно очам і виглядає дорого.",
    topic: "Космос і планети",
    topicDesc: "Обери планету або зірку, про яку хочеш розповісти. Розмір, цікаві факти, чи можна там жити?",
    palette: [
      { c: "#0d0d1a", t: "#fff" },
      { c: "#7c3aed", t: "#fff" },
      { c: "#06b6d4", t: "#fff" },
      { c: "#fbbf24", t: "#000" }
    ],
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Всесвіт</title>
</head>
<body style="background:#0d0d1a; color:#fff; padding:40px; font-family:sans-serif;">

  <h1 style="color:#7c3aed; font-size:48px;">🌌 ЮПІТЕР 🌌</h1>

  <h2 style="color:#06b6d4;">Найбільша планета сонячної системи</h2>

  <img src="https://picsum.photos/450/300" width="450" style="border:2px solid #7c3aed;">

  <p style="color:#a78bfa; font-size:18px; line-height:1.6;">У Юпітера понад 80 супутників, а його червона пляма — це гігантський шторм, який триває вже сотні років.</p>

</body>
</html>`
  },
  {
    num: 7,
    name: "ПРИРОДА-КЛАН",
    emoji: "🐱",
    trend: "Органічний / Earthy",
    trendDesc: "Теплі земляні відтінки, м'які заокруглення, спокійна атмосфера. Виглядає як сторінка крафтового бренду.",
    topic: "Моя домашня тваринка",
    topicDesc: "Розкажи про свого улюбленця (або того, якого хотів би мати): хто це, як звати, які звички, чому він особливий.",
    palette: [
      { c: "#f5f1e8", t: "#3d3520" },
      { c: "#7a5c3c", t: "#fff" },
      { c: "#a8b89a", t: "#fff" },
      { c: "#d97757", t: "#fff" }
    ],
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Моя тваринка</title>
</head>
<body style="background:#f5f1e8; color:#3d3520; font-family:Georgia, serif; padding:50px;">

  <h1 style="color:#7a5c3c; font-size:42px;">🐱 Моя кішечка Муся</h1>

  <h2 style="color:#9b6c3a;">Порода: руда красуня</h2>

  <img src="https://picsum.photos/400/400" style="border-radius:20px;">

  <p style="line-height:1.7; font-size:17px;">Мусі вже 3 роки. Вона любить спати на сонечку, ловити мишок і муркотіти, коли я її гладжу.</p>

</body>
</html>`
  },
  {
    num: 8,
    name: "БЕНТО-БРАТСТВО",
    emoji: "🎨",
    trend: "Bento Grid",
    trendDesc: "Сторінка, поділена на кольорові блоки-картки, як японський бенто-обід. Все чітко, кожен блок — окрема думка.",
    topic: "Моє хобі",
    topicDesc: "Чим ти любиш займатися у вільний час? Малюєш, грає в футбол, збираєш Lego? Розкажи!",
    palette: [
      { c: "#f0f0f0", t: "#000" },
      { c: "#ffd60a", t: "#000" },
      { c: "#ff006e", t: "#fff" },
      { c: "#4d7cff", t: "#fff" }
    ],
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Моє хобі</title>
</head>
<body style="background:#f0f0f0; padding:30px; font-family:sans-serif;">

  <h1 style="font-size:42px;">МОЄ ХОБІ — МАЛЮВАННЯ</h1>

  <div style="background:#ffd60a; padding:25px; border-radius:20px; margin:10px 0;">
    <h2>Що я малюю</h2>
    <p>Аніме персонажів і портрети друзів</p>
  </div>

  <div style="background:#ff006e; color:white; padding:25px; border-radius:20px; margin:10px 0;">
    <h2>Як давно</h2>
    <p>Уже 3 роки кожного дня</p>
  </div>

  <img src="https://picsum.photos/500/300" style="border-radius:20px;">

</body>
</html>`
  },
  {
    num: 9,
    name: "ГЛЕМ-ГВАРДІЯ",
    emoji: "✈️",
    trend: "Glassmorphism / Скло",
    trendDesc: "Прозорі картки з ефектом матового скла на яскравому фоні. Виглядає як iOS чи macOS — сучасно і легко.",
    topic: "Подорож моєї мрії",
    topicDesc: "Куди ти найбільше хотів би поїхати? Місто, країна чи планета — опиши, що там цікавого.",
    palette: [
      { c: "#ff9a9e", t: "#fff" },
      { c: "#a18cd1", t: "#fff" },
      { c: "#fbc2eb", t: "#000" },
      { c: "#ffffff", t: "#a18cd1" }
    ],
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Мрія-подорож</title>
</head>
<body style="background:linear-gradient(135deg,#ff9a9e,#fad0c4,#a18cd1); padding:40px; font-family:sans-serif; color:white; min-height:100vh;">

  <div style="background:rgba(255,255,255,0.25); backdrop-filter:blur(10px); padding:35px; border-radius:25px; border:1px solid rgba(255,255,255,0.4);">

    <h1 style="font-size:42px;">✈ Японія — моя мрія</h1>

    <h2>Чому саме сюди?</h2>

    <img src="https://picsum.photos/500/300" width="500" style="border-radius:20px;">

    <p style="font-size:18px; line-height:1.6;">Хочу побачити Токіо, скуштувати рамен і відвідати фестиваль квітів сакури навесні.</p>

  </div>

</body>
</html>`
  },
  {
    num: 10,
    name: "ПАСТЕЛЬ-ПРОФЕСІОНАЛИ",
    emoji: "💫",
    trend: "Soft UI / Пастель",
    trendDesc: "М'які пастельні кольори, заокруглені картки, ніжні тіні. Виглядає затишно і дружньо.",
    topic: "Моя професія мрії",
    topicDesc: "Ким ти хочеш стати, коли виростеш? Програмістом, лікарем, режисером? Розкажи чому саме!",
    palette: [
      { c: "#e0e7ff", t: "#4338ca" },
      { c: "#fce7f3", t: "#be185d" },
      { c: "#d1fae5", t: "#047857" },
      { c: "#fef3c7", t: "#92400e" }
    ],
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Моя мрія</title>
</head>
<body style="background:#e0e7ff; color:#4338ca; font-family:sans-serif; padding:50px;">

  <h1 style="background:#fff; padding:30px; border-radius:30px; box-shadow:6px 6px 20px #b8c1e8; font-size:40px;">💫 МОЯ МРІЯ 💫</h1>

  <h2 style="color:#be185d;">Я хочу стати програмістом</h2>

  <img src="https://picsum.photos/400/300" style="border-radius:25px;">

  <p style="background:#fff; padding:25px; border-radius:25px; box-shadow:6px 6px 20px #b8c1e8; font-size:17px; line-height:1.6;">Це професія майбутнього: ти створюєш сайти, ігри та додатки, якими користуються мільйони людей!</p>

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

const opened = new Set();

// ========== render cards ==========
const grid = document.getElementById("grid");
TASKS.forEach(t => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.num = t.num;
  card.innerHTML = `
    <div class="corner"><span class="corner-text">${String(t.num).padStart(2,"0")}</span></div>
    <div class="num">${t.num}</div>
    <div class="team-hint">
      <div style="font-size:18px; margin-bottom:4px;">${t.emoji}</div>
      ${t.name}
    </div>
  `;
  card.addEventListener("click", () => openTask(t.num));
  grid.appendChild(card);
});

// ========== syntax highlight (basic) ==========
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

// ========== open task modal ==========
function openTask(num) {
  const t = TASKS.find(x => x.num === num);
  if (!t) return;

  // mark card as opened
  const card = document.querySelector(`.card[data-num="${num}"]`);
  if (card && !opened.has(num)) {
    card.classList.add("opened");
    opened.add(num);
    updateProgress();
  }

  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  const swatchHTML = t.palette.map(p =>
    `<div class="swatch" style="background:${p.c}; color:${p.t};">${p.c}</div>`
  ).join("");

  const remindersHTML = REMINDERS.map(r => `<li>${r}</li>`).join("");

  content.innerHTML = `
    <div class="modal-head">
      <div class="num-big">${String(t.num).padStart(2,"0")}</div>
      <div class="head-meta">
        <div class="meta-line">// КОМАНДА #${t.num}</div>
        <div class="team">${t.name} ${t.emoji}</div>
        <div class="meta-line">[ ТРЕНД: ${t.trend.toUpperCase()} ]</div>
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
        <div class="section-label" style="color:#fff; opacity:0.85;">Тема сайту</div>
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

  // wire up buttons
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

// ========== copy code ==========
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
    // fallback
    const ta = document.createElement("textarea");
    ta.value = code;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast();
  });
}

// ========== preview ==========
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

// ========== toast ==========
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

// ========== random pick ==========
document.getElementById("randomPick").addEventListener("click", () => {
  const remaining = TASKS.filter(t => !opened.has(t.num));
  if (remaining.length === 0) {
    alert("Усі команди вже отримали завдання! Натисни «Скинути все», щоб почати знову.");
    return;
  }

  // dramatic spin: highlight a few random cards rapidly
  const cards = document.querySelectorAll(".card:not(.opened)");
  let count = 0;
  const totalSpins = 8;
  const interval = setInterval(() => {
    cards.forEach(c => c.classList.remove("spinning"));
    const rnd = cards[Math.floor(Math.random() * cards.length)];
    if (rnd) rnd.classList.add("spinning");
    count++;
    if (count >= totalSpins) {
      clearInterval(interval);
      cards.forEach(c => c.classList.remove("spinning"));
      const winner = remaining[Math.floor(Math.random() * remaining.length)];
      setTimeout(() => openTask(winner.num), 200);
    }
  }, 110);
});

// ========== reset ==========
document.getElementById("resetAll").addEventListener("click", () => {
  if (opened.size === 0) return;
  if (!confirm("Скинути всі відкриті завдання?")) return;
  document.querySelectorAll(".card.opened").forEach(c => c.classList.remove("opened"));
  opened.clear();
  updateProgress();
});

// ========== progress ==========
function updateProgress() {
  document.getElementById("progress").textContent = `[ ${opened.size} / 10 ]`;
}


