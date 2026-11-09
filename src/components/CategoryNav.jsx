import React from 'react';
import { MENU_CATEGORIES } from '../data/menuData';

export default function CategoryNav({ activeCategory, onSelectCategory }) {
  return (
    <div className="sticky top-[73px] sm:top-[77px] z-30 bg-[#FFF8EA]/95 backdrop-blur-md py-3 border-b border-[#FFD966]/50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-display text-sm font-bold shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#F4512C] text-white shadow-md scale-102 ring-2 ring-[#FFD966]'
                    : 'bg-white text-[#29211E] border border-[#FFD966]/80 hover:bg-[#FFD966]/20 hover:border-[#F4512C]/40'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
