import {
  Star,
  Search,
  ShoppingCart,
  User,
  X,
  ChevronDown,
  Mail,
  ChevronRight,
  ChevronLeft,
  SlidersHorizontal,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Category = () => {
  const { category } = useParams();
  const categoryName = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "Casual";

  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColors, setSelectedColors] = useState([0]); // Blue selected by default
  const [priceRange, setPriceRange] = useState([50, 200]);

  const products = [
    {
      id: "1",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/902ad046bee611f995577a22fc08b5a7ee398c98?width=588",
      name: "Gradient Graphic T-shirt",
      rating: 3.5,
      price: "$145",
    },
    {
      id: "2",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4111a7cc7ba11ed5e34a3c883f438832cfa07a0b?width=592",
      name: "Polo with Tipping Details",
      rating: 4.5,
      price: "$180",
    },
    {
      id: "3",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d772f5d0060c34235c6bbd0f4a9d04f283b0a34c?width=592",
      name: "Black Striped T-shirt",
      rating: 5.0,
      price: "$120",
      originalPrice: "$150",
      discount: "-30%",
    },
    {
      id: "4",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5d1fa856e4fe0859626efa29dabb1722cf046199?width=536",
      name: "SKINNY FIT JEANS",
      rating: 3.5,
      price: "$240",
      originalPrice: "$260",
      discount: "-20%",
    },
    {
      id: "5",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8c395c9e898fc6bb053756174c869d920b5ec9db?width=592",
      name: "CHECKERED SHIRT",
      rating: 4.5,
      price: "$180",
    },
    {
      id: "6",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/71b2911ea12218c8a545b40df02e2e27066f578a?width=592",
      name: "SLEEVE STRIPED T-SHIRT",
      rating: 4.5,
      price: "$130",
      originalPrice: "$160",
      discount: "-30%",
    },
    {
      id: "7",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ccf3226aaf2b1d5fc854046e4a85d7f1b1126cd2?width=592",
      name: "VERTICAL STRIPED SHIRT",
      rating: 5.0,
      price: "$212",
      originalPrice: "$232",
      discount: "-20%",
    },
    {
      id: "8",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8ee068a8aa0dab44e438466efe12bc26c7c6bfaf?width=588",
      name: "COURAGE GRAPHIC T-SHIRT",
      rating: 4.0,
      price: "$145",
    },
    {
      id: "9",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e551af5ec708f3bcf7696dd4e2f94071a9d2a1da?width=592",
      name: "LOOSE FIT BERMUDA SHORTS",
      rating: 3.0,
      price: "$80",
    },
  ];

  const colors = [
    "#00C12B",
    "#F50606",
    "#F5DD06",
    "#F57906",
    "#06CAF5",
    "#063AF5",
    "#7D06F5",
    "#F506A4",
    "#FFFFFF",
    "#000000",
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white px-4 py-2 text-center relative">
        <div className="text-sm">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline cursor-pointer">Sign Up Now</span>
        </div>
        <X className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer" />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-4 lg:px-24 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl lg:text-3xl font-black">
          inkwavehyd
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Shop</span>
            <ChevronDown className="w-4 h-4" />
          </div>
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
          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
          </Link>
          <User className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Breadcrumb */}
      <div className="px-4 lg:px-24 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-black">{categoryName}</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-24 max-w-7xl mx-auto pb-16">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-80 border rounded-3xl p-6 h-fit">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Filters</h2>
            <SlidersHorizontal className="w-6 h-6 text-gray-400" />
          </div>

          {/* Categories */}
          <div className="mb-6">
            <div className="border-b border-gray-200 mb-6"></div>
            <div className="space-y-4">
              {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
                (category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <span className="text-gray-600">{category}</span>
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <div className="border-b border-gray-200 mb-6"></div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Price</h3>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="relative mb-4">
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-black rounded-full"
                  style={{
                    marginLeft: `${(priceRange[0] / 200) * 100}%`,
                    width: `${((priceRange[1] - priceRange[0]) / 200) * 100}%`,
                  }}
                ></div>
              </div>
              <div
                className="absolute w-5 h-5 bg-black rounded-full -mt-1.5 cursor-pointer"
                style={{ left: `${(priceRange[0] / 200) * 100}%` }}
              ></div>
              <div
                className="absolute w-5 h-5 bg-black rounded-full -mt-1.5 cursor-pointer"
                style={{ left: `${(priceRange[1] / 200) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <div className="border-b border-gray-200 mb-6"></div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Colors</h3>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="grid grid-cols-5 gap-4 mb-4">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-9 h-9 rounded-full border-2 ${
                    selectedColors.includes(index)
                      ? "border-black"
                      : "border-gray-200"
                  } ${color === "#FFFFFF" ? "border-gray-300" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    if (selectedColors.includes(index)) {
                      setSelectedColors(
                        selectedColors.filter((i) => i !== index),
                      );
                    } else {
                      setSelectedColors([...selectedColors, index]);
                    }
                  }}
                >
                  {selectedColors.includes(index) && index === 0 && (
                    <svg
                      className="w-4 h-4 mx-auto text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <div className="border-b border-gray-200 mb-6"></div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Size</h3>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Dress Style */}
          <div className="mb-6">
            <div className="border-b border-gray-200 mb-6"></div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Dress Style</h3>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="space-y-4">
              {["Casual", "Formal", "Party", "Gym"].map((style, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span className="text-gray-600">{style}</span>
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-full font-medium">
            Apply Filter
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold">{categoryName}</h1>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-600">
                Showing 1-10 of 100 Products
              </span>
              <div className="flex items-center gap-1">
                <span className="text-gray-600">Sort by:</span>
                <span className="font-medium">Most Popular</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group cursor-pointer block"
              >
                <div className="bg-gray-100 rounded-xl lg:rounded-2xl overflow-hidden mb-3 lg:mb-4 aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 lowercase">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating}/5
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">{product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-gray-400 line-through text-lg">
                        {product.originalPrice}
                      </span>
                      <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs font-medium">
                        {product.discount}
                      </span>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-8"></div>

          {/* Pagination */}
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-1">
              {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm ${
                    page === 1
                      ? "bg-gray-100 text-black"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
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
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
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
              <h4 className="font-medium mb-6 uppercase tracking-wider">
                Company
              </h4>
              <div className="space-y-3 text-gray-600">
                <div>About</div>
                <div>Features</div>
                <div>Works</div>
                <div>Career</div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-6 uppercase tracking-wider">
                Help
              </h4>
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
              <h4 className="font-medium mb-6 uppercase tracking-wider">
                Resources
              </h4>
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
                <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-xs">
                  Visa
                </div>
                <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-xs">
                  MC
                </div>
                <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-xs">
                  PayPal
                </div>
                <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-xs">
                  Pay
                </div>
                <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-xs">
                  GPay
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Category;
