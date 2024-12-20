import React, { useState } from 'react';
import { Send } from 'lucide-react';
import type { QuoteFormData } from '../types';

export default function QuickQuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    email: '',
    turnover: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h3 className="text-2xl font-bold text-[#001F54] mb-6">Get Your Free Quote</h3>
      
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
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            id="companyName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="turnover" className="block text-sm font-medium text-gray-700">Company Turnover</label>
          <select
            id="turnover"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
            value={formData.turnover}
            onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
            required
          >
            <option value="">Select turnover range</option>
            <option value="0-10000">£0 - £10,000</option>
            <option value="10000-75000">£10,000 - £75,000</option>
            <option value="75000-100000">£75,000 - £100,000</option>
            <option value="100000-150000">£100,000 - £150,000</option>
            <option value="150000-250000">£150,000 - £250,000</option>
            <option value="250000+">£250,000+</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1E90FF] text-white py-2 px-4 rounded-md hover:bg-[#001F54] transition-colors duration-300 flex items-center justify-center gap-2"
        >
          Get Quote <Send size={18} />
        </button>
      </div>
    </form>
  );
}