import React, { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
  <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">

        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">
              Samridhdhi <span className="text-green-600">Agritech</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <a href="/" className="text-gray-600 hover:text-green-600 transition">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-green-600 transition">About</a>
              </li>
              <li>
                <a href="/ourTeam" className="text-gray-600 hover:text-green-600 transition">Our Team</a>
              </li>
              <li>
                <a href="/products" className="text-gray-600 hover:text-green-600 transition">Products</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-green-600 transition">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-green-600 transition">
              {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 text-gray-700 text-lg">
          <li>
            <a href="/" className="block hover:text-green-600 transition">Home</a>
          </li>
          <li>
            <a href="/about" className="block hover:text-green-600 transition">About</a>
          </li>
          <li>
            <a href="/ourTeam" className="block hover:text-green-600 transition">Our Team</a>
          </li>
          <li>
            <a href="/products" className="block hover:text-green-600 transition">Products</a>
          </li>
          <li>
            <a href="/contact" className="block hover:text-green-600 transition">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
