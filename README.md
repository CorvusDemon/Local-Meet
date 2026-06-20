# 🌍 LocalMeet — Platforma Spotkań Lokalnych

> **Projekt zaliczeniowy**| Frontend Web Development  
> Autor: **Vladyslav Holoven**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

---

## 📖 O projekcie
**LocalMeet**is a multi-page web application inspired by platforms such as Meetup.com. It allows users to browse and create local events, join thematic groups and connect with people with similar interests.

The project focuses on **pure, semantic HTML**, **modern CSS**and **vanilla JavaScript**-without any frameworks, which shows solid frontend foundations.

---

## ✨ Functionalities

### 🎨 UI/UX
-**Rotating banner**with automatic and manual navigation (previous /next)
-**Responsive layout**that works on phones, tablets and desktops
-**Hamburger menu**for mobile devices with animated icon
-**High contrast mode**(accessibility) -activated by button, status persisted in `localStorage`
-**Image gallery**with hover effect and lightbox modal

### 📄 Pages
| File | Description |
|------|------|
| `index.html` | Home page with banner, Google map and YouTube video |
| `events.html` | Event gallery with filtering and lightbox |
| `groups.html` | Browsing thematic groups with a search engine |
| `create-events.html` | New event creation form |
| `contact.html` | Contact form with team details |
| `profile.html` | User profile page |

### ✅ Form validation
-Real-time validation (on `input`) for all fields
-Error messages with invalid data
-Regex for email, name/surname (with support for Polish characters)
-Dynamic online link box (appears only when the checkbox is selected)
-Minimum date for event form (cannot select past date)
-Shipping simulation with success message

### ♿ Accessibility
-Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
-`aria-label` attributes on interactive elements
-High contrast mode (yellow text on black background)
-Keyboard navigation

---

## 🗂 Project structure

```
local-meet/
├── index.html # Home page
├── events.html # List of events + gallery
├── groups.html # Thematic groups
├── create-events.html # Event creation form
├── kontakt.html # Contact + form
├── profile.html # User profile
│
├── css/
│ ├── style.css # Main styles (CSS custom properties, layout)
│ ├── responsive.css # Media queries (800px, 500px breakpoints)
│ └── contrast.css # High contrast mode (accessibility)
│
├── js/
│ ├── main.js # Burger menu, initialization, gallery /lightbox
│ ├── banner-rotator.js # Automatic and manual banner rotator
│ ├── form-validation.js # Contact form validation
│ └── event-form.js # Event creation form validation
│
└── images/
├── avatars/# User profile photos
    ├── banners/# Images for banner rotator (3 pcs.)
    ├── gallery/# Event photos for the gallery
    ├── groups/# Photos of thematic groups
    └── team/# Support team photos
```

---

## 🚀 Launch

The project requires no dependencies or build process.

1. **Clone repository:**
   ```bash
git clone https://github.com/TWOJA_NAZWA/local-meet.git
   cd local-meet
   ```

2. **Open in browser:**

   Option A -Direct:
   ```
   Open the index.html file in your browser
   ```

   Option B -via local server (recommended to avoid CORS issues):
   ```bash
   #Python3
   python -m http.server 8080

   # Node.js (npx)
   npx serve .
   ```
   Then open: `http://localhost:8080`

---

## 🛠 Technologies

| Technology | Application |
|-------------|--------------|
| **HTML5**| Semantic page structure |
| **CSS3**| Styling, CSS Custom Properties (`--variables`), Flexbox, CSS Grid, animations |
| **JavaScript (ES6+)**| Vanilla JS -DOM manipulation, event handling, `localStorage` |
| **Font Awesome 6**| Icons (CDN) |
| **Google Maps Embed**| Interactive map on the home page |
| **YouTube Embed**| Video tutorial on home page |

---

## 📱 Responsiveness

The project works on three breakpoints:
-**Desktop**(> 800px) -full layout with horizontal navigation
-**Tablet**(≤ 800px) -hamburger menu, customized grids
-**Mobile**(≤ 500px) -single-column layout, reduced fonts and spacing

---

## 🎨 Color palette

| Color | Hex | Application |
|-------|-----|--------------|
| Blue | `#4285F4` | Primary color, links, active elements |
| Green | `#34A853` | Secondary color, success buttons |
| Red | `#EA4335` | Accents, validation errors |
| Dark | `#333333` | Text color |
| Bright | `#f8f9fa` | Page background |

---

## 📝 What I learned

While implementing this project, I practiced:

-Building **multi-page websites**without frameworks
-**CSS Custom Properties**to maintain a consistent palette
-**Form validation**in pure JavaScript (regex, real-time feedback)
-**Accessibility**-high contrast mode, ARIA attributes
-**Responsive design**with a mobile-first media query approach
-Working with **localStorage**to persist user preferences
-Integration with external APIs (Google Maps Embed, YouTube Embed)

---

## 📄 License

Educational project -created for assessment purposes. You can browse it freely and get inspired by the code.

---

<p align="center">
  Created by<strong>Vladyslav Holoven</strong> · 2026
</p>
