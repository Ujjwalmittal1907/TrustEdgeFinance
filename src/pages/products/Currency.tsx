import React from 'react';
import { useEffect } from "react";

export default function CurrencyTrading() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-gray-900">Currency Trading</h1>
        <p className="text-lg text-gray-600 mt-2 mb-6">
          Trade global currencies in the largest financial market and capitalize on exchange rate fluctuations.
        </p>

        {/* Introduction to Currency Trading */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Understanding Currency Trading</h2>
        <p className="text-gray-600 text-base mt-2 mb-6">
          Currency trading, also known as Forex (foreign exchange) trading, involves the buying and selling 
          of global currencies to profit from fluctuations in exchange rates. It is the largest and most liquid 
          financial market, with a daily trading volume exceeding trillions of dollars. Investors, businesses, 
          and governments engage in Forex trading to hedge risks, facilitate international trade, and seek 
          investment opportunities.
        </p>

        {/* Why Trade Currencies? */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Why Trade in the Forex Market?</h2>
        <ul className="list-disc pl-5 text-gray-600 text-base mt-2 mb-6 space-y-2">
          <li><strong>High Liquidity</strong> – The Forex market operates 24/5, offering high liquidity and minimal slippage.</li>
          <li><strong>Leverage Opportunities</strong> – Traders can use leverage to maximize potential returns.</li>
          <li><strong>Low Transaction Costs</strong> – Compared to other asset classes, Forex trading involves lower fees.</li>
          <li><strong>Global Market Access</strong> – Trade major, minor, and exotic currency pairs across multiple markets.</li>
          <li><strong>Profit Potential in Any Market</strong> – Traders can profit from both rising and falling currency values.</li>
        </ul>

        {/* Major Currency Pairs */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Types of Currency Pairs</h2>
        <p className="text-gray-600 text-base mt-2 mb-6">
          Currencies are traded in pairs, where one currency is exchanged for another. Each pair consists of 
          a base currency and a quote currency. The most traded currency pairs fall into three categories:
        </p>
        <ul className="list-disc pl-5 text-gray-600 text-base mt-2 mb-6 space-y-2">
          <li><strong>Major Pairs</strong> – Includes USD, EUR, JPY, GBP, CHF, CAD, and AUD, known for high liquidity.</li>
          <li><strong>Minor Pairs</strong> – Non-USD pairs like EUR/GBP or AUD/NZD with moderate liquidity.</li>
          <li><strong>Exotic Pairs</strong> – A major currency paired with an emerging market currency (e.g., USD/TRY).</li>
        </ul>

        {/* Trading Strategies */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Effective Currency Trading Strategies</h2>
        <ul className="list-disc pl-5 text-gray-600 text-base mt-2 mb-6 space-y-2">
          <li><strong>Scalping</strong> – Making multiple small trades to capitalize on minor price movements.</li>
          <li><strong>Day Trading</strong> – Opening and closing positions within the same trading day.</li>
          <li><strong>Swing Trading</strong> – Holding trades for days or weeks to profit from short-term trends.</li>
          <li><strong>Position Trading</strong> – A long-term approach based on fundamental analysis.</li>
          <li><strong>Carry Trade</strong> – Earning interest rate differentials between two currencies.</li>
        </ul>

        {/* Risks & Risk Management */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Risks in Forex Trading & Risk Management</h2>
        <p className="text-gray-600 text-base mt-2 mb-6">
          While Forex trading offers significant profit potential, it also carries risks due to market volatility, 
          leverage, and geopolitical factors. Effective risk management strategies include:
        </p>
        <ul className="list-disc pl-5 text-gray-600 text-base mt-2 mb-6 space-y-2">
          <li><strong>Stop-Loss Orders</strong> – Automatically close trades to limit losses.</li>
          <li><strong>Position Sizing</strong> – Managing trade sizes to control risk exposure.</li>
          <li><strong>Diversification</strong> – Avoiding over-concentration in a single currency pair.</li>
          <li><strong>Market Analysis</strong> – Using technical and fundamental analysis for informed decisions.</li>
        </ul>

        {/* Why Choose TrustEdgeFinance? */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Why Trade Forex with TrustEdgeFinance?</h2>
        <p className="text-gray-600 text-base mt-2">
          TrustEdgeFinance provides a secure and transparent trading platform with real-time analytics, 
          tight spreads, and advanced trading tools. Whether you're a beginner or an experienced trader, 
          our platform empowers you with the insights and resources needed to succeed in the Forex market.
        </p>
      </div>
    </div>
  );
}
