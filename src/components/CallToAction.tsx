import { Link } from 'react-router-dom';

interface CallToActionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CallToAction({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  secondaryButtonText,
  secondaryButtonLink,
}: CallToActionProps) {
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <div 
      className={`${backgroundImage ? 'bg-cover bg-center text-white' : 'bg-primary text-white'} py-16`}
      style={bgStyle}
    >
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        
        {description && (
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">{description}</p>
        )}
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to={buttonLink} 
            className={`${backgroundImage ? 'btn-primary' : 'btn-accent'}`}
          >
            {buttonText}
          </Link>
          
          {secondaryButtonText && secondaryButtonLink && (
            <Link 
              to={secondaryButtonLink} 
              className="btn-outline text-white border-white hover:bg-white hover:text-primary"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 