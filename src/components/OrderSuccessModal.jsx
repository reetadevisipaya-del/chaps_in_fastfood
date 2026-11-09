import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, MessageSquare, Phone, Copy, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { OUTLET_INFO } from '../data/menuData';

export default function OrderSuccessModal({ orderData, onClose, onResetOrder }) {
  if (!orderData) return null;

  useEffect(() => {
    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const handleOpenWhatsAppAgain = () => {
    const encodedMessage = encodeURIComponent(orderData.rawMessage);
    window.open(`https://wa.me/${OUTLET_INFO.whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(orderData.rawMessage);
    alert('Order details copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#FFF8EA] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFD966] text-center p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Celebration Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center text-emerald-600 shadow-md">
          <CheckCircle2 className="w-10 h-10 animate-bounce" />
        </div>

        <div>
          <span className="bg-[#FFD966] text-[#29211E] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
            Order Dispatched via WhatsApp
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#29211E] mt-2">
            Awesome, {orderData.customerName}! 🎉
          </h2>
          <p className="text-xs text-[#29211E]/70 font-semibold mt-1">
            Order Ref: <span className="font-mono font-bold text-[#F4512C]">#{orderData.orderId}</span>
          </p>
        </div>

        {/* Order Brief Summary Card */}
        <div className="bg-white rounded-2xl p-4 border border-[#FFD966] text-left text-xs space-y-2">
          <div className="flex justify-between font-bold border-b border-gray-100 pb-1.5">
            <span className="text-[#29211E]/70">Delivery Location:</span>
            <span className="text-[#29211E]">{orderData.currentZone.name}</span>
          </div>
          <div className="flex justify-between font-bold border-b border-gray-100 pb-1.5">
            <span className="text-[#29211E]/70">Payment Mode:</span>
            <span className="text-emerald-700 capitalize">{orderData.paymentMode.replace('_', ' ')}</span>
          </div>
          <div className="flex justify-between font-extrabold text-sm pt-1">
            <span className="font-display">Total Amount:</span>
            <span className="text-[#F4512C] font-black">₹{orderData.grandTotal}</span>
          </div>
        </div>

        <p className="text-[11px] text-[#29211E]/80">
          Our kitchen manager at <strong className="text-[#29211E]">Sector 34-C</strong> is preparing your order fresh. They will confirm the exact preparation time on WhatsApp!
        </p>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <button
            onClick={handleOpenWhatsAppAgain}
            className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-display text-sm font-black py-3 px-4 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Open WhatsApp Chat Again</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleCopy}
              className="bg-white hover:bg-gray-50 text-[#29211E] font-display text-xs font-bold py-2.5 px-3 rounded-xl border border-gray-200 flex items-center justify-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Receipt</span>
            </button>
            <a
              href={`tel:${OUTLET_INFO.whatsappNumber}`}
              className="bg-white hover:bg-gray-50 text-[#29211E] font-display text-xs font-bold py-2.5 px-3 rounded-xl border border-gray-200 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4512C]" />
              <span>Call Kitchen</span>
            </a>
          </div>

          <button
            onClick={() => {
              onResetOrder();
              onClose();
            }}
            className="w-full text-xs font-bold text-[#F4512C] hover:text-[#d63d1a] py-2 transition-colors cursor-pointer"
          >
            ← Back to Food Menu
          </button>
        </div>

      </div>
    </div>
  );
}
