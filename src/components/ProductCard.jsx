import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, setIsCartOpen } = useCart();

  const handleBuyNow = (e) => {
    e.stopPropagation();
    addToCart(product);
    setIsCartOpen(true);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group bg-white rounded-2xl border border-blue-100/80 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full overflow-hidden transform hover:-translate-y-1">
      
      {/* Product Image Container */}
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 shadow-xs">
          {product.category}
        </span>

        {/* Badge Tag */}
        {product.badge && (
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-amber-500 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-400">({product.reviewsCount})</span>
          </div>

          {/* Product Name */}
          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Price</span>
            <span className="text-xl font-extrabold text-blue-600">
              ${product.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAddToCart}
              className="p-2.5 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-colors"
              title="Add to Cart"
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>

            <button
              onClick={handleBuyNow}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
