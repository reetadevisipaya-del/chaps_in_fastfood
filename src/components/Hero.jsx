import React, { useState } from 'react';
import { Flame, Star, MessageSquare, ArrowRight, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { OUTLET_INFO } from '../data/menuData';
import chapsLogo from '../assets/chaps_logo.jpeg';
import heroMomos from '../assets/hero_momos.jpg';
import heroCheeseNaan from '../assets/hero_cheesenaan.jpg';
import heroBoba from '../assets/hero_boba.jpg';

const HERO_FEATURED_DISHES = [
  {
    id: 'hero-kurkure',
    name: 'Paneer Kurkure Momos',
    price: 270,
    pieces: '8 Pieces',
    tag: 'Crispiest in Tricity',
    desc: 'Golden crunchy batter coating, juicy paneer core & fiery momo chutney',
    image: heroMomos,
    emoji: '🥟'
  },
  {
    id: 'hero-cheesenaan',
    name: 'Cheese Naan With Gravy',
    price: 220,
    pieces: 'Fresh Clay Tandoor',
    tag: 'Molten Cheese Pull',
    desc: 'Stuffed with 100% mozzarella & Amul cheese, served with rich Makhani gravy',
    image: heroCheeseNaan,
    emoji: '🧀'
  },
  {
    id: 'hero-boba',
    name: 'Mango Boba with Cheese Foam',
    price: 180,
    pieces: '500 ml Cup',
    tag: 'Trending Drink',
    desc: 'Alphonso mango milk tea with chewy tapioca pearls and salted cheese foam',
    image: heroBoba,
    emoji: '🧋'
  }
];

export default function Hero({ onExploreMenu, onOpenReels }) {
  const [activeDishIndex, setActiveDishIndex] = useState(0);
  const activeDish = HERO_FEATURED_DISHES[activeDishIndex];

  return (
    <section className="relative overflow-hidden pt-4 pb-10 sm:py-14 bg-[#FFF8EA]">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#FFD966]/25 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#F4512C]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Expressive Copy & Action CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Playful Sticker Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="sticker-badge bg-[#FFD966] text-[#29211E] text-xs px-3 py-1 font-extrabold border border-[#29211E]/10">
                ⭐ 30+ Years Chandigarh Legacy
              </span>
              <span className="sticker-badge bg-[#29211E] text-[#FFF8EA] text-xs px-3 py-1 font-extrabold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#F4512C]" /> Formerly Chaplin Fast Food
              </span>
              <span className="sticker-badge bg-emerald-100 text-emerald-800 text-xs px-3 py-1 font-extrabold border border-emerald-300">
                🟢 Open Now (11:30 AM – 11:00 PM)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#29211E] leading-[1.1] tracking-tight">
              Chaps - In <span className="text-[#F4512C]">Fast Food</span> <br />
              <span className="underline decoration-[#FFD966] decoration-wavy decoration-4">
                Iconic Taste,
              </span> <br />
              Direct to Your Door!
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-[#29211E]/80 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Chandigarh’s favourite street-food icon in <span className="font-bold text-[#29211E]">Sector 34</span>. Famous for crispy <span className="font-bold text-[#F4512C]">Paneer Kurkure Momos</span>, molten <span className="font-bold text-[#F4512C]">Cheese Naan with Gravy</span>, rich Butter Chicken & bubbling Boba Tea!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onExploreMenu}
                className="bg-[#F4512C] hover:bg-[#d63d1a] text-white font-display text-sm sm:text-base font-bold px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${OUTLET_INFO.whatsappNumber}?text=Hi%20Chaps%20Fast%20Food!%20I%20want%20to%20place%20an%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-display text-sm sm:text-base font-bold px-5 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={OUTLET_INFO.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#CB202D] hover:bg-[#b01c27] text-white font-display text-sm sm:text-base font-bold px-5 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Order on Zomato</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Stats Bar */}
            <div className="pt-3 border-t border-[#29211E]/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-left">
                <div className="flex items-center gap-1 text-[#29211E]">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-display font-extrabold text-base sm:text-xl">4.8 / 5</span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#29211E]/60 font-semibold">2,800+ Foodie Reviews</p>
              </div>

              <div className="text-left border-l border-[#29211E]/10 pl-2 sm:pl-3">
                <div className="flex items-center gap-1 text-[#29211E]">
                  <Flame className="w-4 h-4 text-[#F4512C]" />
                  <span className="font-display font-extrabold text-base sm:text-xl">500K+</span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#29211E]/60 font-semibold">Momos Served</p>
              </div>

              <div className="text-left border-l border-[#29211E]/10 pl-2 sm:pl-3">
                <div className="flex items-center gap-1 text-[#29211E]">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span className="font-display font-extrabold text-base sm:text-xl">25-35m</span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#29211E]/60 font-semibold">Fast Hot Delivery</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Res Food Photography Showcase (No Glitchy Video) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Official Logo & Appetizing Food Photography */}
              <div className="relative bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border-4 border-[#FFD966] overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
                
                {/* Visual Image Showcase Area */}
                <div className="relative h-64 sm:h-80 md:h-88 rounded-2xl overflow-hidden bg-gradient-to-br from-[#29211E] to-[#45322b] group">
                  <img
                    src={activeDish.image}
                    alt={activeDish.name}
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = heroMomos;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"></div>

                  {/* Top Live Badge */}
                  <div className="absolute top-3 left-3 bg-[#F4512C] text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD966]" />
                    <span>{activeDish.tag}</span>
                  </div>

                  {/* Top Logo Watermark */}
                  <div className="absolute top-3 right-3 w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFD966] shadow-md bg-black">
                    <img src={chapsLogo} alt="Chaps Logo" className="w-full h-full object-cover" />
                  </div>

                  {/* Bottom Dish Details */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <span className="bg-[#FFD966] text-[#29211E] text-[10px] font-black px-2 py-0.5 rounded uppercase">
                          Sector 34 Favorite
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">
                          {activeDish.name}
                        </h3>
                        <p className="text-xs text-white/80 line-clamp-1 drop-shadow-sm">
                          {activeDish.desc}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-display text-2xl font-black text-[#FFD966]">₹{activeDish.price}</span>
                        <p className="text-[10px] text-white/70 font-semibold">{activeDish.pieces}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Dish Switcher Tabs */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  {HERO_FEATURED_DISHES.map((dish, idx) => (
                    <button
                      key={dish.id}
                      onClick={() => setActiveDishIndex(idx)}
                      className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                        activeDishIndex === idx
                          ? 'bg-[#FFD966]/30 border-[#F4512C] shadow-sm'
                          : 'bg-[#FFF8EA] border-[#FFD966]/60 hover:bg-[#FFD966]/20'
                      }`}
                    >
                      <span className="text-base sm:text-lg block">{dish.emoji}</span>
                      <p className="font-display font-bold text-[11px] sm:text-xs text-[#29211E] truncate">
                        {dish.name.split(' ')[0]}
                      </p>
                      <p className="text-[10px] text-[#F4512C] font-extrabold">₹{dish.price}</p>
                    </button>
                  ))}
                </div>

              </div>

              {/* Floating Sticker: 30 Yrs (Safely positioned on top left, no bottom overlap) */}
              <div className="absolute -top-3.5 -left-3.5 bg-[#FFD966] text-[#29211E] rounded-2xl px-3 py-1.5 shadow-xl border-2 border-[#29211E] transform -rotate-6 hidden sm:block">
                <div className="flex items-center gap-1 font-display font-black text-xs">
                  <span>📍</span>
                  <span>Booth 49, Sector 34</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
