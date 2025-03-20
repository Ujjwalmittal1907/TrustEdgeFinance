import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from "react";

export default function EquityTrading() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-16 lg:px-8">

        {/* Header Section */}
        <motion.h1 
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Equity Trading
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 mt-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Invest in leading companies and participate in market growth with equity trading.
        </motion.p>

        {/* Equity Trading Overview */}
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Understanding Equity Trading
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-base mt-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Equity trading involves buying and selling stocks of publicly traded companies, enabling investors 
          to own a share of a company’s growth. The stock market provides vast opportunities for wealth accumulation 
          through capital appreciation, dividends, and strategic investments. It is a vital component of modern 
          financial markets, driving innovation, business expansion, and economic development.
        </motion.p>

        {/* Benefits of Equity Trading */}
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Why Invest in Equities?
        </motion.h2>
        <motion.ul 
          className="list-disc pl-5 text-gray-600 text-base mt-2 mb-6 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <li><strong>Capital Appreciation</strong> – Earn returns as stock prices grow over time.</li>
          <li><strong>Dividend Income</strong> – Receive periodic payouts from profitable companies.</li>
          <li><strong>Liquidity</strong> – Stocks can be easily traded on exchanges, ensuring flexibility.</li>
          <li><strong>Portfolio Diversification</strong> – Reduce risk by investing in multiple sectors.</li>
          <li><strong>Ownership & Voting Rights</strong> – Influence corporate decisions as a shareholder.</li>
        </motion.ul>

        {/* Types of Equity Investments */}
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Types of Equity Investments
        </motion.h2>
        <motion.ul 
          className="list-disc pl-5 text-gray-600 text-base mt-2 mb-6 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <li><strong>Common Stocks</strong> – Offers voting rights and potential dividend earnings.</li>
          <li><strong>Preferred Stocks</strong> – Fixed dividends with priority over common shares.</li>
          <li><strong>Growth Stocks</strong> – High potential for value increase, often with no dividends.</li>
          <li><strong>Value Stocks</strong> – Undervalued stocks with potential for long-term gains.</li>
          <li><strong>Blue-Chip Stocks</strong> – Shares in well-established, financially stable corporations.</li>
        </motion.ul>

        {/* Trading Strategies */}
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Key Equity Trading Strategies
        </motion.h2>
        <motion.ul 
          className="list-disc pl-5 text-gray-600 text-base mt-2 mb-6 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <li><strong>Long-Term Investing</strong> – Holding stocks for years to benefit from market growth.</li>
          <li><strong>Day Trading</strong> – Executing trades within the same day for short-term gains.</li>
          <li><strong>Momentum Trading</strong> – Investing in stocks with strong upward trends.</li>
          <li><strong>Value Investing</strong> – Seeking undervalued stocks with future potential.</li>
          <li><strong>Dividend Investing</strong> – Focusing on stocks with consistent dividend payouts.</li>
        </motion.ul>

        {/* Market Risks & Risk Management */}
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Managing Risks in Equity Trading
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-base mt-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          While equity trading offers substantial growth opportunities, it also involves risks due to market volatility, 
          economic conditions, and company performance. Effective risk management strategies include:
        </motion.p>
        <motion.ul 
          className="list-disc pl-5 text-gray-600 text-base mt-2 mb-6 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <li><strong>Stop-Loss Orders</strong> – Automatically limits losses by exiting losing trades.</li>
          <li><strong>Sector Diversification</strong> – Spreading investments across various industries.</li>
          <li><strong>Market Research</strong> – Staying updated with company reports and market trends.</li>
          <li><strong>Risk-Reward Ratio</strong> – Setting clear targets for risk tolerance and reward expectations.</li>
        </motion.ul>

        {/* Why Choose TrustEdgeFinance? */}
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          Why Choose TrustEdgeFinance?
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-base mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          TrustEdgeFinance provides advanced analytics, a secure trading platform, and real-time market insights to help 
          you make informed investment decisions. Whether you are a beginner or an experienced trader, our platform is 
          designed to maximize your trading potential.
        </motion.p>
      </div>
    </div>
  );
}
