import React from 'react';
import { Link } from "react-router-dom";
import { TrendingUp, PieChart, Coins, DollarSign, LineChart, BarChart4 } from 'lucide-react';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section with Animations */}
      <div 
        className="h-[600px] bg-cover bg-center flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <motion.div 
          initial={{ scale: 1.2 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
          className="absolute inset-0"
        ></motion.div>

        <motion.div 
          className="text-center text-white relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold mb-4">Master Your Investments, Own Your Future</h1>
          <p className="text-xl">Unlock financial freedom with expert guidance and cutting-edge insights</p>
        </motion.div>
      </div>

      {/* Trading Section with Animated Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">ONLINE EQUITY MARKET TRADING IN INDIA</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Fundamental Research', icon: TrendingUp, desc: 'Detailed market analysis to drive profitable investments.' },
              { title: 'Commodity', icon: Coins, desc: 'Trade in precious metals, agriculture, and energy sectors.' },
              { title: 'Mutual Funds', icon: PieChart, desc: 'Diversify your portfolio with expertly managed funds.' },
              { title: 'Financial Planning', icon: LineChart, desc: 'Strategic wealth management for long-term security.' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Products with Enhanced Animations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">OUR INVESTMENT PRODUCTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "IPO", icon: BarChart4, path: "/products/ipo", desc: "Early-stage investment opportunities in growing companies." },
              { title: "EQUITY", icon: LineChart, path: "/products/equity", desc: "Direct ownership in leading businesses and markets." },
              { title: "MUTUAL FUNDS", icon: PieChart, path: "/products/mutual-funds", desc: "Professionally managed portfolios for balanced returns." },
              { title: "COMMODITIES", icon: Coins, path: "/products/commodities", desc: "Trade in diverse commodity markets with ease." },
              { title: "CURRENCY", icon: DollarSign, path: "/products/currency", desc: "Participate in the global forex exchange landscape." },
              { title: "DERIVATIVES", icon: TrendingUp, path: "/products/derivatives", desc: "Hedge your investments with advanced financial tools." },
              { title: "PERSONAL FINANCE", icon: DollarSign, path: "/products/financialPlanning", desc: "Tailored solutions to optimize your financial growth." }
            ].map((item, index) => (
              <Link to={item.path} key={index}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg transition duration-500 hover:scale-105 hover:bg-blue-50 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {React.createElement(item.icon, { className: "w-12 h-12 text-blue-600 mb-4" })}
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              </Link>
            ))}

            
          </div>
        </div>
      </section>

      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">WHY WE ARE IDEAL INVESTMENT PARTNERS?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Research Team", description: "Get insights from professionals with deep market knowledge." },
              { title: "24/7 Customer Support", description: "Reach out to our support team anytime, anywhere." },
              { title: "Advanced Trading Platform", description: "Experience seamless and high-speed trading like never before." },
              { title: "Competitive Brokerage", description: "Enjoy low-cost trading with maximum returns." },
              { title: "Secure Transactions", description: "Your investments are protected with top-notch security measures." },
              { title: "Educational Resources", description: "Learn, invest, and grow with our expert-guided resources." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



