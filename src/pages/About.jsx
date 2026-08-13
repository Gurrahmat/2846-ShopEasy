import React from 'react';
import { ShoppingBag, Users, Globe, Award, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
          <ShoppingBag className="w-4 h-4" /> About ShopEasy
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto">
          Making Everyday Shopping <span className="text-blue-600">Simpler & More Affordable</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          ShopEasy was founded with a single mission: to create an online marketplace where quality items in Electronics, Home, Garden, and Sports are accessible to everyone at amazing prices.
        </p>
      </section>

      {/* Stats Counter Grid */}
      <section className="bg-white border-y border-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <p className="text-4xl sm:text-5xl font-extrabold text-blue-600">50K+</p>
            <p className="text-sm font-semibold text-slate-700 mt-2">Happy Customers</p>
            <p className="text-xs text-slate-400 mt-1">Across 30+ countries</p>
          </div>
          <div className="p-4">
            <p className="text-4xl sm:text-5xl font-extrabold text-blue-600">1,200+</p>
            <p className="text-sm font-semibold text-slate-700 mt-2">Curated Products</p>
            <p className="text-xs text-slate-400 mt-1">Electronics to Garden</p>
          </div>
          <div className="p-4">
            <p className="text-4xl sm:text-5xl font-extrabold text-blue-600">99.4%</p>
            <p className="text-sm font-semibold text-slate-700 mt-2">Positive Reviews</p>
            <p className="text-xs text-slate-400 mt-1">Verified purchases</p>
          </div>
          <div className="p-4">
            <p className="text-4xl sm:text-5xl font-extrabold text-blue-600">24/7</p>
            <p className="text-sm font-semibold text-slate-700 mt-2">Customer Care</p>
            <p className="text-xs text-slate-400 mt-1">Always here for you</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Our Core Principles</h2>
          <p className="text-slate-500 text-sm mt-2">What sets ShopEasy apart from standard e-commerce stores.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900">Unbeatable Prices</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We partner directly with top suppliers to eliminate middlemen markup, passing all cost savings directly to you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900">Quality Assured</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every single product listed on ShopEasy is thoroughly tested for durability, aesthetics, and user satisfaction.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900">Customer First</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our support team goes above and beyond to make sure every order is delivered smoothly and on time.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-200 shadow-lg text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">Ready to Start Shopping?</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Join thousands of satisfied shoppers today and get the best deals on your favorite items.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors"
          >
            Explore Catalog Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;
