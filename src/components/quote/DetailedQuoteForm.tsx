import React, { useState } from 'react';
import { Send } from 'lucide-react';
import type { DetailedQuoteFormData } from '../../types';

export default function DetailedQuoteForm() {
  const [formData, setFormData] = useState<DetailedQuoteFormData>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    companyNumber: '',
    turnover: '',
    vatRegistered: false,
    employeeCount: '',
    services: [],
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#001F54] mb-6">Your Details</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <label htmlFor="companyNumber" className="block text-sm font-medium text-gray-700">Company Number</label>
            <input
              type="text"
              id="companyNumber"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
              value={formData.companyNumber}
              onChange={(e) => setFormData({ ...formData, companyNumber: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="turnover" className="block text-sm font-medium text-gray-700">Annual Turnover</label>
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

        <div className="flex items-center">
          <input
            type="checkbox"
            id="vatRegistered"
            className="rounded border-gray-300 text-[#1E90FF] focus:ring-[#1E90FF]"
            checked={formData.vatRegistered}
            onChange={(e) => setFormData({ ...formData, vatRegistered: e.target.checked })}
          />
          <label htmlFor="vatRegistered" className="ml-2 block text-sm text-gray-700">
            VAT Registered
          </label>
        </div>

        <div>
          <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700">Number of Employees</label>
          <input
            type="number"
            id="employeeCount"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
            value={formData.employeeCount}
            onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Services Required</label>
          <div className="space-y-2">
            {[
              'Monthly Bookkeeping',
              'VAT Returns',
              'Payroll',
              'Annual Accounts',
              'Tax Returns',
              'Company Formation'
            ].map((service) => (
              <div key={service} className="flex items-center">
                <input
                  type="checkbox"
                  id={service}
                  className="rounded border-gray-300 text-[#1E90FF] focus:ring-[#1E90FF]"
                  checked={formData.services.includes(service)}
                  onChange={(e) => {
                    const updatedServices = e.target.checked
                      ? [...formData.services, service]
                      : formData.services.filter((s) => s !== service);
                    setFormData({ ...formData, services: updatedServices });
                  }}
                />
                <label htmlFor={service} className="ml-2 block text-sm text-gray-700">
                  {service}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1E90FF] text-white py-3 px-4 rounded-md hover:bg-[#001F54] transition-colors duration-300 flex items-center justify-center gap-2"
        >
          Get Your Quote <Send size={18} />
        </button>
      </div>
    </form>
  );
}