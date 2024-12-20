import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { Review } from '../../types';

const reviews: Review[] = [
  {
    name: 'David Wilson',
    company: 'Tech Solutions Ltd',
    rating: 5,
    content: 'Exceptional service! They helped us streamline our accounting processes and save money.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    date: '2024-03-15'
  },
  {
    name: 'Sarah Chen',
    company: 'Green Energy Co',
    rating: 5,
    content: 'Professional, responsive, and incredibly helpful. They make accounting stress-free.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    date: '2024-03-10'
  },
  {
    name: 'James Thompson',
    company: 'Creative Design Studio',
    rating: 5,
    content: 'Their expertise in tax planning has saved us thousands. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    date: '2024-03-05'
  }
];

export default function ReviewGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#1E90FF] opacity-20" />
              
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#001F54]">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#F5E050] fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-4">{review.content}</p>
              
              <div className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}