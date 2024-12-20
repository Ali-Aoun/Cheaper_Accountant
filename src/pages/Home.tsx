import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/home/Stats';
import ServiceCard from '../components/ServiceCard';
import PricingTable from '../components/PricingTable';
import Testimonials from '../components/home/Testimonials';
import { Calculator, FileText, Receipt, Users, PoundSterling, Building2, FileCheck } from 'lucide-react';

const services = [
  {
    title: 'Monthly Payroll',
    description: 'Efficient payroll management for your business',
    price: 'From £5 a month',
    icon: 'Users'
  },
  {
    title: 'VAT Returns',
    description: 'Quarterly VAT return submissions',
    price: '£30 per return',
    icon: 'Receipt'
  },
  {
    title: 'Company Formation',
    description: 'Complete limited company setup service',
    price: '£100',
    icon: 'Building2'
  },
  {
    title: 'Self Assessment',
    description: 'Personal tax return preparation and submission',
    price: 'From £50',
    icon: 'FileText'
  },
  {
    title: 'Confirmation Statement',
    description: 'Annual confirmation statement filing',
    price: '£60',
    icon: 'FileCheck'
  },
  {
    title: 'Tax Advice',
    description: 'Expert tax guidance and planning',
    price: 'Free for clients',
    icon: 'PoundSterling'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Hero />
      <Stats />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#001F54] mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#001F54] mb-12">
            Transparent Pricing
          </h2>
          <PricingTable />
        </div>
      </section>

      <Testimonials />
    </div>
  );
}