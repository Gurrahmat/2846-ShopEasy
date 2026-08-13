import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, ShieldCheck, Truck, Clock } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ebf5ff] via-[#f4f9ff] to-[#f4f9ff] pt-12 pb-16 lg:pt-20 lg:pb-28">
      
      {/* Background soft ambient glowing circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              New Summer Deals • Up to 50% Off
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Find products <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                you love
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover our latest products at amazing prices! Premium quality, fast shipping, and exceptional customer service all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigate('/products')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => navigate('/about')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-blue-50/60 border border-slate-200 shadow-sm transition-all duration-200"
              >
                Learn More
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="pt-6 border-t border-blue-100 grid grid-cols-3 gap-4 text-slate-600 text-xs sm:text-sm font-medium">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Truck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Free Express Shipping</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>2-Year Warranty</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <span>24/7 Dedicated Support</span>
              </div>
            </div>

          </div>

          {/* Right Layered Illustration Graphic */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer soft card frame with glassmorphism glow */}
            <div className="relative w-full max-w-lg lg:max-w-none group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition duration-300" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white p-3 shadow-2xl border border-blue-100">
                <img
                  src="/images/hero_illustration.jpg"
                  alt="ShopEasy E-Commerce Illustration"
                  className="w-full h-auto object-cover rounded-xl transform hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Floating overlay mini card 1 */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-blue-50 flex items-center gap-3 animate-bounce-slow">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    ★
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Top Rated Store</p>
                    <p className="text-sm font-bold text-slate-800">4.9 / 5.0 Rating</p>
                  </div>
                </div>

                {/* Floating overlay mini card 2 */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-blue-50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Flash Discount</p>
                    <p className="text-sm font-extrabold text-blue-600">$10 Baseline Starting!</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
