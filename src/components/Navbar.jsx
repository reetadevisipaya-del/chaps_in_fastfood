import React, { useState } from 'react';
import { ShoppingBag, Search, Phone, MapPin, Flame, Utensils, X, Sparkles } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { OUTLET_INFO } from '../data/menuData';

export default function Navbar({
  cartCount,
  onOpenCart,
  searchQuery,
  setSearchQuery,
  dietFilter,
  setDietFilter,
  activeCategory,
  onSelectCategory
}) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8EA]/95 backdrop-blur-md border-b-2 border-[#FFD966]/60 shadow-sm transition-all">
      {/* Top Playful Announcement Bar */}
      <div className="bg-[#F4512C] text-white text-xs sm:text-sm font-semibold py-1.5 px-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="bg-[#FFD966] text-[#29211E] text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              HOT OFFER
            </span>
            <span className="hidden sm:inline">🛵 FREE Delivery in Chandigarh above ₹500 & Mohali above ₹700!</span>
            <span className="sm:hidden">🛵 FREE Delivery Chd ₹500+ | Mohali ₹700+</span>
          </div>
          <div className="flex items-center gap-4 shrink-0 text-xs">
            <a 
              href={`tel:${OUTLET_INFO.whatsappNumber}`} 
              className="flex items-center gap-1 hover:text-[#FFD966] transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{OUTLET_INFO.displayPhone}</span>
            </a>
            <span className="hidden md:inline text-white/60">|</span>
            <span className="hidden md:flex items-center gap-1 text-[#FFD966]">
              <Flame className="w-3.5 h-3.5 text-[#FFD966]" /> Sector 34, Chandigarh
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#FFD966] shadow-md transition-transform group-hover:scale-105 bg-black flex items-center justify-center">
                <img 
                  src="/chaps_logo.jpeg" 
                  alt="Chaps-In Fast Food Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#F4512C] text-white text-[9px] font-black px-1.5 py-0.2 rounded-full border border-white">
                30Y+
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-display font-extrabold text-xl sm:text-2xl text-[#29211E] tracking-tight leading-none">
                  CHAPS<span className="text-[#F4512C]">-IN</span>
                </h1>
                <span className="bg-[#FFD966] text-[#29211E] text-[10px] font-black px-1.5 py-0.5 rounded-md leading-none uppercase">
                  Fast Food
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#29211E]/70 font-medium">
                Formerly Chaplin • Sector 34 Chandigarh
              </p>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#29211E]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Kurkure Momos, Butter Chicken, Cheese Naan, Boba..."
                className="w-full bg-white text-[#29211E] text-sm font-medium pl-10 pr-10 py-2.5 rounded-full border-2 border-[#FFD966]/80 focus:border-[#F4512C] focus:outline-none focus:ring-2 focus:ring-[#F4512C]/20 shadow-inner transition-all placeholder:text-[#29211E]/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="md:hidden p-2 text-[#29211E] bg-white rounded-full border border-[#FFD966] hover:bg-[#FFD966]/20 transition-colors"
              aria-label="Search items"
            >
              <Search className="w-5 h-5 text-[#29211E]" />
            </button>

            {/* Veg / Non-Veg Quick Pill Filter (Desktop) */}
            <div className="hidden lg:flex items-center bg-white p-1 rounded-full border border-[#FFD966]/80 shadow-sm text-xs font-bold">
              <button
                onClick={() => setDietFilter('all')}
                className={`px-3 py-1 rounded-full transition-all ${
                  dietFilter === 'all'
                    ? 'bg-[#29211E] text-white shadow-sm'
                    : 'text-[#29211E]/70 hover:text-[#29211E]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`px-3 py-1 rounded-full flex items-center gap-1 transition-all ${
                  dietFilter === 'veg'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Veg
              </button>
              <button
                onClick={() => setDietFilter('nonveg')}
                className={`px-3 py-1 rounded-full flex items-center gap-1 transition-all ${
                  dietFilter === 'nonveg'
                    ? 'bg-[#F4512C] text-white shadow-sm'
                    : 'text-[#F4512C] hover:bg-red-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400"></span> Non-Veg
              </button>
            </div>

            {/* Zomato Link Button */}
            <a
              href={OUTLET_INFO.zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 bg-[#CB202D]/10 hover:bg-[#CB202D]/20 text-[#CB202D] text-xs font-black rounded-full border border-[#CB202D]/30 transition-all hover:scale-105"
            >
              <span className="font-display font-black text-xs">Zomato</span>
            </a>

            {/* Instagram Link Button */}
            <a
              href={OUTLET_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 hover:from-[#833ab4]/20 hover:to-[#fcb045]/20 text-[#29211E] text-xs font-bold rounded-full border border-[#fd1d1d]/30 transition-all hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4 text-[#e1306c]" />
              <span className="hidden xl:inline">@chaps_in_fastfood</span>
              <span className="xl:hidden">Insta</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#F4512C] hover:bg-[#d63d1a] text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all active:scale-95 group"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FFD966] text-[#29211E] text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-bounce">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-display text-sm tracking-wide">
                Cart {cartCount > 0 ? `(${cartCount})` : ''}
              </span>
            </button>

          </div>
        </div>

        {/* Mobile Search Input Drawer */}
        {mobileSearchOpen && (
          <div className="mt-3 md:hidden">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#29211E]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search food, momos, rolls, boba..."
                className="w-full bg-white text-[#29211E] text-sm font-medium pl-10 pr-10 py-2.5 rounded-full border-2 border-[#FFD966] focus:border-[#F4512C] focus:outline-none shadow-sm"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {/* Mobile Veg / Non-Veg filter */}
            <div className="flex items-center gap-2 mt-2 pt-1 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setDietFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 ${
                  dietFilter === 'all' ? 'bg-[#29211E] text-white' : 'bg-white text-[#29211E] border border-gray-200'
                }`}
              >
                All Items
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 flex items-center gap-1 ${
                  dietFilter === 'veg' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-700 border border-emerald-200'
                }`}
              >
                🟢 Pure Veg
              </button>
              <button
                onClick={() => setDietFilter('nonveg')}
                className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 flex items-center gap-1 ${
                  dietFilter === 'nonveg' ? 'bg-[#F4512C] text-white' : 'bg-white text-[#F4512C] border border-red-200'
                }`}
              >
                🔴 Non-Veg
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
