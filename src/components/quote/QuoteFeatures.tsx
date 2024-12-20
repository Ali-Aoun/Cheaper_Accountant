import React from 'react';
import { Shield, Clock, PoundSterling, CheckCircle, Phone, Mail, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Professional Service',
    description: 'Qualified accountants with years of experience'
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Get your quote within 24 hours'
  },
  {
    icon: PoundSterling,
    title: 'Competitive Pricing',
    description: 'Transparent and affordable fees'
  },
  {
    icon: CheckCircle,
    title: 'Tailored Solutions',
    description: 'Services customized to your needs'
  }
];

export default function QuoteFeatures() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#001F54] mb-6">Why Choose Us?</h2>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <feature.icon className="w-6 h-6 text-[#1E90FF]" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-[#001F54]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#001F54] p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p className="mb-6">
          Our team is here to assist you with any questions about our services.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <span>0800 123 4567</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            <span>info@cheaperaccountant.co.uk</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            <span>Live Chat Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}