# 📸 Vezor – Photographer Portfolio Website

A responsive, single-page portfolio website for a professional photographer, built with **pure HTML, CSS and a little vanilla JavaScript** – no frameworks, no libraries, no build step.

Made as part of my internship project to practise real-world layout building, CSS animations and responsive design.

🔗 **Live Demo:** (https://vezor.vercel.app)


## ✨ Features

- **Glassmorphism navbar** – fixed, rounded navigation bar with `backdrop-filter: blur`, hover effects and a prominent *Contact* button
- **Mobile menu** – hamburger icon opens a full-screen slide-down menu (JavaScript toggles `transform`), and it closes automatically when a link is tapped
- **Stacking work cards** – "My Work" cards use `position: sticky` so they stack over each other while scrolling
- **Scroll-driven animations** – cards scale in and the contact photo moves with a parallax effect using pure CSS (`animation-timeline: view()`), with **zero JavaScript**
- **Floating experience badge** – continuously animated badge in the About section using `@keyframes`
- **Full landing-page flow** – Hero → Stats → About → Works → Services → Pricing → Gallery → Testimonials → Newsletter → Contact → Footer
- **Pricing section** with three plan cards (Basic / Standard / Premium) and a highlighted middle card
- **Testimonials grid** with star ratings (Font Awesome icons) and profile photos
- **Smooth in-page navigation** using anchor links (`#about`, `#works`, `#service`, `#pricing`, `#gallery`, `#contact`)
- **Optimised images** – all photos are in `.webp` / `.avif` format (31 images, ~2.6 MB total)
- **Responsive layout** built with Flexbox and viewport-based units (`vw`, `vh`), with a dedicated mobile layout

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure (`header`, `nav`, `section`, `footer`) |
| **CSS3** | Flexbox, sticky positioning, keyframes, scroll-driven animations, media queries, backdrop-filter |
| **JavaScript (Vanilla)** | Mobile menu open / close |
| **Google Fonts** | Poppins |
| **Font Awesome 7** | Check marks and star icons |
| **Vercel** | Hosting & deployment |

---

## 📁 Project Structure

```
Vezor/
├── images/          # All website images (.webp, .avif, .png icons)
├── index.html       # Page structure and content
├── style.css        # All styling, animations and responsive rules
├── script.js        # Mobile menu logic
└── README.md
```

---

## 🚀 Getting Started

No installation needed.

```bash
# 1. Clone the repository
git clone https://github.com/umairrahim914/Vezor.git

# 2. Go into the folder
cd Vezor

# 3. Open index.html in your browser
```

You can also run it with the **Live Server** extension in VS Code.

---

## 🌐 Deployment

The site is deployed on **Vercel** as a static site:

1. Push the project to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Keep the defaults (no build command, no output directory) and click **Deploy**

Every push to `main` automatically redeploys the site.

---

## 📱 Browser Support

| Feature | Support |
|---|---|
| Layout, navbar, menu, pricing, gallery | All modern browsers |
| Scroll-driven animations (stacking cards scale, contact image parallax) | Chrome, Edge and other Chromium browsers (best experience). In browsers without support, these elements simply display without the animation |

---

## 📚 What I Learned

- Building a complete multi-section landing page from scratch with vanilla HTML & CSS
- Creating layouts with Flexbox and viewport units
- Using `position: sticky` to build a stacking-cards effect
- Writing modern scroll-driven animations in CSS without JavaScript
- Making a mobile navigation menu with a few lines of JavaScript
- Optimising images with modern formats
- Deploying a static site on Vercel through GitHub

---

## 🔮 Future Improvements

- [ ] Add more breakpoints for tablets (currently one mobile breakpoint at 600px)
- [ ] Working newsletter and contact forms
- [ ] Hourly / Project-based pricing toggle
- [ ] Image lightbox for the gallery
- [ ] Replace placeholder text with real content
- [ ] Accessibility improvements (descriptive alt texts, ARIA labels, keyboard focus styles)
- [ ] Add SEO meta tags and an Open Graph preview image

---

## 👨‍💻 Author

**Muhammad Umair**
- GitHub: [@umairrahim914](https://github.com/umairrahim914)
- LinkedIn: [(www.linkedin.com/in/muhammad-umair-shaukat-909168311)]

---

⭐ If you like this project, consider giving it a star!
