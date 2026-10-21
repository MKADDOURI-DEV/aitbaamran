import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { navLinks, siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <AppLogo size={40} />
          <span className="font-display text-xl tracking-tight text-foreground">{siteConfig?.name}</span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3" aria-label="Pied de page">
          {navLinks?.map((l) => (
            <Link
              key={l?.href}
              href={l?.href}
              className="min-h-[44px] content-center text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l?.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="min-h-[44px] content-center text-[15px] font-semibold text-accent transition-colors hover:text-foreground"
          >
            Réserver
          </Link>
        </nav>

        <div className="flex flex-col gap-1 text-[15px] text-muted-foreground md:items-end">
          <span>© {siteConfig?.name} — tous droits réservés</span>
          <span className="flex gap-4">
            <Link href="/contact" className="font-medium hover:text-foreground">
              Mentions légales
            </Link>
            <Link href="/contact" className="font-medium hover:text-foreground">
              Confidentialité
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}