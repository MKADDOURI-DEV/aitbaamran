'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { navLinks, siteConfig } from '@/config/site';

interface HeaderProps {
  overlay?: boolean;
}

export default function Header({ overlay = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'FR' | 'EN' | 'AR'>('FR');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || !overlay;
  const wrapper = overlay ? 'absolute' : 'sticky';

  return (
    <header
      className={`${wrapper} top-0 left-0 z-50 w-full transition-colors duration-500 ${
        solid ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <AppLogo size={44} />
          <span
            className={`font-display text-xl tracking-tight ${
              solid ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[15px] font-medium transition-colors ${
                solid
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-primary-foreground/85 hover:text-primary-foreground'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className={`hidden items-center gap-1 rounded-full border px-1 py-1 sm:flex ${
              solid ? 'border-border' : 'border-primary-foreground/30'
            }`}
            role="group"
            aria-label="Langue"
          >
            {(['FR', 'EN', 'AR'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`min-h-[32px] rounded-full px-3 text-xs font-semibold transition-colors ${
                  lang === l
                    ? 'bg-accent text-accent-foreground'
                    : solid
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="/booking"
            className="hidden min-h-[44px] items-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Réserver
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            className={`flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
              solid ? 'border-border text-foreground' : 'border-primary-foreground/40 text-primary-foreground'
            }`}
          >
            <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-[68px] z-40 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container flex flex-col gap-1 py-8" aria-label="Menu mobile">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="min-h-[52px] border-b border-border py-3 font-display text-2xl text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-6 flex items-center gap-2">
              {(['FR', 'EN', 'AR'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`min-h-[44px] min-w-[44px] rounded-full border px-4 text-sm font-semibold ${
                    lang === l
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border text-muted-foreground'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-accent px-6 text-base font-semibold text-accent-foreground"
            >
              Réserver
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}