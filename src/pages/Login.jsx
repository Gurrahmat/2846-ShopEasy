import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, LogIn, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Login = () => {
  const navigate = useNavigate();
  const { showToast } = useCart();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    showToast(isSignUp ? "Account created successfully! Welcome!" : "Successfully logged in!");
    setTimeout(() => {
      navigate('/my-home');
    }, 1000);
  };

  const handleDemoLogin = () => {
    setEmail('john.student@college.edu');
    setPassword('demo12345');
    showToast("Demo credentials loaded! Logging in...");
    setTimeout(() => {
      navigate('/my-home');
    }, 1200);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-md mx-auto min-h-[70vh] flex flex-col justify-center">
      
      {/* Login Card Container */}
      <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-xl space-y-6 relative overflow-hidden">
        
        {/* Top Glow bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold text-slate-900">
              Shop<span className="text-blue-600">Easy</span>
            </span>
          </Link>

          <h1 className="text-2xl font-extrabold text-slate-900 pt-2">
            {isSignUp ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-xs text-slate-500">
            {isSignUp ? "Sign up to track orders & save wishlists" : "Log in to access your ShopEasy dashboard"}
          </p>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleAuthSubmit} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-700">Password</label>
              {!isSignUp && (
                <a href="#forgot" onClick={(e) => { e.preventDefault(); showToast("Password reset link sent to email!"); }} className="text-xs text-blue-600 hover:underline">
                  Forgot?
                </a>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Blue / Purple Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            {isSignUp ? "Create Account" : "Sign In"}
          </button>

          {/* Quick Demo Login Helper */}
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full py-2.5 px-4 rounded-xl text-blue-600 font-semibold bg-blue-50 hover:bg-blue-100 border border-blue-100 text-xs transition-colors"
          >
            ⚡ Quick Demo 1-Click Login
          </button>

        </form>

        {/* Toggle Sign Up / Login */}
        <div className="text-center pt-2 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            {isSignUp ? "Already have an account?" : "Don't have an account yet?"}{' '}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-bold text-blue-600 hover:underline ml-1"
            >
              {isSignUp ? "Log In" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* College Project Disclaimer */}
        <div className="bg-slate-50 p-3 rounded-xl flex items-center gap-2 text-[11px] text-slate-500">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Demo authentication for ShopEasy frontend application.</span>
        </div>

      </div>

    </div>
  );
};

export default Login;
