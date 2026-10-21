import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import DiscoverThemes from './components/DiscoverThemes';

export const metadata: Metadata = {
  title: 'Découvrir Fès — Aitbaamran',
  description: 'Guide éditorial de la médina de Fès : artisanat, patrimoine, souks et cuisine, par Aitbaamran.',
};

export default function DiscoverPage() {
  return (
    <>
      <Header overlay />
      <main>
        <PageHero
          eyebrow="Découvrir Fès"
          title="La plus vivante des médinas."
          subtitle="Un guide éditorial pour préparer votre séjour, sans approximations."
          image="https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=2000&q=80"
          alt="Toits de la médina de Fès, photo de démonstration provisoire"
        />
        <DiscoverThemes />
      </main>
      <Footer />
    </>
  );
}