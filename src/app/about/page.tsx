import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import AboutStory from './components/AboutStory';

export const metadata: Metadata = {
  title: 'Le Riad — Aitbaamran, Fès',
  description: 'Présentation d’Aitbaamran, riad de la médina de Fès : architecture, ambiance et histoire (à valider).',
};

export default function AboutPage() {
  return (
    <>
      <Header overlay />
      <main>
        <PageHero
          eyebrow="Le Riad"
          title="Architecture, calme et hospitalité."
          subtitle="Une présentation honnête, construite uniquement sur des informations approuvées."
          image="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=80"
          alt="Patio traditionnel marocain, photo de démonstration provisoire"
        />
        <AboutStory />
      </main>
      <Footer />
    </>
  );
}