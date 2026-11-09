import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import FoodCard from './components/FoodCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderSuccessModal from './components/OrderSuccessModal';
import VideoReelsSection from './components/VideoReelsSection';
import ReviewsSection from './components/ReviewsSection';
import OutletsSection from './components/OutletsSection';
import Footer from './components/Footer';

import { MENU_ITEMS, MENU_CATEGORIES, DELIVERY_ZONES, OUTLET_INFO } from './data/menuData';
import { ShoppingBag, ArrowRight, MessageSquare, Search, Flame, Sparkles } from 'lucide-react';

export default function App() {
  // Navigation & Filtering
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState('all'); // 'all' | 'veg' | 'nonveg'
  const [searchQuery, setSearchQuery] = useState('');

  // Cart State (Persisted in localStorage)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('chaps_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedZone, setSelectedZone] = useState('chandigarh');

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductVariant, setSelectedProductVariant] = useState(null);
  const [lastOrderData, setLastOrderData] = useState(null);

  // Save cart changes
  useEffect(() => {
    try {
      localStorage.setItem('chaps_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Total items in cart
  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  // Cart Items Total Price
  const cartSubtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  // Add Item to Cart
  const handleAddToCart = (item, variant = null, quantity = 1, note = '') => {
    const variantName = variant ? variant.name : null;
    const price = variant ? variant.price : item.price;
    const cartItemId = `${item.id}-${variantName || 'default'}`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (note) updated[existingIndex].note = note;
        return updated;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            id: item.id,
            name: item.name,
            variantName,
            price,
            quantity,
            image: item.image,
            isVeg: item.isVeg,
            note
          }
        ];
      }
    });
  };

  // Update Item Quantity in Cart
  const handleUpdateQuantity = (cartItemIdOrId, variantOrQty, newQtyIfByVariant) => {
    setCart((prev) => {
      let targetCartItemId = cartItemIdOrId;

      // Handle call from FoodCard where args are (item.id, variantName, newQuantity)
      if (typeof variantOrQty === 'string' || variantOrQty === null) {
        targetCartItemId = `${cartItemIdOrId}-${variantOrQty || 'default'}`;
        const newQty = newQtyIfByVariant;
        if (newQty <= 0) {
          return prev.filter((i) => i.cartItemId !== targetCartItemId);
        }
        return prev.map((i) => (i.cartItemId === targetCartItemId ? { ...i, quantity: newQty } : i));
      }

      // Handle call from CartDrawer where args are (cartItemId, newQuantity)
      const qty = variantOrQty;
      if (qty <= 0) {
        return prev.filter((i) => i.cartItemId !== targetCartItemId);
      }
      return prev.map((i) => (i.cartItemId === targetCartItemId ? { ...i, quantity: qty } : i));
    });
  };

  // Remove Item
  const handleRemoveItem = (cartItemId) => {
    setCart((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  // Clear Cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Filtered Menu Items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category Filter
      if (activeCategory === 'bestsellers' && !item.isBestseller) return false;
      if (activeCategory !== 'all' && activeCategory !== 'bestsellers' && item.category !== activeCategory) {
        return false;
      }

      // Diet Filter
      if (dietFilter === 'veg' && !item.isVeg) return false;
      if (dietFilter === 'nonveg' && item.isVeg) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description?.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesTag = item.tags?.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesTag) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, dietFilter, searchQuery]);

  // Find dish by name (for "Order Dish" from Reels)
  const handleSelectDishByName = (dishName) => {
    const item = MENU_ITEMS.find((i) =>
      i.name.toLowerCase().includes(dishName.toLowerCase()) || dishName.toLowerCase().includes(i.name.toLowerCase())
    );
    if (item) {
      setSelectedProduct(item);
      setSelectedProductVariant(item.variants ? item.variants[0] : null);
    } else {
      setSearchQuery(dishName);
      const menuEl = document.getElementById('menu-section');
      menuEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDetail = (item, variant = null) => {
    setSelectedProduct(item);
    setSelectedProductVariant(variant);
  };

  // Order Complete Handler
  const handleOrderComplete = (orderData) => {
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    setLastOrderData(orderData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EA] text-[#29211E]">
      
      {/* Top Header & Navbar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        dietFilter={dietFilter}
        setDietFilter={setDietFilter}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Hero Section */}
      <Hero
        onExploreMenu={() => {
          document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenReels={() => {
          document.getElementById('reels-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Sticky Category Navigator */}
      <CategoryNav
        activeCategory={activeCategory}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Food Menu Section */}
      <main id="menu-section" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Menu Section Title & Filter Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="sticker-badge bg-[#FFD966] text-[#29211E] text-[10px] font-black px-2.5 py-0.5 uppercase">
                {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.name || 'Menu'}
              </span>
              <span className="text-xs font-bold text-[#29211E]/60">
                {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'} available
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#29211E] tracking-tight">
              Order Online for <span className="text-[#F4512C]">Express WhatsApp Delivery</span>
            </h2>
          </div>

          {/* Quick Diet Badges */}
          <div className="flex items-center gap-2 text-xs font-bold">
            <button
              onClick={() => setDietFilter('all')}
              className={`px-3 py-1.5 rounded-xl border transition-all ${
                dietFilter === 'all'
                  ? 'bg-[#29211E] text-white border-[#29211E]'
                  : 'bg-white text-[#29211E] border-[#FFD966] hover:bg-[#FFD966]/20'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietFilter('veg')}
              className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition-all ${
                dietFilter === 'veg'
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span>Veg Only</span>
            </button>
            <button
              onClick={() => setDietFilter('nonveg')}
              className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition-all ${
                dietFilter === 'nonveg'
                  ? 'bg-[#F4512C] text-white border-[#F4512C]'
                  : 'bg-white text-[#F4512C] border-red-300 hover:bg-red-50'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span>Non-Veg</span>
            </button>
          </div>
        </div>

        {/* Food Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              // Find item in cart (default or first variant)
              const defaultCartItemId = `${item.id}-${item.variants ? item.variants[0].name : 'default'}`;
              const inCartItem = cart.find(
                (c) => c.id === item.id || c.cartItemId === defaultCartItemId
              );
              const inCartQuantity = inCartItem ? inCartItem.quantity : 0;

              return (
                <FoodCard
                  key={item.id}
                  item={item}
                  inCartQuantity={inCartQuantity}
                  onAddToCart={(foodItem, variant) => handleAddToCart(foodItem, variant, 1)}
                  onUpdateQuantity={handleUpdateQuantity}
                  onOpenDetail={handleOpenDetail}
                />
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-[#FFD966] max-w-md mx-auto my-12 space-y-3">
            <div className="text-4xl">🔍</div>
            <h3 className="font-display font-bold text-xl text-[#29211E]">
              No dishes found
            </h3>
            <p className="text-xs text-[#29211E]/70">
              We couldn't find any dishes matching "{searchQuery}". Try searching for Kurkure Momos, Butter Chicken, Chowmein or Boba!
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietFilter('all');
                setActiveCategory('all');
              }}
              className="bg-[#F4512C] hover:bg-[#d63d1a] text-white font-display text-xs font-bold px-4 py-2 rounded-full shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* Trending Instagram Reels Section */}
      <div id="reels-section">
        <VideoReelsSection onSelectDishByName={handleSelectDishByName} />
      </div>

      {/* Real Customer Reviews Section */}
      <ReviewsSection />

      {/* Outlets & Delivery Zones Section */}
      <OutletsSection />

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        selectedZone={selectedZone}
        setSelectedZone={setSelectedZone}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        selectedZone={selectedZone}
        setSelectedZone={setSelectedZone}
        onOrderComplete={handleOrderComplete}
      />

      <ProductModal
        item={selectedProduct}
        initialVariant={selectedProductVariant}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <OrderSuccessModal
        orderData={lastOrderData}
        onClose={() => setLastOrderData(null)}
        onResetOrder={() => setCart([])}
      />

      {/* Floating Mobile Cart Bar (Sticky when cart > 0) */}
      {cartCount > 0 && !isCartOpen && !isCheckoutOpen && (
        <div className="fixed bottom-4 inset-x-4 z-40 sm:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-[#F4512C] hover:bg-[#d63d1a] text-white font-display font-bold py-3.5 px-5 rounded-2xl shadow-2xl flex items-center justify-between border-2 border-[#FFD966] animate-bounce-once active:scale-98"
          >
            <div className="flex items-center gap-2">
              <span className="bg-[#FFD966] text-[#29211E] text-xs font-black px-2.5 py-0.5 rounded-full">
                {cartCount} {cartCount === 1 ? 'item' : 'items'}
              </span>
              <span className="text-sm font-extrabold">View Order Cart</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-black">₹{cartSubtotal}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}

      {/* Floating WhatsApp Quick Action Button (Desktop & Mobile) */}
      <a
        href={`https://wa.me/${OUTLET_INFO.whatsappNumber}?text=Hi%20Chaps-In%20Fast%20Food!%20I%20have%20a%20question%20about%20your%20menu.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-30 hidden sm:flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-display text-sm font-black px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
        <span className="hidden md:inline">Order / Inquire on WhatsApp</span>
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
      </a>

    </div>
  );
}
