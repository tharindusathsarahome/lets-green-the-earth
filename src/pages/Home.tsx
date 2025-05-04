import { Link } from 'react-router-dom';
import { HeartIcon, BookOpenIcon, TreeIcon as HeroTreeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CallToAction from '../components/CallToAction';

// Temporary placeholder images until we have real ones
const HERO_IMAGE = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80';
const COUNSELING_IMAGE = 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
const EDUCATION_IMAGE = 'https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2036&q=80';
const ENVIRONMENT_IMAGE = 'https://images.unsplash.com/photo-1542601600647-3a722a90a76c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2013&q=80';
const ELDERLY_IMAGE = 'https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
const CTA_IMAGE = 'https://images.unsplash.com/photo-1552575450-0b9eb427c3e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

// Mock service icons - in a real app we would import SVGs
const CustomTreeIcon = () => (
  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Uniting Humanity to Green the Earth"
        subtitle="A global volunteer society dedicated to environmental sustainability, education, counseling, and elderly care."
        backgroundImage={HERO_IMAGE}
        primaryButtonText="Get Involved"
        secondaryButtonText="Donate Now"
      />

      {/* Mission & Vision Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Let's Green the Earth is a global volunteer society committed to creating a sustainable, 
              educated, and compassionate world through environmental stewardship, education access, 
              mental health support, and elderly care - regardless of nationality, gender, religion, or caste.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5K+</div>
              <div className="text-gray-600">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-gray-600">Students Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3K+</div>
              <div className="text-gray-600">Counseling Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">800+</div>
              <div className="text-gray-600">Elders Assisted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Our four pillars of service work together to create sustainable communities 
              and provide support to those in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Counseling Services */}
            <ServiceCard
              title="Counseling Services"
              description="Professional mental health support and guidance for individuals facing challenges, provided by trained volunteers and professionals."
              icon={<HeartIcon className="h-10 w-10" />}
              link="/services/counseling"
              buttonText="Learn More"
              colorClass="text-secondary"
              bgColorClass="bg-secondary"
              hoverColorClass="hover:bg-secondary-dark"
              imageUrl={COUNSELING_IMAGE}
            />

            {/* Free Education Support */}
            <ServiceCard
              title="Free Education Support"
              description="Educational resources, tutoring, and scholarship opportunities for children and young adults in underserved communities."
              icon={<BookOpenIcon className="h-10 w-10" />}
              link="/services/education"
              buttonText="Learn More"
              colorClass="text-accent-yellow"
              bgColorClass="bg-accent-yellow"
              hoverColorClass="hover:bg-accent-orange"
              imageUrl={EDUCATION_IMAGE}
            />

            {/* Environmental Campaigns */}
            <ServiceCard
              title="Environmental Campaigns"
              description="Tree planting initiatives, clean-up events, and sustainability education to protect and restore our natural environment."
              icon={<CustomTreeIcon />}
              link="/services/environment"
              buttonText="Learn More"
              colorClass="text-primary"
              bgColorClass="bg-primary"
              hoverColorClass="hover:bg-primary-dark"
              imageUrl={ENVIRONMENT_IMAGE}
            />

            {/* Elderly Medical Support */}
            <ServiceCard
              title="Elderly Medical Support"
              description="Healthcare assistance, companionship, and resources for elderly individuals to maintain dignity and wellbeing."
              icon={<UserGroupIcon className="h-10 w-10" />}
              link="/services/elderly-care"
              buttonText="Learn More"
              colorClass="text-accent-brown"
              bgColorClass="bg-accent-brown"
              hoverColorClass="hover:bg-accent-brown"
              imageUrl={ELDERLY_IMAGE}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Impact Stories</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Hear from the people whose lives have been touched by our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The counseling services helped me through the most difficult time in my life. I found hope again thanks to the caring volunteers."
              name="Anita K."
              role="Counseling Service Recipient"
            />
            <TestimonialCard
              quote="Without the education support program, I wouldn't have been able to continue my studies. Now I'm the first in my family to attend university."
              name="Miguel R."
              role="Education Program Graduate"
            />
            <TestimonialCard
              quote="Participating in the tree planting campaign gave me purpose and connection to my community. It's amazing to see the forest grow year after year."
              name="Sarah T."
              role="Volunteer"
            />
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How You Can Help</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              There are many ways to contribute to our mission, no matter where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-light inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Join our global network of volunteers and contribute your time and skills to our programs.
              </p>
              <Link to="/get-involved/volunteer" className="text-primary font-medium inline-flex items-center">
                Become a Volunteer
                <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-secondary-light inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Donate</h3>
              <p className="text-gray-600 mb-6">
                Your financial contribution helps us sustain and expand our services for those in need.
              </p>
              <Link to="/donate" className="text-secondary font-medium inline-flex items-center">
                Make a Donation
                <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-accent-orange inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Partner With Us</h3>
              <p className="text-gray-600 mb-6">
                Organizations can partner with us to create greater impact through collaborative initiatives.
              </p>
              <Link to="/get-involved/partners" className="text-accent-orange font-medium inline-flex items-center">
                Explore Partnerships
                <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <CallToAction
        title="Join Our Mission Today"
        description="Together, we can create a greener, more compassionate world for all."
        buttonText="Get Involved"
        buttonLink="/get-involved"
        backgroundImage={CTA_IMAGE}
        secondaryButtonText="Donate Now"
        secondaryButtonLink="/donate"
      />

      {/* Latest News & Events Preview */}
      <section className="section">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2>Latest News & Events</h2>
            <Link to="/news" className="text-primary hover:text-primary-dark font-medium">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1575401232139-20bbeb4633dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Tree planting event" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">May 15, 2023</div>
                <h3 className="text-xl font-bold mb-2">Annual Tree Planting Drive</h3>
                <p className="text-gray-600 mb-4">Join us for our biggest tree planting event of the year. Let's restore our local forests together!</p>
                <Link to="/news/tree-planting-drive" className="text-primary font-medium">
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Education workshop" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 28, 2023</div>
                <h3 className="text-xl font-bold mb-2">Education Program Expansion</h3>
                <p className="text-gray-600 mb-4">We're excited to announce the expansion of our education program to 5 new communities.</p>
                <Link to="/news/education-expansion" className="text-primary font-medium">
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Elderly care" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 10, 2023</div>
                <h3 className="text-xl font-bold mb-2">Elderly Care Medical Camp</h3>
                <p className="text-gray-600 mb-4">Our upcoming medical camp will provide free health check-ups and medical supplies to elderly residents.</p>
                <Link to="/news/elderly-care-camp" className="text-primary font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 