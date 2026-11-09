import React, { useState } from 'react';
import { X, MessageSquare, Phone, User, MapPin, CreditCard, CheckCircle2, Copy, Sparkles, AlertCircle } from 'lucide-react';
import { DELIVERY_ZONES, PAYMENT_MODES, OUTLET_INFO } from '../data/menuData';

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  selectedZone,
  setSelectedZone,
  onOrderComplete
}) {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMode, setPaymentMode] = useState('upi_delivery');
  const [instructions, setInstructions] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const currentZone = DELIVERY_ZONES.find((z) => z.id === selectedZone) || DELIVERY_ZONES[0];
  const itemsTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const isFreeDelivery = currentZone.id === 'pickup' || itemsTotal >= currentZone.minFreeOrder;
  const deliveryFee = isFreeDelivery ? 0 : currentZone.deliveryFee;
  const grandTotal = itemsTotal + deliveryFee;

  // Generate Unique Order Reference
  const orderId = `CHAPS-${Math.floor(1000 + Math.random() * 9000)}`;

  // Construct short, clean formatted WhatsApp message
  const generateWhatsAppMessage = () => {
    const selectedPayMode = PAYMENT_MODES.find((p) => p.id === paymentMode)?.label || paymentMode;

    const itemListText = cart.map((item, idx) => {
      const variantStr = item.variantName ? ` (${item.variantName})` : '';
      const noteStr = item.note ? ` [Note: ${item.note}]` : '';
      return `${idx + 1}. ${item.quantity}x ${item.name}${variantStr} - ₹${item.price * item.quantity}${noteStr}`;
    }).join('\n');

    const deliveryNote = deliveryFee === 0 
      ? `FREE (Min ₹${currentZone.minFreeOrder} order met)`
      : `₹${deliveryFee}`;

    return `🍟 *NEW ORDER - CHAPS-IN FAST FOOD* 🍟
*Order Ref: #${orderId}*
--------------------------------
👤 *Customer Details:*
• Name: ${customerName.trim() || 'Valued Customer'}
• Phone: ${phoneNumber.trim() || 'Not Provided'}
• Area: ${currentZone.name}
• Address: ${address.trim() || (currentZone.id === 'pickup' ? 'Self Pickup at Booth 49' : 'Delivery Address Pending')}
• Mode of Payment: ${selectedPayMode}

📋 *Order Items:*
${itemListText}

--------------------------------
💵 *Bill Summary:*
• Items Total: ₹${itemsTotal}
• Delivery Charge: ${deliveryNote}
• *Grand Total: ₹${grandTotal}*

${instructions.trim() ? `📝 *Kitchen Instructions:*\n${instructions.trim()}\n--------------------------------\n` : ''}📍 *Outlet:* Booth 49, Sector 34-C, Chandigarh
Sent via Chaps Fast Food Web Order`;
  };

  const handleSendOrder = () => {
    if (!customerName.trim()) {
      setErrorMsg('Please enter your Name before sending the order.');
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit Phone Number.');
      return;
    }
    if (currentZone.id !== 'pickup' && (!address.trim() || address.trim().length < 5)) {
      setErrorMsg('Please enter your Delivery Address (House/Flat No, Landmark).');
      return;
    }

    setErrorMsg('');
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${OUTLET_INFO.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab / app
    window.open(waUrl, '_blank');

    // Trigger Success Callback
    onOrderComplete({
      orderId,
      customerName,
      phoneNumber,
      address,
      paymentMode,
      currentZone,
      itemsTotal,
      deliveryFee,
      grandTotal,
      cart,
      rawMessage: message
    });
  };

  const handleCopyMessage = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#FFF8EA] rounded-3xl shadow-2xl border-4 border-[#FFD966] my-6 flex flex-col overflow-hidden max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-white border-b-2 border-[#FFD966]/60 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
              <MessageSquare className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-xl text-[#29211E]">
                Order Details
              </h2>
              <p className="text-xs text-[#29211E]/70 font-semibold">
                Direct WhatsApp Ordering to Sector 34 Kitchen
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          
          {errorMsg && (
            <div className="p-3 bg-red-100 border border-red-300 text-red-800 rounded-xl text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Customer Details Form */}
          <div className="bg-white rounded-2xl p-4 border border-[#FFD966]/80 shadow-xs space-y-3">
            <h3 className="font-display font-bold text-sm text-[#29211E] flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#F4512C]" /> Customer Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-[#29211E]/70 uppercase tracking-wider block mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Rohit Sharma"
                  className="w-full bg-[#FFF8EA] text-sm text-[#29211E] font-medium p-2.5 rounded-xl border border-[#FFD966] focus:border-[#F4512C] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#29211E]/70 uppercase tracking-wider block mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                    placeholder="98765 43210"
                    className="w-full bg-[#FFF8EA] text-sm text-[#29211E] font-medium pl-11 pr-3 p-2.5 rounded-xl border border-[#FFD966] focus:border-[#F4512C] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Area & Address */}
          <div className="bg-white rounded-2xl p-4 border border-[#FFD966]/80 shadow-xs space-y-3">
            <h3 className="font-display font-bold text-sm text-[#29211E] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#F4512C]" /> Delivery Address
            </h3>

            <div>
              <label className="text-[11px] font-bold text-[#29211E]/70 uppercase tracking-wider block mb-1">
                Select City / Region
              </label>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full bg-[#FFF8EA] text-sm text-[#29211E] font-bold p-2.5 rounded-xl border border-[#FFD966] focus:border-[#F4512C] focus:outline-none"
              >
                {DELIVERY_ZONES.map((zone) => (
                  <option key={zone.id} value={zone.id}>
                    {zone.name} {zone.id !== 'pickup' ? `(Free above ₹${zone.minFreeOrder})` : ''}
                  </option>
                ))}
              </select>
            </div>

            {selectedZone !== 'pickup' ? (
              <div>
                <label className="text-[11px] font-bold text-[#29211E]/70 uppercase tracking-wider block mb-1">
                  Complete Address & Landmark <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Flat 302, Royal Heights, Sector 34-C, Near Gurudwara Sahib"
                  className="w-full bg-[#FFF8EA] text-sm text-[#29211E] font-medium p-2.5 rounded-xl border border-[#FFD966] focus:border-[#F4512C] focus:outline-none"
                />
              </div>
            ) : (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs font-semibold text-amber-900">
                📍 You can pick up your fresh hot order directly at <strong>Booth No. 49, Sector 34 C, Chandigarh</strong> in 15 minutes!
              </div>
            )}
          </div>

          {/* Mode of Payment */}
          <div className="bg-white rounded-2xl p-4 border border-[#FFD966]/80 shadow-xs space-y-2.5">
            <h3 className="font-display font-bold text-sm text-[#29211E] flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#F4512C]" /> Mode of Payment
            </h3>

            <div className="space-y-2">
              {PAYMENT_MODES.map((mode) => (
                <label
                  key={mode.id}
                  className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMode === mode.id
                      ? 'border-[#F4512C] bg-amber-50/60 shadow-xs'
                      : 'border-gray-200 bg-white hover:border-[#FFD966]'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMode"
                    value={mode.id}
                    checked={paymentMode === mode.id}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="mt-1 text-[#F4512C] focus:ring-[#F4512C]"
                  />
                  <div className="flex-1 text-xs">
                    <p className="font-bold text-[#29211E] flex items-center gap-1.5">
                      <span>{mode.icon}</span> {mode.label}
                    </p>
                    <p className="text-[#29211E]/70 font-medium mt-0.5">{mode.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Kitchen / Special Instructions */}
          <div>
            <label className="text-[11px] font-bold text-[#29211E]/70 uppercase tracking-wider block mb-1">
              Cooking / Delivery Instructions (Optional)
            </label>
            <input
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g. Extra green mint dip, deliver before 8 PM, please don't ring bell"
              className="w-full bg-white text-xs text-[#29211E] p-2.5 rounded-xl border border-[#FFD966] focus:border-[#F4512C] focus:outline-none"
            />
          </div>

          {/* WhatsApp Preview Snippet */}
          <div className="bg-[#E7F8E8] rounded-2xl p-3 border border-emerald-300">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-black uppercase text-emerald-900 tracking-wide flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp Message Sent to Chaps Kitchen:
              </span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="text-[11px] font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-emerald-300 transition-colors"
              >
                <Copy className="w-3 h-3" />
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <pre className="text-[11px] font-mono text-emerald-950 whitespace-pre-wrap bg-white/70 p-2.5 rounded-lg border border-emerald-200/60 max-h-36 overflow-y-auto">
              {generateWhatsAppMessage()}
            </pre>
          </div>

        </div>

        {/* Modal Action Bar */}
        <div className="p-4 bg-white border-t-2 border-[#FFD966]/60 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-[11px] text-[#29211E]/70 font-semibold block">Total Amount</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-black text-[#F4512C]">₹{grandTotal}</span>
              <span className="text-xs text-gray-500">
                ({cart.length} items {deliveryFee === 0 ? '+ FREE delivery' : `+ ₹${deliveryFee} delivery`})
              </span>
            </div>
          </div>

          <button
            onClick={handleSendOrder}
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-display text-base font-black py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Send Order on WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
}
