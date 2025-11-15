import React, { useState, useEffect } from 'react';
import { Users, Award, Target, TrendingUp } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const teamMembers = [
    { name: "Mr. S. S. Sisodiya", title: "Regional Sales Manager", image: "https://placehold.co/150x150/4F46E5/FFFFFF?text=S.S.S" },
    { name: "Mr. S. S. Rajput", title: "Regional Sales Manager", image: "https://placehold.co/150x150/4F46E5/FFFFFF?text=S.S.R" },
    { name: "Mr. S. S. Solanki", title: "Divisional Sales Manager", image: "https://placehold.co/150x150/4F46E5/FFFFFF?text=S.S.S" },
    { name: "Mr. Surendra Singh", title: "Branch Manager", image: "https://placehold.co/150x150/4F46E5/FFFFFF?text=S.S" },
    { name: "Mr. Vishwanath Singh", title: "Branch Manager", image: "https://placehold.co/150x150/4F46E5/FFFFFF?text=V.S" },
    { name: "Mr. Bablu Patel", title: "Branch Manager", image: "https://placehold.co/150x150/4F46E5/FFFFFF?text=B.P" },
    { name: "Mr. Rajendra Mandloi", title: "Branch Manager", image: "https://placehold.co/150x150/4F46E5/FFFFFF?text=R.M" },
    { name: "Mr. Praveen Mohe", title: "Branch Manager", image: "https://placehold.co/150x150/4F46E5/FFFFFF?text=P.M" },
];

const stats = [
    { icon: Users, label: "Team Members", value: "50+", color: "blue" },
    { icon: Award, label: "Years Experience", value: "15+", color: "green" },
    { icon: Target, label: "Projects Done", value: "200+", color: "purple" },
    { icon: TrendingUp, label: "Growth Rate", value: "25%", color: "orange" },
];

const TeamCard = ({ name, title, image, delay }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
        >
            <div className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-blue-100 group-hover:border-blue-400 transition-colors duration-300">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="text-center">
                    <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon: Icon, label, value, color, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);

    const colorMap = {
        blue: 'bg-blue-100 text-blue-600',
        green: 'bg-green-100 text-green-600',
        purple: 'bg-purple-100 text-purple-600',
        orange: 'bg-orange-100 text-orange-600',
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (isVisible && value.includes('+')) {
            const target = parseInt(value);
            const duration = 2000;
            const steps = 50;
            const increment = target / steps;
            let current = 0;

            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setCount(target);
                    clearInterval(counter);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(counter);
        }
    }, [isVisible, value]);

    return (
        <div
            className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
        >
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className={`w-14 h-14 mx-auto rounded-full ${colorMap[color]} flex items-center justify-center mb-3`}>
                    <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                    {value.includes('+') ? `${count}+` : value.includes('%') ? `${count}%` : value}
                </h3>
                <p className="text-sm text-gray-600">{label}</p>
            </div>
        </div>
    );
};

export default function OurTeam() {
    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setHeaderVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />
            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/1353457944/photo/farmers-and-sales-representative-checking-soybean-crop-quality.jpg?s=612x612&w=0&k=20&c=6awsoXBsTilb1opV4Fp75_iorwRJW6l6uzJJpIJlKRU=')"
                }}
            >
                {/* Dark/Color Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Light blurred effects */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                </div>

                {/* Text Content */}
                <div
                    className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center transform transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                        }`}
                >
                    <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        About Us
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Meet Our Team
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                        Passionate professionals driving innovation and success together
                    </p>
                </div>
            </div>


            {/* Stats Section */}
            <section className="py-6  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, idx) => (
                        <StatCard key={idx} {...stat} delay={idx * 150} />
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="py-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-3">
                        LEADERSHIP
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Our Leadership Team
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Dedicated managers driving success across regions with expertise and passion
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, idx) => (
                        <TeamCard key={idx} {...member} delay={idx * 100} />
                    ))}
                </div>
            </section>

            {/* Mission Section */}
          <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left Section */}
            <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    We are committed to delivering excellence in every project we undertake. Our team of dedicated professionals works tirelessly to ensure innovation, quality, and customer satisfaction remain at the forefront of everything we do.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    With years of experience and a passion for growth, we continue to expand our horizons while maintaining the core values that have made us successful.
                </p>

                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Learn More
                </button>
            </div>

            {/* Right Section — Image */}
            <div className="relative">
                <div
                    className="aspect-square rounded-2xl shadow-xl bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://www.indianchemicalnews.com/public/thumbs/news/2025/08/27194/Digital_Agriculture_Mission.jpg')",
                    }}
                ></div>
            </div>

        </div>
    </div>
</section>

            <Footer/>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.1;
                    }
                    50% {
                        opacity: 0.2;
                    }
                }
            `}</style>

        </div>
    );
}