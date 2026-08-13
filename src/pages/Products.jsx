import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Products = () => {
  return (
    <div className="pt-6 pb-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border-b border-blue-100 py-10 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Products Catalog
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
            Browse through our wide selection of Electronics, Home Decor, Garden Essentials, and Sports Gear.
          </p>
        </div>
      </div>

      {/* Complete Product Grid */}
      <ProductGrid
        title="All Products"
        subtitle="Filter by category or search for specific items"
      />

    </div>
  );
};

export default Products;
