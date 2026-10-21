import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';
import StatusBadge from '@/components/StatusBadge';
import { roomCategories } from '@/config/site';

/*
 BENTO AUDIT
 STEP 1 — Array has 3 cards: [category-a, category-b, category-c]
 STEP 2 — lg (2 cols, 2 rows):
   Row 1: [col-1: A cs-1] [col-2: B cs-1]
   Row 2: [col-1: C cs-2 → col-span-full]
   Placed 3/3 cards ✓ (last card expanded to fill row)
 sm (1 col): A, B, C stacked. Placed 3/3 ✓
*/

export default function RoomsGrid() {
  return (
    <section className="pb-20 pt-16">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2">
          {roomCategories?.map((room, i) => (
            <RevealOnScroll
              key={room?.id}
              delay={i * 100}
              className={i === roomCategories?.length - 1 ? 'md:col-span-2' : ''}
            >
              {/* Room card: {room.id} */}
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card md:flex-row">
                <div className={`relative h-[260px] w-full md:h-auto md:min-h-[320px] ${i === roomCategories?.length - 1 ? 'md:w-1/2' : 'md:w-2/5'} overflow-hidden`}>
                  <AppImage
                    src={room?.image}
                    alt={room?.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-6 sm:p-8">
                  <div>
                    <StatusBadge status="à confirmer" />
                    <h2 className="mt-4 font-display text-2xl text-card-foreground">{room?.name}</h2>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="UsersIcon" size={18} /> {room?.capacity}
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Squares2X2Icon" size={18} /> {room?.area}
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="MoonIcon" size={18} /> {room?.bed}
                      </li>
                    </ul>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{room?.note}</p>
                  </div>
                  <Link
                    href="/booking"
                    className="inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
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