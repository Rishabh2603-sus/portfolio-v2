# Rishabh Sharma — Portfolio v2

A premium, highly-crafted software engineering portfolio focusing on subtle interactions, hardware-accelerated physics, and minimalist Awwwards-tier design.

![Live on Render](https://img.shields.io/badge/Deployed-Render-46E3B7?style=for-the-badge&logo=render)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS v4](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## ✨ Features

- **Cinematic Pre-loader:** Elegant typography reveal with bespoke easing curves.
- **Hardware-Accelerated Physics:** Fluid 60fps scrolling using `@studio-freight/lenis`.
- **Interactive Magnetic Cursor:** Custom cursor with `mix-blend-difference` that tracks, expands, and snaps to interactable elements.
- **Zero-Dependency Soundscape:** Custom Web Audio API implementation (`useSoundDesign.ts`) that generates ambient synthesized drones (55Hz warm A1 note) and tactile UI clicks—all without a single `.mp3` download.
- **Terminal Easter Egg:** A hidden functional pseudo-terminal (click the Terminal icon in the nav). Type `help` for commands!
- **Infinite Ecosystem Marquee:** A buttery-smooth, auto-scrolling tech stack banner.
- **Mobile Optimized:** Edge-to-edge responsiveness, a full-screen blurred navigation drawer, and dynamic touch detection.

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Physics/Scroll:** @studio-freight/lenis
- **Icons:** Lucide React
- **Audio:** Native Browser Web Audio API
- **Deployment:** Render (Static Site hosting)

## 🏗️ Architecture & Philosophy

This portfolio was built by adhering to strict UI/UX design constraints:
- **No generic templates:** Custom layouts, specific typographic scaling, and strict padding constraints.
- **Minimalist aesthetics:** Relying purely on `#050505` and `#fafafa` with physical film grain overlays (`mix-blend-overlay`).
- **Performance first:** Avoiding heavy assets. Even the ambient sound and UI clicks are generated computationally via `AudioContext` oscillators.

## 📜 License
This project is open-source and available under the MIT License.

---
*Built by [Rishabh Sharma](https://github.com/Rishabh2603-sus).*
