import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import StrategyService from '../components/services/StrategyService';
import GrowthService from '../components/services/GrowthService';
import ChattingService from '../components/services/ChattingService';
import MonetisationService from '../components/services/MonetisationService';
import ComparisonMatrix from '../components/services/ComparisonMatrix';
import ServicesCtaBanner from '../components/services/ServicesCtaBanner';

export default function ServicesPage() {
  return (
    <div className="w-full">
      <ServicesHero />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-space-3xl pb-space-3xl">
        <StrategyService />
        <GrowthService />
        <ChattingService />
        <MonetisationService />
      </div>
      <ComparisonMatrix />
      <ServicesCtaBanner />
    </div>
  );
}
