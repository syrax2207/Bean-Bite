import React from 'react';
import {
  Coffee,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Eye,
  ShieldAlert,
} from 'lucide-react';
import { Navbar, Footer, Container, Section } from './components/layout';
import { Button, SectionHeading } from './components/ui';
import { businessData } from './data/business';
import { menuItems } from './data/menu';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-espresso flex flex-col font-sans selection:bg-oat selection:text-espresso">
      {/* 1. Responsive Navigation Shell */}
      <Navbar />

      <main className="flex-1">
        {/* Intro / Foundation Banner */}
        <Section background="cream" className="pt-12 sm:pt-16 pb-12 border-b border-oat/60">
          <Container size="normal">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oat text-coffee text-xs font-semibold uppercase tracking-wider mb-4 border border-oat">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                Phase 2 &bull; Design Foundation Preview
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso leading-tight">
                Warm Minimalist Café Aesthetics &amp; Core UI Primitives
              </h1>
              <p className="font-sans text-base sm:text-lg text-espresso/80 mt-4 leading-relaxed max-w-2xl">
                This temporary design preview verifies the typography hierarchy, accessible button
                variants, responsive layout containers, and Tailwind v4 theme tokens before building
                the homepage sections in Phase 3.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mt-8">
                <Button variant="primary" size="md" href="#buttons" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  Test Button Variants
                </Button>
                <Button variant="outline" size="md" href="#typography">
                  Inspect Typography
                </Button>
                <Button variant="secondary" size="md" href="#palette">
                  View Colour Tokens
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* 2. Typography Specimen */}
        <Section id="typography" background="cream">
          <Container size="normal">
            <SectionHeading
              eyebrow="Typography Foundation"
              title="Editorial Serifs & Clean Sans-Serif UI"
              subtitle="Playfair Display creates artisanal warmth for headings, while DM Sans ensures comfortable readability across UI controls and body text."
            />

            <div className="space-y-8 bg-white/70 p-6 sm:p-10 rounded-2xl border border-oat shadow-xs">
              {/* Display Heading */}
              <div className="pb-6 border-b border-oat/60">
                <span className="text-xs font-mono uppercase tracking-wider text-coffee/70 block mb-1">
                  font-display / font-serif (Playfair Display) &bull; text-4xl
                </span>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-espresso leading-tight">
                  Fresh Bakes, Honest Beans, Warm Conversations.
                </p>
              </div>

              {/* Heading 2 */}
              <div className="pb-6 border-b border-oat/60">
                <span className="text-xs font-mono uppercase tracking-wider text-coffee/70 block mb-1">
                  Heading 2 (Playfair Display) &bull; text-2xl sm:text-3xl
                </span>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-espresso leading-snug">
                  Artisanal Sourdough &amp; Single-Origin Pour-Overs
                </p>
              </div>

              {/* Heading 3 */}
              <div className="pb-6 border-b border-oat/60">
                <span className="text-xs font-mono uppercase tracking-wider text-coffee/70 block mb-1">
                  Heading 3 (Playfair Display) &bull; text-xl sm:text-2xl
                </span>
                <p className="font-serif text-xl sm:text-2xl font-semibold text-espresso">
                  Handcrafted Espresso Drinks &amp; Morning Pastries
                </p>
              </div>

              {/* Body Text & Paragraph Measure */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-coffee/70 block mb-1">
                  font-sans (DM Sans) &bull; text-base / text-sm body copy
                </span>
                <p className="font-sans text-base text-espresso/85 leading-relaxed max-w-prose">
                  Every morning starts before dawn with slow-fermented sourdough croissants,
                  fragrant cinnamon rolls, and carefully calibrated espresso extractions.
                  We believe great coffee is an invitation to slow down, savour the craft, and enjoy
                  genuine neighbourhood conversations.
                </p>
                <p className="font-sans text-sm text-espresso/70 leading-relaxed max-w-prose">
                  Secondary body text: 14px comfortable reading size with high contrast ratio
                  exceeding WCAG AAA accessibility standards on light cream backgrounds.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 3. Reusable Button Components */}
        <Section id="buttons" background="oat">
          <Container size="normal">
            <SectionHeading
              eyebrow="Interactive Elements"
              title="Accessible Button Components"
              subtitle="Typed buttons with consistent padding, rounded corners, visible focus rings, keyboard navigation, and zero unnecessary animation."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Variant Showcase */}
              <div className="bg-cream p-6 sm:p-8 rounded-2xl border border-oat shadow-xs space-y-6">
                <h3 className="font-serif text-lg font-bold text-espresso border-b border-oat/80 pb-3">
                  Button Style Variants
                </h3>

                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost / Text</Button>
                </div>

                <div className="pt-4 border-t border-oat/60 space-y-2 text-xs text-espresso/70">
                  <p>
                    <strong className="text-espresso">Primary:</strong> Coffee `#704832` with Cream text (7.2:1 contrast ratio).
                  </p>
                  <p>
                    <strong className="text-espresso">Secondary:</strong> Oat `#F3EBDD` with Espresso text (11.8:1 contrast ratio).
                  </p>
                  <p>
                    <strong className="text-espresso">Outline:</strong> Bordered Coffee with hover state inversion.
                  </p>
                  <p>
                    <strong className="text-espresso">Ghost:</strong> Clean borderless action for low-emphasis options.
                  </p>
                </div>
              </div>

              {/* Sizes & States */}
              <div className="bg-cream p-6 sm:p-8 rounded-2xl border border-oat shadow-xs space-y-6">
                <h3 className="font-serif text-lg font-bold text-espresso border-b border-oat/80 pb-3">
                  Sizes &amp; Icon Support
                </h3>

                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm" variant="outline" icon={<Coffee className="w-3.5 h-3.5" />}>
                    Small (36px)
                  </Button>
                  <Button size="md" variant="primary" icon={<Coffee className="w-4 h-4" />}>
                    Medium (44px)
                  </Button>
                  <Button size="lg" variant="secondary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                    Large (48px)
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button variant="primary" disabled>
                    Disabled State
                  </Button>
                  <Button variant="outline" disabled>
                    Disabled Outline
                  </Button>
                </div>

                <div className="pt-2">
                  <Button variant="secondary" fullWidth icon={<Eye className="w-4 h-4" />}>
                    Full-Width Responsive Button
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 4. Colour Tokens & Contrast Palette */}
        <Section id="palette" background="cream">
          <Container size="normal">
            <SectionHeading
              eyebrow="Design System"
              title="Harmonious Colour Tokens"
              subtitle="Documented colour tokens mapped directly through Tailwind v4 theme variables to preserve the warm neighbourhood café atmosphere."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Espresso */}
              <div className="bg-espresso text-cream p-5 rounded-2xl shadow-xs flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="font-serif text-base font-bold block">Espresso</span>
                  <span className="font-mono text-xs opacity-80">#39251E</span>
                </div>
                <span className="text-[11px] opacity-75 mt-3">
                  Main dark text &amp; rich backgrounds
                </span>
              </div>

              {/* Coffee */}
              <div className="bg-coffee text-cream p-5 rounded-2xl shadow-xs flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="font-serif text-base font-bold block">Coffee</span>
                  <span className="font-mono text-xs opacity-80">#704832</span>
                </div>
                <span className="text-[11px] opacity-75 mt-3">
                  Primary CTAs &amp; warm accents
                </span>
              </div>

              {/* Oat */}
              <div className="bg-oat text-espresso p-5 rounded-2xl border border-coffee/10 shadow-xs flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="font-serif text-base font-bold block">Oat Beige</span>
                  <span className="font-mono text-xs opacity-80">#F3EBDD</span>
                </div>
                <span className="text-[11px] text-espresso/70 mt-3">
                  Warm section panels &amp; card fills
                </span>
              </div>

              {/* Sage */}
              <div className="bg-sage text-cream p-5 rounded-2xl shadow-xs flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="font-serif text-base font-bold block">Muted Sage</span>
                  <span className="font-mono text-xs opacity-90">#87947A</span>
                </div>
                <span className="text-[11px] text-cream/90 mt-3">
                  Secondary accent &amp; highlights
                </span>
              </div>

              {/* Cream */}
              <div className="bg-cream text-espresso p-5 rounded-2xl border border-oat shadow-xs flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="font-serif text-base font-bold block">Cream</span>
                  <span className="font-mono text-xs opacity-80">#FFFDF8</span>
                </div>
                <span className="text-[11px] text-espresso/70 mt-3">
                  Main canvas light background
                </span>
              </div>
            </div>
          </Container>
        </Section>

        {/* 5. Central Data & Safeguard Status */}
        <Section background="oat">
          <Container size="normal">
            <div className="bg-cream p-6 sm:p-8 rounded-2xl border border-oat shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-oat flex items-center justify-center text-coffee">
                  <CheckCircle className="w-5 h-5 text-sage" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-espresso">
                    Central Data &amp; Verification Status
                  </h3>
                  <p className="font-sans text-xs text-espresso/70">
                    Sourced from <code className="text-coffee font-mono">src/data/business.ts</code> and <code className="text-coffee font-mono">src/data/menu.ts</code>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-oat/40 border border-oat/70">
                  <span className="text-xs uppercase font-semibold text-coffee tracking-wider block mb-1">
                    Menu Items Loaded
                  </span>
                  <p className="font-serif text-2xl font-bold text-espresso">
                    {menuItems.length} items
                  </p>
                  <p className="text-xs text-espresso/70 mt-1">
                    6 Drinks &bull; 5 Bites (No invented prices or claims)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-oat/40 border border-oat/70">
                  <span className="text-xs uppercase font-semibold text-coffee tracking-wider block mb-1">
                    Contact &amp; Location
                  </span>
                  <p className="font-sans text-sm font-medium text-espresso truncate">
                    {businessData.location.cityStateZip}
                  </p>
                  <p className="text-xs text-coffee font-semibold mt-1 inline-flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Unverified Draft &bull; Actions Inactive
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-oat/40 border border-oat/70">
                  <span className="text-xs uppercase font-semibold text-coffee tracking-wider block mb-1">
                    Schedule Status
                  </span>
                  <p className="font-sans text-sm font-medium text-espresso">
                    {businessData.schedule[0].hours}
                  </p>
                  <p className="text-xs text-espresso/70 mt-1">
                    Dynamic open status disabled pending owner confirmation
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      {/* 6. Preview Shell Footer */}
      <Footer />
    </div>
  );
};

export default App;
