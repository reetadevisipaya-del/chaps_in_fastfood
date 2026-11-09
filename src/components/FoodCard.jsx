import React, { useState } from 'react';
import { Plus, Minus, Star, Flame } from 'lucide-react';

export default function FoodCard({ item, inCartQuantity, onAddToCart, onUpdateQuantity, onOpenDetail }) {
  const [selectedVariant, setSelectedVariant] = useState(
    item.variants ? item.variants[0] : null
  );

  const currentPrice = selectedVariant ? selectedVariant.price : item.price;

  return (
    <div className="group bg-white rounded-3xl p-3.5 border-2 border-[#FFD966]/60 food-card-shadow transition-all duration-300 hover:-translate-y-1 hover:border-[#F4512C]/60 flex flex-col justify-between">
      
      {/* Top Image Area */}
      <div>
        <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onOpenDetail(item, selectedVariant)}>
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

          {/* Veg / Non-Veg Standard Icon */}
          <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm p-1 rounded-md shadow-sm">
            {item.isVeg ? (
              <div className="w-4 h-4 border-2 border-emerald-600 flex items-center justify-center rounded-[3px]">
                <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
              </div>
            ) : (
              <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center rounded-[3px]">
                <div className="w-2 h-2 rounded-full bg-red-600"></div>
              </div>
            )}
          </div>

          {/* Best Seller / Tag Badge */}
          {item.tags && item.tags[0] && (
            <div className="absolute bottom-2.5 left-2.5 bg-[#FFD966] text-[#29211E] text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              {item.tags[0]}
            </div>
          )}

          {/* Rating Badge */}
          <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{item.rating}</span>
          </div>
        </div>

        {/* Content & Details */}
        <div className="mt-3">
          <div className="flex items-start justify-between gap-1">
            <h3 
              onClick={() => onOpenDetail(item, selectedVariant)}
              className="font-display font-bold text-base sm:text-lg text-[#29211E] group-hover:text-[#F4512C] transition-colors line-clamp-1 cursor-pointer"
            >
              {item.name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-xs text-[#29211E]/70 line-clamp-2 mt-1 min-h-[32px] leading-relaxed">
            {item.description}
          </p>

          {/* Portion / Variant Selector */}
          {item.variants ? (
            <div className="mt-2.5">
              <label className="text-[10px] font-bold text-[#29211E]/60 uppercase tracking-wider block mb-1">
                Select Portion:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {item.variants.map((v) => (
                  <button
                    key={v.name}
                    onClick={() => setSelectedVariant(v)}
                    className={`text-[11px] font-bold py-1 px-1.5 rounded-lg border text-center transition-all ${
                      selectedVariant.name === v.name
                        ? 'bg-[#29211E] text-white border-[#29211E]'
                        : 'bg-[#FFF8EA] text-[#29211E] border-[#FFD966] hover:bg-[#FFD966]/40'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-2 text-[11px] font-semibold text-[#29211E]/60 flex items-center gap-2">
              {item.pieces && <span>• {item.pieces}</span>}
              {item.size && <span>• {item.size}</span>}
              {item.spiceLevel && (
                <span className="flex items-center gap-0.5 text-amber-800">
                  <Flame className="w-3 h-3 text-[#F4512C]" /> {item.spiceLevel}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Price & Add to Cart Action Footer */}
      <div className="mt-4 pt-3 border-t border-[#FFD966]/40 flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] text-[#29211E]/60 font-semibold uppercase block leading-none">
            Price
          </span>
          <span className="font-display text-xl font-black text-[#F4512C]">
            ₹{currentPrice}
          </span>
        </div>

        {/* Quantity Controls or Add Button */}
        {inCartQuantity > 0 ? (
          <div className="flex items-center bg-[#29211E] text-white rounded-full p-1 shadow-md">
            <button
              onClick={() => onUpdateQuantity(item.id, selectedVariant ? selectedVariant.name : null, inCartQuantity - 1)}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-display font-black text-sm px-2 text-[#FFD966] min-w-[20px] text-center">
              {inCartQuantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(item.id, selectedVariant ? selectedVariant.name : null, inCartQuantity + 1)}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAddToCart(item, selectedVariant)}
            className="flex items-center gap-1.5 bg-[#FFD966] hover:bg-[#F4512C] text-[#29211E] hover:text-white font-display text-xs sm:text-sm font-black px-4 py-2 rounded-full border-2 border-[#29211E] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>ADD</span>
          </button>
        )}
      </div>

    </div>
  );
}
