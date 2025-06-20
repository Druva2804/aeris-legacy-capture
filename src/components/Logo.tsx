
import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'icon';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'horizontal', className = '' }) => {
  return (
    <div className={className}>
      {variant === 'horizontal' ? (
        <img 
          src="/lovable-uploads/32b8d5ba-8837-4080-8dfb-9f4535530aa0.png" 
          alt="Aeris Studio" 
          className="h-10 md:h-12"
        />
      ) : (
        <img 
          src="/lovable-uploads/a1378883-1e8f-4b68-8da1-409dcad8dfde.png" 
          alt="Aeris Studio" 
          className="h-14 md:h-16"
        />
      )}
    </div>
  );
};

export default Logo;
