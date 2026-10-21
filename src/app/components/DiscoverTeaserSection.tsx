import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function DiscoverTeaserSection() {
  return (
    <section className="pb-20 pt-16">
      <div className="container">
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Découvrir Fès</p>
                <h2 className="font-display text-display-lg font-medium text-card-foreground">
                  Une médina à explorer à pied.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Artisanat, souks, quartiers historiques : un guide éditorial vérifié, sans distances
                  approximatives.
                </p>
              </div>
              <Link
                href="/discover-f-s"
                className="inline-flex min-h-[48px] w-fit items-center gap-3 rounded-full bg-primary px-6 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.04]">
                
                Lire le guide
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={140} className="lg:col-span-7">
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-foreground">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_13bed87c4-1773214096147.png"
                alt="Toits et ruelles de la médina de Fès, photo de démonstration provisoire"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover" />
              
              <div className="absolute inset-0 scrim-card" />
              <p className="absolute bottom-6 left-6 right-6 font-display text-2xl text-background">
                Fès el-Bali, plus grande zone piétonne urbaine du monde.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>);

}