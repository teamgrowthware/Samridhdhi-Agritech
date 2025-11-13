import React, { useState, useEffect } from 'react';
import { Leaf, TrendingUp, Users, Award, ChevronRight } from 'lucide-react';

export default function AgritechLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Leaf, title: 'Eco-Friendly', desc: 'Sustainable agricultural solutions' },
    { icon: TrendingUp, title: 'Growth Focus', desc: 'Boosting farmer productivity' },
    { icon: Users, title: 'Community', desc: 'Supporting rural development' },
    { icon: Award, title: 'Quality', desc: 'Premium product range' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-800">
                Samridhdhi <span className="text-green-600">Agritech</span>
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-green-600 transition">About</a>
              <a href="#products" className="text-gray-600 hover:text-green-600 transition">Products</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to
                <span className="text-green-600 inline-block animate-pulse">Samridhdhi Agritech</span>
               Fertilizer Company
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                "The growth of India is directly related to the growth of the rural areas." We empower farmers with premium agricultural solutions.
              </p>

              {/* <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
                <p className="text-gray-700">
                  Providing customized solutions including insecticides, pesticides, fungicides, 
                  plant growth regulators, micro-nutrients, and comprehensive farm services.
                </p>
              </div> */}

            </div>

            {/* Right Images */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Main Image */}
                <div 
                  className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                >
                  <img 
                    src="https://images.stockcake.com/public/e/6/e/e6e4865c-08b7-4633-b428-f5658462485e_large/farmers-tending-crops-stockcake.jpg" 
                    alt="Farmer" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                </div>

                {/* Secondary Image */}
                <div 
                  className="absolute -bottom-10 -right-10 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white"
                  style={{ transform: `translateY(${scrollY * -0.05}px)` }}
                >
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRii5PhXN6bkzVVpKR5t1KetcDNbLyAfuufaPSGhTsr1pmXB9HRrRe88ZhtAd41mvoedFY&usqp=CAU" 
                    alt="Family farming" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-50 animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold">1000+</div>
              <div className="text-green-100">Happy Farmers</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">50+</div>
              <div className="text-green-100">Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">15+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold">Samridhdhi Agritech</span>
          </div>
          <p className="text-gray-400 mb-4">Empowering farmers, Growing India</p>
          <p className="text-gray-500 text-sm">© 2025 Samridhdhi Agritech Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}