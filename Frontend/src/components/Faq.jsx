import React from "react";
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "What are pet supplements, and why does my pet need them?",
    answer:
      "Pet supplements are products designed to provide additional nutrients that may not be sufficiently present in your pet's diet. They can help support various health aspects like joint health, skin and coat condition, digestion, and immune function, depending on the specific needs of your pet.",
  },
  {
    id: 2,
    question: "How do I know which supplement is right for my pet?",
    answer:
      "Choosing the right supplement depends on your pet's age, breed, lifestyle, and specific health concerns. We recommend consulting with your veterinarian to determine the best supplement for your pet's needs. You can also explore our product descriptions to learn more about the benefits of each supplement.",
  },
  {
    id: 3,
    question: "Are your supplements safe for all pets?",
    answer:
      "Yes, our supplements are formulated by experts and are safe for all pets when used as directed. However, we recommend consulting with your veterinarian, especially if your pet has any pre-existing conditions or is on medication.",
  },
  {
    id: 4,
    question: "How are your supplements made?",
    answer:
      "Our supplements are made using high-quality ingredients sourced responsibly. They are formulated in state-of-the-art facilities that adhere to strict quality control standards to ensure safety and efficacy.",
  },
  {
    id: 5,
    question: "What makes your supplements different from others on the market?",
    answer:
      "Our supplements are unique because of our commitment to quality, innovation, and science-backed formulas. We use only the highest quality ingredients, and our products are free from fillers, artificial preservatives, and colors.",
  },
  {
    id: 6,
    question: "Are your supplements suitable for pets with allergies?",
    answer:
      "We offer a range of hypoallergenic supplements, but it's essential to check the ingredient list for any potential allergens. If your pet has specific allergies, consult with your veterinarian before introducing any new supplement.",
  },
]

export default function FAQComponent() {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">FAQ</h2>
        <p className="text-gray-600">Most asked questions and answers</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {faqData.map((item) => (
          <div key={item.id} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-start justify-between text-left group hover:text-red-500 transition-colors duration-200"
            >
              <h3 className="text-red-500 font-medium pr-4 leading-relaxed">{item.question}</h3>
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors duration-200">
                  {openItems.has(item.id) ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </div>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(item.id) ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed pr-10">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
