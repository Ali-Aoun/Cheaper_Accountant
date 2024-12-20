import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

const certifications = [
  {
    name: 'ICAEW',
    title: 'Institute of Chartered Accountants',
    description: 'Chartered Accountant qualification ensuring highest standards',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'ACCA',
    title: 'Association of Chartered Certified Accountants',
    description: 'Global professional accounting body certification',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'CIMA',
    title: 'Chartered Institute of Management Accountants',
    description: 'Professional qualification in management accounting',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];

export default function ProfessionalBodies() {
  return (
    <div className="pt-20 bg-gray-50">
      <section className="bg-gradient-to-br from-[#001F54] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Accreditations</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Our qualifications and memberships ensure the highest standards of service
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={cert.image} alt={cert.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-[#1E90FF] mr-2" />
                    <h3 className="text-xl font-semibold">{cert.name}</h3>
                  </div>
                  <h4 className="text-lg font-medium mb-2">{cert.title}</h4>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}