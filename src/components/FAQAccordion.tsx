
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium">{faq.question}</span>
            {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {activeIndex === index && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
