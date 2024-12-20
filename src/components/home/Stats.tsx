import React from 'react';
import { Users, Award, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  {
    label: 'Clients Served',
    value: '500+',
    icon: Users,
    description: 'Trusted by businesses across the UK'
  },
  {
    label: 'Years Experience',
    value: '15+',
    icon: Clock,
    description: 'Professional expertise'
  },
  {
    label: 'Satisfaction Rate',
    value: '99%',
    icon: ThumbsUp,
    description: 'Client satisfaction guaranteed'
  },
  {
    label: 'Certifications',
    value: '5+',
    icon: Award,
    description: 'Professional accreditations'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#001F54] to-[#1E90FF]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-[#F5E050]" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}