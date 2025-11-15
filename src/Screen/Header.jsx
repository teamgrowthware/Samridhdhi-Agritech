import React from "react";
import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">
              Samridhdhi <span className="text-green-600">Agritech</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
             <a href="/" className="text-gray-600 hover:text-green-600 transition">Home</a>
            <a href="/about" className="text-gray-600 hover:text-green-600 transition">About</a>
              <a href="/ourTeam" className="text-gray-600 hover:text-green-600 transition">Our Team</a>
            <a href="/products" className="text-gray-600 hover:text-green-600 transition">Products</a>
            <a href="/contact" className="text-gray-600 hover:text-green-600 transition">Contact</a>
          </nav>

        </div>
      </div>
    </header>
  );
}
