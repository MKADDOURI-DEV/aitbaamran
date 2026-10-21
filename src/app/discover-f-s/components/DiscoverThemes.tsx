import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';

const themes = [
  { icon: 'WrenchScrewdriverIcon', title: 'Artisanat', text: 'Fès est réputée pour ses métiers traditionnels : travail du cuir, du cuivre, de la céramique.' },
  { icon: 'BuildingLibraryIcon', title: 'Patrimoine', text: 'La médina de Fès el-Bali est inscrite au patrimoine mondial de l’UNESCO.' },
  { icon: 'ShoppingBagIcon', title: 'Souks', text: 'Un réseau dense de ruelles commerçantes, à parcourir à pied.' },
  { icon: 'FireIcon', title: 'Cuisine', text: 'Table fassie : spécialités locales à découvrir, sélection à valider.' },
];

export default function DiscoverThemes() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {themes.map((t, i) => (
              <RevealOnScroll key={t.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Icon name={t.icon as 'FireIcon'} size={24} />
                  </span>
                  <h3 className="font-display text-xl text-card-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={140} className="lg:col-span-5">
            <div className="rounded-3xl bg-primary p-8 lg:sticky lg:top-28">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Itinéraire</p>
              <h2 className="font-display text-2xl text-primary-foreground">Distances et trajets</h2>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                Aucune distance n’est affichée tant qu’elle n’a pas été mesurée. Un lien d’itinéraire sera
                ajouté avec la localisation exacte validée.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-[48px] items-center gap-3 rounded-full bg-accent px-6 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-[1.04]"
              >
                Contacter le riad
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}