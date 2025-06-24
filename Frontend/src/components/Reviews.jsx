import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Riya Sharma",
    text: "My dog absolutely loves the supplements! She's more energetic and healthy than ever.",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    text: "Great quality and fast delivery. My vet recommended it and now I recommend it too!",
  },
  {
    id: 3,
    name: "Simran Kaur",
    text: "Noticeable improvement in my cat's fur and digestion. Excellent product!",
  },
  {
    id: 4,
    name: "Rahul Verma",
    text: "Trusted brand for my pet's daily needs. Amazing results with the liver support formula.",
  },
  {
    id: 5,
    name: "Neha Desai",
    text: "Loved the natural ingredients. My senior dog has more mobility now.",
  },
];

const ReviewSection = () => {
  return (
    <div className="bg-gray-100 py-16 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Pet Owners Say
      </h2>
      
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...reviews, ...reviews].map((review, idx) => (
            <div 
              key={`review-${idx}`}
              className="inline-block w-72 mx-4 bg-white p-6 rounded-xl shadow-lg flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-700 italic mb-4 h-20 overflow-hidden">"{review.text}"</p>
              <div className="flex justify-center mb-2">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <span className="font-semibold text-purple-600">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: inline-block;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default ReviewSection;