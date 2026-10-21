import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';

export const metadata: Metadata = {
  title: 'Contact et accès — Aitbaamran, Fès',
  description: 'Contactez Aitbaamran, médina de Fès : formulaire, adresse communiquée et accès à valider.',
};

export default function ContactPage() {
  return (
    <>
      <Header overlay />
      <main>
        <PageHero
          eyebrow="Contact & accès"
          title="Écrivez-nous, nous vous répondrons."
          subtitle="Coordonnées et instructions d’accès publiées uniquement après validation par le propriétaire."
          image="https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=2000&q=80"
          alt="Ruelles de la médina de Fès, photo de démonstration provisoire"
        />
        <section className="py-16">
          <div className="container">
            <div className="grid items-stretch gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
              <div className="lg:col-span-5">
                <ContactDetails />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}