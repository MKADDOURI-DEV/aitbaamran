import React from 'react';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function TransparencyNote() {
  return (
    <section className="pb-16">
      <div className="container">
        <RevealOnScroll>
          <div className="flex flex-col gap-4 rounded-2xl border border-warning/50 bg-warning/15 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
            <Icon name="ExclamationTriangleIcon" size={28} className="shrink-0 text-accent" />
            <div>
              <h2 className="font-display text-xl text-foreground">Validation requise avant publication</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Le nom commercial « Aitbaamran » et l’adresse « 15, Ras Jnane » doivent être confirmés par
                le propriétaire. Des résultats publics associent cette adresse à un autre établissement ;
                aucune de ses informations n’a été reprise ici.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}