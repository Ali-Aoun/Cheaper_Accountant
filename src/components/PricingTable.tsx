import React from 'react';
import type { PricingTier } from '../types';

const pricingTiers: PricingTier[] = [
  { turnover: 'Dormant', fee: '£99' },
  { turnover: '£0 to £10,000', fee: '£150' },
  { turnover: '£10,000 to £75,000', fee: '£250' },
  { turnover: '£75,000 to £100,000', fee: '£275' },
  { turnover: '£100,000 to £150,000', fee: '£375' },
  { turnover: '£150,000 to £250,000', fee: '£425' },
  { turnover: '£250,000 plus', fee: '£500' },
];

export default function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-[#001F54] text-white">
          <tr>
            <th className="py-4 px-6 text-left">Annual Turnover</th>
            <th className="py-4 px-6 text-left">Total Fee (fully incl.)</th>
          </tr>
        </thead>
        <tbody>
          {pricingTiers.map((tier, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="py-4 px-6 border-b">{tier.turnover}</td>
              <td className="py-4 px-6 border-b font-semibold text-[#1E90FF]">
                {tier.fee}
              </td>
            </tr>
          ))}
          <tr className="bg-[#F5E050] bg-opacity-20">
            <td className="py-4 px-6 font-semibold">Same Day Expedition (Additional Fee)</td>
            <td className="py-4 px-6 font-semibold text-[#1E90FF]">£150</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}