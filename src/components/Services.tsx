
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Camera, Image, BookOpen, CalendarCheck } from "lucide-react";

const serviceItems = [
  {
    title: "Commercial Photography",
    description: "Elegant, editorial-grade imagery designed to elevate your brand.",
    icon: <Camera className="h-8 w-8 mb-5 text-[#D3C7B5]" />,
    specialties: [
      "Architecture & Interior Design",
      "Hospitality & Restaurant",
      "Corporate & Branding Portraits"
    ]
  },
  {
    title: "E-Commerce Photography",
    description: "Product photography that turns browsers into buyers.",
    icon: <Image className="h-8 w-8 mb-5 text-[#D3C7B5]" />,
    specialties: [
      "Studio Product Photography",
      "Lifestyle Product Photography",
      "Jewelry, Fashion & Beauty"
    ]
  },
  {
    title: "Editorial Photography",
    description: "Storytelling that captivates, inspires, and connects.",
    icon: <BookOpen className="h-8 w-8 mb-5 text-[#D3C7B5]" />,
    specialties: [
      "Fashion Editorials",
      "Creative Brand Stories",
      "Publication Submission Support"
    ]
  },
  {
    title: "Personal Photography",
    description: "Honoring the moments that matter most, with grace and artistry.",
    icon: <CalendarCheck className="h-8 w-8 mb-5 text-[#D3C7B5]" />,
    specialties: [
      "Portrait & Engagement Sessions",
      "Maternity & Newborn Photography",
      "Family Storytelling"
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-5">Our Photography Services</h2>
          <p className="text-aeris-charcoal/80 max-w-2xl mx-auto">
            Carefully crafted photographic experiences designed for brands, spaces, 
            and life's precious moments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="service-card border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <CardContent className="pt-6">
                {service.icon}
                <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                <p className="text-aeris-charcoal/80 text-sm mb-6">{service.description}</p>
                
                <ul className="mb-6 text-sm">
                  {service.specialties.map((specialty, idx) => (
                    <li key={idx} className="mb-2 flex items-start">
                      <span className="text-[#D3C7B5] mr-2">•</span>
                      <span>{specialty}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#" className="inline-flex items-center text-sm hover:text-[#D3C7B5] transition-colors">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
