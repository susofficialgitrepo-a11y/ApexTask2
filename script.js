/* ============================================================
   script.js — DevSpace · Internship Task #2
   Features:
     1. Navbar scroll + mobile hamburger
     2. Active nav link (Intersection Observer)
     3. Feature cards fade-in on scroll
     4. Contact Form Validation
     5. To-Do List (add / toggle / delete / filter / clear)
     6. Image Gallery (add via URL or upload / filter / delete)
     7. Lightbox (prev / next / keyboard / close)
   ============================================================ */

/* ── SHORTHAND HELPERS ── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ════════════════════════════════════════════════════════
   1. NAVBAR — scroll shadow + hamburger
   ════════════════════════════════════════════════════════ */
const navbar    = $('#navbar');
const hamburger = $('#hamburger');
const navLinks  = $('#navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

$$('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ── Active nav on scroll ── */
const sections = $$('section[id]');
const navItems = $$('.nav-link');

new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navItems.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' }).observe && sections.forEach(s =>
  new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navItems.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' }).observe(s)
);

/* ════════════════════════════════════════════════════════
   2. FEATURE CARDS — fade-in on scroll
   ════════════════════════════════════════════════════════ */
const cards = $$('[data-aos]');
cards.forEach(c => Object.assign(c.style, { opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.55s ease, transform 0.55s ease' }));

const cardObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => Object.assign(entry.target.style, { opacity: '1', transform: 'translateY(0)' }), i * 80);
      cardObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
cards.forEach(c => cardObs.observe(c));



/* ── ✏️  FILL THESE IN ── */
const EMAILJS_PUBLIC_KEY  = 'AqRVdFeyjIBNFzBkc';    // e.g. 'abc123XYZ'
const EMAILJS_SERVICE_ID  = 'service_29wsvyr';    // e.g. 'service_xxxxx'
const EMAILJS_TEMPLATE_ID = 'template_8leyfrh';   // e.g. 'template_xxxxx'
const YOUR_EMAIL          = 'subhamofficial524@gmail.com'; // shown in contact info + mailto link

/* ── Auto-fill the visible email on page ── */
document.querySelectorAll('.cr-email-link').forEach(el => {
  el.textContent = YOUR_EMAIL;
  el.href = `mailto:${YOUR_EMAIL}`;
});

/* ── Init EmailJS ── */
if (typeof emailjs !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const form       = $('#contactForm');
const submitBtn  = $('#submitBtn');
const successMsg = $('#successMsg');
const resetBtn   = $('#resetFormBtn');

const RULES = {
  firstName : { min: 2,  label: 'First name' },
  lastName  : { min: 2,  label: 'Last name'  },
  email     : { email: true, label: 'Email'  },
  subject   : { min: 3,  label: 'Subject'    },
  message   : { min: 10, label: 'Message'    },
};

function validateField(id) {
  const field = $(`#${id}`);
  const errEl = $(`#${id}Err`);
  const rule  = RULES[id];
  if (!field || !errEl) return true;
  const val = field.value.trim();
  let msg = '';

  if (!val) {
    msg = `${rule.label} is required.`;
  } else if (rule.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    msg = 'Enter a valid email address.';
  } else if (rule.min && val.length < rule.min) {
    msg = `${rule.label} must be at least ${rule.min} characters.`;
  }

  errEl.textContent = msg ? `⚠ ${msg}` : '';
  field.classList.toggle('valid',   !msg);
  field.classList.toggle('invalid', !!msg);
  return !msg;
}

Object.keys(RULES).forEach(id => {
  const el = $(`#${id}`);
  if (!el) return;
  el.addEventListener('blur', () => validateField(id));
  el.addEventListener('input', () => { if (el.classList.contains('invalid')) validateField(id); });
});

/* ── Form submit → EmailJS send ── */
form && form.addEventListener('submit', async e => {
  e.preventDefault();
  const ok = Object.keys(RULES).map(validateField).every(Boolean);
  if (!ok) return;

  const btnText    = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  btnText.classList.add('hidden');
  btnLoading.classList.remove('hidden');
  submitBtn.disabled = true;

  /* Build the template params — matches your EmailJS template exactly */
  const templateParams = {
    name    : `${$('#firstName').value.trim()} ${$('#lastName').value.trim()}`, // {{name}}
    email   : $('#email').value.trim(),    // {{email}} → goes into Reply To
    title   : $('#subject').value.trim(),  // {{title}} → goes into Subject line
    message : $('#message').value.trim(),  // {{message}} → body
  };

  try {
    if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      /* ── Real send via EmailJS ── */
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
    } else {
      /* ── Demo mode: simulate delay when keys aren't set yet ── */
      console.log('📧 EmailJS not configured yet. Form data:', templateParams);
      await new Promise(r => setTimeout(r, 1200));
    }
    /* Success */
    form.classList.add('hidden');
    successMsg.classList.remove('hidden');
  } catch (err) {
    console.error('EmailJS error:', err);
    btnText.classList.remove('hidden');
    btnLoading.classList.add('hidden');
    submitBtn.disabled = false;
    /* Show inline error on button */
    const errBanner = document.createElement('p');
    errBanner.style.cssText = 'color:#fa5252;font-size:.85rem;text-align:center;margin-top:10px;';
    errBanner.textContent = '⚠ Failed to send. Please try again or email me directly.';
    form.appendChild(errBanner);
    setTimeout(() => errBanner.remove(), 4000);
  }
});

/* ── Reset form ── */
resetBtn && resetBtn.addEventListener('click', () => {
  form.reset();
  form.classList.remove('hidden');
  successMsg.classList.add('hidden');
  submitBtn.querySelector('.btn-text').classList.remove('hidden');
  submitBtn.querySelector('.btn-loading').classList.add('hidden');
  submitBtn.disabled = false;
  Object.keys(RULES).forEach(id => {
    const el = $(`#${id}`);
    if (el) el.classList.remove('valid', 'invalid');
    const err = $(`#${id}Err`);
    if (err) err.textContent = '';
  });
});

/* ════════════════════════════════════════════════════════
   4. TO-DO LIST  ·  with localStorage persistence
   ════════════════════════════════════════════════════════ */
const todoInput    = $('#todoInput');
const todoCategory = $('#todoCategory');
const addTodoBtn   = $('#addTodoBtn');
const todoList     = $('#todoList');
const todoEmpty    = $('#todoEmpty');

/* ── localStorage keys ── */
const TODO_KEY = 'devspace_tasks';

/* ── Unique ID ── */
const uid = () => Math.random().toString(36).slice(2, 9);

/* ── HTML escape helper ── */
function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Load tasks from localStorage (or seed demo tasks on first visit) ── */
let tasks = [];
try {
  const saved = localStorage.getItem(TODO_KEY);
  if (saved) {
    tasks = JSON.parse(saved);
  } else {
    // First-time demo seeds
    tasks = [
      { id: uid(), text: 'Complete Internship Task #2', category: 'work',     done: false },
      { id: uid(), text: 'Review HTML & CSS notes',     category: 'personal', done: true  },
      { id: uid(), text: 'Push project to GitHub',      category: 'urgent',   done: false },
    ];
    localStorage.setItem(TODO_KEY, JSON.stringify(tasks));
  }
} catch(e) { tasks = []; }

/* ── Save tasks to localStorage ── */
function saveTasks() {
  try { localStorage.setItem(TODO_KEY, JSON.stringify(tasks)); } catch(e) {}
}

let activeFilter = 'all';

function renderTasks() {
  $$('.todo-item', todoList).forEach(el => el.remove());
  const filtered = tasks.filter(t =>
    activeFilter === 'all'       ? true :
    activeFilter === 'active'    ? !t.done : t.done
  );
  todoEmpty.style.display = filtered.length === 0 ? 'flex' : 'none';
  filtered.forEach(t => todoList.appendChild(buildTaskEl(t)));
  updateTaskStats();
}

function buildTaskEl(task) {
  const div = document.createElement('div');
  div.className = `todo-item${task.done ? ' completed' : ''}`;
  div.dataset.id = task.id;
  div.innerHTML = `
    <button class="todo-check${task.done ? ' checked' : ''}" aria-label="Toggle">
      ${task.done ? '<i class="ri-check-line"></i>' : ''}
    </button>
    <div class="todo-text-wrap"><span class="todo-text">${escapeHtml(task.text)}</span></div>
    <span class="todo-cat cat-${task.category}">${task.category}</span>
    <button class="todo-delete" aria-label="Delete"><i class="ri-delete-bin-6-line"></i></button>
  `;
  div.querySelector('.todo-check').addEventListener('click', () => toggleTask(task.id));
  div.querySelector('.todo-delete').addEventListener('click', () => deleteTask(task.id, div));
  return div;
}

function addTask() {
  const text = todoInput.value.trim();
  if (!text) {
    todoInput.focus();
    todoInput.style.outline = '2px solid #fa5252';
    setTimeout(() => (todoInput.style.outline = ''), 900);
    return;
  }
  tasks.unshift({ id: uid(), text, category: todoCategory.value, done: false });
  saveTasks();           // 💾 persist
  todoInput.value = '';
  renderTasks();
}

function toggleTask(id) {
  const t = tasks.find(t => t.id === id);
  if (t) { t.done = !t.done; saveTasks(); renderTasks(); }
}

function deleteTask(id, el) {
  el.classList.add('removing');
  el.addEventListener('animationend', () => {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();         // 💾 persist
    renderTasks();
  }, { once: true });
}

function updateTaskStats() {
  const total = tasks.length, done = tasks.filter(t => t.done).length, remaining = total - done;
  $('#countAll').textContent    = total;
  $('#countActive').textContent = remaining;
  $('#countDone').textContent   = done;
  $('#todoStats').textContent   = `${remaining} task${remaining !== 1 ? 's' : ''} remaining`;
}

addTodoBtn.addEventListener('click', addTask);
todoInput.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });

$$('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderTasks();
  });
});

$('#clearCompleted').addEventListener('click', () => {
  tasks = tasks.filter(t => !t.done);
  saveTasks();           // 💾 persist
  renderTasks();
});

renderTasks(); // initial render from localStorage

/* ════════════════════════════════════════════════════════
   5. IMAGE GALLERY  ·  with localStorage persistence
   ════════════════════════════════════════════════════════ */
const galleryGrid    = $('#galleryGrid');
const galleryEmpty   = $('#galleryEmpty');
const galleryStats   = $('#galleryStats');
const addImgBtn      = $('#addImgBtn');
const galleryUrl     = $('#galleryUrl');
const galleryCaption = $('#galleryCaption');
const imgCategory    = $('#imgCategory');
const fileUpload     = $('#fileUpload');

/* ── localStorage key ── */
const GALLERY_KEY = 'devspace_gallery';

/* ── Demo images (URLs only — no base64, saves space) ── */
const DEMO_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', caption: 'Mountain Sunrise', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600', caption: 'City Skyline',     category: 'city'   },
  { src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600', caption: 'Gradient Art',     category: 'art'    },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600', caption: 'Green Valley',     category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600', caption: 'Night Streets',    category: 'city'   },
  { src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600', caption: 'Abstract Shapes',  category: 'art'    },
];

/* ── Load images from localStorage (or seed demos on first visit) ── */
let images    = [];
let activeCat = 'all';

try {
  const saved = localStorage.getItem(GALLERY_KEY);
  if (saved) {
    images = JSON.parse(saved);
  } else {
    images = DEMO_IMAGES.map(d => ({ id: uid(), ...d }));
    localStorage.setItem(GALLERY_KEY, JSON.stringify(images));
  }
} catch(e) { images = DEMO_IMAGES.map(d => ({ id: uid(), ...d })); }

/* ── Save gallery to localStorage ── */
function saveGallery() {
  try {
    // Note: base64 uploaded images can be large.
    // If storage is full we silently continue (images still show this session).
    localStorage.setItem(GALLERY_KEY, JSON.stringify(images));
  } catch(e) {
    if (e.name === 'QuotaExceededError') {
      console.warn('⚠ Storage full — uploaded images won\'t persist across sessions. Use URL images for persistence.');
    }
  }
}

function renderGallery() {
  $$('.gallery-item', galleryGrid).forEach(el => el.remove());
  const filtered = images.filter(img => activeCat === 'all' || img.category === activeCat);
  galleryEmpty.style.display = filtered.length === 0 ? 'flex' : 'none';
  filtered.forEach(img => galleryGrid.appendChild(buildImgEl(img)));
  galleryStats.textContent = `${images.length} image${images.length !== 1 ? 's' : ''}`;
}

function buildImgEl(img) {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  item.dataset.id  = img.id;
  item.dataset.cat = img.category;
  item.innerHTML = `
    <img src="${img.src}" alt="${escapeHtml(img.caption || '')}" loading="lazy"
         onerror="this.closest('.gallery-item').style.display='none';" />
    <div class="gallery-overlay">
      <span class="gi-caption">${escapeHtml(img.caption || img.category)}</span>
    </div>
    <span class="gi-cat-badge">${img.category}</span>
    <button class="gi-delete" aria-label="Remove image" title="Remove">
      <i class="ri-delete-bin-6-line"></i>
    </button>
  `;
  item.querySelector('img').addEventListener('click', () => openLightbox(img.id));
  item.querySelector('.gi-delete').addEventListener('click', e => {
    e.stopPropagation();
    item.style.animation = 'fadeIn 0.3s reverse forwards';
    setTimeout(() => {
      images = images.filter(i => i.id !== img.id);
      saveGallery();     // 💾 persist
      renderGallery();
    }, 280);
  });
  return item;
}

function addImageFromUrl() {
  const src = galleryUrl.value.trim();
  if (!src) {
    galleryUrl.focus();
    galleryUrl.style.borderColor = '#fa5252';
    setTimeout(() => (galleryUrl.style.borderColor = ''), 900);
    return;
  }
  try { new URL(src); } catch {
    galleryUrl.style.borderColor = '#fa5252';
    galleryUrl.placeholder = 'Please enter a valid URL';
    setTimeout(() => { galleryUrl.style.borderColor = ''; galleryUrl.placeholder = 'Paste image URL…'; }, 1500);
    return;
  }
  const caption  = galleryCaption.value.trim();
  const category = imgCategory.value;
  images.unshift({ id: uid(), src, caption, category });
  saveGallery();         // 💾 persist
  galleryUrl.value = '';
  galleryCaption.value = '';
  renderGallery();
}

addImgBtn.addEventListener('click', addImageFromUrl);
galleryUrl.addEventListener('keydown', e => { if (e.key === 'Enter') addImageFromUrl(); });

fileUpload.addEventListener('change', () => {
  [...fileUpload.files].forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      images.unshift({
        id: uid(), src: e.target.result,
        caption: file.name.replace(/\.[^.]+$/, ''),
        category: imgCategory.value
      });
      saveGallery();     // 💾 persist (base64 stored in localStorage)
      renderGallery();
    };
    reader.readAsDataURL(file);
  });
  fileUpload.value = '';
});

$$('.gf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.gf-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCat = btn.dataset.cat;
    renderGallery();
  });
});

renderGallery(); // initial render from localStorage

/* ════════════════════════════════════════════════════════
   6. LIGHTBOX
   ════════════════════════════════════════════════════════ */
const lightbox  = $('#lightbox');
const lbBackdrop = $('#lbBackdrop');
const lbImg     = $('#lbImg');
const lbCaption = $('#lbCaption');
const lbClose   = $('#lbClose');
const lbPrev    = $('#lbPrev');
const lbNext    = $('#lbNext');

let lbIndex = 0;  // index into visible (filtered) images

function getVisibleImages() {
  return images.filter(img => activeCat === 'all' || img.category === activeCat);
}

function openLightbox(id) {
  const visible = getVisibleImages();
  lbIndex = visible.findIndex(img => img.id === id);
  if (lbIndex === -1) return;
  showLbImage(visible[lbIndex]);
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function showLbImage(img) {
  lbImg.src = img.src;
  lbImg.alt = img.caption || img.category;
  lbCaption.textContent = img.caption || img.category;
  lbCaption.style.display = img.caption ? 'block' : 'none';
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
  lbImg.src = '';
}

function prevImage() {
  const visible = getVisibleImages();
  lbIndex = (lbIndex - 1 + visible.length) % visible.length;
  showLbImage(visible[lbIndex]);
}

function nextImage() {
  const visible = getVisibleImages();
  lbIndex = (lbIndex + 1) % visible.length;
  showLbImage(visible[lbIndex]);
}

lbClose.addEventListener('click', closeLightbox);
lbBackdrop.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', prevImage);
lbNext.addEventListener('click', nextImage);

document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('hidden')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  prevImage();
  if (e.key === 'ArrowRight') nextImage();
});