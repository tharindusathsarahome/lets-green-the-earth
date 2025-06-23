import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';

// Gallery images
const GALLERY_HERO = 'https://one-more-tree.org/wp-content/uploads/2024/04/599323.jpg';
const CTA_IMAGE = 'https://images.unsplash.com/photo-1536825211030-094de935f680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80';

// Gallery images categorized
const galleryImages = {
  environmental: [
    {
      id: 'env1',
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1848&q=80',
      alt: 'Tree planting initiative',
      caption: 'Annual tree planting drive in Springfield Park',
      date: 'May 2023'
    },
    {
      id: 'env2',
      src: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'River cleanup event',
      caption: 'Community river cleanup removing over 200 pounds of debris',
      date: 'June 2023'
    },
    {
      id: 'env3',
      src: 'https://plus.unsplash.com/premium_photo-1663061406443-48423f04e73d?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tbXVuaXR5JTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000',
      alt: 'Environmental workshop',
      caption: 'Teaching sustainable living practices to local community members',
      date: 'July 2023'
    },
    {
      id: 'env4',
      src: 'https://images.unsplash.com/photo-1652971876875-05db98fab376?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dm9sdW50ZWVyaW5nfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
      alt: 'Community garden',
      caption: 'Our newest community garden in the downtown area',
      date: 'August 2023'
    }
  ],
  education: [
    {
      id: 'edu1',
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1822&q=80',
      alt: 'Tutoring program',
      caption: 'After-school tutoring program for middle school students',
      date: 'April 2023'
    },
    {
      id: 'edu2',
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Computer literacy class',
      caption: 'Digital literacy workshop for seniors',
      date: 'May 2023'
    },
    {
      id: 'edu3',
      src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      alt: 'STEM workshop',
      caption: 'Girls in STEM workshop at the community center',
      date: 'June 2023'
    },
    {
      id: 'edu4',
      src: 'https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Scholarship recipients',
      caption: 'This year\'s scholarship recipients at the award ceremony',
      date: 'July 2023'
    }
  ],
  counseling: [
    {
      id: 'cou1',
      src: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Counseling center opening',
      caption: 'Grand opening of our new counseling center',
      date: 'March 2023'
    },
    {
      id: 'cou2',
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Mental health workshop',
      caption: 'Mental health awareness workshop for community leaders',
      date: 'April 2023'
    },
    {
      id: 'cou3',
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Support group session',
      caption: 'Weekly support group for young adults',
      date: 'May 2023'
    },
    {
      id: 'cou4',
      src: 'https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Training session',
      caption: 'Training new volunteer counselors',
      date: 'June 2023'
    }
  ],
  elderly: [
    {
      id: 'eld1',
      src: 'https://plus.unsplash.com/premium_photo-1661290203802-e70e01de3a3c?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGhlYWx0aCUyMGNhcmV8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000',
      alt: 'Medical camp',
      caption: 'Free health check-up camp for seniors',
      date: 'April 2023'
    },
    {
      id: 'eld2',
      src: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Home visit program',
      caption: 'Volunteers visiting elderly community members at home',
      date: 'May 2023'
    },
    {
      id: 'eld3',
      src: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Recreational activities',
      caption: 'Weekly art class for seniors at the community center',
      date: 'June 2023'
    },
    {
      id: 'eld4',
      src: 'https://plus.unsplash.com/premium_photo-1663036991651-82ee96fcc8d5?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGhlYWx0aCUyMGNhcmV8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000',
      alt: 'Medication assistance',
      caption: 'Medication review and assistance program',
      date: 'July 2023'
    }
  ]
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('environmental');
  const [modalImage, setModalImage] = useState<null | {
    src: string;
    alt: string;
    caption: string;
    date: string;
  }>(null);

  const categories = [
    { id: 'environmental', name: 'Environmental Campaigns' },
    { id: 'education', name: 'Education Programs' },
    { id: 'counseling', name: 'Counseling Services' },
    { id: 'elderly', name: 'Elderly Care' }
  ];

  const openModal = (image: typeof modalImage) => {
    setModalImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Gallery"
        subtitle="Explore the moments and memories from our programs and events"
        backgroundImage={GALLERY_HERO}
      />
      
      {/* Gallery Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Making a Difference Through Action</h2>
            <p className="text-lg text-gray-600">
              Our gallery showcases the dedicated work of our volunteers and the impact of our programs 
              across all four of our service pillars. These images represent the heart of our mission 
              in action.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages[activeCategory as keyof typeof galleryImages].map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => openModal(image)}
              >
                <div className="relative h-64">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">{image.caption}</p>
                      <p className="text-sm opacity-90">{image.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 bg-white p-2 rounded-full text-gray-900 hover:text-primary z-10"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-96 md:h-auto">
                <img 
                  src={modalImage.src} 
                  alt={modalImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">{modalImage.alt}</h3>
                <p className="text-gray-700 mb-4">{modalImage.caption}</p>
                <p className="text-gray-500">{modalImage.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <CallToAction
        title="Join Us in Creating More Memories"
        description="Be part of our next event and help us make a difference in our community."
        buttonText="Get Involved"
        buttonLink="/get-involved"
        backgroundImage={CTA_IMAGE}
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
} 