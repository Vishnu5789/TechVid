import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import TrustIndicators from '../components/sections/TrustIndicators';
import ProgramsOverview from '../components/sections/ProgramsOverview';
import Features from '../components/sections/Features';
import Vision from '../components/sections/Vision';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TechVid Innovations - Learn, Innovative, Lead | Online Education Platform</title>
        <meta name="description" content="Transform your career with industry-ready programs in Engineering, Pharmacy, Agriculture, Management & Technology. Real-time projects, interactive classes, job placement support in Hyderabad, India." />
        <meta name="keywords" content="online courses India, B.Tech programs, MBA online, MCA, Pharmacy courses, Agriculture programs, IT training, educational technology, career training, job placement, Hyderabad education, online learning, tech education, full stack development, AI ML courses" />
        <link rel="canonical" href="https://www.techvidin.com/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.techvidin.com/" />
        <meta property="og:title" content="TechVid Innovations - Learn, Innovative, Lead" />
        <meta property="og:description" content="Transform your career with industry-ready programs in Engineering, Pharmacy, Agriculture, Management & Technology. Real-time projects and placement support." />
        <meta property="og:image" content="https://www.techvidin.com/images/logo/logo.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.techvidin.com/" />
        <meta property="twitter:title" content="TechVid Innovations - Learn, Innovative, Lead" />
        <meta property="twitter:description" content="Transform your career with industry-ready programs. Real-time projects and placement support." />
        <meta property="twitter:image" content="https://www.techvidin.com/images/logo/logo.jpg" />
      </Helmet>
      
      <div>
        <Hero />
        <TrustIndicators />
        <ProgramsOverview />
        <Features />
        <Vision />
        <CTA />
      </div>
    </>
  );
};

export default Home;
