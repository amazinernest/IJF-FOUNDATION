import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ImpactStats } from '../components/home/ImpactStats';
import { AboutSection } from '../components/home/AboutSection';
import { ProgramGrid } from '../components/home/ProgramGrid';
import { ApproachSection } from '../components/home/ApproachSection';
import { PartnerCTA } from '../components/home/PartnerCTA';
import { JournalSection } from '../components/home/JournalSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Isaac Joseph-Fagbemi Foundation | Empowering Youth, Building Communities";
  }, []);

  return (
    <main>
      <HeroSection />
      <ImpactStats />
      <AboutSection />
      <ProgramGrid />
      <ApproachSection />
      <PartnerCTA />
      <JournalSection />
    </main>
  );
};
