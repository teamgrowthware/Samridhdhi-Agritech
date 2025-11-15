import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RecentProduct = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate=useNavigate()

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'insecticides', label: 'Insecticides' },
    { id: 'fungicides', label: 'Fungicides' },
    { id: 'regulator', label: 'Regulator / Promoter' },
    { id: 'micro', label: 'Micro Nutrients' },
    { id: 'water', label: 'Water Soluble' },
    { id: 'animal', label: 'Animal Feed Supplements' }
  ];

  const products = [
    { id: 1, category: 'insecticides', img: 'https://agribegri.com/productimage/8637342341730783283.webp', name: 'Taligen 49' },
    { id: 2, category: 'water', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJh_Zu5bqlFBc66I9iyOlgVgOr2EVRw2T-XQ&s', name: 'Nipjak' },
    { id: 3, category: 'insecticides', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&h=400&fit=crop', name: 'Bahuribal' },
    { id: 4, category: 'fungicides', img: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=400&h=400&fit=crop', name: 'Nipale' },
    { id: 5, category: 'regulator', img: 'https://assests.cropscience.bayer.in/wp-content/uploads/2024/04/01133423/Vayego-features-benefits.png', name: 'Bardol' },
    { id: 6, category: 'insecticides', img: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=400&h=400&fit=crop', name: 'Suraksha 47' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            Latest Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Recent Products
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{ animationDelay: `${idx * 50}ms` }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 animate-slide-up ${
                activeCategory === cat.id
                  ? 'bg-green-600 text-white shadow-lg shadow-green-200'
                  : 'bg-white text-gray-600 hover:bg-green-50 shadow-md'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              style={{ animationDelay: `${idx * 100}ms` }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up "
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-green-100 to-green-50 aspect-square">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                {/* <button className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center gap-2 group">
                  View Details
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center animate-fade-in">
          <button onClick={()=>navigate("/products")}
           className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            See More Products
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideUp 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default RecentProduct;