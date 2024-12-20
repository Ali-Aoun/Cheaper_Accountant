import React from 'react';
import { Calculator, FileText, Receipt, Users, PoundSterling, Building2, FileCheck, BookOpen } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import PricingTable from '../components/PricingTable';

const services = [
  {
    title: 'Monthly Payroll',
    description: 'Complete payroll management including RTI submissions, payslips, and year-end reporting',
    price: 'From £5 a month',
    icon: 'Users'
  },
  {
    title: 'VAT Returns',
    description: 'Quarterly VAT calculations and submissions to HMRC with full compliance checks',
    price: '£30 per return',
    icon: 'Receipt'
  },
  {
    title: 'Company Formation',
    description: 'Full company incorporation service including all necessary documentation',
    price: '£100',
    icon: 'Building2'
  },
  {
    title: 'Self Assessment',
    description: 'Personal tax return preparation and submission with tax-saving advice',
    price: 'From £50',
    icon: 'FileText'
  },
  {
    title: 'Confirmation Statement',
    description: 'Annual filing to Companies House with all required updates',
    price: '£60',
    icon: 'FileCheck'
  },
  {
    title: 'Tax Advice',
    description: 'Expert guidance on tax planning and compliance',
    price: 'Free for clients',
    icon: 'PoundSterling'
  },
  {
    title: 'Dormant Accounts',
    description: 'Preparation and submission of dormant company accounts',
    price: '£99',
    icon: 'BookOpen'
  }
];

export default function Services() {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F54] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Comprehensive accounting solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001F54] mb-12">
            Transparent Pricing
          </h2>
          <PricingTable />
        </div>
      </section>
    </div>
  );
}