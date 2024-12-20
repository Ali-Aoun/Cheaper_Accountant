import React from 'react';
import type { Service } from '../types';
import * as Icons from 'lucide-react';

export default function ServiceCard({ service }: { service: Service }) {
  const IconComponent = (Icons as any)[service.icon];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1E90FF] bg-opacity-10 mb-4">
        {IconComponent && <IconComponent className="w-6 h-6 text-[#1E90FF]" />}
      </div>
      <h3 className="text-xl font-semibold text-[#001F54] mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <p className="text-[#1E90FF] font-semibold">{service.price}</p>
    </div>
  );
}