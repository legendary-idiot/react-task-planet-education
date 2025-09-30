# Vitoria College Website

A modern, animated React site for Victoria College of Arts and Design (VCAD), built with Vite, Tailwind CSS v4, DaisyUI, and Framer Motion. The project features responsive sections, refined micro‑interactions, and smooth, spring‑based reveal animations.

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS 4 + DaisyUI
- Framer Motion (animations)
- ESLint 9 (React hooks/refresh rules)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## NPM Scripts

- `dev`: Run local dev server (Vite)
- `build`: Production build
- `preview`: Preview the production build
- `lint`: Run ESLint across the project

## Project Structure

```
public/
  assets/
    Nav_Logo.png
    Hero_Image.png
    Course_Image.png
    Course_Video_Thumbnail.png
    campuses and stories/testimonials images ...
src/
  components/
    Navbar.jsx
    HeroSection.jsx
    StudySection.jsx
    ApplyNow.jsx
    CampusesSection.jsx
    StudentTestimonials.jsx
    Stories.jsx
    Footer.jsx
  pages/
    Home.jsx
  utils/
    Menu.jsx
    TestimonialCard.jsx
    StoryRow.jsx (if present)
  App.jsx
  main.jsx
  index.css
```

## Features & Sections

- Navbar: Static header with logo and dropdown.
- HeroSection: Intro headline, copy, CTA, hero image.
- StudySection: Two‑column layout with image and headline underline bar.
- ApplyNow: Quote block, video thumbnail with overlay CTA panel.
- CampusesSection: Card row with campus cards and sticker labels.
- StudentTestimonials: Rotated card design with quotes and social icons.
- Stories: Two stacked story rows with headline.

## Animations (Framer Motion)

Framer Motion is applied with subtle, production‑grade settings:

- Global approach: in‑view reveals, staggered children, spring easing tuned to feel smooth, not bouncy.
- HeroSection: staggered fade/slide for heading, copy, CTA; hero image scale/fade reveal.
- StudySection: image fade/slide in; heading and paragraph reveal; CTA buttons scale on hover/tap.
- ApplyNow: quote marks and headline reveal; video scales/fades; CTA card lifts in; CTA button scales on hover/tap.
- CampusesSection: section reveal; campus cards fade/slide; (stickers can float; may be static if adjusted later).
- StudentTestimonials: heading reveal; cards fade/slide in with gentle spring; card hover handled by CSS transforms for smoothness.
- Stories: section and heading reveal; each story row fades/slides with slight scale pop for buttery entrance.

Animation tuning prioritizes:

- Lower spring stiffness, higher damping
- Slight initial offset (y and/or scale) for depth
- Modest stagger for a calm cascade

## Styling

- Tailwind CSS v4 with DaisyUI plugin
- Global styles in `src/index.css` (Inter font, base theme colors, custom breakpoints)
- Utility‑first classes ensure responsive, accessible layout

## Linting

Run ESLint:

```bash
npm run lint
```

Rules include React hooks and refresh plugins. Some files keep a safe `_MOTION` alias to satisfy the unused import rule when variants are tree‑shaken by JSX.

## Assets

All images are served from `public/assets`. Example imports use absolute paths like `/assets/Hero_Image.png`.

## Deployment

Any static host that supports Vite builds will work (e.g., Netlify, Vercel, GitHub Pages). Build with `npm run build` and upload the `dist/` directory.

## Notes

- Tailwind v4 uses the new `@tailwindcss/vite` plugin; no PostCSS config required.
- DaisyUI is used for buttons/menus and complements Tailwind utilities.
- Framer Motion drives reveals and interactions; easing and durations are tuned for a polished feel.

## License

MIT (or your preferred license).
