
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  quote: string;
  service: string;
}

const TestimonialCard = ({ name, rating, quote, service }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-card p-6">
      <div className="flex mb-3">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={`${i < rating ? 'text-accent-yellow fill-accent-yellow' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <div className="flex items-center justify-between">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{service}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
