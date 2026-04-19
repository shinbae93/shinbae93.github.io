# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (Vite)
pnpm build        # Type-check (tsc) + production bundle
pnpm lint         # ESLint
pnpm preview      # Preview production build locally
pnpm deploy       # Deploy dist/ to GitHub Pages via gh-pages
```

No test framework is configured.

## Stack

- **React 18 + TypeScript** via Vite with SWC
- **Tailwind CSS** — dark mode via class strategy (`dark` on document root)
- **pnpm** as package manager

## Architecture

Single-page personal site. Currently one visible section (Hero).

```
src/
├── main.tsx          # Entry: wraps App with ThemeProvider
├── App.tsx           # Renders Hero section full-viewport
├── sections/Hero/    # Main content: avatar, bio, social links, CV download
├── components/       # Reusable UI (ThemeToggle)
├── context/theme/    # ThemeContext + ThemeProvider — persists to localStorage
├── hooks/useTheme.ts # Accessor hook for ThemeContext
└── constants/        # theme.constants.ts
```

Theme state lives in `ThemeContext`, persisted to localStorage. Dark mode toggles the `dark` class on `document.documentElement`, following Tailwind's class strategy.

Path alias `@` resolves to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).

## Code Style

- Prettier: single quotes, trailing commas, no semicolons, 120-char line width
- ESLint enforces: no unused vars/imports, sorted imports
- Strict TypeScript — unused variables will fail the build
