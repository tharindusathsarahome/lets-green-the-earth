import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';

// Images
const GET_INVOLVED_HERO = 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80';
const VOLUNTEER_IMAGE = 'https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80';
const DONATE_IMAGE = 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80';
const PARTNER_IMAGE = 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80';
const FUNDRAISE_IMAGE = 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80';

export default function GetInvolved() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Get Involved"
        subtitle="Join our community of changemakers and help us create a greener, more compassionate world"
        backgroundImage={GET_INVOLVED_HERO}
        primaryButtonText="Volunteer Now"
        primaryButtonLink="/get-involved/volunteer"
        secondaryButtonText="Donate"
        secondaryButtonLink="/donate"
      />
      
      {/* Intro Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Be Part of the Change</h2>
            <p className="text-lg text-gray-600">
              Let's Green the Earth thrives on the passion and dedication of people like you. Whether you 
              have time, skills, funds, or connections to offer, there's a way for you to contribute to 
              our mission and make a tangible difference in communities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Ways to Get Involved</h2>
          
          {/* Volunteer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-primary text-2xl font-bold mb-4">Volunteer Your Time & Skills</h3>
              <p className="text-gray-600 mb-6">
                Our volunteers are the heart of our organization. From planting trees to teaching 
                classes, providing counseling services, or helping with administrative tasks, there 
                are numerous ways to contribute your time and expertise.
              </p>
              <div className="mb-6">
                <h4 className="font-bold mb-2">Volunteer Opportunities:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Environmental conservation activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tutoring and educational support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mental health counseling (for qualified professionals)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Elderly companionship and care</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Event planning and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Marketing, design, and social media support</span>
                  </li>
                </ul>
              </div>
              <Link to="/get-involved/volunteer" className="btn-primary">Become a Volunteer</Link>
            </div>
            <div>
              <img 
                src={VOLUNTEER_IMAGE} 
                alt="Volunteers planting trees" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          {/* Donate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <img 
                src={DONATE_IMAGE} 
                alt="Donation being made" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-secondary text-2xl font-bold mb-4">Make a Donation</h3>
              <p className="text-gray-600 mb-6">
                Your financial contribution helps us sustain and expand our programs, reaching more 
                communities and creating greater impact. Every donation, no matter the size, makes a 
                difference in our ability to serve.
              </p>
              <div className="mb-6">
                <h4 className="font-bold mb-2">Where Your Money Goes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>$25 provides school supplies for a student</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>$50 plants 10 trees in deforested areas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>$100 provides medication for 5 elderly individuals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>$250 funds a counseling program for 10 sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>$500 sponsors a scholarship for a student in need</span>
                  </li>
                </ul>
              </div>
              <Link to="/donate" className="btn-secondary">Donate Now</Link>
            </div>
          </div>
          
          {/* Partner With Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-accent-orange text-2xl font-bold mb-4">Partner With Us</h3>
              <p className="text-gray-600 mb-6">
                Corporate and organizational partnerships help us scale our impact and reach more 
                communities. We work with businesses, schools, government agencies, and other nonprofits 
                to create collaborative initiatives that benefit everyone involved.
              </p>
              <div className="mb-6">
                <h4 className="font-bold mb-2">Partnership Opportunities:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-orange mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Corporate social responsibility initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-orange mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sponsored events and programs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-orange mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Employee volunteer days</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-orange mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Joint advocacy and awareness campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-orange mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>In-kind donations and service provisions</span>
                  </li>
                </ul>
              </div>
              <Link to="/get-involved/partners" className="btn-accent">Explore Partnerships</Link>
            </div>
            <div>
              <img 
                src={PARTNER_IMAGE} 
                alt="Partners in meeting" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          {/* Fundraise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={FUNDRAISE_IMAGE} 
                alt="Community fundraising event" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-primary text-2xl font-bold mb-4">Start a Fundraiser</h3>
              <p className="text-gray-600 mb-6">
                Create your own fundraising campaign to support our work. Whether it's a birthday 
                fundraiser, a sponsored challenge, a community event, or a school project, your 
                creative fundraising efforts can make a significant impact.
              </p>
              <div className="mb-6">
                <h4 className="font-bold mb-2">Fundraising Ideas:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Birthday or celebration fundraisers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sponsored athletic challenges (walks, runs, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Bake sales, craft fairs, or garage sales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>School or university projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Online streaming events or challenges</span>
                  </li>
                </ul>
              </div>
              <Link to="/get-involved/fundraise" className="btn-outline">Start a Fundraiser</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h4 className="font-bold mb-2">How much time do I need to commit as a volunteer?</h4>
              <p className="text-gray-600">
                We welcome volunteers with varying availability. You can volunteer for one-time events, 
                commit to regular weekly or monthly hours, or take on project-based roles. We work with 
                your schedule to find the right opportunity for you.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-bold mb-2">Is my donation tax-deductible?</h4>
              <p className="text-gray-600">
                Yes, Let's Green the Earth is a registered nonprofit organization, and all donations are 
                tax-deductible to the extent allowed by law. You will receive a receipt for your donation 
                for tax purposes.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-bold mb-2">Can I volunteer remotely?</h4>
              <p className="text-gray-600">
                Absolutely! We have many remote volunteer opportunities, including virtual tutoring, 
                social media management, graphic design, fundraising, and administrative support.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-bold mb-2">How do I set up a corporate partnership?</h4>
              <p className="text-gray-600">
                Contact our partnerships team at partners@letsgreenerath.org to discuss potential 
                collaboration opportunities. We'll work with you to create a partnership that aligns 
                with your organization's values and goals.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Can I specify where my donation goes?</h4>
              <p className="text-gray-600">
                Yes, you can designate your donation to support a specific program area (environmental 
                campaigns, education, counseling, or elderly care). Just indicate your preference when 
                making your donation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to Make a Difference?"
        description="Join our community of changemakers today and help us build a better world for all."
        buttonText="Get Started"
        buttonLink="/get-involved/volunteer"
        backgroundImage={GET_INVOLVED_HERO}
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
} 