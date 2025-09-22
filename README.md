# Flex Template

A modern, visually rich React + Vite + Tailwind CSS template for SNS Future Tech.

## Features

- ⚡️ **Vite** for fast development and builds
- 🎨 **Tailwind CSS** for rapid, utility-first styling
- 🌀 **Framer Motion** for smooth animations
- 🌌 **Three.js** with @react-three/fiber/drei for interactive 3D backgrounds
- 💡 Modular components: Hero, Services, Projects, Solutions, Team, Testimonials
- 📱 Responsive and mobile-friendly
- 🔒 No authentication or backend—just static demo data

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash

npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
  components/    # All UI components (Hero, Services, Projects, etc.)
  App.tsx        # Main app entry
  main.tsx       # React root
  index.css      # Tailwind base styles
```

## Customization

- All data is hardcoded in the respective component files for easy demo and prototyping.
- To add or edit content, simply modify the arrays at the top of each component (e.g., `demoServices`, `demoProjects`).

## License

MIT

---

**Made with ❤️ using React, Tailwind CSS,