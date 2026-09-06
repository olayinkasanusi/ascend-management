import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import PhilosophySection from '../components/landing/PhilosophySection';
import OfferingsSection from '../components/landing/OfferingsSection';
import ConfidentialityBanner from '../components/landing/ConfidentialityBanner';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import QuickApplyForm from '../components/landing/QuickApplyForm';

export default function LandingPage({ onOpenModal }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <HeroSection
        onScaleGrowth={() => handleScrollTo('contact')}
        onExploreApproach={() => handleScrollTo('approach')}
      />
      <PhilosophySection />
      <OfferingsSection />
      <ConfidentialityBanner />
      <TestimonialsSection />
      <QuickApplyForm onOpenModal={onOpenModal} />
    </div>
  );
}
