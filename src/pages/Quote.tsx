import React from 'react';
import DetailedQuoteForm from '../components/quote/DetailedQuoteForm';
import QuoteFeatures from '../components/quote/QuoteFeatures';

export default function Quote() {
  return (
    <div className="pt-20 bg-gray-50">
      <section className="bg-gradient-to-br from-[#001F54] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Free Quote</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Tell us about your business and we'll provide a tailored quote
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <DetailedQuoteForm />
          <QuoteFeatures />
        </div>
      </div>
    </div>
  );
}