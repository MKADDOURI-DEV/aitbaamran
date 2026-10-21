import React from 'react';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';
import StatusBadge from '@/components/StatusBadge';
import { services } from '@/config/site';

const icons: Record<string, string> = {
  breakfast: 'CakeIcon',
  terrace: 'SunIcon',
  transfer: 'TruckIcon',
  hammam: 'SparklesIcon',
  excursions: 'MapIcon',
  dining: 'FireIcon',
};

export default function ServicesStatusSection() {
  return (
    <section className="bg-primary pb-20 pt-16">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Services</p>
            <h2 className="font-display text-display-lg font-medium text-primary-foreground">
              Aucune promesse avant validation.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/80">
              Chaque service ci-contre reste marqué « à confirmer » tant que le propriétaire ne l’a pas
              validé. Il suffit de changer son statut dans le fichier de configuration pour le publier.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-7">
            {services.map((s, i) => (
              <RevealOnScroll key={s.id} delay={i * 80}>
                <div
                  className={`flex h-full flex-col justify-between gap-6 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 ${
                    i % 2 === 0 ? 'sm:-rotate-1' : 'sm:rotate-1'
                  }`}
                >
                  <Icon name={icons[s.id] as 'SunIcon'} size={26} className="text-gold" />
                  <div>
                    <h3 className="mb-3 font-display text-lg text-primary-foreground">{s.label}</h3>
                    <StatusBadge status={s.status} />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}