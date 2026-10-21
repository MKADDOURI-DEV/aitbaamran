import React from 'react';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';

const steps = [
  { icon: 'CalendarDaysIcon', title: 'Choisissez vos dates', text: 'Le formulaire transmet dates et voyageurs si le moteur le permet.' },
  { icon: 'ArrowTopRightOnSquareIcon', title: 'Moteur officiel', text: 'Vous êtes redirigé vers le PMS du riad : aucune disponibilité simulée ici.' },
  { icon: 'ShieldCheckIcon', title: 'Réservation directe', text: 'La confirmation est émise uniquement par le moteur officiel.' },
];

export default function BookingNotes() {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-secondary p-6">
                <Icon name={s.icon as 'ShieldCheckIcon'} size={28} className="text-accent" />
                <h3 className="mt-4 font-display text-lg text-secondary-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}