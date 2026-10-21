'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { heroImage } from '@/config/site';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let mx = 0;
    let my = 0;
    let sy = 0;

    const apply = () => {
      raf = 0;
      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(${mx * -10}px, ${sy * 0.3 + my * -8}px, 0) scale(1.08)`;
      }
      if (blobARef.current) {
        blobARef.current.style.transform = `translate3d(${mx * 40}px, ${sy * 0.5 + my * 30}px, 0)`;
      }
      if (blobBRef.current) {
        blobBRef.current.style.transform = `translate3d(${mx * -30}px, ${sy * 0.2 + my * -24}px, 0)`;
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onScroll = () => {
      sy = Math.min(window.scrollY, 700);
      schedule();
    };
    const onMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      schedule();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-screen flex-col justify-end overflow-hidden bg-foreground"
    >
      <div ref={imgRef} className="absolute inset-0 -z-30 will-change-transform">
        <AppImage
          src={heroImage}
          alt="Ruelle et architecture traditionnelle de la médina de Fès, photo de démonstration provisoire"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-20 scrim-hero" />
      <div
        ref={blobARef}
        className="blob-primary animate-drift absolute -left-24 top-1/4 -z-10 h-[420px] w-[420px] rounded-full opacity-60 will-change-transform"
      />
      <div
        ref={blobBRef}
        className="blob-secondary animate-drift-slow absolute -right-20 bottom-10 -z-10 h-[460px] w-[460px] rounded-full opacity-60 will-change-transform"
      />
      <div className="grain absolute inset-0 -z-10" />

      <div className="container pb-12 pt-40 sm:pb-20">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Médina de Fès · Ras Jnane
            </p>
            <h1 className="font-display text-hero-xl font-medium text-background">
              Une maison <span className="italic text-gold">de lumière</span> au cœur de Fès.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/85 sm:text-lg">
              Aitbaamran vous accueille dans la médina. Réservez en direct, sans intermédiaire, et
              découvrez les chambres de la maison.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/booking"
                className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-accent px-8 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-transform duration-300 hover:scale-[1.04]"
              >
                Réserver
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <Link
                href="/rooms"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-background/40 px-8 text-sm font-semibold uppercase tracking-widest text-background transition-colors hover:bg-background/10"
              >
                Voir les chambres
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-background/20 bg-foreground/55 p-6 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Adresse communiquée</p>
              <p className="mt-2 font-display text-xl text-background">15, Ras Jnane, Médina, Fès</p>
              <p className="mt-3 text-sm leading-relaxed text-background/80">
                Nom commercial et adresse en cours de validation par le propriétaire avant publication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}