import React from 'react';
import { Coffee } from 'lucide-react';
import { Container } from './Container';
import { NAV_ITEMS } from './Navbar';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-espresso text-cream py-12 sm:py-16 border-t border-coffee/30">
      <Container size="wide">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-cream/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-coffee flex items-center justify-center text-cream">
              <Coffee className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-cream block">
                Bean &amp; Bite
              </span>
              <span className="font-sans text-xs tracking-wider text-oat/80 block">
                Coffee &amp; Bakery
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-sm text-oat hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage rounded-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-oat/60 font-sans">
          <p>&copy; Bean &amp; Bite Coffee &amp; Bakery. All rights reserved.</p>
          <p className="italic">
            Phase 2 Design Foundation Preview &bull; Unverified draft contact data inactive
          </p>
        </div>
      </Container>
    </footer>
  );
};
