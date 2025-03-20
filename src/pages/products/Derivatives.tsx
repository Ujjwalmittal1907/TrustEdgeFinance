import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Shield, Layers, Globe, Activity } from 'lucide-react';
import { useEffect } from "react";

export default function Derivatives() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="pt-24"> {/* Increased padding to push content below navbar */}
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Derivative Trading for Advanced Investments</h1>
        <p className="text-xl text-gray-600">
          Gain exposure to market movements without directly owning assets.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Understanding Derivatives */}
        <motion.div 
          className="prose max-w-none mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Understanding Derivatives</h2>
          <p className="text-lg text-gray-600">
            Derivative trading involves financial contracts whose value is based on an underlying asset such as stocks, commodities, 
            currencies, or indices. These instruments allow traders to speculate on market movements, hedge against risk, and leverage 
            their investments efficiently.
          </p>
        </motion.div>

        {/* Types of Derivative Contracts */}
        <motion.div 
          className="prose max-w-none mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Types of Derivative Contracts</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-blue-500">
              <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Futures Contracts</h3>
              <p className="text-gray-600">
                A <strong>futures contract</strong> obligates a buyer to purchase, or a seller to sell, an asset at a predetermined price on a future date. 
                These contracts are standardized and traded on exchanges.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-green-500">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Options Contracts</h3>
              <p className="text-gray-600">
                <strong>Options</strong> give the buyer the right, but not the obligation, to buy or sell an asset at a specific price before a set expiration date. 
                They are widely used for hedging and speculation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Trade Derivatives? */}
        <motion.div 
          className="prose max-w-none mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Trade Derivatives?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
              <p className="text-gray-600">Derivatives help investors hedge against adverse price movements.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Layers className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Leverage</h3>
              <p className="text-gray-600">Trade larger positions with relatively small capital.</p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose TrustEdgeFinance? */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose TrustEdgeFinance?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Market Access</h3>
              <p className="text-gray-600">Trade derivatives across global stock exchanges and financial markets.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Activity className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Trading Tools</h3>
              <p className="text-gray-600">Access AI-driven trading signals, market analytics, and automated strategies.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
