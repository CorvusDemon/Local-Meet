# 🌍 LocalMeet — Local Events Platform

> **Course Project** | Frontend Web Development  
> Author: **Vladyslav Holoven**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

---

## 📖 About the Project

**LocalMeet** is a multi-page web application inspired by platforms like Meetup.com. It allows users to browse and create local events, join interest-based groups, and connect with people who share similar hobbies and passions.

The project focuses on **clean, semantic HTML**, **modern CSS**, and **vanilla JavaScript** — without any frameworks, demonstrating strong frontend fundamentals.

---

## ✨ Features

### 🎨 UI / UX
- **Rotating banner** with automatic and manual navigation (previous / next)
- **Responsive layout** for mobile, tablet, and desktop devices
- **Hamburger menu** for mobile devices with animated icon
- **High-contrast mode** (accessibility) — activated via button, state persisted in `localStorage`
- **Image gallery** with hover effects and lightbox modal

### 📄 Pages
| File | Description |
|------|-------------|
| `index.html` | Homepage with banner, Google Map, and YouTube video |
| `wydarzenia.html` | Events gallery with filtering and lightbox |
| `grupy.html` | Browse interest groups with search functionality |
| `tworzenie-wydarzenia.html` | Event creation form |
| `kontakt.html` | Contact form with team information |
| `profil.html` | User profile page |

### ✅ Form Validation
- Real-time validation (on `input`) for all fields
- Error messages for invalid input
- Regex validation for email and first/last name (including Polish characters)
- Dynamic online link field (appears only when checkbox is selected)
- Minimum date restriction for event form (cannot select past dates)
- Submission simulation with success message

### ♿ Accessibility
- Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- `aria-label` attributes for interactive elements
- High-contrast mode (yellow text on black background)
- Keyboard navigation support

---

## 🗂 Project Structure

```
local-meet/
├── index.html                  # Homepage
├── wydarzenia.html             # Events list + gallery
├── grupy.html                  # Interest groups
├── tworzenie-wydarzenia.html   # Event creation form
├── kontakt.html                # Contact + form
├── profil.html                 # User profile
│
├── css/
│   ├── style.css               # Main styles (CSS custom properties, layout)
│   ├── responsive.css          # Media queries (800px, 500px breakpoints)
│   └── contrast.css            # High-contrast mode (accessibility)
│
├── js/
│   ├── main.js                 # Burger menu, initialization, gallery / lightbox
│   ├── banner-rotator.js       # Automatic and manual banner rotator
│   ├── form-validation.js      # Contact form validation
│   └── event-form.js           # Event creation form validation
│
└── images/
    ├── avatars/                # User profile pictures
    ├── banners/                # Banner rotator images (3 files)
    ├── gallery/                # Event gallery images
    ├── groups/                 # Interest group images
    └── team/                   # Support team photos
```

---

## 🚀 Getting Started

This project does not require any dependencies or build process.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/local-meet.git
   cd local-meet
   ```

2. **Open in your browser:**

   Option A — directly:
   ```
   Open the index.html file in your browser
   ```

   Option B — using a local server (recommended to avoid CORS issues):
   ```bash
   # Python 3
   python -m http.server 8080

   # Node.js (npx)
   npx serve .
   ```
   Then open: `http://localhost:8080`

---

## 🛠 Technologies

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic page structure |
| **CSS3** | Styling, CSS Custom Properties (`--variables`), Flexbox, CSS Grid, animations |
| **JavaScript (ES6+)** | Vanilla JS — DOM manipulation, event handling, `localStorage` |
| **Font Awesome 6** | Icons (CDN) |
| **Google Maps Embed** | Interactive map on homepage |
| **YouTube Embed** | Instructional video on homepage |

---

## 📱 Responsiveness

The project supports three breakpoints:

- **Desktop** (> 800px) — full layout with horizontal navigation
- **Tablet** (≤ 800px) — hamburger menu, adjusted grid layouts
- **Mobile** (≤ 500px) — single-column layout, reduced font sizes and spacing

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Blue | `#4285F4` | Primary color, links, active elements |
| Green | `#34A853` | Secondary color, success buttons |
| Red | `#EA4335` | Accents, validation errors |
| Dark | `#333333` | Text color |
| Light | `#f8f9fa` | Page background |

---

## 📝 What I Learned

While developing this project, I practiced:

- Building **multi-page websites** without frameworks
- Using **CSS Custom Properties** for consistent design systems
- Implementing **form validation** in pure JavaScript (regex, real-time feedback)
- Improving **accessibility** — high-contrast mode, ARIA attributes
- Creating **responsive designs** with mobile-first media queries
- Working with **localStorage** to persist user preferences
- Integrating external APIs (Google Maps Embed, YouTube Embed)

---

## 📄 License

Educational project — created for academic purposes. You are free to explore and use the code for inspiration.

---

<p align="center">
  Created by <strong>Vladyslav Holoven</strong> · 2026
</p>
