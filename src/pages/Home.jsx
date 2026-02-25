import React from 'react';
import Hero from '../components/sections/Hero';
import TrustIndicators from '../components/sections/TrustIndicators';
import ProgramsOverview from '../components/sections/ProgramsOverview';
import Features from '../components/sections/Features';
import Vision from '../components/sections/Vision';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustIndicators />
      <ProgramsOverview />
      <Features />
      <Vision />
      <CTA />
    </div>
  );
};

export default Home;
