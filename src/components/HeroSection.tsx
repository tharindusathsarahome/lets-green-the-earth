import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink = '/get-involved',
  secondaryButtonText,
  secondaryButtonLink = '/donate',
}: HeroSectionProps) {
  return (
    <div 
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` 
      }}
      role="banner"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30" aria-hidden="true"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{title}</h1>
          
          {subtitle && (
            <p className="mb-8 text-lg md:text-xl lg:text-2xl">{subtitle}</p>
          )}
          
          <div className="flex flex-wrap gap-4">
            {primaryButtonText && (
              <Link 
                to={primaryButtonLink}
                className="btn-primary text-lg"
                aria-label={primaryButtonText}
              >
                {primaryButtonText}
              </Link>
            )}
            
            {secondaryButtonText && (
              <Link 
                to={secondaryButtonLink}
                className="btn-outline text-lg text-white border-white hover:bg-white hover:text-primary"
                aria-label={secondaryButtonText}
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 