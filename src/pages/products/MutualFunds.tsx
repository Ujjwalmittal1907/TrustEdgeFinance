import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, TrendingUp, Shield, PieChart, Briefcase, DollarSign } from 'lucide-react';
import { useEffect } from "react";

export default function MutualFunds() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-4">Mutual Funds Investment</h1>
          <p className="text-xl text-gray-600">Smart & Secure Mutual Fund Investment Solutions</p>
        </motion.div>

        {/* Key Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LineChart className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Fund Research</h3>
            <p className="text-gray-600">Detailed analysis and research of mutual fund schemes.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Portfolio Tracking</h3>
            <p className="text-gray-600">Real-time tracking and performance analysis of your investments.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Risk Assessment</h3>
            <p className="text-gray-600">Comprehensive risk analysis and portfolio optimization.</p>
          </motion.div>

        </div>

        {/* Mutual Fund Types Section */}
        <motion.h2 className="text-3xl font-bold mb-6">
          Types of Mutual Funds
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* Equity Funds */}
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PieChart className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Equity Funds</h3>
            <p className="text-gray-600">
              Invest in stocks of companies for high-growth potential. Best for long-term investors.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base mt-2 space-y-2">
              <li><strong>Higher returns</strong> – But comes with market risks.</li>
              <li><strong>Growth-focused</strong> – Ideal for long-term wealth creation.</li>
            </ul>
          </motion.div>

          {/* Debt Funds */}
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Briefcase className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Debt Funds</h3>
            <p className="text-gray-600">
              Invest in fixed-income securities like bonds, offering stable and low-risk returns.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base mt-2 space-y-2">
              <li><strong>Lower risk</strong> – Best for conservative investors.</li>
              <li><strong>Stable income</strong> – Generates steady returns over time.</li>
            </ul>
          </motion.div>

          {/* Hybrid Funds */}
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-yellow-500 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <DollarSign className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Hybrid Funds</h3>
            <p className="text-gray-600">
              A mix of equity & debt funds, balancing risk & reward for diversified investments.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base mt-2 space-y-2">
              <li><strong>Balanced approach</strong> – Diversified risk with stable returns.</li>
              <li><strong>Flexible allocation</strong> – Adjusts between equity & debt markets.</li>
            </ul>
          </motion.div>

        </div>

        {/* Why Choose Us Section */}
        <motion.h2 className="text-3xl font-bold mb-6">
          Why Choose TrustEdgeFinance?
        </motion.h2>
        
        <motion.div 
          className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <ul className="list-disc pl-5 text-gray-600 text-base mt-4 space-y-2">
            <li><strong>Expert Fund Selection</strong> – Handpicked funds for maximum returns.</li>
            <li><strong>Real-Time Market Insights</strong> – AI-powered data analytics.</li>
            <li><strong>Personalized Portfolio Reviews</strong> – Regular performance tracking.</li>
            <li><strong>Tax-Efficient Investments</strong> – ELSS funds for tax benefits.</li>
            <li><strong>Dedicated Customer Support</strong> – 24/7 assistance.</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
