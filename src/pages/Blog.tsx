import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Understanding UK Tax Returns',
    excerpt: 'A comprehensive guide to filing your tax returns efficiently...',
    author: 'John Smith',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Tax Tips'
  },
  {
    title: 'Small Business Accounting Tips',
    excerpt: 'Essential accounting practices for small business owners...',
    author: 'Emma Wilson',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Business'
  },
  {
    title: 'VAT Made Simple',
    excerpt: 'Everything you need to know about VAT registration and returns...',
    author: 'David Brown',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'VAT'
  }
];

export default function Blog() {
  return (
    <div className="pt-20 bg-gray-50">
      <section className="bg-gradient-to-br from-[#001F54] to-[#1E90FF] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Accounting Insights</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Expert advice and updates from our accounting professionals
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-[#1E90FF] font-semibold">{post.category}</span>
                  <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <button className="mt-4 text-[#1E90FF] font-semibold flex items-center hover:text-[#001F54] transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}