import React, { useState } from 'react';
import { X, Star, Plus, Minus, ShoppingBag, ShieldAlert } from 'lucide-react';

export default function ProductModal({ item, initialVariant, onClose, onAddToCart }) {
  if (!item) return null;

  const [selectedVariant, setSelectedVariant] = useState(
    initialVariant || (item.variants ? item.variants[0] : null)
  );
  const [quantity, setQuantity] = useState(1);
  const [kitchenNote, setKitchenNote] = useState('');

  const price = selectedVariant ? selectedVariant.price : item.price;
  const totalPrice = price * quantity;

  const handleAdd = () => {
    onAddToCart(item, selectedVariant, quantity, kitchenNote);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FFF8EA] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFD966] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Area: High Resolution Photo */}
        <div className="relative h-60 sm:h-72 w-full bg-gradient-to-br from-[#29211E] to-[#45322b] shrink-0">
          <img
            src={item.image}
            alt={item.name}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Veg / Non-Veg badge */}
          <div className="absolute top-3 left-3 bg-white p-1 rounded-md shadow-md">
            {item.isVeg ? (
              <div className="w-5 h-5 border-2 border-emerald-600 flex items-center justify-center rounded">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
              </div>
            ) : (
              <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center rounded">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              {item.tags?.map((t) => (
                <span key={t} className="bg-[#FFD966] text-[#29211E] text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                  {t}
                </span>
              ))}
              <div className="flex items-center gap-1 text-xs font-bold bg-white px-2 py-0.5 rounded-full border border-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{item.rating} ({item.reviewsCount} reviews)</span>
              </div>
            </div>

            <h2 className="font-display text-2xl font-black text-[#29211E]">
              {item.name}
            </h2>
            <p className="text-sm text-[#29211E]/80 mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Portion Variants */}
          {item.variants && (
            <div>
              <label className="text-xs font-bold text-[#29211E] uppercase tracking-wider block mb-1.5">
                Choose Portion / Size:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {item.variants.map((v) => (
                  <button
                    key={v.name}
                    onClick={() => setSelectedVariant(v)}
                    className={`p-2.5 rounded-2xl border-2 text-left font-display font-bold text-sm transition-all flex items-center justify-between ${
                      selectedVariant.name === v.name
                        ? 'border-[#F4512C] bg-white text-[#F4512C] shadow-sm'
                        : 'border-[#FFD966] bg-white/50 text-[#29211E] hover:bg-white'
                    }`}
                  >
                    <span>{v.name}</span>
                    <span className="text-[#29211E]">₹{v.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cooking Instructions / Special Requests */}
          <div>
            <label className="text-xs font-bold text-[#29211E] uppercase tracking-wider block mb-1">
              Kitchen Instructions (Optional):
            </label>
            <input
              type="text"
              value={kitchenNote}
              onChange={(e) => setKitchenNote(e.target.value)}
              placeholder="e.g., Extra green spicy chutney, crispy fried, less sweet..."
              className="w-full bg-white text-sm text-[#29211E] p-2.5 rounded-xl border border-[#FFD966] focus:border-[#F4512C] focus:outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-2 text-xs text-amber-900">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Prepared fresh to order using 100% full-fat standard dairy paneer & authentic spices.</span>
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 bg-white border-t-2 border-[#FFD966]/60 flex items-center justify-between gap-3 shrink-0">
          {/* Quantity Selector */}
          <div className="flex items-center bg-[#FFF8EA] rounded-2xl border border-[#FFD966] p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-xl bg-white hover:bg-gray-100 flex items-center justify-center font-bold text-[#29211E]"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-display font-black text-base px-3 text-[#29211E]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-xl bg-white hover:bg-gray-100 flex items-center justify-center font-bold text-[#29211E]"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAdd}
            className="flex-1 bg-[#F4512C] hover:bg-[#d63d1a] text-white font-display text-base font-bold py-3 px-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-between cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Cart</span>
            </span>
            <span className="font-black text-lg">₹{totalPrice}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
