
import React from 'react';
import { Button } from "@/components/ui/button";

const ClosingStatement: React.FC = () => {
  return (
    <section className="py-24 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2038')] bg-cover bg-center">
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="container relative z-10 mx-auto px-6 md:px-10 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Creating Enduring Works of Art</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            At Aeris Studio, we don't just take photographs — we create enduring works of art that honor your vision, your brand, and your most precious milestones.
            We invite you to experience photography where elegance meets excellence.
          </p>
          <Button className="bg-white hover:bg-white/90 text-aeris-charcoal px-8 py-6">
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingStatement;
