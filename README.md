# Sitter Journey

A personal blog built with **Next.js 15** and **React 19**. This project implements a design system using modular Vanilla CSS and content-driven architecture.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** CSS Modules / Vanilla CSS Variables
- **Tooling:** Biome (Linting & Formatting)

## Technical Architecture

### 1. CSS Design System
- **Variable-Driven:** Global design tokens for spacing, typography, and color palette defined in `:root`.
- **Layout:** Standardized Grid and Flexbox implementations for responsive consistency without utility overhead.
- **Glassmorphism:** Utilization of `backdrop-filter` and `rgba` layering for UI depth.
- **Hardware Acceleration:** Transitions and animations optimized for GPU processing.

### 2. Component Strategy
- **Server/Client Boundary:** Strategic use of Server Components for SEO and Client Components for interactive portals (Contact Form, Navigation).
- **Polymorphic Interfaces:** Reusable generic components (`CommonCard`, `CommonDetail`) driven by strict TypeScript interfaces.
- **Native SVGs:** Custom SVG icon system implemented as React components to minimize external dependencies.

### 3. Tooling & DX
- **Biome:** Unified toolchain for linting and formatting.
- **Strict Typing:** Centralized type definitions in `types.ts`.
- **Asset Optimization:** Next.js `Image` component used for AVIF/WebP delivery.

## Local Development

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm dev
```

### Build
```bash
pnpm build
pnpm start
```

## Directory Structure

- `/app`: Next.js App Router (Routing and Server Components)
- `/components`: UI logic and reusable patterns
- `/styles`: Modular CSS architecture
- `/data`: Content-driven data structures
- `/utils`: Helper functions and content transformers
- `constants.ts`: Global configuration and static strings
- `types.ts`: Application-wide TypeScript definitions
