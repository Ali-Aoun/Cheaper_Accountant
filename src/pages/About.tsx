import React from 'react';
import { Award, Users, Clock, Globe, CheckCircle } from 'lucide-react';

const milestones = [
  { year: '2010', title: 'Company Founded', description: 'Started with a vision of affordable accounting for all' },
  { year: '2015', title: 'Nationwide Coverage', description: 'Expanded services across the UK' },
  { year: '2018', title: 'Digital Transformation', description: 'Launched online accounting platform' },
  { year: '2023', title: 'Client Milestone', description: 'Served over 1000+ satisfied clients' }
];

export default function About() {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F54] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cheaper Accountant</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            We're on a mission to make professional accounting services accessible 
            and affordable for small businesses across the UK.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001F54] mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'Professional Excellence',
                description: 'Qualified accountants delivering high-quality service'
              },
              {
                icon: Users,
                title: 'Client-Focused',
                description: 'Personalized attention to every client\'s needs'
              },
              {
                icon: Globe,
                title: 'Nationwide Service',
                description: 'Serving businesses across the entire UK'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-[#1E90FF]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001F54] mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex mb-8 relative">
                <div className="w-24 flex-shrink-0 text-right pr-6">
                  <span className="font-bold text-[#1E90FF]">{milestone.year}</span>
                </div>
                <div className="w-px bg-[#1E90FF] relative">
                  <div className="absolute w-3 h-3 bg-[#1E90FF] rounded-full -left-1"></div>
                </div>
                <div className="pl-6 flex-grow">
                  <h3 className="font-semibold text-lg mb-1">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}