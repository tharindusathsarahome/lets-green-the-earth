import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Get Involved', to: '/get-involved' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'News', to: '/news' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      {({ open }) => (
        <>
          <div className="container-custom">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link 
                    to="/" 
                    className="text-primary text-xl font-heading font-bold flex items-center"
                  >
                    <svg className="h-8 w-8 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z"/>
                    </svg>
                    Let's Green the Earth
                  </Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-4 sm:items-center">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="px-3 py-2 text-sm font-medium hover:text-primary"
                      aria-current={item.to === window.location.pathname ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Donate button (desktop) */}
              <div className="hidden sm:flex sm:items-center">
                <Link
                  to="/donate"
                  className="btn-primary text-sm"
                  aria-label="Donate Now"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile navigation menu */}
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.to}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-white"
                    aria-current={item.to === window.location.pathname ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Link
                  to="/donate"
                  className="block w-full text-center btn-primary mt-4 mx-2"
                  aria-label="Donate Now"
                >
                  Donate Now
                </Link>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
} 