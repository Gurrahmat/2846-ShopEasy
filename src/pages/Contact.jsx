import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Contact = () => {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Message sent successfully!");
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">Get In Touch</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">We're Here to Help</h1>
        <p className="text-slate-500 text-sm mt-2">
          Have a question about an order, product, or partnership? Send us a message and our team will respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl space-y-8">
          <div>
            <h2 className="text-2xl font-extrabold">Contact Information</h2>
            <p className="text-blue-100 text-sm mt-1">Fill out the form or reach out directly through our channels.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl shrink-0">
                <MapPin className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Main Office</h4>
                <p className="text-xs text-blue-100 mt-0.5">100 Commerce Plaza, Suite 300, New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl shrink-0">
                <Phone className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Phone Support</h4>
                <p className="text-xs text-blue-100 mt-0.5">+1 (800) 555-EASY (Mon-Fri, 9am - 6pm EST)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl shrink-0">
                <Mail className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Email Support</h4>
                <p className="text-xs text-blue-100 mt-0.5">support@shopeasy.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl shrink-0">
                <Clock className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Response Time</h4>
                <p className="text-xs text-blue-100 mt-0.5">Average reply time under 2 hours</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/20 text-xs text-blue-200">
            <p>ShopEasy Support • Student Project Edition</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-blue-100 shadow-sm">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Thank You!</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Your message has been received! Our support team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-900">Send Us a Message</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Order Tracking & Status</option>
                  <option>Product Questions</option>
                  <option>Returns & Refunds</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="How can we help you today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-500/25 transition-all"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};

export default Contact;
