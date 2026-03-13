# 🚀 DevSpace — Personal Portfolio Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6B35?style=for-the-badge&logo=gmail&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> A fully responsive personal portfolio website built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, just clean code.

---

## 🌐 Live Demo

🔗 **[View Live Site →](https://yourusername.github.io/devspace)**

> Replace the link above with your actual GitHub Pages or Netlify URL after deploying.

---

## 📸 Preview

| Hero Section | Contact Form | To-Do List | Image Gallery |
|:---:|:---:|:---:|:---:|
| Floating skill cards + animated blobs | EmailJS-powered real email delivery | localStorage persistence | Lightbox viewer + file upload |

---

## ✨ Features

### 🎨 Design
- Clean **light theme** with warm cream palette
- Fully **responsive** on mobile, tablet, and desktop
- Smooth **CSS animations** and hover micro-interactions
- Custom **🚀 emoji favicon**
- Playfair Display + Plus Jakarta Sans typography

### 📄 Sections
| Section | Description |
|---|---|
| **Navbar** | Fixed with scroll shadow, active link highlight, mobile hamburger menu |
| **Hero** | Animated floating skill cards (HTML, CSS, JS, Responsive) with availability badge |
| **Features Grid** | CSS Grid layout showcasing 4 internship skills |
| **Contact Form** | Full JS validation + EmailJS — messages land in your inbox |
| **To-Do List** | Add, complete, filter, delete tasks with category tags |
| **Image Gallery** | Add via URL or file upload, filter by category, lightbox preview |
| **Footer** | Centered nav links + 6 social media icons with brand colours |

### ⚙️ Technical
- **Flexbox** navigation and hero layout
- **CSS Grid** for features and gallery sections
- **Media queries** for full responsiveness (mobile-first approach)
- **JavaScript DOM manipulation** for To-Do List and Image Gallery
- **localStorage** persistence — To-Do tasks and gallery images survive page refresh and browser close
- **Form validation** — required fields, email format check, live error messages
- **EmailJS** integration — contact form sends real emails, no backend needed
- **Intersection Observer API** — scroll-triggered animations on feature cards
- **Lightbox** with keyboard navigation (← → Esc)

---

## 🗂️ Project Structure

```
devspace/
│
├── index.html       # Main HTML — all sections and structure
├── style.css        # All styling — variables, layout, animations, responsive
├── script.js        # All JavaScript — navbar, validation, EmailJS, to-do, gallery
└── README.md        # This file
```

> **No dependencies to install. No build step. Just open `index.html` in a browser.**

---

## 🚀 Getting Started

### Option 1 — Open Locally
```bash
# 1. Clone the repository
git clone https://github.com/yourusername/devspace.git

# 2. Open in browser
cd devspace
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 — Live Server (VS Code)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

---

## 🔧 Configuration & Customisation

All key values are defined at the **top of `script.js`** for easy editing:

```js
// ── ✏️ FILL THESE IN (script.js, lines 1–5) ──
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const YOUR_EMAIL          = 'YOUR_EMAIL@gmail.com';
```

All design tokens (colours, fonts, spacing) are **CSS variables** at the top of `style.css`:

```css
:root {
  --accent:       #3b5bdb;   /* Primary blue — change for a different brand colour */
  --bg:           #f8f7f4;   /* Background */
  --font-display: 'Playfair Display', serif;
  --font-body:    'Plus Jakarta Sans', sans-serif;
  /* ... */
}
```

### Personalisation Checklist
- [ ] Replace `YOUR_EMAIL@gmail.com` in `index.html` (contact info) and `script.js`
- [ ] Fill in EmailJS keys in `script.js`
- [ ] Update social media links in the footer (search for `yourhandle` / `yourprofile`)
- [ ] Edit your name, stats, and description in the Hero section of `index.html`
- [ ] Update the `<title>` tag in `index.html`

---

## 📧 EmailJS Setup (3 minutes, free)

The contact form sends real emails using [EmailJS](https://www.emailjs.com) — no server required.

1. **Sign up** at [emailjs.com](https://www.emailjs.com) (free tier: 200 emails/month)
2. **Add Email Service** → connect your Gmail → copy **Service ID**
3. **Create Email Template** with these variables:

   ```
   Subject : Contact Us: {{title}}
   From    : {{name}}
   Reply-To: {{email}}
   Body    : {{message}}
   ```
   Copy **Template ID**

4. **Account → API Keys** → copy **Public Key**
5. Paste all three into `script.js`

---

## 💾 Data Persistence

| Feature | Storage | Persists? |
|---|---|---|
| To-Do tasks | `localStorage` | ✅ Yes — survives refresh & browser close |
| Gallery (URL images) | `localStorage` | ✅ Yes — URL strings are tiny |
| Gallery (uploaded files) | `localStorage` (base64) | ✅ Yes — up to ~5 MB browser limit |
| Contact form | EmailJS → your inbox | ✅ Yes — delivered to your email |

> Each visitor has their **own private data** in their own browser — this is intentional for a personal portfolio tool.

---

## 🌍 Deployment (Free)

### Netlify — Fastest (60 seconds)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the project folder onto the page
3. Done! Get a free URL like `devspace-yourname.netlify.app`

### GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Source: **Deploy from branch → main → / (root)**
4. Live at `https://yourusername.github.io/devspace`

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and markup |
| CSS3 | Flexbox, Grid, animations, media queries |
| Vanilla JavaScript | DOM manipulation, form validation, localStorage |
| [EmailJS](https://emailjs.com) | Contact form email delivery |
| [Remix Icons](https://remixicon.com) | Icon library |
| [Google Fonts](https://fonts.google.com) | Playfair Display + Plus Jakarta Sans |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 900px` | Full two-column hero, side-by-side contact form |
| `640px – 900px` | Stacked hero, single-column contact |
| `< 640px` | Mobile menu, single-column everything, stacked gallery controls |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋 Author

**Subham Jana**
- GitHub: https://github.com/susofficialgitrepo-a11y
- LinkedIn: https://linkedin.com/in/subham-jana-bb33902b6
- Email: subhamofficial524@gmail.com

---

<p align="center">Made with ❤️ and a lot of ☕ · Internship Task #2 · DevSpace 2025</p>
