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
  {
    id: 6,
    name: "Kunal Joshi",
    text: "Calcinex helped my puppy with bone development. He's much stronger now!",
  },
  {
    id: 7,
    name: "Anjali Kapoor",
    text: "The pet neuron supplement calmed my anxious rescue. We noticed a real difference in days.",
  },
  {
    id: 8,
    name: "Deepak Nair",
    text: "Artimarin worked wonders on my lab's arthritis. He's playing fetch again!",
  },
  {
    id: 9,
    name: "Sneha Patil",
    text: "I was skeptical at first, but Aminopet truly boosted my dog's appetite and energy.",
  },
  {
    id: 10,
    name: "Mohit Rawat",
    text: "Our vet recommended Pet Neuron and it made a visible improvement in our dog's coordination.",
  },
];

const ReviewSection = () => {
  return (
    <div className="bg-gray-100 py-16 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        What Pet Owners Say
      </h2>

      <div className="relative w-full overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-6 px-4">
          {[...reviews, ...reviews].map((review, idx) => (
            <div
            key={`review-${idx}`}
          className="w-72 bg-white p-5 rounded-xl shadow-md flex-shrink-0 hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
         >
         <div className="flex-grow overflow-hidden">
           <p className="text-gray-700 text-sm italic whitespace-normal overflow-hidden">
             "{review.text}"
            </p>
            </div>

              <div className="flex flex-col items-center mt-4">
                <div className="flex gap-1 text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <span className="font-semibold text-purple-600 text-sm">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ReviewSection;