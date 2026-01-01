# High-Performance Web Architecture

A high-end, performant web application built with **Next.js 15** and **React 19**, serving as a technical demonstration of modern frontend engineering, modular design systems, and advanced CSS orchestration.

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router Architecture)
- **Runtime:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** Modular Vanilla CSS (Modern CSS Variables, Design System approach)
- **Tooling:** [Biome](https://biomejs.dev/) (Linting, Formatting, and Import Organization)
- **Deployment:** Optimized for Vercel/Edge Runtimes

## 🏗 Engineering Highlights

### 1. Advanced CSS Architecture
The application implements a custom design system without the overhead of heavy utility frameworks.
- **Rhythmic Spacing:** A scale-based spacing system using CSS variables for consistent padding and margins.
- **Glassmorphism:** Deep integration of `backdrop-filter` and alpha-channel layering for a cinematic "Studio Depth" UI.
- **Cinematic Motion:** Hardware-accelerated CSS animations including Ken Burns effects and 3D floating transforms.

### 2. Modular Component Design
- **Atomic Icons:** A proprietary SVG icon system built as scalable React components, ensuring minimal bundle size compared to third-party libraries.
- **Server/Client Boundary Optimization:** Strategic use of Server Components for SEO-critical data and Client Components for interactive portals and animations.
- **Polymorphic Components:** Generic components like `CommonCard` and `CommonDetail` handle diverse data types through flexible prop interfaces.

### 3. Performance & DX
- **Zero-Dependency Styling:** Leverages native browser capabilities for layout (Grid/Flexbox) and styling, resulting in exceptional Lighthouse scores.
- **Biome Integration:** replaces Prettier/ESLint with a single, Rust-based tool for sub-millisecond linting and formatting.
- **Type Safety:** Comprehensive interfaces in `types.ts` ensure data integrity across the content-driven sections.

## 🚀 Getting Started

### Prerequisites
- Node.js >= 20.x
- pnpm >= 9.x

### Installation
```bash
# Install dependencies
pnpm install
```

### Development
```bash
# Run the development server
pnpm dev
```

### Production Build
```bash
# Create an optimized production build
pnpm build

# Start the production server
pnpm start
```

## 📂 Project Structure

- `/app`: Next.js 15 App Router (Server-side rendering, dynamic routing)
- `/components`: Modular, reusable UI components
- `/styles`: Layered CSS architecture (Core variables, reset, layout, and component-specific modules)
- `constants.ts`: Centralized data management for scalable content updates
- `types.ts`: Application-wide TypeScript definitions
