# Project Rules for Akhi Presentation (React + Vite + Tailwind + Framer Motion)

## 1. Typography & Bengali Text Clipping
- **CRITICAL**: When using Tailwind's `bg-clip-text` with `text-transparent` for Bengali text, **always** add `py-2` (or `pb-2`) and use `leading-normal` or `leading-relaxed` instead of `leading-tight` or `leading-none`. 
- **Why**: Bengali glyphs have tall ascenders (e.g., ি, ী) and deep descenders (e.g., ু, ূ) that get clipped by browser bounding boxes when line-height is too tight or background clipping is applied.
- Do not use text drop-shadows or glow effects if the user explicitly requests them off.
- **Number Counting**: When animating numeric counters, **always** apply a fixed `min-w-[...]` to the number wrapper and `whitespace-nowrap` to adjacent text to prevent container resizing and jumping (layout shift). Use `tabular-nums` where possible.

## 2. Slide Architecture (Slide Registry Pattern)
- We use a component-based "Slide Registry" pattern. Each slide is an independent component located in `src/components/unique-slides/SlideX.jsx`.
- All slides are mapped in `src/data/slideRegistry.js`. When adding or re-ordering slides, strictly update the registry and ensure the IDs align correctly.

## 3. Design Aesthetics & Animation (Ultra-Modern)
- **Glassmorphism & Premium Feel**: Slides should use deep, rich backgrounds (e.g., `bg-slate-100 dark:bg-[#0B1120]`) with abstract glowing background orbs (`blur-[100px] mix-blend-screen`). The main content should sit inside a huge glassmorphism container (`backdrop-blur-2xl bg-white/60 dark:bg-slate-900/60`).
- **Unique Designs**: Every single slide must have a uniquely different layout. Do not recycle basic layouts.
- **Framer Motion**: Always use Framer Motion for entering and exiting (`custom={direction}`).
- **Static Images**: **CRITICAL RULE:** Photos must be completely STATIC. Do not apply rotation, scale, or motion animations to the images themselves.
- **Content-Specific Animations**: While images are static, the UI elements around them (charts, floating data cards, feature pills) MUST have highly custom, meaningful animations (e.g., bars growing from 0 to 100%, numbers counting up dynamically).

## 4. Assets Management
- All images are located in the `public/photo/` directory and should be referenced as `/photo/filename.jpg` or via valid external URLs (e.g., Pollinations AI placeholders) until final assets are provided.
- Handle spaces in filenames properly (e.g., use URL encoding like `/photo/Hafizul%20islam.jpg` if necessary).

## 5. Global UI & Interactivity
- **Swipe Navigation**: The application must support reliable mouse swipe and touch drag interactions to navigate between slides.
- **Theme Toggle**: A Dark/Light mode toggle icon should be present in the corner of the application to allow dynamic theme switching.

## 6. Fully Responsive UI
- **Device Support**: The entire application and all individual slides MUST be completely responsive across all devices (mobile, tablet, desktop). Ensure all floating widgets and absolute positioned elements stay within screen bounds on small screens.
- **Layouts**: Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) to ensure text, layouts, flex/grid containers, and spacing look elegant and are readable on any screen size.
