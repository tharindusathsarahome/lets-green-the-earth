import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';

// Placeholder image
const ABOUT_HERO_IMAGE = 'https://freepackers.com/wp-content/uploads/2022/11/jeune-2.jpg';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About Let's Green the Earth"
        subtitle="Our story, mission, and the people behind our global volunteer society"
        backgroundImage={ABOUT_HERO_IMAGE}
        primaryButtonText="Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Join Our Team"
        secondaryButtonLink="/get-involved/volunteer"
      />

      {/* Mission & Vision Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Let's Green the Earth is a global volunteer society committed to creating a sustainable, 
              educated, and compassionate world through environmental stewardship, education access, 
              mental health support, and elderly care - regardless of nationality, gender, religion, or caste.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Join Our Global Community"
        description="Become part of a worldwide movement dedicated to positive change."
        buttonText="Volunteer With Us"
        buttonLink="/get-involved/volunteer"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </div>
  );
} 