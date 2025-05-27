
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
          src="/lovable-uploads/2824ff68-a3ec-47e9-845b-c5a49497db90.png" 
          alt="Aeris Studio" 
          className="h-10 md:h-12 opacity-80 mix-blend-multiply"
        />
      ) : (
        <img 
          src="/lovable-uploads/de63769e-1d2f-4106-885d-865c27a8c9da.png" 
          alt="Aeris Studio" 
          className="h-14 md:h-16 opacity-80 mix-blend-multiply"
        />
      )}
    </div>
  );
};

export default Logo;
