# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page Vue 3 + Vite site that presents a 7-day family itinerary for Osaka / Kyoto / Nara (July 2026). Content is hand-curated in `src/data/*.js`; there is no backend, no tests, and no routing — everything renders from `App.vue` composing section components.

Deploy target is a subpath (`base: '/2026-osaka/'` in `vite.config.js`), so any new static asset references must respect the Vite `base`.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # Production build → dist/
npm run preview  # Preview the dist/ build locally
```

No linter, formatter, or test runner is configured. Do not invent `npm test` / `npm run lint` commands.

## Architecture

### Rendering model
- `src/main.js` mounts `App.vue`.
- `App.vue` is the single page: it imports section components and iterates `days` from `src/data/itinerary.js` through `<DayCard>`.
- All trip content (days, accommodation, tripInfo, infoBar) lives in `src/data/itinerary.js`. Recommendations / design-logic copy lives in `src/data/recommendations.js`. **To edit trip content, edit these data files — not the components.**
- Section components in `src/components/` are presentation-only; they import from `src/data/` directly rather than receiving props from `App.vue` (except `<InfoBar>` and `<DayCard>`).

### Scroll reveal
- `src/composables/use-scroll-reveal.js` sets up one `IntersectionObserver` on `.reveal` elements and toggles a `visible` class. Any new section/card that should fade-in on scroll must add the `reveal` class at its root.
- The observer runs once at `App.vue` mount; elements added dynamically after mount won't be observed.

### Styling system
- Tailwind CSS 3 with a project-specific theme extension in `tailwind.config.js`:
  - Fonts: `font-heading` (Fredoka) / `font-body` (Nunito) loaded via `index.html`.
  - Custom radii: `rounded-card-sm|md|lg|xl` (12/18/28/40 px).
  - Custom shadows: `shadow-card-sm|md|lg|orange`.
  - Easing: `ease-custom` (`cubic-bezier(.22,.61,.36,1)`).
  - Keyframes/animations: `fade-in-up`, `float`, `pulse-dot` (and staggered variants).
- Full palette, spacing, and component conventions are documented in `design-system.md` — **consult it before introducing new colors, radii, or card patterns**. Match existing card idioms (`rounded-card-lg border border-{sky|emerald}-200 bg-white shadow-card-sm`) rather than inventing new ones.
- Global CSS overrides live in `src/assets/main.css`.

### Icons
- Prefer `lucide-vue-next` when a matching icon exists.
- Existing components often inline SVG directly (small, decorative, colored via `text-white` on a colored pill). Follow whichever style the surrounding component uses.

## Content / Docs

`docs/` contains the human-authored trip planning notes (per-day Markdown files, restaurant lists, color-theme alternatives). These are reference material for the site content, not component documentation — updating docs does not automatically update the site (and vice versa). When trip details change, update both `docs/` and the relevant entry in `src/data/itinerary.js`.

## Conventions

- Naming follows Vue style guide: components are `PascalCase.vue`; non-component JS files and directories are `kebab-case`.
- Components that wrap the whole site (nav/hero/footer) use the `The*` prefix (`TheNav`, `TheHero`, `TheFooter`); section components are named by content (`AccommodationSection`, `BudgetSection`, etc.).
- Commit messages in this repo use a leading emoji + conventional-commit type (e.g. `✨ feat:`, `📝 docs:`, `🔀 refactor:`, `🐛 docs:`). Keep that style when creating commits.
