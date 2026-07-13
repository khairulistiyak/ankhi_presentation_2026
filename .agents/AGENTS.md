# Project Rules for Akhi Presentation (React + Vite + Tailwind + Framer Motion)

## 1. Typography & Bengali Text Clipping
- **CRITICAL**: When using Tailwind's `bg-clip-text` with `text-transparent` for Bengali text, **always** add `py-2` (or `pb-2`) and use `leading-normal` or `leading-relaxed` instead of `leading-tight` or `leading-none`. 
- **Why**: Bengali glyphs have tall ascenders (e.g., ি, ী) and deep descenders (e.g., ু, ূ) that get clipped by browser bounding boxes when line-height is too tight or background clipping is applied.
- Do not use text drop-shadows or glow effects if the user explicitly requests them off.

## 2. Slide Architecture (Slide Registry Pattern)
- We use a component-based "Slide Registry" pattern. Each slide is an independent component located in `src/components/unique-slides/SlideX.jsx`.
- All slides are mapped in `src/data/slideRegistry.js`. When adding or re-ordering slides, strictly update the registry and ensure the IDs align correctly.

## 3. Design Aesthetics & Animation
- **Unique Designs**: Every single slide must have a uniquely different layout and animation. Do not recycle layouts.
- **Modern & Premium**: Use Glassmorphism, subtle gradients, and high-end UI patterns.
- **Framer Motion**: Always use Framer Motion for entering and exiting. Use `custom={direction}` and variations to ensure smooth swipe transitions based on the direction of navigation.

## 4. Assets Management
- All images are located in the `public/photo/` directory and should be referenced as `/photo/filename.jpg`.
- Handle spaces in filenames properly (e.g., use URL encoding like `/photo/Hafizul%20islam.jpg` if necessary).

## 5. Global UI & Interactivity
- **Swipe Navigation**: The application must support reliable mouse swipe and touch drag interactions to navigate between slides.
- **Theme Toggle**: A Dark/Light mode toggle icon should be present in the corner of the application to allow dynamic theme switching.

## 6. Fully Responsive UI
- **Device Support**: The entire application and all individual slides MUST be completely responsive across all devices (mobile, tablet, desktop).
- **Layouts**: Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) to ensure text, layouts, flex/grid containers, and spacing look elegant and are readable on any screen size.
