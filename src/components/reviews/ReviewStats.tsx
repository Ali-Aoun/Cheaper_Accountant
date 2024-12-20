import React from 'react';
import { Star, ThumbsUp, Users, Award } from 'lucide-react';

const stats = [
  { label: 'Average Rating', value: '4.9', icon: Star },
  { label: 'Satisfaction Rate', value: '98%', icon: ThumbsUp },
  { label: 'Total Reviews', value: '500+', icon: Users },
  { label: 'Years Trusted', value: '15+', icon: Award }
];

export default function ReviewStats() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-[#1E90FF]" />
              </div>
              <div className="text-4xl font-bold text-[#001F54] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}