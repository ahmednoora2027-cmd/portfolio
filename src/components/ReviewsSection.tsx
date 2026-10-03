import React, { useState } from 'react';
import { RESTAURANT_INFO, REVIEWS_DATA } from '../data/restaurantData';
import { Review } from '../types';
import { Star, MessageSquareQuote, CheckCircle, PlusCircle, X } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: Review = {
      id: Date.now(),
      author: newAuthor.trim(),
      rating: newRating,
      date: 'الآن',
      comment: newComment.trim()
    };

    setReviews([newRev, ...reviews]);
    setShowAddModal(false);
    setNewAuthor('');
    setNewComment('');
    setSubmittedMessage('شكرًا لمشاركتك رأيك في لقمه هنا!');
    setTimeout(() => setSubmittedMessage(''), 4000);
  };

  return (
    <section id="reviews" className="py-20 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#f3b52b] uppercase mb-2">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              CUSTOMER LOVE • قالوا عن لقمه هنا
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#fff7e8] tracking-tight">
              آراء <span className="text-[#f3b52b]">عملائنا</span>
            </h2>
            <p className="text-sm sm:text-base text-[#999] mt-1 max-w-xl">
              تجارب حقيقية من زبائن لقمه هنا في المرج. الجودة والخدمة هي أساس كل طلب.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-[#141414] p-4 rounded-2xl border border-white/10">
            <div className="text-center pl-4 border-l border-white/10">
              <div className="text-3xl font-black text-[#fff7e8] flex items-center gap-1">
                <span>{RESTAURANT_INFO.rating}</span>
                <Star className="w-5 h-5 text-[#f3b52b] fill-[#f3b52b]" />
              </div>
              <div className="text-[11px] text-[#ffd76a] font-bold">تقييم ممتاز</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-[#ddd]">من <strong>{RESTAURANT_INFO.reviewsCount}</strong> مراجعة على Google</div>
              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center gap-1 text-xs text-[#f3b52b] hover:text-[#ffd76a] font-bold underline cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                أضف رأيك معنا
              </button>
            </div>
          </div>
        </div>

        {submittedMessage && (
          <div className="mb-6 p-3 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-xs font-bold text-center">
            {submittedMessage}
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/8 hover:border-[#f3b52b]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#f3b52b]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating
                            ? 'fill-[#f3b52b] text-[#f3b52b]'
                            : 'text-[#333]'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] text-[#666]">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#ded8cf] leading-relaxed mb-4 italic">
                  «{rev.comment}»
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#888]">
                <span className="font-bold text-[#fff7e8]">{rev.author}</span>
                <span className="flex items-center gap-1 text-[#22c55e] text-[10px]">
                  <CheckCircle className="w-3 h-3" />
                  تقييم Google
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Review Modal */}
      {showAddModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={(e) => e.target === e.currentTarget && setShowAddModal(false)}
        >
          <div className="relative w-full max-w-md bg-[#161616] border border-white/10 rounded-2xl p-6 shadow-2xl text-[#fff7e8]">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 left-4 p-1.5 rounded-full bg-white/5 text-white/70 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-black mb-1">شاركنا رأيك في لقمه هنا</h3>
            <p className="text-xs text-[#888] mb-4">رأيك يشرفنا ويساعدنا على تقديم الأفضل دائمًا.</p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#ffd76a] mb-1">الاسم:</label>
                <input
                  type="text"
                  required
                  placeholder="اسمك الكريم"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#0a0a0a] border border-white/10 text-xs text-[#fff7e8] focus:outline-none focus:border-[#f3b52b]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#ffd76a] mb-1">التقييم:</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setNewRating(s)}
                      className="p-1 text-[#f3b52b]"
                    >
                      <Star
                        className={`w-6 h-6 ${s <= newRating ? 'fill-[#f3b52b]' : 'text-[#333]'}`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-[#ffd76a] font-bold mr-2">
                    {newRating} من 5
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#ffd76a] mb-1">تعليقك:</label>
                <textarea
                  rows={3}
                  required
                  placeholder="كيف كان طعم البرجر، الكريب أو البيتزا والخدمة؟"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#0a0a0a] border border-white/10 text-xs text-[#fff7e8] focus:outline-none focus:border-[#f3b52b] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-black text-xs bg-[#f3b52b] text-[#080808] hover:bg-[#ffd76a] transition-colors cursor-pointer"
              >
                نشر التقييم
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
