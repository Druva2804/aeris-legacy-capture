
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300 px-6 md:px-10",
      isScrolled ? "py-3 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm" : "py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-aeris-charcoal">
          <Logo />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-aeris-charcoal hover:text-[#D3C7B5] transition-colors text-sm uppercase tracking-wider">Services</a>
          <a href="#about" className="text-aeris-charcoal hover:text-[#D3C7B5] transition-colors text-sm uppercase tracking-wider">About</a>
          <a href="#portfolio" className="text-aeris-charcoal hover:text-[#D3C7B5] transition-colors text-sm uppercase tracking-wider">Portfolio</a>
          <Button variant="outline" className="border-[#D3C7B5] text-aeris-charcoal hover:bg-[#D3C7B5] hover:text-aeris-charcoal transition-all">
            Contact
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-aeris-charcoal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-md">
          <div className="flex flex-col py-4 px-6">
            <a href="#services" className="py-3 text-aeris-charcoal hover:text-[#D3C7B5] transition-colors text-sm uppercase tracking-wider">Services</a>
            <a href="#about" className="py-3 text-aeris-charcoal hover:text-[#D3C7B5] transition-colors text-sm uppercase tracking-wider">About</a>
            <a href="#portfolio" className="py-3 text-aeris-charcoal hover:text-[#D3C7B5] transition-colors text-sm uppercase tracking-wider">Portfolio</a>
            <Button variant="outline" className="mt-3 border-[#D3C7B5] text-aeris-charcoal hover:bg-[#D3C7B5] hover:text-aeris-charcoal transition-all">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
