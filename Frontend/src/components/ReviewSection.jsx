import React, { useState, useEffect } from 'react';

const ReviewSection = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [textReview, setTextReview] = useState('');
  const [rating, setRating] = useState(0);

  // Load reviews from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`reviews-${productId}`);
    if (saved) {
      setReviews(JSON.parse(saved));
    }
  }, [productId]);

  const submitReview = (e) => {
    e.preventDefault();
    if (textReview.trim()) {
      const newReviews = [...reviews, { rating, text: textReview }];
      setReviews(newReviews);
      localStorage.setItem(`reviews-${productId}`, JSON.stringify(newReviews));
      setTextReview('');
      setRating(0);
    }
  };

  return (
    <div>
      {reviews.length === 0 ? (
        <p className="text-gray-600 mb-4">There are no reviews yet.</p>
      ) : (
        <ul className="mb-6 space-y-3">
          {reviews.map((rev, i) => (
            <li key={i} className="p-4 border rounded bg-white shadow-sm">
              <p className="text-yellow-500">{"★".repeat(rev.rating)}</p>
              <p className="text-gray-800">{rev.text}</p>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={submitReview} className="space-y-4">
        <h3 className="font-semibold text-lg">Submit a review</h3>
        <div className="flex gap-2 items-center">
          <span className="text-sm">Your Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              className={`text-xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
            >
              ★
            </button>
          ))}
        </div>
        <textarea
          className="w-full border rounded p-2"
          rows="4"
          placeholder="Your review..."
          value={textReview}
          onChange={(e) => setTextReview(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewSection;
