import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import RoomsGrid from './components/RoomsGrid';

export const metadata: Metadata = {
  title: 'Chambres et suites — Aitbaamran, Fès',
  description:
    'Catégories de chambres du riad Aitbaamran à Fès : capacités, équipements et disponibilités à confirmer avec le moteur de réservation.',
};

export default function RoomsPage() {
  return (
    <>
      <Header overlay />
      <main>
        <PageHero
          eyebrow="Chambres & suites"
          title="Choisissez votre chambre dans la médina."
          subtitle="Structure prête à accueillir les noms, photos, capacités et équipements validés par le propriétaire."
          image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2000&q=80"
          alt="Chambre lumineuse, photo de démonstration provisoire"
        />
        <RoomsGrid />
      </main>
      <Footer />
    </>
  );
}