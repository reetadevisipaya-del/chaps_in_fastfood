import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Truck, ShieldCheck } from 'lucide-react';
import { OUTLET_INFO } from '../data/menuData';

export default function OutletsSection() {
  return (
    <section className="py-14 bg-white border-t-2 border-[#FFD966]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="sticker-badge bg-[#FFD966] text-[#29211E] text-xs px-3 py-1 font-black">
            📍 VISIT OR TAKEAWAY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#29211E] mt-2">
            Our Outlets & Delivery Hubs
          </h2>
          <p className="text-sm text-[#29211E]/70 font-medium mt-1">
            Fresh hot preparation for delivery across Chandigarh, Mohali & Panchkula.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OUTLET_INFO.branches.map((branch, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 border-2 transition-all flex flex-col justify-between ${
                branch.isPrimary
                  ? 'bg-[#FFF8EA] border-[#F4512C] shadow-lg relative'
                  : 'bg-white border-[#FFD966] shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                {branch.isPrimary && (
                  <span className="absolute -top-3 left-6 bg-[#F4512C] text-white text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    MAIN OUTLET
                  </span>
                )}

                <div className="w-12 h-12 rounded-2xl bg-[#FFD966]/50 flex items-center justify-center text-xl mb-4">
                  🏪
                </div>

                <h3 className="font-display font-black text-lg text-[#29211E]">
                  {branch.name}
                </h3>

                <p className="text-xs text-[#29211E]/80 mt-2 font-medium flex items-start gap-1.5 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#F4512C] shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </p>

                <div className="mt-4 pt-3 border-t border-[#FFD966]/40 space-y-1.5 text-xs text-[#29211E]/70">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Open: 11:30 AM – 11:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold">
                    <Truck className="w-3.5 h-3.5 text-[#F4512C]" />
                    <span>Free Delivery on eligible orders</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-2">
                <a
                  href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                  className="flex-1 bg-[#29211E] hover:bg-[#F4512C] text-white font-display text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href={OUTLET_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFF8EA] hover:bg-[#FFD966] text-[#29211E] p-2.5 rounded-xl border border-[#FFD966] transition-colors"
                  title="View on Google Maps"
                >
                  <Navigation className="w-4 h-4 text-[#F4512C]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Policy Banner */}
        <div className="mt-10 bg-[#29211E] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-[#FFD966] text-[#29211E] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              DELIVERY POLICY & VALUE
            </span>
            <h3 className="font-display font-extrabold text-2xl text-white">
              Direct WhatsApp Delivery or Zomato Delivery
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              • Chandigarh: Minimum order ₹500 for FREE delivery (otherwise ₹40)<br />
              • Mohali: Minimum order ₹700 for FREE delivery (otherwise ₹60)<br />
              • Self Pickup: ₹0 fee, packed piping hot in 15 mins!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={OUTLET_INFO.zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CB202D] hover:bg-[#b01c27] text-white font-display text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Order on Zomato</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${OUTLET_INFO.whatsappNumber}?text=Hi%20Chaps!%20I%20want%20to%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white font-display text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-md transition-all flex items-center gap-2"
            >
              <span>WhatsApp Kitchen</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
