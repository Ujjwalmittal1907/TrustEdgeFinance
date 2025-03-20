import React from 'react';
import { LineChart, TrendingUp, Shield } from 'lucide-react';
import { useEffect } from "react";

export default function Commodities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Commodities Trading Platform for Futures and Options
          </h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            Secure your investments with expert-backed commodity trading solutions.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-600 mb-6">
              At <strong>TrustEdgeFinance</strong>, we provide expert strategies 
              for commodity trading, including <strong>Futures and Options</strong>. Our team of professionals 
              ensures risk-mitigated, high-return investment solutions tailored to your needs.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Commodity markets are among the most dynamic investment avenues. With real-time 
              analytics and strategic insights, we empower investors to <strong>make informed decisions</strong> 
              in trading <strong>precious metals, energy, and agricultural commodities</strong>.
            </p>
            <p className="text-lg text-gray-600">
              Backed by cutting-edge research, our platform offers both <strong>fundamental and technical 
              analysis</strong> to optimize your commodity investments.
            </p>
          </div>

          {/* Image Section */}
          <div className="h-64 bg-cover bg-center rounded-lg shadow-lg bg-gray-200"
               style={{ backgroundImage: 'url("/commodities.jpeg")' }}>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <LineChart className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Market Insights</h3>
            <p className="text-gray-600">Get real-time analysis on commodity trends.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Smart Trading</h3>
            <p className="text-gray-600">Trade efficiently with our AI-driven insights.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Risk Protection</h3>
            <p className="text-gray-600">Minimize losses with advanced risk management tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
}