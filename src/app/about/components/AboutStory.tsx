import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';
import StatusBadge from '@/components/StatusBadge';

const blocks = [
{ icon: 'BookOpenIcon', title: 'Histoire', text: 'Date de construction, anciens propriétaires, restauration : à renseigner uniquement avec des faits vérifiés.' },
{ icon: 'HomeModernIcon', title: 'Architecture', text: 'Patio, zelliges, plâtre sculpté, cèdre : à décrire à partir de photos authentiques.' },
{ icon: 'HeartIcon', title: 'Ambiance', text: 'Atmosphère réelle de la maison, rédigée avec le propriétaire.' }];


export default function AboutStory() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid items-stretch gap-12 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-7">
            <div className="flex h-full flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Présentation</p>
              <h2 className="font-display text-display-lg font-medium text-foreground">
                Aitbaamran, une maison de la médina.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Adresse communiquée : 15, Ras Jnane, Médina, Fès. Le texte définitif de présentation sera
                fourni par le client ; les rubriques ci-dessous sont des emplacements à compléter.
              </p>
              <div className="mt-2 space-y-4">
                {blocks.map((b, i) =>
                <RevealOnScroll key={b.title} delay={i * 100}>
                    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Icon name={b.icon as 'BookOpenIcon'} size={22} />
                      </span>
                      <div>
                        <div className="mb-1 flex flex-wrap items-center gap-3">
                          <h3 className="font-display text-lg text-card-foreground">{b.title}</h3>
                          <StatusBadge status="à confirmer" />
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                )}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-6">
              <div className="relative flex-1 overflow-hidden rounded-t-[12rem] rounded-b-2xl bg-muted">
                <div className="relative h-[420px] w-full lg:h-full lg:min-h-[480px]">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_486e29d18-1792598880724.png"
                    alt="Arcs et patio marocains, photo de démonstration provisoire"
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover" />
                  
                </div>
              </div>
              <div className="rounded-2xl bg-primary p-6">
                <p className="font-display text-xl text-primary-foreground">
                  « Aucune information n’est inventée : chaque fait attend sa validation. »
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>);

}