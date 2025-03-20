import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Services() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showMoreFAQs, setShowMoreFAQs] = useState(false);
  const [showMorePMS, setShowMorePMS] = useState(false);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    { question: "Who Should Get PMS?", answer: "PMS is ideal for HNIs and investors looking for personalized asset management." },
    { question: "What Factors Should You Consider Before Getting PMS?", answer: "Risk appetite, investment goals, and manager expertise should be evaluated before choosing PMS." },
    { question: "When Should You Get PMS?", answer: "PMS is suitable when you want professional management for your wealth beyond mutual funds." },
    { question: "Is Investing in PMS Risky?", answer: "Like all market-linked investments, PMS carries risks but is actively managed for better returns." },
    { question: "Who is a Portfolio Manager?", answer: "A professional managing a client's investment portfolio for optimized performance." },
    { question: "How is PMS Different from Mutual Funds?", answer: "PMS offers personalized asset allocation, unlike mutual funds which have pooled investments." },
  ];

  const reviews = [
    "PMS helped me optimize my portfolio and maximize returns. Highly recommended!",
    "Expert guidance that truly made a difference in my investments.",
    "The personalized approach in PMS gave me more confidence in my financial future.",
    "I’ve seen better returns with PMS compared to traditional mutual funds.",
    "A game-changer for serious investors looking for expert-driven strategies.",
  ];

  return (
    <div className="py-12 px-6 bg-gray-50">
             {/* Hero Section */}
      <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-1gl text-gray-50 mt-2">Our Premium Financial Services</h1>
        <p className="text-5xl font-bold text-yellow-700">Our Premium Financial Services</p>
      </motion.div>
        
      <div className="max-w-6xl mx-auto bg-yellow-100 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6">Our Services</h2>
        <ul className="space-y-4 text-lg text-yellow-900">
          {["Portfolio Management Services (PMS)", "Taxation Planning & Optimization", "Wealth & Asset Management", "Personalized Investment Strategies", "Stock Market Advisory", "Retirement & Estate Planning", "Mutual Fund & SIP Strategies", "Risk Assessment & Insurance Consulting"].map((service, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-2xl">✔️</span> <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Customer Reviews Section */}
      <motion.div className="max-w-6xl mx-auto mt-12 text-center bg-yellow-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-yellow-800 mb-4">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <motion.div key={index} className="bg-yellow-200 p-4 rounded-md shadow-md" whileHover={{ scale: 1.05 }}>
              <p className="text-gray-800 italic">“{review}”</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* PMS Block */}
      <motion.div className="max-w-6xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-md">
  <h2 className="text-3xl font-bold text-yellow-800 mb-4">Portfolio Management Services (PMS)</h2>
  
  <p className="text-gray-700 leading-relaxed">
    Portfolio management services are professionally managed financial solutions where experts construct personalized investment portfolios.
    {showMorePMS && (
      <>
        <br /><br />
        Assets like stocks, bonds, and cash equivalents are allocated based on the investor’s financial goals, investment preferences, horizon, and risk tolerance levels.
        <br /><br />
        <strong>How Does PMS Work?</strong><br />
        Portfolio management services allow you to invest in assets like stocks, bonds, mutual funds, and other securities. The portfolio manager constructs a unique portfolio based on your financial goals and risk tolerance level and actively manages it.
        <br /><br />
        They will provide you with regular reports and updates backed by extensive research and factual data, enabling you to make informed choices regarding your investment.
        <br /><br />
        Start a PMS service with Anand Rathi, and contact us. We will answer all your queries, open a demat account, and get you started.
        <br /><br />
        <strong>Features of Portfolio Management Services:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>Preferable for high-net-worth individuals with a long-term investment horizon and a willingness to take higher risk.</li>
          <li>Involves high portfolio risk management as per the client’s investment preferences.</li>
          <li>Provides active management and rebalancing of the portfolio to align with the customer’s financial goals.</li>
          <li>Involves strong research and analysis to choose the best assets for the client’s portfolio.</li>
          <li>Uses various management methods based on the customer’s investment preferences.</li>
        </ul>
      </>
    )}
  </p>

  <button 
    onClick={() => setShowMorePMS(!showMorePMS)} 
    className="mt-3 text-yellow-600 font-semibold hover:underline"
  >
    {showMorePMS ? "See Less" : "See More"}
  </button>
</motion.div>


      {/* TALK TO US Button */}
      <div className="text-center mt-12">
        <motion.a href="https://wa.me/YOUR_WHATSAPP_NUMBER" className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-600 transition transform hover:scale-105" whileHover={{ scale: 1.1 }}>
          TALK TO US
        </motion.a>
      </div>

      {/* FAQ Section */}
      <motion.div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.slice(0, showMoreFAQs ? faqs.length : 5).map((faq, index) => (
            <div key={index} className="bg-yellow-200 p-4 rounded-lg cursor-pointer" onClick={() => toggleFAQ(index)}>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-yellow-900">{faq.question}</h3>
                <ChevronDown className={`w-5 h-5 transition-transform ${openFAQ === index ? "rotate-180" : "rotate-0"}`} />
              </div>
              {openFAQ === index && <p className="text-gray-800 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button onClick={() => setShowMoreFAQs(!showMoreFAQs)} className="bg-yellow-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-700">
            {showMoreFAQs ? "Show Less" : "More FAQs"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
