import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PiggyBank, BarChart, Scale, RefreshCcw, ShieldCheck } from 'lucide-react';

export default function FinancialPlanning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Strategic Financial Planning for a Secure Future</h1>
        <p className="text-xl text-gray-600">
          Optimize your investments and minimize tax burdens with expert financial strategies.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Taxation Strategies */}
        <motion.div 
          className="prose max-w-none mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Taxation Strategies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-blue-500">
              <Scale className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tax Optimization</h3>
              <p className="text-gray-600">
                Leverage tax-efficient investment strategies to legally minimize liabilities and maximize returns.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-green-500">
              <BarChart className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Capital Gains Planning</h3>
              <p className="text-gray-600">
                Understand capital gains taxation to plan effective asset sales and investments.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Restructuring */}
        <motion.div 
          className="prose max-w-none mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Portfolio Restructuring</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <RefreshCcw className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Asset Diversification</h3>
              <p className="text-gray-600">Spread investments across various assets to reduce risk and enhance stability.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <PiggyBank className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wealth Preservation</h3>
              <p className="text-gray-600">Restructure your portfolio to align with changing financial goals and market conditions.</p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose TrustEdgeFinance? */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose TrustEdgeFinance?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Financial Advisors</h3>
              <p className="text-gray-600">Our experts guide you through strategic financial planning tailored to your needs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <BarChart className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Investment Solutions</h3>
              <p className="text-gray-600">Access customized strategies for sustainable growth and tax efficiency.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
