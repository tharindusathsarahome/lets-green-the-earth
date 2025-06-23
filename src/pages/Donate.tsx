import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';

// Images
const DONATE_HERO = 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80';
const CTA_IMAGE = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80';

// Donation options
const donationOptions = [
  { id: 'option1', amount: 2500, description: 'Provides school supplies for a student' },
  { id: 'option2', amount: 5000, description: 'Plants 10 trees in deforested areas' },
  { id: 'option3', amount: 7500, description: 'Provides medication for 5 elderly individuals' },
  { id: 'option4', amount: 10000, description: 'Funds a counseling program for 10 sessions' },
  { id: 'option5', amount: 20000, description: 'Sponsors a scholarship for a student in need' },
];

// Impact stories
const impactStories = [
  {
    id: 'impact1',
    title: 'Environmental Impact',
    stats: '5,000+ Trees Planted',
    description: 'Your donations have helped us plant over 5,000 trees in deforested areas, contributing to carbon capture and habitat restoration.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'impact2',
    title: 'Educational Impact',
    stats: '1,200+ Students Supported',
    description: "We've provided educational resources, tutoring, and scholarships to over 1,200 students from underserved communities.",
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80',
  },
  {
    id: 'impact3',
    title: 'Mental Health Impact',
    stats: '3,000+ Counseling Sessions',
    description: "Your support has funded over 3,000 counseling sessions, helping individuals navigate life's challenges with professional guidance.",
    image: 'https://plus.unsplash.com/premium_photo-1682001096014-d6f6f7abb60f?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlbHBpbmclMjBlbGRlcmx5fGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
  },
  {
    id: 'impact4',
    title: 'Elderly Care Impact',
    stats: '800+ Elders Assisted',
    description: "We've provided healthcare assistance, companionship, and resources to over 800 elderly individuals in our communities.",
    image: 'https://plus.unsplash.com/premium_photo-1661290203802-e70e01de3a3c?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGhlYWx0aCUyMGNhcmV8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000',
  },
];

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState('option3');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [donationPurpose, setDonationPurpose] = useState('general');

  // Handle custom amount
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount('custom');
    setCustomAmount(e.target.value);
  };

  // Get actual donation amount
  const getActualAmount = () => {
    if (donationAmount === 'custom') {
      return customAmount ? parseInt(customAmount) : 0;
    }
    
    const selectedOption = donationOptions.find(option => option.id === donationAmount);
    return selectedOption ? selectedOption.amount : 0;
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Donate to Make a Difference"
        subtitle="Your contribution supports our work across environmental conservation, education, counseling, and elderly care"
        backgroundImage={DONATE_HERO}
      />
      
      {/* Donation Form Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Your Support Matters</h2>
            <p className="text-lg text-gray-600">
              Every donation, no matter the size, helps us continue our mission of creating a more 
              sustainable, educated, and compassionate world. Your generosity directly funds our 
              programs and initiatives that make a real difference in communities around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Donation Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6">Make a Donation</h3>
                
                {/* Donation Type */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-3">Donation Type</label>
                  <div className="flex">
                    <button
                      type="button"
                      className={`flex-1 py-3 text-center rounded-l-md border ${
                        donationType === 'one-time'
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setDonationType('one-time')}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-3 text-center rounded-r-md border ${
                        donationType === 'monthly'
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setDonationType('monthly')}
                    >
                      Monthly
                    </button>
                  </div>
                </div>
                
                {/* Donation Amount */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-3">Donation Amount</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                    {donationOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        className={`py-3 text-center rounded-md border ${
                          donationAmount === option.id
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setDonationAmount(option.id)}
                      >
                        Rs. {option.amount}
                      </button>
                    ))}
                    <div 
                      className={`py-2 px-3 rounded-md border ${
                        donationAmount === 'custom'
                          ? 'bg-white border-primary ring-2 ring-primary'
                          : 'bg-white border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">$</span>
                        <input
                          type="number"
                          placeholder="Custom"
                          className="w-full focus:outline-none"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          onClick={() => setDonationAmount('custom')}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {donationAmount !== 'custom' && donationOptions.find(option => option.id === donationAmount)?.description}
                  </p>
                </div>
                
                {/* Donation Purpose */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-3">Donation Purpose</label>
                  <select
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={donationPurpose}
                    onChange={(e) => setDonationPurpose(e.target.value)}
                  >
                    <option value="general">General Fund</option>
                    <option value="environmental">Environmental Campaigns</option>
                    <option value="education">Education Programs</option>
                    <option value="counseling">Counseling Services</option>
                    <option value="elderly">Elderly Care</option>
                  </select>
                </div>
                
                {/* Personal Information (Placeholder) */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4">Personal Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-4"
                  />
                </div>
                
                {/* Submit Button */}
                <button className="w-full btn-primary text-lg">
                  Donate Rs. {getActualAmount()} {donationType === 'monthly' ? 'Monthly' : ''}
                </button>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Your donation is tax-deductible to the extent allowed by law.
                    Let's Green the Earth is a registered 501(c)(3) nonprofit organization.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Why Donate?</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% of your donation goes directly to our programs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tax-deductible contribution</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Transparent reporting on how funds are used</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Regular updates on the impact of your donation</span>
                  </li>
                </ul>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold mb-2">Other Ways to Give</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-primary hover:text-primary-dark">
                        Corporate Matching Gifts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:text-primary-dark">
                        Donate Stock or Securities
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:text-primary-dark">
                        Planned Giving
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:text-primary-dark">
                        Donor-Advised Funds
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <p className="text-sm text-gray-600">
                    For questions about donations, please contact our donor services team at
                    <a href="mailto:donate@letsgreenerath.org" className="text-primary ml-1">
                      donate@letsgreenerath.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Your Donation's Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {impactStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-6">
                    <h3 className="text-xl font-bold mb-1">{story.title}</h3>
                    <p className="text-primary font-medium mb-3">{story.stats}</p>
                    <p className="text-gray-600">{story.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Transparency Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Financial Transparency</h2>
            <p className="text-lg text-gray-600">
              We are committed to transparency and accountability in our financial practices. 
              Your trust is important to us, and we want you to know exactly how your donations are used.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h3 className="text-xl font-bold mb-6">How Donations Are Allocated</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light text-white mb-4">
                  <span className="text-xl font-bold">80%</span>
                </div>
                <h4 className="font-bold mb-2">Program Services</h4>
                <p className="text-gray-600 text-sm">
                  Directly supports our environmental, education, counseling, and elderly care programs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-light text-white mb-4">
                  <span className="text-xl font-bold">15%</span>
                </div>
                <h4 className="font-bold mb-2">Administration</h4>
                <p className="text-gray-600 text-sm">
                  Covers essential operations, staff, and infrastructure to run our programs effectively.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-orange text-white mb-4">
                  <span className="text-xl font-bold">5%</span>
                </div>
                <h4 className="font-bold mb-2">Fundraising</h4>
                <p className="text-gray-600 text-sm">
                  Helps us raise awareness and secure additional funds to expand our reach.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="#" 
                className="inline-flex items-center text-primary font-medium"
              >
                View our Annual Report and Financial Statements
                <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2041&q=80" 
                alt="Charity Navigator" 
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
              <h4 className="font-bold mb-2">Four-Star Rating</h4>
              <p className="text-gray-600">
                Charity Navigator
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="GuideStar" 
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
              <h4 className="font-bold mb-2">Platinum Transparency</h4>
              <p className="text-gray-600">
                GuideStar
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1611162618758-2a29a995354b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                alt="BBB Accredited" 
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
              <h4 className="font-bold mb-2">Accredited Charity</h4>
              <p className="text-gray-600">
                Better Business Bureau
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Join Us in Creating a Better World"
        description="Your donation helps us build a more sustainable, educated, and compassionate society for all."
        buttonText="Donate Now"
        buttonLink="/donate"
        backgroundImage={CTA_IMAGE}
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />
    </div>
  );
} 