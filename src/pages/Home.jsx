import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { ShieldCheck, Zap, Award, ThumbsUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Hero Banner Section */}
      <Hero />

      {/* Baseline Initial 4 Products Showcase */}
      <ProductGrid
        title="Featured Deals"
        subtitle="Check out our 4 top-selling starter items with huge savings!"
        limit={4}
      />

      {/* Why Choose ShopEasy Banner */}
      <section className="py-12 bg-white border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Shopping Made Effortless</h2>
            <p className="text-slate-500 text-sm mt-2">
              We focus on delivering high-quality everyday items directly to your doorstep with zero friction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/80 hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Instant Processing</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Orders are dispatched within 24 hours with real-time tracking updates sent to your phone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/80 hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Curated Quality</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every product undergoes strict inspection before listing to ensure premium performance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/80 hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Secure Checkout</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Your data and transaction information are protected with banking-grade SSL encryption.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/80 hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Money Back Guarantee</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Not satisfied with your order? Enjoy effortless 30-day returns with no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Catalog Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 max-w-xl z-10">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Explore All Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Looking for More Products?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base">
              Browse our full catalog including Electronics, Home Decor, Garden Supplies, and Sports Equipment.
            </p>
          </div>
          <button
            onClick={() => navigate('/products')}
            className="z-10 px-8 py-4 bg-white text-blue-600 font-extrabold rounded-xl shadow-lg hover:bg-blue-50 transition-all flex items-center gap-2 shrink-0"
          >
            View Full Products Page
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
