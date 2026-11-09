import React from 'react';
import { Phone, MapPin, ExternalLink, Heart, FileText, ArrowUp } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { OUTLET_INFO } from '../data/menuData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#29211E] text-white pt-14 pb-8 border-t-4 border-[#FFD966]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand & About */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFD966] bg-black shrink-0">
                <img
                  src="/chaps_logo.jpeg"
                  alt="Chaps In Fast Food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-black text-2xl text-white tracking-tight">
                  CHAPS<span className="text-[#F4512C]">-IN</span>
                </h3>
                <p className="text-xs text-[#FFD966] font-bold">
                  Fast Food • Chinese • Indian • Boba Tea
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
              Formerly known as <strong className="text-white">Chaplin Fast Food</strong>, Chaps-In has been Chandigarh’s favourite destination for crispy Paneer Kurkure Momos, rich Afghani gravies, Cheese Naan, and authentic street-style noodles for over 30 years.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={OUTLET_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-colors text-white"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={OUTLET_INFO.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#CB202D] flex items-center justify-center transition-colors text-white font-black text-sm"
                title="Zomato"
              >
                Z
              </a>
              <a
                href={OUTLET_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center transition-colors text-white"
                title="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
              <a
                href={`tel:${OUTLET_INFO.whatsappNumber}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F4512C] flex items-center justify-center transition-colors text-white"
                title="Call"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-[#FFD966] uppercase tracking-wider">
              Famous Specialties
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>• Paneer Kurkure Momos (8 pcs)</li>
              <li>• Cheese Naan with Gravy</li>
              <li>• Veg Afghani Momos (Creamy Gravy)</li>
              <li>• Chaplin Special Chowmein</li>
              <li>• Boneless Butter Chicken</li>
              <li>• Mango Boba Tea with Cheese Foam</li>
              <li>• Chilled Fruit Beer (Only ₹80)</li>
            </ul>
          </div>

          {/* Digital Menus & Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm text-[#FFD966] uppercase tracking-wider">
              Direct Menus & Ordering
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://drive.google.com/file/d/1xNI4yw3jA_fkaacJxWb0x3JYT5fylrNR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-white/90 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#FFD966]" />
                  <span>Official Food Menu (PDF)</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-white/50" />
              </a>

              <a
                href="https://drive.google.com/file/d/1qtamEuI_WXtK2jrCaQnxInrdZH2Tqxji/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-white/90 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#FFD966]" />
                  <span>Mocktails & Boba Menu (PDF)</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-white/50" />
              </a>

              <div className="p-3 rounded-xl bg-[#F4512C]/20 border border-[#F4512C]/40 text-[11px] text-[#FFD966] space-y-1">
                <p className="font-bold">🛵 Delivery Hotline:</p>
                <p className="font-mono text-white text-xs">{OUTLET_INFO.displayPhone} / {OUTLET_INFO.altPhone}</p>
                <p className="text-white/70">11:30 AM – 11:00 PM Daily</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Allergen Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
          <p>
            © {new Date().getFullYear()} Chaps-In Fast Food. All dishes prepared fresh using standard full-fat paneer & premium ingredients.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-[#F4512C] fill-[#F4512C]" /> for Chandigarh Foodies
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full bg-white/10 hover:bg-[#F4512C] text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
