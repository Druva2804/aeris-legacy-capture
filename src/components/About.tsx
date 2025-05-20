
import React from 'react';
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <div className="inline-flex items-center mb-4">
              <span className="text-[#D3C7B5] mr-2">✦</span>
              <h4 className="text-sm uppercase tracking-wider">About Aeris Studio</h4>
              <span className="text-[#D3C7B5] ml-2">✦</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Where Light Meets Legacy</h2>
            
            <div className="space-y-4 mb-8 text-aeris-charcoal/80">
              <p>
                At Aeris Studio, we believe that every image is a story of light, connection, and artistry.
              </p>
              <p>
                Specializing in both commercial and personal photography, we transform moments and visions into timeless, evocative imagery.
              </p>
              <p>
                With an editorial eye and a luxury sensibility, our work elevates brands, celebrates milestones, and honors the beauty of life in every frame.
              </p>
            </div>
            
            <Button className="bg-[#D3C7B5] hover:bg-[#D3C7B5]/90 text-white">
              Our Story
            </Button>
          </div>
          
          {/* About Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1604514813560-1e4f5726db65?q=80&w=2070')] bg-cover bg-center rounded-sm"></div>
              <div className="h-40 bg-[url('https://images.unsplash.com/photo-1506241537529-eefea1fbe44d?q=80&w=2070')] bg-cover bg-center rounded-sm"></div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="h-40 bg-[url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2069')] bg-cover bg-center rounded-sm"></div>
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1545164415-2c89e0f94c5d?q=80&w=1974')] bg-cover bg-center rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
