import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';

// Service images
const SERVICES_HERO = 'https://plus.unsplash.com/premium_photo-1681140561031-44c3d98ac84e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZvbHVudGVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000';
const COUNSELING_IMAGE = 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
const EDUCATION_IMAGE = 'https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2036&q=80';
const ENVIRONMENT_IMAGE = 'https://plus.unsplash.com/premium_photo-1681140560906-4610ee700d1b?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000';
const ELDERLY_IMAGE = 'https://plus.unsplash.com/premium_photo-1663054397533-2a3fb0cab5de?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGNhcmV8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000';
const CTA_IMAGE = 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80';

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="Discover how we're making a difference through our four pillars of service"
        backgroundImage={SERVICES_HERO}
        primaryButtonText="Get Involved"
        primaryButtonLink="/get-involved"
        secondaryButtonText="Donate Now"
        secondaryButtonLink="/donate"
      />
      
      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Making a Difference Through Service</h2>
            <p className="text-lg text-gray-600">
              At Let's Green the Earth, we believe in a holistic approach to community well-being. 
              Our four pillars of service work together to create sustainable communities where 
              people and the environment can thrive together.
            </p>
          </div>
        </div>
      </section>

      {/* Counseling Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-medium">Pillar 1</span>
              <h2 className="mb-4">Counseling Services</h2>
              <p className="text-gray-600 mb-6">
                Our professional mental health counseling services provide support to individuals facing 
                challenges in their lives. We believe that emotional well-being is a fundamental right,
                and our network of trained volunteers and professionals offers:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Individual counseling sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Group therapy and support groups</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Crisis intervention support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mental health awareness workshops</span>
                </li>
              </ul>
              <Link to="/services/counseling" className="btn-secondary">Learn More</Link>
            </div>
            <div>
              <img 
                src={COUNSELING_IMAGE} 
                alt="Counseling session" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Support */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={EDUCATION_IMAGE} 
                alt="Education support program" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-accent-yellow font-medium">Pillar 2</span>
              <h2 className="mb-4">Free Education Support</h2>
              <p className="text-gray-600 mb-6">
                Education is a powerful tool for change. Our free education support programs aim to break 
                down barriers to learning and help students of all ages reach their full potential through:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent-yellow mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>After-school tutoring programs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent-yellow mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Scholarship opportunities for higher education</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent-yellow mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>School supply distribution</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent-yellow mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Digital literacy and technology access programs</span>
                </li>
              </ul>
              <Link to="/services/education" className="btn-accent">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Campaigns */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">Pillar 3</span>
              <h2 className="mb-4">Environmental Campaigns</h2>
              <p className="text-gray-600 mb-6">
                Our environment is our home, and its protection is essential for the future of all life. 
                Our environmental campaigns focus on conservation, sustainability, and education through:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Tree planting initiatives in urban and rural areas</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Beach, river, and park clean-up events</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Environmental education workshops for schools and communities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sustainable living advocacy and community gardens</span>
                </li>
              </ul>
              <Link to="/services/environment" className="btn-primary">Learn More</Link>
            </div>
            <div>
              <img 
                src={ENVIRONMENT_IMAGE} 
                alt="Tree planting event" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Elderly Care */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={ELDERLY_IMAGE} 
                alt="Elderly care program" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-accent-brown font-medium">Pillar 4</span>
              <h2 className="mb-4">Elderly Medical Support</h2>
              <p className="text-gray-600 mb-6">
                Our elderly community members deserve dignity, respect, and quality care. Our elderly 
                medical support services work to ensure that seniors can maintain their health and wellbeing through:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent-brown mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free medical check-up camps</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent-brown mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Medication assistance and delivery services</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent-brown mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Companionship and social engagement programs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent-brown mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Home safety assessments and modifications</span>
                </li>
              </ul>
              <Link to="/services/elderly-care" className="btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to Get Involved?"
        description="Join us in making a difference through our service programs."
        buttonText="Volunteer Now"
        buttonLink="/get-involved"
        backgroundImage={CTA_IMAGE}
        secondaryButtonText="Make a Donation"
        secondaryButtonLink="/donate"
      />
    </div>
  );
} 