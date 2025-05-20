
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-aeris-cream py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-4">Aeris Studio</h3>
            <p className="text-sm text-aeris-charcoal/70 mb-6">
              Crafting timeless imagery for brands, spaces, and life's most meaningful moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-aeris-charcoal hover:text-aeris-sand transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-aeris-charcoal hover:text-aeris-sand transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"></path>
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="m4.93 4.93 2.83 2.83"></path>
                  <path d="m16.24 16.24 2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="m4.93 19.07 2.83-2.83"></path>
                  <path d="m16.24 7.76 2.83-2.83"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links 1 */}
          <div>
            <h4 className="font-medium text-base uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">Commercial Photography</a></li>
              <li><a href="#" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">E-Commerce Photography</a></li>
              <li><a href="#" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">Editorial Photography</a></li>
              <li><a href="#" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">Personal Photography</a></li>
              <li><a href="#" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">Signature Services</a></li>
            </ul>
          </div>
          
          {/* Links 2 */}
          <div>
            <h4 className="font-medium text-base uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">About</a></li>
              <li><a href="#" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">Process</a></li>
              <li><a href="#" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-medium text-base uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-aeris-charcoal/70">123 Studio Way</li>
              <li className="text-aeris-charcoal/70">San Francisco, CA 94103</li>
              <li><a href="tel:+14155551234" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">+1 (415) 555-1234</a></li>
              <li><a href="mailto:hello@aerisstudio.com" className="text-aeris-charcoal/70 hover:text-aeris-charcoal transition-colors">hello@aerisstudio.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-aeris-beige/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-aeris-charcoal/60">&copy; {new Date().getFullYear()} Aeris Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-aeris-charcoal/60 hover:text-aeris-charcoal transition-colors">Privacy Policy</a>
            <a href="#" className="text-aeris-charcoal/60 hover:text-aeris-charcoal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
