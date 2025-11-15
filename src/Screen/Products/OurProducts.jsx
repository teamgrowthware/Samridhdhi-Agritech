import React, { useState } from 'react';
import { Leaf, ShoppingCart, Star, Check } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const OurProducts = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = [
    { id: 'all', label: 'All Products', icon: '🌾' },
    { id: 'insecticides', label: 'Insecticides', icon: '🐛' },
    { id: 'fungicides', label: 'Fungicides', icon: '🍄' },
    { id: 'regulator', label: 'Growth Regulators', icon: '🌱' },
    { id: 'micro', label: 'Micro Nutrients', icon: '💊' },
    { id: 'water', label: 'Water Soluble', icon: '💧' },
    { id: 'animal', label: 'Animal Feed', icon: '🐄' }
  ];

  const products = [
    { 
      id: 1, 
      category: 'insecticides', 
      img: 'https://agribegri.com/productimage/8637342341730783283.webp', 
      name: 'Taligen 49',
      desc: 'Advanced systemic insecticide for effective control of sucking pests. Provides long-lasting protection for crops.',
      price: 899,
      rating: 4.5,
      inStock: true,
      badge: 'Bestseller'
    },
    { 
      id: 2, 
      category: 'water', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJh_Zu5bqlFBc66I9iyOlgVgOr2EVRw2T-XQ&s', 
      name: 'Nipjak',
      desc: 'Premium water-soluble fertilizer with NPK formula. Enhances nutrient uptake and promotes vigorous growth.',
      price: 1299,
      rating: 4.8,
      inStock: true,
      badge: 'New'
    },
    { 
      id: 3, 
      category: 'insecticides', 
      img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&h=500&fit=crop', 
      name: 'Bahuribal',
      desc: 'Powerful contact and systemic insecticide. Ideal for cotton, vegetables, and fruit crop protection.',
      price: 749,
      rating: 4.3,
      inStock: true,
      badge: null
    },
    { 
      id: 4, 
      category: 'fungicides', 
      img: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=500&h=500&fit=crop', 
      name: 'Nipale',
      desc: 'Broad-spectrum fungicide for prevention and cure of fungal diseases. Ensures healthy plant development.',
      price: 949,
      rating: 4.6,
      inStock: true,
      badge: 'Popular'
    },
    { 
      id: 5, 
      category: 'regulator', 
      img: 'https://assests.cropscience.bayer.in/wp-content/uploads/2024/04/01133423/Vayego-features-benefits.png', 
      name: 'Bardol',
      desc: 'Plant growth regulator for enhanced flowering and fruiting. Improves crop quality and uniformity.',
      price: 1149,
      rating: 4.7,
      inStock: true,
      badge: null
    },
    { 
      id: 6, 
      category: 'insecticides', 
      img: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=500&h=500&fit=crop', 
      name: 'Suraksha 47',
      desc: 'Comprehensive protection against chewing and boring pests. Safe for beneficial insects with proper usage.',
      price: 849,
      rating: 4.4,
      inStock: true,
      badge: 'Eco-Friendly'
    },
    { 
      id: 7, 
      category: 'micro', 
      img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&h=500&fit=crop', 
      name: 'Micromax Plus',
      desc: 'Complete micronutrient mix with Zinc, Boron, and Manganese. Corrects deficiencies and boosts yield.',
      price: 599,
      rating: 4.5,
      inStock: true,
      badge: null
    },
    { 
      id: 8, 
      category: 'fungicides', 
      img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500&h=500&fit=crop', 
      name: 'Fungicare Pro',
      desc: 'Advanced fungicide for rust, blight and mildew control. Rapid action with preventive properties.',
      price: 1099,
      rating: 4.6,
      inStock: true,
      badge: 'Premium'
    },
    { 
      id: 9, 
      category: 'water', 
      img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&h=500&fit=crop', 
      name: 'Hydro Boost',
      desc: 'Water-soluble fertilizer with amino acids. Increases stress tolerance and improves crop quality.',
      price: 1449,
      rating: 4.9,
      inStock: true,
      badge: 'Top Rated'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <Header/>
      {/* Hero Section */}
<div
  className="text-white py-16 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=600&fit=crop')",
  }}
>
  {/* Dark overlay for better text visibility */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="container relative mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Leaf className="w-4 h-4" />
        Trusted Agricultural Solutions
      </div>

      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Quality Products for Better Harvest
      </h1>

      <p className="text-xl text-green-50 mb-8">
        Discover our range of premium agricultural products designed to maximize your crop yield
      </p>

      <div className="flex flex-wrap justify-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5" />
          <span>100% Authentic</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5" />
          <span>Fast Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5" />
          <span>Expert Support</span>
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-300'
                    : 'bg-white text-gray-700 hover:bg-green-50 shadow-md hover:shadow-lg'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Showing <span className="font-bold text-green-600">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-green-100 to-emerald-50 h-64">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-96 h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {product.badge}
                  </div>
                )}
                
                {/* Stock Status */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  In Stock
                </div>

                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {product.desc}
                </p>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Price</p>
                    <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      ₹{product.price}
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 group">
                    <ShoppingCart className="w-5 h-5" />
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
     <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=400&fit=crop" 
              alt="Agricultural field" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Product?</h2>
            <p className="text-lg mb-8 text-green-50">Our agricultural experts are here to assist you</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Expert
              </button>
              <button className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white/30">
                View All Products
              </button>
            </div>
          </div>
        </div>
    
      </div>
      <Footer/>
    </div>
  );
};

export default OurProducts;