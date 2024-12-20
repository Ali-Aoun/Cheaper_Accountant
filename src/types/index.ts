export interface Service {
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface PricingTier {
  turnover: string;
  fee: string;
}

export interface QuoteFormData {
  name: string;
  companyName: string;
  email: string;
  turnover: string;
  staffCount?: number;
}

export interface Review {
  name: string;
  company: string;
  rating: number;
  content: string;
  image: string;
  date: string;
}

export interface ReviewFormData {
  name: string;
  company: string;
  rating: number;
  content: string;
}

export interface DetailedQuoteFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  companyNumber: string;
  turnover: string;
  vatRegistered: boolean;
  employeeCount: string;
  services: string[];
  message: string;
}