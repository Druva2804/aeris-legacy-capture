
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
          src="/lovable-uploads/8df15149-7bcf-403e-95ee-db2519b6bf0d.png" 
          alt="Aeris Studio" 
          className="h-10 md:h-12"
          style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(5%) saturate(542%) hue-rotate(359deg) brightness(95%) contrast(95%)' }}
        />
      ) : (
        <img 
          src="/lovable-uploads/1f7f1d6e-c00b-4b77-b953-3b0394b21696.png" 
          alt="Aeris Studio" 
          className="h-14 md:h-16"
          style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(5%) saturate(542%) hue-rotate(359deg) brightness(95%) contrast(95%)' }}
        />
      )}
    </div>
  );
};

export default Logo;
