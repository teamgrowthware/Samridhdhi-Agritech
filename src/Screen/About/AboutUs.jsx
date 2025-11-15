import React, { useState, useEffect } from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

export default function AgricultureHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trained Staff",
      desc: "Expert team providing quality service"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Work",
      desc: "Research-based agro solutions"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Best Delivery",
      desc: "Timely and efficient service"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Best Price",
      desc: "Honest pricing for farmers"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 pt-20 md:pt-24">
        <Header/>
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://media.istockphoto.com/id/960839644/video/young-teenage-girl-farmer-with-digital-tablet-checking-saplings-in-sunny-rural-field-slow.mp4?s=mp4-640x640-is&k=20&c=e0EMnHFB4Ii633Qw1XzhYYCfsHaA81YJZQ8_-FDw1x4="
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-green-600/80 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                Empowering Farmers For A Better Future
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              6 Years of Best Solution
              <br />
              <span className="text-green-400">for Best Cultivation</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              KBC Group empowers farmers with upgraded technology and honest pricing. 
              We prevent exploitation and promote financial freedom through agricultural excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/30 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { number: "1000+", label: "Business Partners" },
              { number: "32+", label: "C&F Centers" },
              { number: "6", label: "Years Experience" },
              { number: "30+", label: "Years Service" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                style={{
                  animation: `fadeIn 0.8s ease-out ${idx * 0.15}s both`
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
<Footer/>
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}