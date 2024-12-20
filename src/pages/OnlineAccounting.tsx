import React from 'react';
import { Globe, Clock, Shield, Cloud, Smartphone, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Access Anywhere',
    description: 'Manage your accounts from anywhere in the world'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock access to your financial data'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Bank-grade security for your sensitive information'
  }
];

export default function OnlineAccounting() {
  return (
    <div className="pt-20 bg-gray-50">
      <section className="bg-gradient-to-br from-[#001F54] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Online Accounting</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Modern accounting solutions for the digital age
          </p>
          <button className="bg-[#F5E050] text-[#001F54] px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center">
            Start Now <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="w-12 h-12 text-[#1E90FF]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#001F54] mb-6">
                Why Choose Online Accounting?
              </h2>
              <ul className="space-y-4">
                {[
                  'Real-time financial insights',
                  'Automated bookkeeping features',
                  'Seamless integration with banking',
                  'Paperless document management',
                  'Instant report generation'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Cloud className="w-5 h-5 text-[#1E90FF] mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Online Accounting"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F5E050] p-4 rounded-lg">
                <Smartphone className="w-12 h-12 text-[#001F54]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}