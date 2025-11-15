import React, { useState, useEffect } from 'react';
import { Leaf, TrendingUp, Users, Award, ChevronRight } from 'lucide-react';
import ServicesOffer from './Components/ServicesOffer';
import RecentProduct from './Components/RecentProducts';
import WhyChooseUs from './Components/WhyChooseUs';
import Footer from '../Footer';
import ContactPage from './Components/ContactPage';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate=useNavigate()

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
 <Header/>

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
      <ServicesOffer />
      <RecentProduct />
      <WhyChooseUs />
      <ContactPage/>

      <Footer />
    </div>
  );
}