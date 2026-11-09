import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Truck, Sparkles, MapPin } from 'lucide-react';
import { DELIVERY_ZONES } from '../data/menuData';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  selectedZone,
  setSelectedZone,
  onProceedToCheckout
}) {
  if (!isOpen) return null;

  const currentZone = DELIVERY_ZONES.find((z) => z.id === selectedZone) || DELIVERY_ZONES[0];
  const itemsTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Delivery calculation based on zone & minimum order value
  const isFreeDelivery = currentZone.id === 'pickup' || itemsTotal >= currentZone.minFreeOrder;
  const deliveryFee = isFreeDelivery ? 0 : currentZone.deliveryFee;
  const grandTotal = itemsTotal + deliveryFee;

  const freeDeliveryShortfall = currentZone.id !== 'pickup' && itemsTotal < currentZone.minFreeOrder
    ? currentZone.minFreeOrder - itemsTotal
    : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF8EA] shadow-2xl border-l-4 border-[#FFD966] flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 bg-white border-b-2 border-[#FFD966]/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FFD966] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-[#29211E]" />
              </div>
              <div>
                <h2 className="font-display font-extrabold text-lg sm:text-xl text-[#29211E]">
                  Your Order Cart
                </h2>
                <p className="text-xs text-[#29211E]/70 font-semibold">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-600 hover:text-red-700 font-bold px-2 py-1 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Delivery Zone Selector & Free Delivery Bar */}
          <div className="p-3.5 bg-amber-50/80 border-b border-amber-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#29211E]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#F4512C]" /> Delivery Location:
              </span>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="bg-white border border-[#FFD966] rounded-lg px-2 py-1 text-xs font-bold text-[#29211E] focus:outline-none"
              >
                {DELIVERY_ZONES.map((zone) => (
                  <option key={zone.id} value={zone.id}>
                    {zone.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Free Delivery Threshold Bar */}
            {currentZone.id !== 'pickup' && (
              <div>
                {freeDeliveryShortfall > 0 ? (
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold text-[#29211E]">
                      <span>Add <span className="text-[#F4512C]">₹{freeDeliveryShortfall}</span> more for FREE Delivery</span>
                      <span>Target: ₹{currentZone.minFreeOrder}</span>
                    </div>
                    <div className="w-full h-2 bg-amber-200/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#F4512C] rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (itemsTotal / currentZone.minFreeOrder) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Woohoo! You have unlocked FREE Delivery!</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#FFD966]/40 flex items-center justify-center text-3xl">
                  🥟
                </div>
                <h3 className="font-display font-bold text-lg text-[#29211E]">
                  Your cart is hungry!
                </h3>
                <p className="text-xs text-[#29211E]/70 max-w-xs mx-auto">
                  Add Kurkure Momos, Cheese Naan, Chowmein or Boba Tea to kickstart your feast.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-[#F4512C] hover:bg-[#d63d1a] text-white font-display text-xs font-bold px-5 py-2.5 rounded-full shadow-md transition-all cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="bg-white rounded-2xl p-3 border border-[#FFD966]/60 shadow-sm flex items-center gap-3"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-gray-100"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-display font-bold text-sm text-[#29211E] truncate">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.cartItemId)}
                        className="text-gray-400 hover:text-red-500 p-0.5 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {item.variantName && (
                      <p className="text-[11px] text-[#F4512C] font-semibold">
                        Portion: {item.variantName}
                      </p>
                    )}

                    {item.note && (
                      <p className="text-[10px] text-gray-500 italic truncate">
                        Note: {item.note}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-2">
                      <span className="font-display font-black text-sm text-[#29211E]">
                        ₹{item.price * item.quantity}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center bg-[#FFF8EA] rounded-full border border-[#FFD966] p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white text-[#29211E]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-display font-black text-xs px-2 text-[#29211E]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white text-[#29211E]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Bill Summary */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t-2 border-[#FFD966]/60 space-y-3">
              <div className="space-y-1.5 text-xs text-[#29211E]">
                <div className="flex justify-between">
                  <span className="text-[#29211E]/70 font-semibold">Item Total</span>
                  <span className="font-bold">₹{itemsTotal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#29211E]/70 font-semibold flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5" /> Delivery Fee ({currentZone.name.split(' ')[0]})
                  </span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.2 rounded text-[11px]">
                      FREE
                    </span>
                  ) : (
                    <span className="font-bold">₹{deliveryFee}</span>
                  )}
                </div>
                <div className="flex justify-between text-sm font-black text-[#29211E] pt-2 border-t border-gray-100">
                  <span className="font-display text-base">To Pay</span>
                  <span className="font-display text-lg text-[#F4512C]">₹{grandTotal}</span>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={onProceedToCheckout}
                className="w-full bg-[#F4512C] hover:bg-[#d63d1a] text-white font-display text-base font-bold py-3.5 px-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-between cursor-pointer active:scale-98"
              >
                <span>Checkout & Details</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-black">₹{grandTotal}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>

              <p className="text-[10px] text-center text-[#29211E]/60 font-semibold">
                🔒 Orders directly sent via WhatsApp to Sector 34 Kitchen Manager
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
