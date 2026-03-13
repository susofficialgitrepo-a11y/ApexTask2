/* ============================================================
   style.css — DevSpace · Light Theme
   ============================================================ */

/* ── 1. CSS VARIABLES ── */
:root {
  /* Light palette */
  --bg:          #f8f7f4;
  --bg-2:        #ffffff;
  --bg-3:        #f0ede8;
  --border:      #e5e0d8;
  --border-2:    #d4cec4;

  /* Accents */
  --accent:      #3b5bdb;
  --accent-lt:   #e8ecfd;
  --accent-2:    #7048e8;
  --green:       #087f5b;
  --green-lt:    #e6f7f1;
  --orange:      #d9480f;
  --orange-lt:   #fff0e6;
  --pink:        #a61e4d;
  --pink-lt:     #ffe0eb;

  /* Text */
  --text-1:      #1a1713;
  --text-2:      #5c5750;
  --text-3:      #9d9790;

  /* Fonts */
  --font-display: 'Playfair Display', serif;
  --font-body:    'Plus Jakarta Sans', sans-serif;

  /* Misc */
  --nav-h:    68px;
  --radius:   16px;
  --radius-sm: 10px;
  --shadow:   0 4px 20px rgba(0,0,0,0.08);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.12);
  --ease:     cubic-bezier(0.4,0,0.2,1);
  --dur:      0.25s;
}

/* ── 2. RESET ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: var(--bg); color: var(--text-1); font-family: var(--font-body); line-height: 1.7; overflow-x: hidden; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }
input, textarea, select { font-family: inherit; }
em { font-style: italic; color: var(--accent); }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-3); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 99px; }

.hidden { display: none !important; }

/* ── 3. CONTAINER ── */
.container { max-width: 1120px; margin: 0 auto; padding: 0 5%; }

/* ── 4. SECTION TYPOGRAPHY ── */
.section-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 900;
  color: var(--text-1);
  line-height: 1.15;
  margin-bottom: 14px;
}
.section-sub { color: var(--text-2); font-size: 0.97rem; max-width: 520px; }
.section-head { margin-bottom: 48px; }

/* ── 5. BUTTONS ── */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; border-radius: var(--radius-sm);
  font-family: var(--font-body); font-weight: 600; font-size: 0.9rem;
  transition: all var(--dur) var(--ease);
  position: relative; overflow: hidden; white-space: nowrap;
}
.btn:active { transform: scale(0.97); }

.btn-primary {
  background: var(--accent); color: #fff;
  box-shadow: 0 4px 16px rgba(59,91,219,0.25);
}
.btn-primary:hover {
  background: #2f4ac7;
  box-shadow: 0 6px 24px rgba(59,91,219,0.38);
  transform: translateY(-1px);
}
.btn-outline {
  background: transparent; color: var(--text-1);
  border: 1.5px solid var(--border-2);
}
.btn-outline:hover { border-color: var(--accent); color: var(--accent); }
.btn-full { width: 100%; justify-content: center; padding: 14px; }

/* ── 6. NAVBAR ── */
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  height: var(--nav-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 5%;
  background: rgba(248, 247, 244, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
.navbar.scrolled {
  border-bottom-color: var(--border);
  box-shadow: 0 2px 20px rgba(0,0,0,0.07);
}
.nav-brand {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--text-1);
}
.brand-icon {
  width: 34px; height: 34px; border-radius: 8px;
  background: var(--accent); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: 900; font-size: 1rem;
}
.brand-icon.sm { width: 28px; height: 28px; font-size: 0.85rem; border-radius: 6px; }

.nav-links { display: flex; gap: 4px; }
.nav-link {
  padding: 7px 15px; border-radius: var(--radius-sm);
  font-size: 0.88rem; font-weight: 500; color: var(--text-2);
  transition: all var(--dur) var(--ease);
}
.nav-link:hover { color: var(--text-1); background: var(--bg-3); }
.nav-link.active { color: var(--accent); background: var(--accent-lt); }

.hamburger { display: none; flex-direction: column; gap: 5px; padding: 6px; }
.hamburger span { display: block; width: 22px; height: 2px; background: var(--text-1); border-radius: 2px; transition: all var(--dur) var(--ease); }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── 7. HERO ── */
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column;
  justify-content: center;
  padding: calc(var(--nav-h) + 60px) 5% 80px;
  position: relative; overflow: hidden;
  background: linear-gradient(135deg, #f8f7f4 0%, #eef0fb 50%, #f8f7f4 100%);
}

/* Decorative blobs */
.blob {
  position: absolute; border-radius: 50%;
  filter: blur(70px); pointer-events: none; z-index: 0;
}
.blob-a {
  width: 480px; height: 480px;
  background: radial-gradient(circle, rgba(59,91,219,0.12), transparent 70%);
  top: -80px; right: -120px;
  animation: float 10s ease-in-out infinite;
}
.blob-b {
  width: 360px; height: 360px;
  background: radial-gradient(circle, rgba(112,72,232,0.09), transparent 70%);
  bottom: 40px; left: -80px;
  animation: float 13s ease-in-out infinite reverse;
}
.blob-c {
  width: 240px; height: 240px;
  background: radial-gradient(circle, rgba(8,127,91,0.08), transparent 70%);
  top: 50%; left: 50%;
  animation: float 8s ease-in-out infinite;
}
@keyframes float {
  0%,100% { transform: translate(0,0) scale(1); }
  50%      { transform: translate(16px,-24px) scale(1.04); }
}

.hero-inner {
  display: flex; align-items: center; gap: 60px;
  max-width: 1120px; margin: 0 auto; width: 100%;
  position: relative; z-index: 1;
}

.hero-content { flex: 1; max-width: 540px; animation: fadeUp 0.8s var(--ease) both; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-chip {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px; border-radius: 99px;
  background: var(--bg-2); border: 1.5px solid var(--border);
  font-size: 0.78rem; font-weight: 600; color: var(--text-2);
  margin-bottom: 26px;
  box-shadow: var(--shadow);
}
.chip-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #12b886;
  box-shadow: 0 0 8px #12b886;
  animation: blink 2s infinite;
}
@keyframes blink {
  0%,100% { opacity: 1; } 50% { opacity: 0.4; }
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 4.4rem);
  font-weight: 900; line-height: 1.08;
  letter-spacing: -0.02em; margin-bottom: 20px;
  color: var(--text-1);
}
.title-highlight {
  color: var(--accent);
  position: relative; display: inline-block;
}
.title-highlight::after {
  content: '';
  position: absolute; bottom: 4px; left: 0; right: 0;
  height: 6px; background: var(--accent-lt);
  border-radius: 3px; z-index: -1;
}

.hero-desc {
  font-size: 1rem; color: var(--text-2); max-width: 440px;
  margin-bottom: 34px; font-weight: 400; line-height: 1.75;
}

.hero-stats {
  display: flex; align-items: center; gap: 24px;
  margin-bottom: 36px;
}
.stat { display: flex; flex-direction: column; align-items: flex-start; }
.stat-num {
  font-family: var(--font-display);
  font-size: 1.7rem; font-weight: 900; color: var(--text-1); line-height: 1;
}
.stat-label { font-size: 0.75rem; color: var(--text-3); font-weight: 500; margin-top: 2px; }
.stat-sep { width: 1px; height: 36px; background: var(--border-2); }

.hero-cta { display: flex; gap: 12px; flex-wrap: wrap; }

/* Hero visual — floating skill cards */
.hero-visual {
  flex: 1; max-width: 420px;
  display: flex; align-items: center; justify-content: center;
  animation: fadeUp 0.8s 0.15s var(--ease) both;
}
.hero-avatar-wrap {
  position: relative;
  width: 320px; height: 320px;
}
.hero-avatar {
  width: 140px; height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-lt), #dde4ff);
  border: 3px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 3.5rem; color: var(--accent);
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: var(--shadow-lg);
}

.floating-card {
  position: absolute;
  background: var(--bg-2);
  border: 1.5px solid var(--border);
  border-radius: 12px;
  padding: 9px 14px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-1);
  box-shadow: var(--shadow);
  display: flex; align-items: center; gap: 6px;
  white-space: nowrap;
}
.floating-card i { font-size: 1rem; }

.fc-html { top: 10px; left: 0;  animation: floatCard 4s ease-in-out infinite; color: #e34c26; }
.fc-css  { top: 10px; right: 0; animation: floatCard 4s 0.8s ease-in-out infinite; color: #264de4; }
.fc-js   { bottom: 50px; left: 10px; animation: floatCard 4s 1.4s ease-in-out infinite; color: #f7df1e; background: #1a1a1a; border-color: #333; color: #f7df1e; }
.fc-resp { bottom: 30px; right: 5px; animation: floatCard 4s 2s ease-in-out infinite; color: var(--accent-2); }

@keyframes floatCard {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}

.availability-badge {
  position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
  background: var(--bg-2); border: 1.5px solid #12b886;
  border-radius: 99px; padding: 6px 14px;
  font-size: 0.78rem; font-weight: 700; color: #087f5b;
  display: flex; align-items: center; gap: 6px;
  box-shadow: 0 4px 14px rgba(18,184,134,0.15);
}
.avail-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #12b886; box-shadow: 0 0 8px #12b886;
  animation: blink 2s infinite;
}

.scroll-hint {
  position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--text-3);
  z-index: 1;
  animation: fadeUp 1s 0.6s var(--ease) both;
}
.scroll-line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, var(--border-2), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%,100% { opacity: 1; } 50% { opacity: 0.3; }
}

/* ── 8. FEATURES SECTION ── */
.features-section {
  padding: 100px 0;
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
.feature-card {
  background: var(--bg);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 26px;
  position: relative;
  transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease);
  overflow: hidden;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--border-2);
}
.fc-num {
  font-family: var(--font-display);
  font-size: 3.5rem; font-weight: 900;
  color: var(--border);
  position: absolute; top: 16px; right: 20px;
  line-height: 1; user-select: none;
  transition: color var(--dur) var(--ease);
}
.feature-card:hover .fc-num { color: var(--accent-lt); }

.fc-icon {
  width: 48px; height: 48px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; margin-bottom: 18px;
}
.fc-icon.blue   { background: var(--accent-lt); color: var(--accent); }
.fc-icon.orange { background: var(--orange-lt); color: var(--orange); }
.fc-icon.green  { background: var(--green-lt);  color: var(--green); }
.fc-icon.pink   { background: var(--pink-lt);   color: var(--pink); }

.feature-card h3 {
  font-family: var(--font-display);
  font-size: 1.08rem; font-weight: 700; margin-bottom: 8px;
}
.feature-card p { font-size: 0.9rem; color: var(--text-2); margin-bottom: 18px; line-height: 1.6; }
.fc-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.fc-tags span {
  font-size: 0.72rem; font-weight: 700; padding: 3px 10px;
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: 99px; color: var(--text-2);
}

/* ── 9. CONTACT ── */
.contact-section { padding: 100px 0; background: var(--bg); }
.contact-wrapper {
  display: grid; grid-template-columns: 1fr 1.5fr;
  gap: 60px; align-items: start;
}
.contact-left .section-title { margin-bottom: 14px; }
.contact-desc { color: var(--text-2); font-size: 0.95rem; margin-bottom: 36px; max-width: 320px; }
.contact-list { display: flex; flex-direction: column; gap: 16px; }
.contact-row { display: flex; align-items: center; gap: 14px; }
.cr-icon {
  width: 42px; height: 42px; border-radius: 10px;
  background: var(--accent-lt); color: var(--accent);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; flex-shrink: 0; border: 1px solid #c5cff5;
}
.cr-label { display: block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-3); margin-bottom: 1px; }
.cr-val { display: block; font-size: 0.92rem; font-weight: 500; color: var(--text-1); }
.cr-email-link { color: var(--accent); text-decoration: none; transition: opacity var(--dur) var(--ease); }
.cr-email-link:hover { opacity: 0.75; text-decoration: underline; }

/* Form */
.contact-right {
  background: var(--bg-2); border: 1.5px solid var(--border);
  border-radius: var(--radius); padding: 36px; box-shadow: var(--shadow);
}
.form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
.form-group label { font-size: 0.82rem; font-weight: 600; color: var(--text-2); }
.inp-wrap { position: relative; }
.inp-wrap i {
  position: absolute; left: 13px; top: 50%;
  transform: translateY(-50%);
  font-size: 1rem; color: var(--text-3); pointer-events: none;
  transition: color var(--dur) var(--ease);
}
.inp-wrap input,
.inp-wrap textarea {
  width: 100%;
  background: var(--bg); border: 1.5px solid var(--border);
  border-radius: var(--radius-sm); color: var(--text-1);
  font-size: 0.93rem; padding: 11px 12px 11px 38px;
  outline: none;
  transition: border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
.inp-wrap textarea { resize: vertical; min-height: 110px; }
.inp-wrap input:focus,
.inp-wrap textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(59,91,219,0.1);
}
.inp-wrap input.valid   { border-color: #12b886; }
.inp-wrap input.invalid { border-color: #fa5252; }
.err { font-size: 0.78rem; color: #fa5252; min-height: 14px; }

.form-success {
  text-align: center; padding: 48px 20px; animation: fadeUp 0.4s var(--ease);
}
.success-circle {
  width: 72px; height: 72px; border-radius: 50%;
  background: var(--green-lt); border: 2px solid #12b886; color: #087f5b;
  display: flex; align-items: center; justify-content: center;
  font-size: 2rem; margin: 0 auto 20px;
  animation: popIn 0.4s var(--ease);
}
@keyframes popIn {
  from { transform: scale(0.5); opacity: 0; }
  to   { transform: scale(1);   opacity: 1; }
}
.form-success h3 { font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; margin-bottom: 8px; }
.form-success p  { color: var(--text-2); margin-bottom: 28px; }

@keyframes spin { to { transform: rotate(360deg); } }
.spin { animation: spin 0.8s linear infinite; }

/* ── 10. TO-DO ── */
.todo-section { padding: 100px 0; background: var(--bg-3); border-top: 1px solid var(--border); }
.todo-card {
  background: var(--bg-2); border: 1.5px solid var(--border);
  border-radius: var(--radius); padding: 32px;
  box-shadow: var(--shadow); max-width: 720px; margin: 0 auto;
}

.todo-add-row { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
.todo-inp-box {
  flex: 1; min-width: 260px;
  display: flex; align-items: center; gap: 10px;
  background: var(--bg); border: 1.5px solid var(--border);
  border-radius: var(--radius-sm); padding: 0 14px;
  transition: border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
.todo-inp-box:focus-within {
  border-color: var(--accent); box-shadow: 0 0 0 3px rgba(59,91,219,0.1);
}
.todo-inp-box i { font-size: 1.2rem; color: var(--text-3); flex-shrink: 0; }
.todo-inp-box input {
  flex: 1; background: none; border: none; color: var(--text-1);
  font-size: 0.93rem; padding: 12px 0; outline: none;
}
.todo-inp-box select {
  background: none; border: none; border-left: 1px solid var(--border);
  color: var(--text-3); font-size: 0.82rem; padding: 4px 8px;
  outline: none; cursor: pointer;
}

.todo-filters { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
.filter-btn {
  padding: 7px 16px; border-radius: 99px;
  font-size: 0.84rem; font-weight: 600; color: var(--text-2);
  background: var(--bg); border: 1.5px solid var(--border);
  transition: all var(--dur) var(--ease);
  display: flex; align-items: center; gap: 6px;
}
.filter-btn:hover { border-color: var(--accent); color: var(--accent); }
.filter-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); box-shadow: 0 4px 14px rgba(59,91,219,0.28); }
.filter-btn span {
  background: rgba(255,255,255,0.25); border-radius: 99px;
  padding: 1px 7px; font-size: 0.74rem;
}

.todo-list { display: flex; flex-direction: column; gap: 10px; min-height: 60px; }
.todo-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 10px; padding: 50px;
  color: var(--text-3); font-size: 0.9rem;
  border: 1.5px dashed var(--border); border-radius: var(--radius);
}
.todo-empty i { font-size: 2.2rem; }

.todo-item {
  display: flex; align-items: center; gap: 12px;
  background: var(--bg); border: 1.5px solid var(--border);
  border-radius: var(--radius-sm); padding: 13px 16px;
  transition: all var(--dur) var(--ease);
  animation: slideIn 0.28s var(--ease);
}
@keyframes slideIn {
  from { opacity: 0; transform: translateX(-14px); }
  to   { opacity: 1; transform: translateX(0); }
}
.todo-item:hover { border-color: var(--border-2); box-shadow: var(--shadow); }
.todo-item.completed { opacity: 0.55; }
.todo-item.removing { animation: slideOut 0.28s var(--ease) forwards; }
@keyframes slideOut {
  to { opacity: 0; transform: translateX(14px); max-height: 0; padding: 0; margin: 0; overflow: hidden; }
}

.todo-check {
  width: 20px; height: 20px; border-radius: 6px;
  border: 2px solid var(--border-2); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 0.75rem; color: transparent;
  transition: all var(--dur) var(--ease);
}
.todo-check:hover { border-color: var(--accent); }
.todo-check.checked { background: var(--accent); border-color: var(--accent); color: #fff; }

.todo-text-wrap { flex: 1; min-width: 0; }
.todo-text { font-size: 0.93rem; color: var(--text-1); word-break: break-word; transition: all var(--dur) var(--ease); }
.todo-item.completed .todo-text { text-decoration: line-through; color: var(--text-3); }

.todo-cat {
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.07em;
  text-transform: uppercase; padding: 2px 9px;
  border-radius: 99px; flex-shrink: 0;
}
.cat-general  { background: var(--accent-lt); color: var(--accent); border: 1px solid #c5cff5; }
.cat-work     { background: var(--green-lt);  color: var(--green);  border: 1px solid #b2f2d0; }
.cat-personal { background: var(--pink-lt);   color: var(--pink);   border: 1px solid #fcc2d7; }
.cat-urgent   { background: var(--orange-lt); color: var(--orange); border: 1px solid #ffd8bc; }

.todo-delete {
  width: 30px; height: 30px; border-radius: 7px;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-3); font-size: 1rem; flex-shrink: 0;
  transition: all var(--dur) var(--ease);
}
.todo-delete:hover { background: #fff0f0; color: #fa5252; }

.todo-foot {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 18px; padding-top: 18px; border-top: 1px solid var(--border);
  font-size: 0.85rem; color: var(--text-3); flex-wrap: wrap; gap: 10px;
}
.clear-btn {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.83rem; color: var(--text-3); font-weight: 600;
  transition: color var(--dur) var(--ease);
}
.clear-btn:hover { color: #fa5252; }

/* ── 11. GALLERY ── */
.gallery-section { padding: 100px 0; background: var(--bg-2); border-top: 1px solid var(--border); }

.gallery-add-card {
  background: var(--bg); border: 1.5px solid var(--border);
  border-radius: var(--radius); padding: 24px 28px;
  margin-bottom: 24px; box-shadow: var(--shadow);
  display: flex; gap: 16px; align-items: flex-end; flex-wrap: wrap;
}
.gallery-add-fields {
  flex: 1; display: flex; gap: 12px; flex-wrap: wrap; min-width: 260px;
}
.ginp-wrap {
  flex: 1; min-width: 160px; position: relative;
}
.ginp-wrap i {
  position: absolute; left: 12px; top: 50%;
  transform: translateY(-50%); font-size: 1rem; color: var(--text-3);
  pointer-events: none;
}
.ginp-wrap input,
.ginp-wrap select {
  width: 100%;
  background: var(--bg-2); border: 1.5px solid var(--border);
  border-radius: var(--radius-sm); color: var(--text-1);
  font-size: 0.9rem; padding: 11px 12px 11px 36px; outline: none;
  transition: border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
.ginp-wrap input:focus,
.ginp-wrap select:focus {
  border-color: var(--accent); box-shadow: 0 0 0 3px rgba(59,91,219,0.1);
}
.ginp-select select { cursor: pointer; }

.gallery-add-btns { display: flex; gap: 10px; flex-shrink: 0; }

.gallery-filters {
  display: flex; gap: 8px; margin-bottom: 28px; flex-wrap: wrap;
}
.gf-btn {
  padding: 7px 18px; border-radius: 99px;
  font-size: 0.84rem; font-weight: 600; color: var(--text-2);
  background: var(--bg); border: 1.5px solid var(--border);
  cursor: pointer; transition: all var(--dur) var(--ease);
}
.gf-btn:hover { border-color: var(--accent); color: var(--accent); }
.gf-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); box-shadow: 0 4px 14px rgba(59,91,219,0.28); }

/* Gallery grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
.gallery-empty {
  grid-column: 1/-1;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 12px; padding: 60px;
  color: var(--text-3); font-size: 0.9rem;
  border: 1.5px dashed var(--border); border-radius: var(--radius);
}
.gallery-empty i { font-size: 2.5rem; }

.gallery-item {
  position: relative; border-radius: var(--radius);
  overflow: hidden; aspect-ratio: 4/3;
  border: 1.5px solid var(--border);
  background: var(--bg-3);
  cursor: pointer;
  animation: fadeIn 0.35s var(--ease);
  box-shadow: var(--shadow);
  transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.94); }
  to   { opacity: 1; transform: scale(1); }
}
.gallery-item:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-item:hover .gi-delete { opacity: 1; }

.gallery-item img {
  width: 100%; height: 100%; object-fit: cover;
  display: block; transition: transform 0.4s var(--ease);
}
.gallery-item:hover img { transform: scale(1.06); }

.gallery-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%);
  opacity: 0; transition: opacity var(--dur) var(--ease);
  display: flex; align-items: flex-end; padding: 14px;
}
.gi-caption {
  font-size: 0.82rem; font-weight: 600; color: #fff;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  max-width: 80%;
}
.gi-cat-badge {
  position: absolute; top: 10px; left: 10px;
  font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em;
  padding: 3px 9px; border-radius: 99px;
  background: rgba(255,255,255,0.9); color: var(--text-1);
}

.gi-delete {
  position: absolute; top: 10px; right: 10px;
  width: 30px; height: 30px; border-radius: 7px;
  background: rgba(255,255,255,0.92); color: #fa5252;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; opacity: 0;
  transition: all var(--dur) var(--ease);
  cursor: pointer;
}
.gi-delete:hover { background: #fa5252; color: #fff; }

.gallery-foot {
  margin-top: 20px; text-align: right;
  font-size: 0.84rem; color: var(--text-3); font-weight: 500;
}

/* ── 12. LIGHTBOX ── */
.lightbox {
  position: fixed; inset: 0; z-index: 2000;
  display: flex; align-items: center; justify-content: center;
}
.lightbox.hidden { display: none; }
.lb-backdrop {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.82);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  cursor: pointer;
}
.lb-content {
  position: relative; z-index: 1;
  display: flex; align-items: center; gap: 16px;
  max-width: 90vw; max-height: 90vh;
}
.lb-img-wrap {
  position: relative; max-width: 80vw; max-height: 80vh;
}
.lb-img-wrap img {
  max-width: 80vw; max-height: 75vh;
  border-radius: var(--radius);
  object-fit: contain;
  box-shadow: 0 24px 60px rgba(0,0,0,0.5);
  animation: lbIn 0.3s var(--ease);
}
@keyframes lbIn {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}
.lb-caption {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 12px 18px;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: #fff; font-size: 0.9rem; font-weight: 500;
  border-radius: 0 0 var(--radius) var(--radius);
  text-align: center;
}
.lb-close {
  position: absolute; top: -44px; right: 0;
  width: 38px; height: 38px; border-radius: 50%;
  background: rgba(255,255,255,0.15); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.3rem;
  transition: background var(--dur) var(--ease);
}
.lb-close:hover { background: rgba(255,255,255,0.3); }
.lb-prev, .lb-next {
  width: 42px; height: 42px; border-radius: 50%;
  background: rgba(255,255,255,0.15); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem; flex-shrink: 0;
  transition: background var(--dur) var(--ease);
}
.lb-prev:hover, .lb-next:hover { background: rgba(255,255,255,0.3); }

/* ── 13. FOOTER ── */
.footer {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  padding: 44px 5% 36px;
}

.footer-inner {
  max-width: 1120px; margin: 0 auto;
  display: flex; flex-direction: column;
  align-items: center; gap: 20px;
}

/* Brand */
.footer-brand {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; color: var(--text-1);
}

/* Nav links — centered row, like screenshot */
.footer-nav {
  display: flex; align-items: center;
  gap: 4px; flex-wrap: wrap; justify-content: center;
}
.footer-nav a {
  font-size: 0.9rem; font-weight: 500; color: var(--text-2);
  padding: 5px 14px; border-radius: 99px;
  transition: color var(--dur) var(--ease), background var(--dur) var(--ease);
}
.footer-nav a:hover { color: var(--accent); background: var(--accent-lt); }

/* Social icons row — like screenshot 1: X Facebook Instagram Pinterest + more */
.footer-socials {
  display: flex; align-items: center; gap: 12px;
  flex-wrap: wrap; justify-content: center;
}
.social-icon {
  width: 44px; height: 44px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  color: var(--text-1); background: var(--bg);
  transition: all var(--dur) var(--ease);
  text-decoration: none;
}
.social-icon svg { transition: transform var(--dur) var(--ease); }
.social-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  border-color: transparent;
}
.social-icon:hover svg { transform: scale(1.08); }
/* Per-platform brand colours on hover */
.social-icon[aria-label="X (Twitter)"]:hover  { background: #000;    color: #fff; }
.social-icon[aria-label="Facebook"]:hover     { background: #1877f2; color: #fff; }
.social-icon[aria-label="Instagram"]:hover    { background: radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%); color: #fff; }
.social-icon[aria-label="Pinterest"]:hover    { background: #e60023; color: #fff; }
.social-icon[aria-label="LinkedIn"]:hover     { background: #0a66c2; color: #fff; }
.social-icon[aria-label="GitHub"]:hover       { background: #24292e; color: #fff; }

/* Copyright — subtle line + small text */
.footer-copy {
  font-size: 0.8rem; color: var(--text-3); font-weight: 400;
  padding-top: 16px; border-top: 1px solid var(--border);
  width: 100%; text-align: center;
}

/* ── 14. MEDIA QUERIES — Full responsive for all devices ── */

/* ===== TABLET LANDSCAPE & SMALL DESKTOP (max 1024px) ===== */
@media (max-width: 1024px) {
  .container { padding: 0 5%; }
  .hero-inner { gap: 40px; }
  .hero-visual { max-width: 360px; }
  .contact-wrapper { gap: 40px; }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

/* ===== TABLET PORTRAIT — iPad, Android tablet (max 900px) ===== */
@media (max-width: 900px) {
  /* Hero */
  .hero {
    padding: calc(var(--nav-h) + 48px) 5% 80px;
    min-height: 100svh;
  }
  .hero-inner {
    flex-direction: column;
    text-align: center;
    gap: 48px;
  }
  .hero-content { max-width: 100%; }
  .hero-desc {
    margin-left: auto;
    margin-right: auto;
    max-width: 480px;
  }
  .hero-stats { justify-content: center; }
  .hero-cta   { justify-content: center; }
  .hero-visual {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .hero-avatar-wrap { width: 300px; height: 300px; }

  /* Sections */
  .features-section,
  .contact-section,
  .todo-section,
  .gallery-section { padding: 80px 0; }
  .section-head { margin-bottom: 36px; }

  /* Contact */
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .contact-desc { max-width: 100%; }
  .contact-left { text-align: left; }

  /* Gallery add card */
  .gallery-add-card { flex-direction: column; }
  .gallery-add-fields { min-width: unset; width: 100%; }
  .gallery-add-btns { width: 100%; }
  .gallery-add-btns .btn { flex: 1; justify-content: center; }

  /* Gallery grid: 3 columns on tablet */
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ===== HAMBURGER TRIGGER (max 768px) ===== */
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: var(--nav-h);
    left: 0; right: 0;
    background: var(--bg-2);
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    padding: 12px 16px 20px;
    gap: 4px;
    transform: translateY(-110%);
    opacity: 0;
    transition: transform 0.3s var(--ease), opacity 0.3s var(--ease);
    pointer-events: none;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    z-index: 999;
  }
  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .nav-link {
    padding: 10px 16px;
    font-size: 0.95rem;
    border-radius: var(--radius-sm);
  }
  .hamburger { display: flex; }
}

/* ===== MOBILE LARGE — Android phones, iPhone Plus (max 640px) ===== */
@media (max-width: 640px) {
  /* Global */
  .container { padding: 0 18px; }

  /* Sections */
  .features-section,
  .contact-section,
  .todo-section,
  .gallery-section { padding: 64px 0; }
  .section-head { margin-bottom: 28px; }
  .section-title { font-size: clamp(1.7rem, 7vw, 2.2rem); }

  /* Hero */
  .hero {
    padding: calc(var(--nav-h) + 32px) 18px 72px;
    min-height: 100svh;
  }
  .hero-inner { gap: 36px; }
  .hero-chip { font-size: 0.72rem; }
  .hero-title { font-size: clamp(2.2rem, 9vw, 3rem); }
  .hero-desc { font-size: 0.93rem; max-width: 100%; }
  .hero-stats { gap: 16px; }
  .stat-num { font-size: 1.4rem; }
  .hero-cta { flex-direction: column; width: 100%; }
  .hero-cta .btn { width: 100%; justify-content: center; }
  .hero-avatar-wrap { width: 260px; height: 260px; }
  .hero-avatar { width: 120px; height: 120px; font-size: 3rem; }

  /* Features */
  .features-grid { grid-template-columns: 1fr; gap: 14px; }
  .feature-card { padding: 24px 20px; }

  /* Contact */
  .contact-right { padding: 22px 18px; }
  .form-row-2 { grid-template-columns: 1fr; gap: 0; }
  .contact-list { gap: 12px; }

  /* To-Do */
  .todo-card { padding: 20px 16px; }
  .todo-add-row {
    flex-direction: column;
    gap: 10px;
  }
  .todo-inp-box {
    min-width: unset;
    width: 100%;
  }
  .todo-inp-box select { font-size: 0.78rem; }
  .todo-add-row .btn { width: 100%; justify-content: center; }
  .todo-filters { gap: 6px; }
  .filter-btn { padding: 6px 12px; font-size: 0.8rem; }
  .todo-item { padding: 11px 12px; gap: 10px; }
  .todo-text { font-size: 0.88rem; }
  .todo-foot { font-size: 0.8rem; }

  /* Gallery */
  .gallery-add-card { padding: 18px 16px; gap: 12px; }
  .gallery-add-fields { gap: 10px; }
  .ginp-wrap { min-width: 100%; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .gallery-filters { gap: 6px; margin-bottom: 20px; }
  .gf-btn { padding: 6px 12px; font-size: 0.8rem; }

  /* Lightbox */
  .lb-content { gap: 8px; max-width: 96vw; }
  .lb-img-wrap img { max-width: 86vw; max-height: 70vh; }
  .lb-prev, .lb-next { width: 36px; height: 36px; font-size: 1.3rem; }
  .lb-close { top: -40px; width: 34px; height: 34px; font-size: 1.1rem; }

  /* Footer */
  .footer { padding: 36px 18px 28px; }
  .footer-inner { gap: 16px; }
  .footer-nav { gap: 2px; flex-wrap: wrap; justify-content: center; }
  .footer-nav a { font-size: 0.84rem; padding: 4px 10px; }
  .footer-socials { gap: 8px; flex-wrap: wrap; justify-content: center; }
  .social-icon { width: 40px; height: 40px; }
}

/* ===== SMALL MOBILE — iPhone SE, small Android (max 390px) ===== */
@media (max-width: 390px) {
  .container { padding: 0 14px; }
  .hero-title { font-size: clamp(2rem, 10vw, 2.6rem); }
  .hero-avatar-wrap { width: 220px; height: 220px; }
  .hero-avatar { width: 100px; height: 100px; font-size: 2.5rem; }
  .floating-card { font-size: 0.72rem; padding: 7px 10px; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
  .todo-card { padding: 16px 12px; }
  .contact-right { padding: 18px 14px; }
  .footer { padding: 28px 14px 22px; }
  .social-icon { width: 36px; height: 36px; }
  .social-icon svg { width: 17px; height: 17px; }
}

/* ===== iOS Safari — fix 100vh bounce & tap highlight ===== */
@supports (-webkit-touch-callout: none) {
  .hero { min-height: 100svh; }
  .nav-links { -webkit-overflow-scrolling: touch; }
  input, textarea, select { font-size: 16px; } /* prevent iOS zoom on focus */
}

/* ===== Prevent text overflow on all screen sizes ===== */
h1, h2, h3, p, span, a {
  overflow-wrap: break-word;
  word-break: break-word;
}
img { max-width: 100%; height: auto; }
