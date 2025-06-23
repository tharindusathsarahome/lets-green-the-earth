import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';

// Images
const NEWS_HERO = 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dm9sdW50ZWVyfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000';
const CTA_IMAGE = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80';

// News data
const newsItems = [
  {
    id: 'news1',
    title: 'Annual Tree Planting Drive Exceeds Target by 50%',
    summary: "This year's tree planting campaign has surpassed all expectations, with over 1,500 trees planted across three local parks, exceeding our target by more than 50%. The initiative brought together over 200 volunteers from local schools, businesses, and community groups.",
    date: 'May 15, 2023',
    category: 'Environmental',
    image: 'https://images.unsplash.com/photo-1575401232139-20bbeb4633dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    slug: 'tree-planting-drive'
  },
  {
    id: 'news2',
    title: 'Education Program Expansion Reaches Five New Communities',
    summary: "We're excited to announce the expansion of our education support program to five new underserved communities. The expansion will provide tutoring, school supplies, and digital literacy training to an additional 500 students starting next month.",
    date: 'April 28, 2023',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    slug: 'education-expansion'
  },
  {
    id: 'news3',
    title: 'Elderly Care Medical Camp Serves Over 100 Seniors',
    summary: 'Our recent medical camp provided free health check-ups, medication, and follow-up care to over 100 elderly residents. The event, supported by volunteer healthcare professionals, also offered nutrition counseling and mobility aid distribution.',
    date: 'April 10, 2023',
    category: 'Elderly Care',
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    slug: 'elderly-care-camp'
  },
  {
    id: 'news4',
    title: 'New Mental Health Center Opens in Downtown District',
    summary: 'We are proud to announce the opening of our new mental health counseling center in the downtown district. The facility will offer free and low-cost counseling services, support groups, and mental health workshops to community members in need.',
    date: 'March 25, 2023',
    category: 'Counseling',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    slug: 'mental-health-center'
  },
  {
    id: 'news5',
    title: 'Corporate Partnership Program Launches with Five Major Companies',
    summary: "Let's Green the Earth has launched a new corporate partnership program with five major companies committing to support our environmental and educational initiatives. The partnerships will include funding, employee volunteer days, and joint sustainability projects.",
    date: 'March 12, 2023',
    category: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    slug: 'corporate-partnerships'
  },
  {
    id: 'news6',
    title: 'Annual Fundraising Gala Raises Record $250,000',
    summary: 'Our annual fundraising gala was a tremendous success, raising a record $250,000 to support our four pillars of service. The event featured inspiring speeches from program beneficiaries, a silent auction, and recognition of our most dedicated volunteers and donors.',
    date: 'February 28, 2023',
    category: 'Fundraising',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    slug: 'fundraising-gala'
  },
];

// Upcoming events data
const upcomingEvents = [
  {
    id: 'event1',
    title: 'Community Park Clean-Up Day',
    date: 'June 10, 2023',
    time: '9:00 AM - 1:00 PM',
    location: 'Riverside Park',
    category: 'Environmental',
    slug: 'park-cleanup'
  },
  {
    id: 'event2',
    title: 'STEM Workshop for Middle School Girls',
    date: 'June 17, 2023',
    time: '10:00 AM - 3:00 PM',
    location: 'Community Center',
    category: 'Education',
    slug: 'stem-workshop'
  },
  {
    id: 'event3',
    title: 'Mental Health Awareness Walk',
    date: 'June 24, 2023',
    time: '8:00 AM - 11:00 AM',
    location: 'Downtown District',
    category: 'Counseling',
    slug: 'awareness-walk'
  },
  {
    id: 'event4',
    title: 'Senior Tech Training Workshop',
    date: 'July 1, 2023',
    time: '1:00 PM - 4:00 PM',
    location: 'Public Library',
    category: 'Elderly Care',
    slug: 'tech-workshop'
  },
];

// Category colors
const categoryColors: Record<string, string> = {
  'Environmental': 'bg-primary text-white',
  'Education': 'bg-accent-yellow text-gray-900',
  'Counseling': 'bg-secondary text-white',
  'Elderly Care': 'bg-accent-brown text-white',
  'Partnerships': 'bg-accent-orange text-white',
  'Fundraising': 'bg-gray-800 text-white',
};

export default function News() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="News & Events"
        subtitle="Stay updated with our latest initiatives, success stories, and upcoming events"
        backgroundImage={NEWS_HERO}
      />
      
      {/* Latest News Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Latest News</h2>
            <p className="text-lg text-gray-600">
              Stay informed about our recent activities, achievements, and the impact we're making in 
              communities around the world. Learn about the latest developments across all our service areas.
            </p>
          </div>
          
          {/* Feature Article */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={newsItems[0].image} 
                    alt={newsItems[0].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className={`text-xs inline-block px-3 py-1 rounded-full mb-3 ${categoryColors[newsItems[0].category]}`}>
                    {newsItems[0].category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{newsItems[0].title}</h3>
                  <p className="text-gray-500 mb-2">{newsItems[0].date}</p>
                  <p className="text-gray-700 mb-4">{newsItems[0].summary}</p>
                  <Link to={`/news/${newsItems[0].slug}`} className="text-primary font-medium inline-flex items-center">
                    Read Full Story
                    <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className={`text-xs inline-block px-3 py-1 rounded-full mb-3 ${categoryColors[news.category]}`}>
                    {news.category}
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{news.summary}</p>
                  <Link to={`/news/${news.slug}`} className="text-primary font-medium inline-flex items-center">
                    Read More
                    <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/news/archive" className="btn-outline">
              View All News
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">
              Join us at one of our upcoming events to get involved, learn more about our work, 
              and connect with our community of changemakers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6 flex">
                <div className="mr-6 text-center">
                  <div className="bg-primary text-white p-2 rounded-t-lg">
                    <span className="text-sm font-medium">
                      {event.date.split(',')[0].split(' ')[0]}
                    </span>
                  </div>
                  <div className="bg-white border border-primary text-primary py-2 px-4 rounded-b-lg font-bold text-2xl">
                    {event.date.split(' ')[1].replace(',', '')}
                  </div>
                </div>
                
                <div>
                  <div className={`text-xs inline-block px-3 py-1 rounded-full mb-2 ${categoryColors[event.category]}`}>
                    {event.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="mb-3 text-gray-600">
                    <div className="flex items-center mb-1">
                      <svg className="h-4 w-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-4 w-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Link to={`/events/${event.slug}`} className="text-primary font-medium inline-flex items-center">
                    Event Details
                    <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/events/calendar" className="btn-outline">
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay up-to-date with our latest news, events, and opportunities to get involved. 
              We send out a monthly newsletter with updates and stories from our work.
            </p>
            <form className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Make a Difference Today"
        description="Join our next event and be part of the change you want to see in the world."
        buttonText="Volunteer Now"
        buttonLink="/get-involved/volunteer"
        backgroundImage={CTA_IMAGE}
        secondaryButtonText="Donate"
        secondaryButtonLink="/donate"
      />
    </div>
  );
} 