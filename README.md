# Medicare — Medical Care Landing Page

A pixel-perfect, fully responsive landing page for a medical care platform, built with React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **React 18** (Functional Components + Hooks)
- **TypeScript**
- **Tailwind CSS v4**
- **Vite** (build tool)

## 📁 Project Structure
```
src/
├── assets/            # Image assets (logo)
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── TrustedCompanies/
│   ├── Benefits/
│   ├── Consultants/
│   ├── CTA/
│   ├── Footer/
│   └── ui/             # Shared reusable components (Button)
├── constants/          # Static data (nav links, consultants, companies, footer links, etc.)
├── types/               # Shared TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```
## 🛠️ Setup Instructions

1. Clone the repository:

git clone https://github.com/royhamlinjr/medcare-landing.git
cd medcare-landing

2. Install dependencies:

npm install

3. Run the development server:

npm run dev

The app will be available at `http://localhost:5173`.

4. Build for production:

npm run build

5. Preview the production build locally:

npm run preview

## ✨ Features

- Fully responsive design (mobile, tablet, desktop)
- Reusable, typed component architecture
- Smooth scroll navigation via anchor links
- Custom SVG line chart (Appointment Overview) and mini bar chart (Health Score) — no charting library
- Hover and micro-interaction effects throughout (card lifts, button transitions, icon buttons)
- Semantic HTML for accessibility (header, nav, section, article, footer)
- Lazy-loaded and async-decoded images (except above-the-fold hero image)
- Respects prefers-reduced-motion for accessibility
- SEO meta tags and Open Graph tags
- Soft, consistent shadow system via custom Tailwind theme tokens

## 🖼️ Image Assets

The navbar/footer logo (medicare-logo.jpg) is a real local asset. Other images (doctor photos, avatars, map preview) currently use external placeholders (Unsplash, Pravatar) for demonstration.

## 📝 Implementation Approach

The page was built incrementally, section by section, matching each part of the provided design reference:

1. Set up project tooling (Vite, TypeScript, Tailwind CSS v4)
2. Established a shared design token system (colors, fonts, shadows) via Tailwind's @theme
3. Built a reusable Button component used consistently across all sections
4. Built each landing page section as an isolated, self-contained component
5. Centralized all static content (nav links, consultant data, company logos, footer links, features list) into typed constants files, keeping components focused purely on markup/layout
6. Performed a dedicated responsiveness pass across 4 breakpoints (375px, 768px, 1024px, 1440px)
7. Applied accessibility and performance improvements (semantic tags, lazy loading, reduced motion support, meta tags, image sizing)
8. Ran a detailed visual audit against the design reference and corrected gaps: rebuilt the dashboard widget with a real line chart + health score card, redesigned the CTA banner's decorative graphic and sizing, added the consultant card options icon, corrected feature list copy, and refined shadows/spacing sitewide
9. Rebranded from placeholder "Medcare" naming to final "Medicare" branding with logo integration

## 🔗 Live Demo

https://medcare-landing-ten.vercel.app/

## 👤 Author

Roy Hamlin A
