
import React from 'react';

const promises = [
  "Personal, attentive service from consultation to final delivery.",
  "Editorial-quality artistry refined through decades of experience.",
  "Full transparency on pricing, licensing, and image usage.",
  "A luxurious, effortless experience from start to finish."
];

const TrustPromises: React.FC = () => {
  return (
    <section className="py-16 bg-aeris-beige/30">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-2xl mb-8">At Aeris Studio, You Are Guaranteed</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {promises.map((promise, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 mt-1 text-aeris-sand">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-aeris-charcoal/90">{promise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPromises;
