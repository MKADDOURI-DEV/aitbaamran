import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';
import { roomCategories } from '@/config/site';

/*
 BENTO AUDIT
 STEP 1 — Array has 3 cards: [category-a, category-b, category-c]
 STEP 2 — lg (3 cols, 2 rows):
   Row 1: [col-1: A cs-2 rs-2] [col-2: A] [col-3: B cs-1 rs-1]
   Row 2: [col-1: A] [col-2: A] [col-3: C cs-1 rs-1]
   Placed 3/3 cards ✓
 md/sm (1 col): A, B, C stacked. Placed 3/3 ✓
*/

export default function RoomsPreviewSection() {
  const [a, b, c] = roomCategories;
  const cards = [
    { room: a, className: 'lg:col-span-2 lg:row-span-2', tall: true },
    { room: b, className: '', tall: false },
    { room: c, className: '', tall: false },
  ];

  return (
    <section className="relative overflow-hidden pb-16 pt-20">
      <div className="absolute inset-0 -z-10 zellige opacity-60" />
      <div className="container">
        <RevealOnScroll>
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Chambres & suites</p>
              <h2 className="max-w-xl font-display text-display-lg font-medium text-foreground">
                Des chambres à nommer, à photographier, à réserver.
              </h2>
            </div>
            <Link
              href="/rooms"
              className="inline-flex min-h-[44px] w-fit items-center gap-3 border-b-2 border-accent pb-1 text-sm font-semibold uppercase tracking-widest text-foreground hover:text-accent"
            >
              Toutes les chambres
              <Icon name="ArrowRightIcon" size={18} />
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {cards?.map(({ room, className, tall }, i) => (
            <RevealOnScroll key={room?.id} delay={i * 110} className={`${className} flex`}>
              {/* Bento card: {room.id} */}
              <article className="group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-3xl bg-foreground">
                <div className={`relative w-full ${tall ? 'h-[480px] lg:h-full lg:min-h-[560px]' : 'h-[300px]'} absolute inset-0`}>
                  <AppImage
                    src={room?.image}
                    alt={room?.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className={`relative ${tall ? 'min-h-[480px] lg:min-h-[560px]' : 'min-h-[300px]'} flex flex-col justify-end scrim-card p-6 sm:p-8`}>
                  <h3 className="font-display text-2xl text-background">{room?.name}</h3>
                  <p className="mt-2 text-sm text-background/85">{room?.capacity} · {room?.area}</p>
                  <p className="text-sm text-background/85">{room?.bed}</p>
                  <Link
                    href="/booking"
                    className="mt-5 inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
                  >
                    Voir les disponibilités
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}