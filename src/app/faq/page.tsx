"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { question: "What is MyStore?", answer: "MyStore is your go-to online shop for trendy and high-quality fashion items at affordable prices." },
    { question: "How can I make a purchase?", answer: "You can easily browse our collection, add items to your cart, and check out securely through our website." },
    { question: "Do you offer free shipping?", answer: "We offer free shipping on orders over $50. For orders below that amount, shipping fees are calculated at checkout." },
    { question: "How do I contact customer support?", answer: "You can reach out to us via the Contact page or email us at support@mystore.com." },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-gray-50 py-16 flex-grow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
                <button
                  onClick={() => toggleAnswer(index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {activeIndex === index ? (
                    <ChevronUpIcon className="h-6 w-6 text-blue-600" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6 text-blue-600" />
                  )}
                </button>
              </div>
              {activeIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQ;
