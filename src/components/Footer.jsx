import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone, MapPin, Heart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-blue-100 text-slate-600 mt-16">
      
      {/* Top Guarantee Banner */}
      <div className="bg-blue-50/70 border-b border-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-2xs border border-blue-100/50">
            <Truck className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-bold text-slate-800 text-sm">Free Express Shipping</h4>
            <p className="text-xs text-slate-500 mt-1">On all orders over $50 across the nation.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-2xs border border-blue-100/50">
            <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-bold text-slate-800 text-sm">100% Secure Checkout</h4>
            <p className="text-xs text-slate-500 mt-1">Encrypted payments & buyer protection guaranteed.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-2xs border border-blue-100/50">
            <RefreshCw className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-bold text-slate-800 text-sm">30-Day Hassle-Free Returns</h4>
            <p className="text-xs text-slate-500 mt-1">Satisfaction guaranteed or money back.</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Summary */}
        <div className="space-y-4 md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold text-slate-900">
              Shop<span className="text-blue-600">Easy</span>
            </span>
          </Link>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Your one-stop destination for quality electronics, home essentials, garden gear, and sports equipment at prices you'll love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4">Quick Navigation</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-600 transition-colors">Products Catalog</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Support</Link></li>
            <li><Link to="/my-home" className="hover:text-blue-600 transition-colors">My Account / Dashboard</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4">Categories</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><Link to="/products" className="hover:text-blue-600 transition-colors">Electronics</Link></li>
            <li><Link to="/products" className="hover:text-blue-600 transition-colors">Home Decor & Lighting</Link></li>
            <li><Link to="/products" className="hover:text-blue-600 transition-colors">Garden & Outdoors</Link></li>
            <li><Link to="/products" className="hover:text-blue-600 transition-colors">Sports & Fitness</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4">Contact Info</h4>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500">
            <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
            <span>100 Commerce Plaza, Suite 300, New York, NY</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500">
            <Phone className="w-4 h-4 text-blue-600 shrink-0" />
            <span>+1 (800) 555-EASY</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500">
            <Mail className="w-4 h-4 text-blue-600 shrink-0" />
            <span>support@shopeasy.com</span>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-100 py-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ShopEasy Inc. All rights reserved. Built for College Demo Project.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>using React.js & Tailwind CSS</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
