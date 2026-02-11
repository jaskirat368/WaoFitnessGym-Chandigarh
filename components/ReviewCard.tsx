import React from 'react';
import { Review } from '../types';
import { Star, CheckCircle } from 'lucide-react';

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-brand-surface p-6 rounded-2xl border border-gray-800 min-w-[300px] md:min-w-[400px] snap-center">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center font-bold text-brand-primary border border-brand-primary/30">
            {review.author.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">{review.author}</h4>
            <div className="flex items-center gap-1 text-xs text-brand-muted">
               {review.localGuide && <span className="text-brand-primary flex items-center gap-1"><Star size={10} fill="currentColor" /> Local Guide</span>}
               <span>• {review.date}</span>
            </div>
          </div>
        </div>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed italic">
        "{review.text}"
      </p>
      <div className="mt-4 flex items-center gap-2 text-xs text-green-400">
         <CheckCircle size={12} /> Verified Review
      </div>
    </div>
  );
};

export default ReviewCard;