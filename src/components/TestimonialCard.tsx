interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageUrl?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  imageUrl,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
      {/* Quote symbol */}
      <div className="text-primary mb-4">
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      {/* Testimonial text */}
      <p className="text-gray-600 italic mb-6">{quote}</p>
      
      {/* Person info */}
      <div className="mt-auto flex items-center">
        {imageUrl && (
          <div className="mr-4">
            <img 
              src={imageUrl} 
              alt={name} 
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
        )}
        
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
} 