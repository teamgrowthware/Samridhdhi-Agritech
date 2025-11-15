import React, { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">
              Samridhdhi <span className="text-green-600">Agritech</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">

              <li>
                <Link to="/" className="text-gray-600 hover:text-green-600 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="text-gray-600 hover:text-green-600 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/ourTeam" className="text-gray-600 hover:text-green-600 transition">
                  Our Team
                </Link>
              </li>

              <li>
                <Link to="/products" className="text-gray-600 hover:text-green-600 transition">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-gray-600 hover:text-green-600 transition">
                  Contact
                </Link>
              </li>

            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 hover:text-green-600 transition"
          >
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 text-gray-700 text-lg">

          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-green-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-green-600 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/ourTeam"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-green-600 transition"
            >
              Our Team
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-green-600 transition"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-green-600 transition"
            >
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
}
