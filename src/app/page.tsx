import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import RiadOverviewSection from './components/RiadOverviewSection';
import RoomsPreviewSection from './components/RoomsPreviewSection';
import ServicesStatusSection from './components/ServicesStatusSection';
import DiscoverTeaserSection from './components/DiscoverTeaserSection';
import TransparencyNote from './components/TransparencyNote';

export default function HomePage() {
  return (
    <>
      <Header overlay />
      <main>
        <HeroSection />
        <RiadOverviewSection />
        <RoomsPreviewSection />
        <ServicesStatusSection />
        <DiscoverTeaserSection />
        <TransparencyNote />
      </main>
      <Footer />
    </>
  );
}