import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import type { ReviewFormData } from '../../types';

export default function ReviewForm() {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    company: '',
    rating: 5,
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#001F54] mb-8">
            Share Your Experience
          </h2>
          
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating })}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          rating <= formData.rating
                            ? 'text-[#F5E050] fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Your Review</label>
                <textarea
                  id="content"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E90FF] text-white py-2 px-4 rounded-md hover:bg-[#001F54] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Submit Review <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}