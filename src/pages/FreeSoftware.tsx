import React from 'react';
import { Monitor, Smartphone, Cloud, Shield, Download, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Desktop & Web Access',
    description: 'Access your accounts from any device with our cloud-based software'
  },
  {
    icon: Cloud,
    title: 'Real-time Updates',
    description: 'Always stay up-to-date with automatic synchronization'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Bank-level security and HMRC-compliant software'
  }
];

export default function FreeSoftware() {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F54] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Accounting Software</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Professional accounting software at no additional cost for all our clients
          </p>
          <button className="bg-[#F5E050] text-[#001F54] px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2 mx-auto">
            <Download className="w-5 h-5" />
            Get Started Free
          </button>
        </div>
      </section>

      {/* Features */}
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001F54] mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            {[
              'Sign up for any of our accounting services',
              'Receive your free software access credentials',
              'Start managing your accounts with ease',
              'Get expert support whenever you need it'
            ].map((step, index) => (
              <div key={index} className="flex items-center mb-6">
                <div className="w-8 h-8 bg-[#1E90FF] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}