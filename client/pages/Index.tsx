import React from 'react';
import { Star, Search, ShoppingCart, User, X, ChevronDown, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white px-4 py-2 text-center relative">
        <div className="text-sm">
          Sign up and get 20% off to your first order.{' '}
          <span className="underline cursor-pointer">Sign Up Now</span>
        </div>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <X size={20} />
        </button>
      </div>

      {/* Navigation Header */}
      <header className="border-b border-gray-100 px-4 lg:px-24 py-4">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <div className="text-2xl lg:text-3xl font-black text-black tracking-tight">SHOP.CO</div>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors">
              <span className="font-medium">Shop</span>
              <ChevronDown size={16} />
            </div>
            <span className="cursor-pointer hover:text-gray-600 transition-colors font-medium">On Sale</span>
            <span className="cursor-pointer hover:text-gray-600 transition-colors font-medium">New Arrivals</span>
            <span className="cursor-pointer hover:text-gray-600 transition-colors font-medium">Brands</span>
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 max-w-xl">
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-3 w-full">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent outline-none flex-1 text-gray-600 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 lg:gap-4">
            <Search size={20} className="lg:hidden cursor-pointer hover:text-gray-600 transition-colors" />
            <ShoppingCart size={20} className="cursor-pointer hover:text-gray-600 transition-colors" />
            <User size={20} className="cursor-pointer hover:text-gray-600 transition-colors" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-100 px-4 lg:px-24 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight lg:leading-none tracking-tight">
              FIND CLOTHES<br className="hidden lg:block" /> THAT MATCHES<br className="hidden lg:block" /> YOUR STYLE
            </h1>
            <p className="text-gray-600 text-base lg:text-lg max-w-lg leading-relaxed">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black text-white px-12 py-4 rounded-full text-base lg:text-lg font-medium hover:bg-gray-800 transition-colors">
              Shop Now
            </button>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-8 pt-6 lg:pt-8">
              <div>
                <div className="text-2xl lg:text-4xl font-bold">200+</div>
                <div className="text-gray-600 text-xs lg:text-sm">International Brands</div>
              </div>
              <div className="border-l border-gray-300 pl-6 lg:pl-8">
                <div className="text-2xl lg:text-4xl font-bold">2,000+</div>
                <div className="text-gray-600 text-xs lg:text-sm">High-Quality Products</div>
              </div>
              <div className="border-l border-gray-300 pl-6 lg:pl-8">
                <div className="text-2xl lg:text-4xl font-bold">30,000+</div>
                <div className="text-gray-600 text-xs lg:text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/30bc3776c31ad10b2e98e542ed18836c9a07d2c6?width=2880" 
              alt="Fashion models" 
              className="w-full h-auto rounded-lg"
            />
            {/* Decorative stars */}
            <div className="absolute top-16 right-8 w-24 h-24">
              <svg viewBox="0 0 104 104" fill="none" className="w-full h-full">
                <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black"/>
              </svg>
            </div>
            <div className="absolute bottom-24 left-8 w-12 h-12">
              <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
                <path d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="bg-black py-8 lg:py-12">
        <div className="px-4 lg:px-24 max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-6 sm:gap-8 lg:gap-16 flex-wrap">
            <div className="text-white font-bold text-lg sm:text-xl lg:text-3xl">VERSACE</div>
            <div className="text-white font-bold text-lg sm:text-xl lg:text-3xl">ZARA</div>
            <div className="text-white font-bold text-lg sm:text-xl lg:text-3xl">GUCCI</div>
            <div className="text-white font-bold text-lg sm:text-xl lg:text-3xl">PRADA</div>
            <div className="text-white font-bold text-lg sm:text-xl lg:text-3xl hidden sm:block">Calvin Klein</div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="px-4 lg:px-24 py-12 lg:py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-black text-center mb-8 lg:mb-12 tracking-tight">NEW ARRIVALS</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            {
              id: "1",
              image: "https://api.builder.io/api/v1/image/assets/TEMP/22995a49d04a8f3970a4eb63b975cb6b7fe646ab?width=592",
              name: "T-SHIRT WITH TAPE DETAILS",
              rating: 4.5,
              price: "$120"
            },
            {
              id: "2",
              image: "https://api.builder.io/api/v1/image/assets/TEMP/5d1fa856e4fe0859626efa29dabb1722cf046199?width=536",
              name: "SKINNY FIT JEANS",
              rating: 3.5,
              price: "$240",
              originalPrice: "$260",
              discount: "-20%"
            },
            {
              id: "3",
              image: "https://api.builder.io/api/v1/image/assets/TEMP/8c395c9e898fc6bb053756174c869d920b5ec9db?width=592",
              name: "CHECKERED SHIRT",
              rating: 4.5,
              price: "$180"
            },
            {
              id: "4",
              image: "https://api.builder.io/api/v1/image/assets/TEMP/71b2911ea12218c8a545b40df02e2e27066f578a?width=592",
              name: "SLEEVE STRIPED T-SHIRT",
              rating: 4.5,
              price: "$130",
              originalPrice: "$160",
              discount: "-30%"
            }
          ].map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer block">
              <div className="bg-gray-100 rounded-xl lg:rounded-2xl overflow-hidden mb-3 lg:mb-4 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-sm lg:text-lg mb-2 lowercase line-clamp-2">{product.name}</h3>
              <div className="flex items-center gap-1 lg:gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`lg:w-4 lg:h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-xs lg:text-sm text-gray-600">{product.rating}/5</span>
              </div>
              <div className="flex flex-wrap items-center gap-1 lg:gap-2">
                <span className="font-bold text-lg lg:text-xl">{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-gray-400 line-through text-sm lg:text-lg">{product.originalPrice}</span>
                    <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs font-medium">{product.discount}</span>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 lg:mt-12">
          <button className="border border-gray-300 px-8 lg:px-12 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium">
            View All
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 mx-4 lg:mx-24 max-w-7xl lg:mx-auto"></div>

      {/* Top Selling */}
      <section className="px-4 lg:px-24 py-12 lg:py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-black text-center mb-8 lg:mb-12 tracking-tight">TOP SELLING</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              image: "https://api.builder.io/api/v1/image/assets/TEMP/ccf3226aaf2b1d5fc854046e4a85d7f1b1126cd2?width=592",
              name: "VERTICAL STRIPED SHIRT",
              rating: 5.0,
              price: "$212",
              originalPrice: "$232",
              discount: "-20%"
            },
            {
              image: "https://api.builder.io/api/v1/image/assets/TEMP/8ee068a8aa0dab44e438466efe12bc26c7c6bfaf?width=588",
              name: "COURAGE GRAPHIC T-SHIRT",
              rating: 4.0,
              price: "$145"
            },
            {
              image: "https://api.builder.io/api/v1/image/assets/TEMP/e551af5ec708f3bcf7696dd4e2f94071a9d2a1da?width=592",
              name: "LOOSE FIT BERMUDA SHORTS",
              rating: 3.0,
              price: "$80"
            },
            {
              image: "https://api.builder.io/api/v1/image/assets/TEMP/39c3606a47758a2493ba802006ec1bceb53bda67?width=504",
              name: "FADED SKINNY JEANS",
              rating: 4.5,
              price: "$210"
            }
          ].map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 lowercase">{product.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{product.rating}/5</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-gray-400 line-through">{product.originalPrice}</span>
                    <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs">{product.discount}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border border-gray-300 px-12 py-3 rounded-full hover:bg-gray-50 transition-colors">
            View All
          </button>
        </div>
      </section>

      {/* Browse by Style */}
      <section className="mx-4 lg:mx-24 my-16">
        <div className="bg-gray-100 rounded-3xl p-8 lg:p-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">BROWSE BY dress STYLE</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-white rounded-xl p-6 relative overflow-hidden h-64">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/3ef07db25253257f38c9abe5069ee34579d5e021?width=1946"
                alt="Casual"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold">Casual</h3>
              </div>
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-xl p-6 relative overflow-hidden h-64">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/065b8471c8380c10da7639d30d08aa8357a2a554?width=2612"
                alt="Formal"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold">Formal</h3>
              </div>
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-xl p-6 relative overflow-hidden h-64">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/3e7dcc1c5903b7c5d950471d08d04a43c66f7ca9?width=1540"
                alt="Party"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold">Party</h3>
              </div>
            </div>
            
            <div className="lg:col-span-1 bg-white rounded-xl p-6 relative overflow-hidden h-64">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4bc201c52bbce4b2f0ac28c671584bb08b929aa1?width=904"
                alt="Gym"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold">Gym</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="px-4 lg:px-24 py-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-12">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {[
            {
              name: "Sarah M.",
              rating: 5,
              review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            },
            {
              name: "Alex K.",
              rating: 5,
              review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
            },
            {
              name: "James L.",
              rating: 5,
              review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
            }
          ].map((review, index) => (
            <div key={index} className="flex-shrink-0 w-80 p-6 border border-gray-200 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <h4 className="font-bold">{review.name}</h4>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{review.review}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mx-4 lg:mx-24 my-16">
        <div className="bg-black rounded-xl p-8 lg:p-16 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3">
                <Mail size={20} className="text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="bg-transparent outline-none flex-1 text-black"
                />
              </div>
              <button className="w-full bg-white text-black font-medium py-3 rounded-full hover:bg-gray-100 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 px-4 lg:px-24 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-2xl font-bold mb-4">SHOP.CO</div>
            <p className="text-gray-600 mb-6 text-sm">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-3">
              {/* Social icons placeholders */}
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide">Company</h4>
            <div className="space-y-3 text-gray-600 text-sm">
              <div>About</div>
              <div>Features</div>
              <div>Works</div>
              <div>Career</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide">Help</h4>
            <div className="space-y-3 text-gray-600 text-sm">
              <div>Customer Support</div>
              <div>Delivery Details</div>
              <div>Terms & Conditions</div>
              <div>Privacy Policy</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide">FAQ</h4>
            <div className="space-y-3 text-gray-600 text-sm">
              <div>Account</div>
              <div>Manage Deliveries</div>
              <div>Orders</div>
              <div>Payments</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide">Resources</h4>
            <div className="space-y-3 text-gray-600 text-sm">
              <div>Free eBooks</div>
              <div>Development Tutorial</div>
              <div>How to - Blog</div>
              <div>Youtube Playlist</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex gap-2">
              {/* Payment method icons placeholders */}
              <div className="w-12 h-8 bg-white border border-gray-200 rounded"></div>
              <div className="w-12 h-8 bg-white border border-gray-200 rounded"></div>
              <div className="w-12 h-8 bg-white border border-gray-200 rounded"></div>
              <div className="w-12 h-8 bg-white border border-gray-200 rounded"></div>
              <div className="w-12 h-8 bg-white border border-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
