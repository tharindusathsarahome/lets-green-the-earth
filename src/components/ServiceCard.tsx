import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  buttonText: string;
  colorClass: string;
  bgColorClass: string;
  hoverColorClass: string;
  imageUrl?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  link,
  buttonText,
  colorClass,
  bgColorClass,
  hoverColorClass,
  imageUrl,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-transform hover:scale-105">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          {/* Color overlay */}
          <div className={`absolute inset-0 opacity-20 ${bgColorClass}`}></div>
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <div className={`${colorClass} mb-4`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <p className="text-gray-600 mb-6 flex-1">{description}</p>
        
        <Link 
          to={link} 
          className={`mt-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${bgColorClass} ${hoverColorClass} focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
          {buttonText}
          <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 