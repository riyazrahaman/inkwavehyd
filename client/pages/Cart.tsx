import { Star, Search, ShoppingCart, User, X, ChevronDown, Mail, ChevronRight, Minus, Plus, Trash2, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/884f68de3c05e22bbe60c8d89385b15addb9e606?width=250",
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1
    },
    {
      id: 2,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b516d75070eb419a45e0d23e6ad0b4f5d9b9f6c0?width=250",
      name: "CHECKERED SHIRT",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1
    },
    {
      id: 3,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/dec97173ccbf5ece314def44e30b432bb46511f0?width=204",
      name: "SKINNY FIT JEANS",
      size: "Large", 
      color: "Blue",
      price: 240,
      quantity: 1
    }
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = Math.round(subtotal * 0.2); // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white px-4 py-2 text-center relative">
        <div className="text-sm">
          Sign up and get 20% off to your first order.{' '}
          <span className="underline cursor-pointer">Sign Up Now</span>
        </div>
        <X className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer" />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-4 lg:px-24 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl lg:text-3xl font-black">inkwavehyd</Link>
        
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/category/casual" className="flex items-center gap-1 cursor-pointer">
            <span>Shop</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
          <span className="cursor-pointer">On Sale</span>
          <span className="cursor-pointer">New Arrivals</span>
          <span className="cursor-pointer">Brands</span>
        </div>

        <div className="flex-1 max-w-md mx-4 lg:mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Breadcrumb */}
      <div className="px-4 lg:px-24 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-black">Cart</span>
        </div>
      </div>

      <div className="px-4 lg:px-24 max-w-7xl mx-auto pb-16">
        {/* Page Title */}
        <h1 className="text-3xl lg:text-4xl font-black mb-8">YOUR CART</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="border border-gray-200 rounded-3xl p-6">
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex items-center gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-32 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>Size: <span className="text-gray-500">{item.size}</span></div>
                              <div>Color: <span className="text-gray-500">{item.color}</span></div>
                            </div>
                            <div className="font-bold text-xl mt-3">${item.price}</div>
                          </div>

                          {/* Delete and Quantity Controls */}
                          <div className="flex flex-col items-end gap-3">
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-6 h-6" />
                            </button>

                            {/* Quantity Controls */}
                            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="mx-4 font-medium">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Divider */}
                    {index < cartItems.length - 1 && (
                      <div className="border-t border-gray-200 mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="border border-gray-200 rounded-3xl p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold">${subtotal}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount (-20%)</span>
                  <span className="font-bold text-red-500">-${discount}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-bold">${deliveryFee}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg">Total</span>
                    <span className="font-bold text-xl">${total}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mt-6 flex gap-3">
                <div className="flex-1 relative">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Add promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full text-sm"
                  />
                </div>
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-black text-white py-4 rounded-full font-medium mt-6 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                Go to Checkout
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <section className="mx-4 lg:mx-24 my-16">
        <div className="bg-black rounded-xl p-8 lg:p-16 text-white max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <h2 className="text-3xl lg:text-4xl font-black max-w-md text-center lg:text-left">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 rounded-full text-black text-sm"
                />
              </div>
              <button className="bg-white text-black py-3 rounded-full font-medium">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-black mb-6">inkwavehyd</h3>
              <p className="text-gray-600 mb-6">
                We have clothes that suits your style and which you're proud to wear. From women to men.
              </p>
              <div className="flex gap-3">
                {/* Social Media Icons */}
                <div className="w-7 h-7 bg-white border border-gray-200 rounded-full"></div>
                <div className="w-7 h-7 bg-black rounded-full"></div>
                <div className="w-7 h-7 bg-white border border-gray-200 rounded-full"></div>
                <div className="w-7 h-7 bg-white border border-gray-200 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 uppercase tracking-wider">Company</h4>
              <div className="space-y-3 text-gray-600">
                <div>About</div>
                <div>Features</div>
                <div>Works</div>
                <div>Career</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 uppercase tracking-wider">Help</h4>
              <div className="space-y-3 text-gray-600">
                <div>Customer Support</div>
                <div>Delivery Details</div>
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 uppercase tracking-wider">FAQ</h4>
              <div className="space-y-3 text-gray-600">
                <div>Account</div>
                <div>Manage Deliveries</div>
                <div>Orders</div>
                <div>Payments</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 uppercase tracking-wider">Resources</h4>
              <div className="space-y-3 text-gray-600">
                <div>Free eBooks</div>
                <div>Development Tutorial</div>
                <div>How to - Blog</div>
                <div>Youtube Playlist</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm mb-4 md:mb-0">
                inkwavehyd © 2000-2023, All Rights Reserved
              </p>
              <div className="flex gap-3">
                {/* Payment Icons */}
                <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-xs">Visa</div>
                <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-xs">MC</div>
                <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-xs">PayPal</div>
                <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-xs">Pay</div>
                <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-xs">GPay</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
