import React, { useState } from 'react';
import { User, Package, Heart, MapPin, Settings, ShieldCheck, ChevronRight, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MyHome = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');

  const mockOrders = [
    {
      id: "ORD-9482",
      date: "August 10, 2026",
      status: "Delivered",
      total: 40.00,
      items: ["Wireless Noise-Canceling Headphones", "Minimalist Ceramic Desk Lamp"]
    },
    {
      id: "ORD-8310",
      date: "July 28, 2026",
      status: "Delivered",
      total: 30.00,
      items: ["Eco-Friendly Succulent Planter Set"]
    }
  ];

  const mockWishlist = [
    { name: "Premium Non-Slip Yoga Mat", price: 40, category: "Sports", inStock: true }
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Profile Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md text-white font-extrabold text-2xl flex items-center justify-center border border-white/30">
            JS
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">John Student</h1>
            <p className="text-xs text-blue-100 mt-0.5">Member since August 2026 • Premium Account</p>
          </div>
        </div>

        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-md transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Switch Account
        </button>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:col-span-4 space-y-2">
          <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-sm space-y-1">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'orders'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <Package className="w-4 h-4" />
                <span>My Orders</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>

            <button
              onClick={() => setActiveTab('wishlist')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'wishlist'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <Heart className="w-4 h-4" />
                <span>Saved Wishlist</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'addresses'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Shipping Addresses</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'settings'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <Settings className="w-4 h-4" />
                <span>Account Settings</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>
          </div>
        </div>

        {/* Tab View Panel */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm min-h-[350px]">
          
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-600" />
                Order History
              </h2>

              <div className="space-y-4">
                {mockOrders.map(order => (
                  <div key={order.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 text-xs sm:text-sm">
                      <div>
                        <span className="font-bold text-slate-900">{order.id}</span>
                        <span className="text-slate-400 ml-2">• {order.date}</span>
                      </div>
                      <span className="bg-emerald-100 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full text-xs">
                        {order.status}
                      </span>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1 pl-2">
                      {order.items.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center pt-2 text-xs font-bold text-slate-800">
                      <span>Total Paid:</span>
                      <span className="text-blue-600 text-sm">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-600 fill-blue-600" />
                Saved Wishlist
              </h2>

              {mockWishlist.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.category} • In Stock</p>
                  </div>
                  <span className="font-extrabold text-blue-600 text-base">${item.price}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Saved Addresses
              </h2>

              <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-2">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">Default</span>
                <h4 className="font-bold text-slate-900 text-sm">Home Address</h4>
                <p className="text-xs text-slate-600">John Student • 123 Campus Lane, Suite 4B, New York, NY 10001</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                Account Settings
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                  <input type="text" defaultValue="John Student" className="w-full p-2.5 rounded-xl border border-slate-200" />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                  <input type="email" defaultValue="john.student@college.edu" className="w-full p-2.5 rounded-xl border border-slate-200" />
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl text-xs">Save Changes</button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default MyHome;
