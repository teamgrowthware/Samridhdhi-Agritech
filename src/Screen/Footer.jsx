import React, { useState, useEffect } from 'react';
import { Leaf, Facebook, Twitter, Linkedin, Instagram, ArrowUp, ChevronRight, Calendar } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Pest Control',
    'Soil Analysis',
    'Transportation',
    'Farmers Consultations',
    'Telephonic Advisory',
    'Farmer & Dealer Training'
  ];

  const quickLinks = [
    'About Us',
    'Services',
    'Privacy policy',
    'Terms & condition',
    'Contact Us',
    "FAQ's"
  ];

  const news = [
    {
      id: 1,
      title: 'Landscaping Adds Value to Your Property',
      date: 'JAN 03, 2018',
      image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: '3 Reasons to Build A Backyard Fire Pit',
      date: 'JAN 03, 2018',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-green-50 pt-16 pb-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Samridhdhi</h3>
                <p className="text-xs text-green-600 font-medium">AGRITECH LIMITED</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Samridhdhi Agritech is company is made up of a group of highly skilled gardening, landscaping professionals and who pays a lot of attention to small details.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-green-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li
                  key={idx}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  className={`group flex items-center gap-2 text-gray-600 hover:text-green-600 transition-all duration-300 cursor-pointer ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
                >
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          {/* <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 relative inline-block">
              Latest News
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-green-500 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              {news.map((item, idx) => (
                <div
                  key={item.id}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  className={`group bg-white rounded-xl p-3 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                >
                  <div className="flex gap-3">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 relative inline-block">
              Quick Link
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-green-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li
                  key={idx}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  className={`group flex items-center gap-2 text-gray-600 hover:text-green-600 transition-all duration-300 cursor-pointer ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
                >
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-gray-200 pt-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center text-gray-600 text-sm">
            <p>
              Copyright © 2023 Samridhdhi Agritech. All Rights Reserved. Developed by{' '}
              <span className="text-green-600 font-semibold hover:text-green-700 cursor-pointer transition-colors">
                Lucent Technosoft
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center transform hover:scale-110 transition-all duration-300 animate-bounce-in z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounceIn 0.5s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </footer>
  );
};

export default Footer;