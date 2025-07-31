import React, { useState } from 'react';
import { Star, ChevronRight, Plus, Minus, Filter, ChevronDown, Mail } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState('#4F4631');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('reviews');
  const [activeImage, setActiveImage] = useState(0);

  // Mock product data - in a real app, this would be fetched based on the ID
  const product = {
    id: id || '1',
    name: 'One Life Graphic T-shirt',
    price: 260,
    originalPrice: 300,
    discount: 40,
    rating: 4.5,
    description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    colors: [
      { name: 'Brown', value: '#4F4631' },
      { name: 'Green', value: '#314F4A' },
      { name: 'Navy', value: '#31344F' },
    ],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    images: [
      'https://api.builder.io/api/v1/image/assets/TEMP/cd1135072f7109ab1173d333377eb1fe56584551?width=888',
      'https://api.builder.io/api/v1/image/assets/TEMP/71038de9657a845917249f224274317dd1df34be?width=304',
      'https://api.builder.io/api/v1/image/assets/TEMP/ecc6b57393da55e1c810b431de319b382e477ce6?width=304',
      'https://api.builder.io/api/v1/image/assets/TEMP/668dd02132878e64fc40efac1e38d6a29a03480f?width=304'
    ]
  };

  const reviews = [
    {
      id: 1,
      name: 'Samantha D.',
      rating: 5,
      date: 'August 14, 2023',
      comment: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      verified: true
    },
    {
      id: 2,
      name: 'Alex M.',
      rating: 4,
      date: 'August 15, 2023',
      comment: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      verified: true
    },
    {
      id: 3,
      name: 'Ethan R.',
      rating: 4,
      date: 'August 16, 2023',
      comment: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      verified: true
    },
    {
      id: 4,
      name: 'Olivia P.',
      rating: 4,
      date: 'August 17, 2023',
      comment: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      verified: true
    },
    {
      id: 5,
      name: 'Liam K.',
      rating: 4,
      date: 'August 18, 2023',
      comment: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      verified: true
    },
    {
      id: 6,
      name: 'Ava H.',
      rating: 5,
      date: 'August 19, 2023',
      comment: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      verified: true
    }
  ];

  const relatedProducts = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/216626a11da9b419bbcfa60f5f80e12e95700aae?width=592",
      name: "Polo with Contrast Trims",
      rating: 4.0,
      price: "$212",
      originalPrice: "$242",
      discount: "-20%"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/902ad046bee611f995577a22fc08b5a7ee398c98?width=588",
      name: "Gradient Graphic T-shirt",
      rating: 3.5,
      price: "$145"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4111a7cc7ba11ed5e34a3c883f438832cfa07a0b?width=592",
      name: "Polo with Tipping Details",
      rating: 4.5,
      price: "$180"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d772f5d0060c34235c6bbd0f4a9d04f283b0a34c?width=592",
      name: "Black Striped T-shirt",
      rating: 5.0,
      price: "$120",
      originalPrice: "$150",
      discount: "-30%"
    }
  ];

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white px-4 py-2 text-center relative">
        <div className="text-sm">
          Sign up and get 20% off to your first order.{' '}
          <span className="underline cursor-pointer">Sign Up Now</span>
        </div>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M16.2882 14.9617C16.4644 15.1378 16.5633 15.3767 16.5633 15.6258C16.5633 15.8749 16.4644 16.1137 16.2882 16.2898C16.1121 16.466 15.8733 16.5649 15.6242 16.5649C15.3751 16.5649 15.1362 16.466 14.9601 16.2898L9.99997 11.3281L5.03825 16.2883C4.86213 16.4644 4.62326 16.5633 4.37418 16.5633C4.12511 16.5633 3.88624 16.4644 3.71012 16.2883C3.534 16.1122 3.43506 15.8733 3.43506 15.6242C3.43506 15.3751 3.534 15.1363 3.71012 14.9602L8.67184 10L3.71168 5.03828C3.53556 4.86216 3.43662 4.62329 3.43662 4.37422C3.43662 4.12515 3.53556 3.88628 3.71168 3.71016C3.8878 3.53404 4.12668 3.43509 4.37575 3.43509C4.62482 3.43509 4.86369 3.53404 5.03981 3.71016L9.99997 8.67188L14.9617 3.70938C15.1378 3.53326 15.3767 3.43431 15.6257 3.43431C15.8748 3.43431 16.1137 3.53326 16.2898 3.70938C16.4659 3.8855 16.5649 4.12437 16.5649 4.37344C16.5649 4.62251 16.4659 4.86138 16.2898 5.0375L11.3281 10L16.2882 14.9617Z" fill="white"/>
          </svg>
        </button>
      </div>

      {/* Navigation Header */}
      <header className="border-b border-gray-100 px-4 lg:px-24 py-4">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <Link to="/" className="text-2xl lg:text-3xl font-black text-black tracking-tight">inkwavehyd</Link>
          
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <path d="M21.7961 20.2041L17.3439 15.75C18.6788 14.0104 19.302 11.8282 19.0871 9.64607C18.8723 7.4639 17.8354 5.44516 16.1868 3.99937C14.5383 2.55357 12.4015 1.78899 10.21 1.86071C8.01841 1.93244 5.9362 2.8351 4.3857 4.38559C2.83521 5.93608 1.93255 8.0183 1.86083 10.2098C1.7891 12.4014 2.55369 14.5382 3.99948 16.1867C5.44527 17.8353 7.46401 18.8722 9.64618 19.087C11.8284 19.3019 14.0106 18.6787 15.7501 17.3438L20.2061 21.8006C20.3107 21.9053 20.4349 21.9883 20.5717 22.0449C20.7084 22.1016 20.8549 22.1307 21.0029 22.1307C21.1509 22.1307 21.2975 22.1016 21.4342 22.0449C21.5709 21.9883 21.6952 21.9053 21.7998 21.8006C21.9044 21.696 21.9875 21.5717 22.0441 21.435C22.1007 21.2983 22.1299 21.1517 22.1299 21.0037C22.1299 20.8558 22.1007 20.7092 22.0441 20.5725C21.9875 20.4358 21.9044 20.3115 21.7998 20.2069L21.7961 20.2041ZM4.12512 10.5C4.12512 9.23915 4.499 8.0066 5.1995 6.95824C5.89999 5.90988 6.89563 5.09278 8.06051 4.61027C9.22539 4.12776 10.5072 4.00151 11.7438 4.2475C12.9804 4.49348 14.1164 5.10064 15.0079 5.9922C15.8995 6.88376 16.5066 8.01967 16.7526 9.2563C16.9986 10.4929 16.8724 11.7747 16.3898 12.9396C15.9073 14.1045 15.0902 15.1001 14.0419 15.8006C12.9935 16.5011 11.761 16.875 10.5001 16.875C8.80989 16.8733 7.1894 16.2011 5.99423 15.0059C4.79906 13.8107 4.12685 12.1902 4.12512 10.5Z" fill="black" fillOpacity="0.4"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="bg-transparent outline-none flex-1 text-gray-600 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 lg:gap-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="lg:hidden cursor-pointer hover:text-gray-600 transition-colors">
              <path d="M21.7961 20.2041L17.3439 15.75C18.6788 14.0104 19.302 11.8282 19.0871 9.64607C18.8723 7.4639 17.8354 5.44516 16.1868 3.99937C14.5383 2.55357 12.4015 1.78899 10.21 1.86071C8.01841 1.93244 5.9362 2.8351 4.3857 4.38559C2.83521 5.93608 1.93255 8.0183 1.86083 10.2098C1.7891 12.4014 2.55369 14.5382 3.99948 16.1867C5.44527 17.8353 7.46401 18.8722 9.64618 19.087C11.8284 19.3019 14.0106 18.6787 15.7501 17.3438L20.2061 21.8006C20.3107 21.9053 20.4349 21.9883 20.5717 22.0449C20.7084 22.1016 20.8549 22.1307 21.0029 22.1307C21.1509 22.1307 21.2975 22.1016 21.4342 22.0449C21.5709 21.9883 21.6952 21.9053 21.7998 21.8006C21.9044 21.696 21.9875 21.5717 22.0441 21.435C22.1007 21.2983 22.1299 21.1517 22.1299 21.0037C22.1299 20.8558 22.1007 20.7092 22.0441 20.5725C21.9875 20.4358 21.9044 20.3115 21.7998 20.2069L21.7961 20.2041Z" fill="black"/>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="cursor-pointer hover:text-gray-600 transition-colors">
              <path d="M9.375 20.25C9.375 20.6208 9.26503 20.9834 9.059 21.2917C8.85298 21.6 8.56014 21.8404 8.21753 21.9823C7.87492 22.1242 7.49792 22.1613 7.1342 22.089C6.77049 22.0166 6.4364 21.838 6.17417 21.5758C5.91195 21.3136 5.73337 20.9795 5.66103 20.6158C5.58868 20.2521 5.62581 19.8751 5.76773 19.5325C5.90964 19.1899 6.14996 18.897 6.45831 18.691C6.76665 18.485 7.12916 18.375 7.5 18.375C7.99728 18.375 8.47419 18.5725 8.82582 18.9242C9.17745 19.2758 9.375 19.7527 9.375 20.25ZM17.25 18.375C16.8792 18.375 16.5166 18.485 16.2083 18.691C15.9 18.897 15.6596 19.1899 15.5177 19.5325C15.3758 19.8751 15.3387 20.2521 15.411 20.6158C15.4834 20.9795 15.662 21.3136 15.9242 21.5758C16.1864 21.838 16.5205 22.0166 16.8842 22.089C17.2479 22.1613 17.6249 22.1242 17.9675 21.9823C18.3101 21.8404 18.603 21.6 18.809 21.2917C19.015 20.9834 19.125 20.6208 19.125 20.25C19.125 19.7527 18.9275 19.2758 18.5758 18.9242C18.2242 18.5725 17.7473 18.375 17.25 18.375ZM22.0753 7.08094L19.5169 15.3966C19.3535 15.9343 19.0211 16.4051 18.569 16.739C18.1169 17.0729 17.5692 17.2521 17.0072 17.25H7.77469C7.2046 17.2482 6.65046 17.0616 6.1953 16.7183C5.74015 16.3751 5.40848 15.8936 5.25 15.3459L2.04469 4.125H1.125C0.826631 4.125 0.540483 4.00647 0.329505 3.7955C0.118526 3.58452 0 3.29837 0 3C0 2.70163 0.118526 2.41548 0.329505 2.2045C0.540483 1.99353 0.826631 1.875 1.125 1.875H2.32687C2.73407 1.87626 3.12988 2.00951 3.45493 2.25478C3.77998 2.50004 4.01674 2.84409 4.12969 3.23531L4.81312 5.625H21C21.1761 5.62499 21.3497 5.6663 21.5069 5.74561C21.664 5.82492 21.8004 5.94001 21.905 6.08164C22.0096 6.22326 22.0795 6.38746 22.1091 6.56102C22.1387 6.73458 22.1271 6.91266 22.0753 7.08094ZM19.4766 7.875H5.45531L7.41375 14.7281C7.43617 14.8065 7.48354 14.8755 7.54867 14.9245C7.6138 14.9736 7.69315 15.0001 7.77469 15H17.0072C17.0875 15.0002 17.1656 14.9746 17.2303 14.927C17.2949 14.8794 17.3426 14.8123 17.3662 14.7356L19.4766 7.875Z" fill="black"/>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="cursor-pointer hover:text-gray-600 transition-colors">
              <path d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM7.45969 18.4284C7.98195 17.7143 8.66528 17.1335 9.45418 16.7331C10.2431 16.3327 11.1153 16.124 12 16.124C12.8847 16.124 13.7569 16.3327 14.5458 16.7331C15.3347 17.1335 16.0181 17.7143 16.5403 18.4284C15.2134 19.3695 13.6268 19.875 12 19.875C10.3732 19.875 8.78665 19.3695 7.45969 18.4284ZM9.375 11.25C9.375 10.7308 9.52896 10.2233 9.8174 9.79163C10.1058 9.35995 10.5158 9.0235 10.9955 8.82482C11.4751 8.62614 12.0029 8.57415 12.5121 8.67544C13.0213 8.77672 13.489 9.02673 13.8562 9.39384C14.2233 9.76096 14.4733 10.2287 14.5746 10.7379C14.6759 11.2471 14.6239 11.7749 14.4252 12.2545C14.2265 12.7342 13.8901 13.1442 13.4584 13.4326C13.0267 13.721 12.5192 13.875 12 13.875C11.3038 13.875 10.6361 13.5984 10.1438 13.1062C9.65157 12.6139 9.375 11.9462 9.375 11.25ZM18.1875 16.8694C17.4583 15.9419 16.5289 15.1914 15.4688 14.6737C16.1444 13.9896 16.6026 13.1208 16.7858 12.1769C16.9689 11.2329 16.8688 10.2558 16.498 9.36861C16.1273 8.4814 15.5024 7.72364 14.702 7.19068C13.9017 6.65771 12.9616 6.37334 12 6.37334C11.0384 6.37334 10.0983 6.65771 9.29797 7.19068C8.49762 7.72364 7.87275 8.4814 7.50198 9.36861C7.13121 10.2558 7.0311 11.2329 7.21424 12.1769C7.39739 13.1208 7.85561 13.9896 8.53125 14.6737C7.4711 15.1914 6.54168 15.9419 5.8125 16.8694C4.89661 15.7083 4.32614 14.3129 4.1664 12.8427C4.00665 11.3725 4.2641 9.88711 4.90925 8.55644C5.55441 7.22578 6.5612 6.10366 7.81439 5.31855C9.06757 4.53343 10.5165 4.11703 11.9953 4.11703C13.4741 4.11703 14.9231 4.53343 16.1762 5.31855C17.4294 6.10366 18.4362 7.22578 19.0814 8.55644C19.7265 9.88711 19.984 11.3725 19.8242 12.8427C19.6645 14.3129 19.094 15.7083 18.1781 16.8694H18.1875Z" fill="black"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Breadcrumb */}
      <div className="px-4 lg:px-24 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
          <ChevronRight size={16} className="text-gray-600" />
          <span className="text-gray-600">Shop</span>
          <ChevronRight size={16} className="text-gray-600" />
          <span className="text-gray-600">Men</span>
          <ChevronRight size={16} className="text-gray-600" />
          <span className="text-black">T-shirts</span>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="px-4 lg:px-24 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="flex lg:flex-row flex-col gap-4">
              {/* Thumbnails */}
              <div className="flex lg:flex-col flex-row gap-3 lg:order-1 order-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === index ? 'border-black' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 lg:order-2 order-1">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  <img 
                    src={product.images[activeImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-black mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{product.rating}/5</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl lg:text-3xl font-bold">${product.price}</span>
                <span className="text-2xl lg:text-3xl font-bold text-gray-400 line-through">${product.originalPrice}</span>
                <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-medium">-{product.discount}%</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <div className="border-t border-gray-200 pt-6"></div>

            {/* Color Selection */}
            <div>
              <h3 className="text-gray-600 mb-4">Select Colors</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-9 h-9 rounded-full border-2 transition-all ${
                      selectedColor === color.value ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    {selectedColor === color.value && (
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6"></div>

            {/* Size Selection */}
            <div>
              <h3 className="text-gray-600 mb-4">Choose Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full border transition-all ${
                      selectedSize === size 
                        ? 'bg-black text-white border-black' 
                        : 'bg-gray-100 text-gray-600 border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6"></div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                <button 
                  onClick={() => handleQuantityChange('decrement')}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <Minus size={20} />
                </button>
                <span className="mx-4 font-medium">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange('increment')}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <Plus size={20} />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex-1 bg-black text-white py-4 px-8 rounded-full hover:bg-gray-800 transition-colors font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="px-4 lg:px-24 py-8">
        <div className="border-t border-gray-200 pt-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-2 transition-colors ${
                  activeTab === 'details' 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Product Details
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-2 transition-colors ${
                  activeTab === 'reviews' 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Rating & Reviews
              </button>
              <button
                onClick={() => setActiveTab('faqs')}
                className={`pb-2 transition-colors ${
                  activeTab === 'faqs' 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                FAQs
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'reviews' && (
            <div>
              {/* Reviews Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">All Reviews</h2>
                  <span className="text-gray-600">({reviews.length})</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-3 bg-gray-100 rounded-full">
                    <Filter size={20} />
                  </button>
                  <button className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-full">
                    <span>Latest</span>
                    <ChevronDown size={16} />
                  </button>
                  <button className="bg-black text-white px-6 py-3 rounded-full">
                    Write a Review
                  </button>
                </div>
              </div>

              {/* Reviews Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {reviews.map((review) => (
                  <div key={review.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="font-bold">{review.name}</h4>
                      {review.verified && (
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.comment}"</p>
                    <p className="text-gray-500 text-sm">Posted on {review.date}</p>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center">
                <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
                  Load More Reviews
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* You Might Also Like */}
      <section className="px-4 lg:px-24 py-12 lg:py-16">
        <h2 className="text-3xl lg:text-5xl font-black text-center mb-8 lg:mb-12 tracking-tight">You might also like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {relatedProducts.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-xl lg:rounded-2xl overflow-hidden mb-3 lg:mb-4 aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-sm lg:text-lg mb-2 line-clamp-2">{product.name}</h3>
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

export default ProductDetail;
