
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white"></div>
        <div className="bg-[url('https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=2089')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 md:px-10 relative z-10 pt-20 md:pt-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center py-16 lg:py-0">
          <div className="mb-8 hidden lg:block">
            <Logo variant="icon" />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-aeris-charcoal">
            Where Light <br className="hidden md:block" />Becomes Legacy
          </h1>
          
          <p className="text-aeris-charcoal/90 text-lg mb-10 max-w-2xl leading-relaxed">
            At Aeris Studio, we craft timeless imagery for brands, spaces, and life's most meaningful moments.
            From commercial campaigns to personal milestones, we deliver artistry, authenticity, and effortless elegance — captured forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#D3C7B5] hover:bg-[#D3C7B5]/90 text-white px-6 py-6">
              Explore Our Portfolio
            </Button>
            <Button variant="outline" className="border-[#D3C7B5] text-aeris-charcoal hover:bg-[#D3C7B5]/20 px-6 py-6">
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-[#D3C7B5]">
        <span className="text-xs uppercase tracking-widest mb-2">Discover</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
