import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ChevronRight, Shield, Clock, PoundSterling, Award, ArrowRight } from 'lucide-react';
import QuickQuoteForm from './QuickQuoteForm';

const features = [
  {
    icon: Shield,
    title: 'Professional',
    description: 'Qualified UK Accountants'
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: '24-Hour Response'
  },
  {
    icon: PoundSterling,
    title: 'Best Value',
    description: 'Competitive Pricing'
  },
  {
    icon: Award,
    title: 'Trusted',
    description: '500+ Happy Clients'
  }
];

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F54] to-[#1E90FF]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] mix-blend-overlay opacity-10"></div>
        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#1E90FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#F5E050] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-[#F5E050] mr-2">✨</span>
              <span className="text-sm">Trusted by 500+ UK Businesses</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Accounting,
              <br />
              <span className="text-[#F5E050] relative">
                Affordable Prices
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none">
                  <path d="M3 9C118.957 4.47226 274.497 2.86548 355 3.00001" stroke="#F5E050" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 max-w-xl">
              Expert UK accountants providing comprehensive services at competitive rates. 
              Save time and money with our efficient solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/quote"
                className="bg-[#F5E050] text-[#001F54] px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 transform hover:translate-y-[-2px]"
              >
                <Calculator size={20} />
                Get Free Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#001F54] transition-all duration-300 flex items-center gap-2 transform hover:translate-y-[-2px]"
              >
                Learn More
                <ChevronRight size={20} />
              </Link>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:translate-y-[-2px] transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-[#F5E050] mb-2" />
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#F5E050] rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#1E90FF] rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}