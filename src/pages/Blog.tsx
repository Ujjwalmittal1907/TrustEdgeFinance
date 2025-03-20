import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from "react";


const blogPosts = [
  {
    id: 1,
    title: "Understanding Market Volatility: A Guide for Investors",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Learn how market volatility affects your investments and strategies to navigate through turbulent times. We explore key indicators, historical patterns, and expert insights to help you make informed decisions.",
    category: "Market Analysis"
  },
  {
    id: 2,
    title: "The Rise of ESG Investing: What You Need to Know",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Explore the growing trend of Environmental, Social, and Governance investing and its impact on portfolios. Discover how sustainable investing is reshaping the financial landscape and creating long-term value.",
    category: "Investment Trends"
  },
  {
    id: 3,
    title: "Diversification: The Key to Risk Management",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Discover why diversification is crucial for a healthy investment portfolio and how to achieve it. Learn about asset allocation strategies, sector distribution, and international market exposure.",
    category: "Risk Management"
  },
  {
    id: 4,
    title: "Tech Stocks: Navigating the Digital Economy",
    date: "March 1, 2024",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Analysis of technology sector investments and opportunities in the digital age. Explore emerging trends, key players, and potential growth areas in the tech industry.",
    category: "Sector Analysis"
  }
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Investment Insights
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
                <p className="text-gray-500 text-sm mt-1 mb-2">{post.date}</p>
                <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}