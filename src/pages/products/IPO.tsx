import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from "react";

export default function IPOPage() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-16 lg:px-8">

        {/* Header Section */}
        <motion.h1 
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Initial Public Offering (IPO)
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 mt-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          Explore investment opportunities in <strong>newly listed companies</strong> and be part of their growth journey.
        </motion.p>

        {/* IPO Types Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          
          {/* Mainboard IPO */}
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800">Mainboard IPO</h2>
            <p className="text-gray-600 text-base mt-2">
              A <strong>Mainboard IPO</strong> refers to large companies raising capital by listing on primary stock exchanges (NSE, BSE). These companies meet stringent regulatory standards and attract high investor participation.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base mt-2 space-y-2">
              <li><strong>High Market Capitalization</strong> – Large, well-established firms enter public trading.</li>
              <li><strong>Strict SEBI Compliance</strong> – Adheres to regulations ensuring transparency.</li>
              <li><strong>Strong Institutional Investment</strong> – Backed by mutual funds, FIIs, and large investors.</li>
            </ul>
          </motion.div>

          {/* SME IPO */}
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800">SME IPO</h2>
            <p className="text-gray-600 text-base mt-2">
              <strong>Small & Medium Enterprise (SME) IPOs</strong> allow smaller businesses to raise funds through stock markets, with fewer compliance requirements but higher growth potential.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base mt-2 space-y-2">
              <li><strong>Lower Entry Barriers</strong> – Ideal for startups and small businesses.</li>
              <li><strong>Higher Risk-Reward Ratio</strong> – More volatile but with potential high returns.</li>
              <li><strong>Dedicated SME Exchange</strong> – Listed on platforms like NSE Emerge, BSE SME.</li>
            </ul>
          </motion.div>
        </div>

        {/* GMP Analysis */}
        <motion.h2 className="text-2xl font-semibold text-gray-800 mt-10">
          Grey Market Premium (GMP) & Subscription Analysis
        </motion.h2>
        <p className="text-gray-600 text-base mt-2 mb-6">
          The <strong>Grey Market Premium (GMP)</strong> is an unofficial price at which IPO shares trade before official listing. A high GMP indicates strong demand, but investors must analyze fundamentals before investing.
        </p>
        
        {/* Risks in IPO Investment */}
        <motion.h2 className="text-2xl font-semibold text-gray-800 mt-10">
          Risks in IPO Investments
        </motion.h2>
        <motion.div 
          className="p-6 bg-red-50 border-l-4 border-red-500 rounded-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <ul className="list-disc pl-5 text-gray-600 text-base mt-4 space-y-2">
            <li><strong>Market Volatility:</strong> Stock prices can be highly unstable in the first few months after listing.</li>
            <li><strong>Overvaluation Risk:</strong> IPOs may be priced higher than their actual market value, leading to losses post-listing.</li>
            <li><strong>Limited Historical Data:</strong> Unlike established companies, IPOs lack past market performance data, making analysis difficult.</li>
            <li><strong>Lock-In Periods:</strong> Some IPOs come with lock-in periods restricting early exits for large investors.</li>
            <li><strong>Liquidity Issues:</strong> If an IPO fails to attract enough investors, trading volumes may remain low, leading to liquidity concerns.</li>
            <li><strong>Regulatory & Compliance Risks:</strong> Sudden changes in government policies or financial regulations can affect IPO success.</li>
          </ul>
        </motion.div>

        {/* Why Choose Us */}
        <motion.h2 className="text-2xl font-semibold text-gray-800 mt-10">
          Why Choose TrustEdgeFinance?
        </motion.h2>
        <motion.div 
          className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
           <ul className="list-disc pl-5 text-gray-600 text-base mt-4 space-y-2">
            <li><strong>Exclusive Research:</strong> Get in-depth reports on upcoming IPOs, company financials, and sector analysis.</li>
            <li><strong>Real-Time IPO Tracking:</strong> Stay updated with live GMP (Grey Market Premium) trends, subscription status, and analyst ratings.</li>
            <li><strong>Expert-Led Webinars:</strong> Learn directly from seasoned market experts on IPO strategies and investment approaches.</li>
            <li><strong>AI-Powered Insights:</strong> Our AI-driven analytics help identify high-potential IPOs based on financial and market trends.</li>
            <li><strong>One-Click Investment:</strong> Simplified and secure IPO application through our seamless trading platform.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
