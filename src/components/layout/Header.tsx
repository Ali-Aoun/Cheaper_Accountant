import React from 'react';
import { Calculator, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Professional Bodies', path: '/professional-bodies' },
  { name: 'Free Software', path: '/free-software' },
  { name: 'Blog', path: '/blog' },
  { name: 'Online Accounting', path: '/online-accounting' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Free Quote', path: '/quote' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[#001F54]">
            <Calculator className="w-8 h-8" />
            <span className="text-xl font-bold">Cheaper Accountant</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-[#1E90FF] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-[#1E90FF] text-white px-4 py-2 rounded-md hover:bg-[#001F54] transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Navigation */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-gray-600 hover:text-[#1E90FF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}