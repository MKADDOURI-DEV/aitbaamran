import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export default function PageHero({ eyebrow, title, subtitle, image, alt }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-foreground">
      <div className="absolute inset-0 -z-10">
        <AppImage src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 scrim-hero" />
      </div>
      <div className="container pb-16 pt-28 sm:pb-24 sm:pt-36">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-display-lg font-medium text-background">{title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-background/85 sm:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}