# Changelog

Record meaningful project changes in reverse chronological order. Keep
entries factual and concise.

## Unreleased

-   Awaiting client verification of contact and address details.
-   Awaiting approved brand logo and photography assets.

### 2026-10-02 --- Phase 2: Design foundation

-   Added: Typography system mapping Playfair Display to `--font-serif`/`--font-display` and DM Sans to `--font-sans`.
-   Added: Reusable, accessible `Button` component supporting 4 variants (`primary`, `secondary`, `outline`, `ghost`), 3 sizes, icon support, and polymorphic anchor/button rendering.
-   Added: Layout primitives (`Container` with responsive max-widths, `Section` with vertical rhythm and background options, `SectionHeading` with eyebrow, title, and subtitle).
-   Added: Responsive `Navbar` with brand text treatment, desktop links, and accessible mobile drawer with keyboard (Escape key) close and focus management.
-   Added: Simple preview `Footer` component with copyright and draft status notice.
-   Added: Temporary design foundation preview in `App.tsx` displaying typography specimens, button gallery, color palette cards, and primitive layout demonstration.
-   Tested: Production build (`tsc -b && vite build`) passed with zero errors in 648ms.
-   Tested: Headless browser inspection across 6 viewport widths (320px, 375px, 768px, 1024px, 1280px, 1440px) confirmed zero horizontal overflow and verified full mobile menu open/close interaction.

### 2026-10-02 --- Phase 1: Project initialisation

-   Added: Vite, React 19, TypeScript, Tailwind CSS v4 (@tailwindcss/vite), Lucide React.
-   Added: Project configuration (`package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `.gitignore`).
-   Added: Source tree (`src/components/*`, `src/data/*`, `src/hooks`, `src/styles`, `src/types`, `src/utils`).
-   Added: Centralized data stores with TypeScript interfaces in `src/data/business.ts` and `src/data/menu.ts`.
-   Added: Tailwind CSS v4 CSS-first theme configuration with design tokens (`espresso`, `coffee`, `oat`, `sage`, `cream`) and typography tokens.
-   Tested: TypeScript build (`tsc -b && vite build`) passed with zero errors; Vite dev server verified.
-   Notes / decisions: Used stable TypeScript 5.7.3 to avoid platform binary download issues. All documentation files and asset directory structures strictly preserved. Git repository initialized.

## Entry template

### YYYY-MM-DD --- Short description

-   Added:
-   Changed:
-   Fixed:
-   Tested:
-   Notes / decisions:
