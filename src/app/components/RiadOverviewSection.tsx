import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';
import StatusBadge from '@/components/StatusBadge';

const pillars = [
{ icon: 'HomeModernIcon', title: 'Architecture', text: 'Patio, zelliges et boiseries : à décrire à partir de photos authentiques.' },
{ icon: 'SunIcon', title: 'Lumière', text: 'Atmosphère de la maison : texte à valider avec le propriétaire.' },
{ icon: 'MapPinIcon', title: 'Médina', text: 'Situé à Ras Jnane, dans la médina de Fès.' }];


export default function RiadOverviewSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pt-28">
      <div className="container">
        <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          <RevealOnScroll className="lg:col-span-7">
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Le Riad</p>
                <h2 className="font-display text-display-lg font-medium text-foreground">
                  Un refuge calme derrière les murs de la médina.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Cette présentation est une base éditoriale. L’histoire, la date de construction et les
                  particularités du lieu seront rédigées uniquement après validation des faits.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {pillars.map((p) =>
                <div key={p.title} className="rounded-2xl border border-border bg-card p-5">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon name={p.icon as 'HomeModernIcon'} size={22} />
                    </span>
                    <h3 className="font-display text-lg text-card-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="inline-flex min-h-[44px] w-fit items-center gap-3 border-b-2 border-accent pb-1 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-accent">
                
                Découvrir le riad
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-2xl border border-border bg-muted">
                <div className="relative h-[460px] w-full sm:h-[560px]">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_4c3000cba-1792598880515.png"
                    alt="Arcs et patio traditionnels marocains, photo de démonstration provisoire"
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover" />
                  
                  <div className="absolute inset-x-0 bottom-0 h-40 scrim-card" />
                </div>
              </div>
              <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-card p-5 shadow-xl sm:-left-6 sm:right-auto sm:w-72">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Photos
                  </span>
                  <StatusBadge status="à confirmer" />
                </div>
                <p className="text-sm leading-relaxed text-card-foreground">
                  Image provisoire de démonstration. Remplacer par les photos officielles du riad.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>);

}