import React, { useState } from 'react';
import { Play, Eye, Heart, ArrowUpRight, X } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { INSTAGRAM_REELS } from '../data/reviewsData';
import { OUTLET_INFO } from '../data/menuData';

export default function VideoReelsSection({ onSelectDishByName }) {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-12 bg-gradient-to-b from-[#FFF8EA] to-[#FFF0D4] relative overflow-hidden border-t-2 border-b-2 border-[#FFD966]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="sticker-badge bg-[#E1306C] text-white text-[11px] px-3 py-0.5 font-bold flex items-center gap-1">
                <InstagramIcon className="w-3.5 h-3.5" /> INSTAGRAM VIRAL
              </span>
              <span className="text-xs font-bold text-[#29211E]/60">@chaps_in_fastfood</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#29211E] tracking-tight">
              Trending on <span className="text-[#F4512C]">Foodie Reels</span>
            </h2>
            <p className="text-sm text-[#29211E]/70 font-medium mt-1">
              Watch Chandigarh food bloggers drool over our crunchy momos & cheese pull!
            </p>
          </div>

          <a
            href={OUTLET_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105 shrink-0"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Reels Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INSTAGRAM_REELS.map((reel) => (
            <div
              key={reel.id}
              className="group relative bg-black rounded-3xl overflow-hidden shadow-lg border-2 border-[#FFD966] transition-all hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Thumbnail / Video Preview */}
              <div 
                className="relative h-80 sm:h-92 overflow-hidden cursor-pointer"
                onClick={() => setActiveVideo(reel)}
              >
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Center Play Button */}
                <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#F4512C]/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white translate-x-0.5" />
                </div>

                {/* View stats badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1.5">
                  <Eye className="w-3 h-3 text-[#FFD966]" />
                  <span>{reel.views} views</span>
                </div>

                {/* Likes badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1.5">
                  <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                  <span>{reel.likes}</span>
                </div>

                {/* Reel Caption */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-display font-bold text-sm text-white line-clamp-2 leading-snug drop-shadow-md">
                    {reel.title}
                  </h3>
                  <p className="text-[11px] text-[#FFD966] font-semibold mt-1">
                    Featured: {reel.dish}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Order Action */}
              <div className="p-3 bg-[#29211E] flex items-center justify-between border-t border-white/10">
                <span className="text-xs text-white/80 font-medium truncate max-w-[150px]">
                  {reel.dish}
                </span>
                <button
                  onClick={() => onSelectDishByName(reel.dish)}
                  className="bg-[#FFD966] hover:bg-[#F4512C] text-[#29211E] hover:text-white text-xs font-display font-black px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                >
                  Order Dish
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-sm bg-black rounded-3xl overflow-hidden border-2 border-[#FFD966] shadow-2xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-transform hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[550px] w-full">
              <video
                src={activeVideo.videoUrl}
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 bg-[#29211E] text-white flex items-center justify-between">
              <div>
                <p className="text-xs text-[#FFD966] font-bold">@chaps_in_fastfood</p>
                <h4 className="font-display text-sm font-bold truncate max-w-[200px]">
                  {activeVideo.title}
                </h4>
              </div>
              <button
                onClick={() => {
                  onSelectDishByName(activeVideo.dish);
                  setActiveVideo(null);
                }}
                className="bg-[#F4512C] hover:bg-[#d63d1a] text-white font-display text-xs font-bold px-3 py-2 rounded-xl"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
