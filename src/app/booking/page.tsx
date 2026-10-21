import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import BookingForm from './components/BookingForm';
import BookingNotes from './components/BookingNotes';

export const metadata: Metadata = {
  title: 'Réserver — Aitbaamran, Fès',
  description: 'Réservez en direct votre séjour à Aitbaamran, médina de Fès, via le moteur de réservation officiel.',
};

export default function BookingPage() {
  return (
    <>
      <Header overlay />
      <main>
        <PageHero
          eyebrow="Réservation"
          title="Réservez votre séjour en direct."
          subtitle="Indiquez vos dates : vous serez redirigé vers le moteur de réservation officiel du riad."
          image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=80"
          alt="Suite lumineuse, photo de démonstration provisoire"
        />
        <section className="py-16">
          <div className="container max-w-4xl">
            <BookingForm />
          </div>
        </section>
        <BookingNotes />
      </main>
      <Footer />
    </>
  );
}