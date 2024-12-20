import React from 'react';
import ReviewGrid from '../components/reviews/ReviewGrid';
import ReviewStats from '../components/reviews/ReviewStats';
import ReviewForm from '../components/reviews/ReviewForm';

export default function Reviews() {
  return (
    <div className="pt-20 bg-gray-50">
      <section className="bg-gradient-to-br from-[#001F54] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Reviews</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            See what our clients say about our accounting services
          </p>
        </div>
      </section>
      
      <ReviewStats />
      <ReviewGrid />
      <ReviewForm />
    </div>
  );
}