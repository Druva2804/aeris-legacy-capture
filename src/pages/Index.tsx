import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustPromises from '@/components/TrustPromises';
import About from '@/components/About';
import ClosingStatement from '@/components/ClosingStatement';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-aeris-cream">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <TrustPromises />
      <ClosingStatement />
      <Footer />
    </div>
  );
};

export default Index;
