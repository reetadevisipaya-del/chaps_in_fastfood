import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquare, ThumbsUp, Plus, X, Heart } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(REVIEWS_DATA);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: 'Sector 34, Chandigarh',
    rating: 5,
    dish: 'Paneer Kurkure Momos',
    comment: ''
  });

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;

    const created = {
      id: Date.now(),
      name: newReview.name,
      location: newReview.location,
      rating: newReview.rating,
      date: 'Just now',
      verified: true,
      dish: newReview.dish,
      comment: newReview.comment,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    };

    setReviews([created, ...reviews]);
    setShowReviewModal(false);
    setNewReview({
      name: '',
      location: 'Sector 34, Chandigarh',
      rating: 5,
      dish: 'Paneer Kurkure Momos',
      comment: ''
    });
  };

  return (
    <section className="py-14 bg-[#FFF8EA] border-t-2 border-[#FFD966]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="sticker-badge bg-[#FFD966] text-[#29211E] text-[11px] px-3 py-0.5 font-black">
                ⭐ 4.8 RATED ON GOOGLE & ZOMATO
              </span>
              <span className="text-xs font-bold text-[#29211E]/60">3,500+ Happy Foodies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#29211E] tracking-tight">
              Tricity Loves <span className="text-[#F4512C]">Chaps-In</span>
            </h2>
            <p className="text-sm text-[#29211E]/70 font-medium mt-1">
              Read real reviews from generations of students and families across Chandigarh & Mohali.
            </p>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="inline-flex items-center gap-2 bg-[#29211E] hover:bg-[#F4512C] text-white font-display text-xs sm:text-sm font-bold px-4 py-2.5 rounded-2xl shadow-md transition-all self-start md:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-5 border-2 border-[#FFD966]/60 shadow-sm hover:shadow-md hover:border-[#F4512C]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#FFD966]"
                    />
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#29211E] flex items-center gap-1">
                        {rev.name}
                        {rev.verified && (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                        )}
                      </h4>
                      <p className="text-[11px] text-[#29211E]/60 font-medium">{rev.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-black text-[#29211E]">{rev.rating}.0</span>
                  </div>
                </div>

                {/* Dish Tag */}
                {rev.dish && (
                  <div className="inline-block bg-[#FFF8EA] text-[#F4512C] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#FFD966] mb-2.5">
                    Ordered: {rev.dish}
                  </div>
                )}

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#29211E]/80 leading-relaxed font-medium">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#29211E]/50">
                <span>{rev.date}</span>
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <ThumbsUp className="w-3 h-3" /> Verified Order
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FFF8EA] w-full max-w-md rounded-3xl p-6 border-4 border-[#FFD966] shadow-2xl relative">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-display font-black text-xl text-[#29211E] mb-1">
              Share Your Food Review
            </h3>
            <p className="text-xs text-[#29211E]/70 mb-4">
              Help other Tricity foodies discover your favorite snacks at Chaps-In!
            </p>

            <form onSubmit={handleAddReview} className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-[#29211E]/70 uppercase block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="e.g. Jasleen Kaur"
                  className="w-full bg-white text-xs p-2.5 rounded-xl border border-[#FFD966] focus:border-[#F4512C] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-[#29211E]/70 uppercase block mb-1">Location</label>
                  <input
                    type="text"
                    value={newReview.location}
                    onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                    className="w-full bg-white text-xs p-2.5 rounded-xl border border-[#FFD966] focus:border-[#F4512C] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#29211E]/70 uppercase block mb-1">Rating</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full bg-white text-xs p-2.5 rounded-xl border border-[#FFD966] focus:border-[#F4512C] focus:outline-none font-bold"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                    <option value={3}>⭐⭐⭐ (3 Stars)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#29211E]/70 uppercase block mb-1">Favorite Dish</label>
                <input
                  type="text"
                  value={newReview.dish}
                  onChange={(e) => setNewReview({ ...newReview, dish: e.target.value })}
                  placeholder="e.g. Paneer Kurkure Momos"
                  className="w-full bg-white text-xs p-2.5 rounded-xl border border-[#FFD966] focus:border-[#F4512C] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#29211E]/70 uppercase block mb-1">Review Comments</label>
                <textarea
                  required
                  rows={3}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Tell us about the taste, crispiness, sauce, or delivery..."
                  className="w-full bg-white text-xs p-2.5 rounded-xl border border-[#FFD966] focus:border-[#F4512C] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F4512C] hover:bg-[#d63d1a] text-white font-display text-sm font-bold py-3 rounded-2xl shadow-md transition-all cursor-pointer"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
