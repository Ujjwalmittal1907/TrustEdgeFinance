import React from 'react';
import { Link } from "react-router-dom";
import { TrendingUp, PieChart, Coins, DollarSign, LineChart, BarChart4 } from 'lucide-react';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      {/* <div 
        className="h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Secure Your Financial Future</h1>
          <p className="text-xl">Expert guidance for your investment journey</p>
        </div>
      </div> */}
      <div 
  className="h-[600px] bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
    backgroundBlendMode: 'overlay',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }}
>
  {/* Background Image Animation */}
  <motion.div 
    initial={{ scale: 1.1 }} 
    animate={{ scale: 1 }} 
    transition={{ duration: 1.5, ease: "easeOut" }} 
    className="absolute inset-0"
  ></motion.div>

  {/* Text Animation */}
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

      {/* Trading Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">ONLINE EQUITY MARKET TRADING IN INDIA</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Fundamental Research', icon: TrendingUp },
              { title: 'Commodity', icon: Coins },
              { title: 'Mutual Funds', icon: PieChart },
              { title: 'Financial Planning', icon: LineChart }
            ].map((item, index) => (
              <div key={index} className="bg-gray p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-400">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">Expert analysis and guidance for informed investment decisions.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Products */}
     <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">OUR INVESTMENT PRODUCTS</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "IPO", icon: BarChart4, path: "/products/ipo" },
        { title: "EQUITY", icon: LineChart, path: "/products/equity" },
        { title: "MUTUAL FUNDS", icon: PieChart, path: "/products/mutual-funds" },
        { title: "COMMODITIES", icon: Coins, path: "/products/commodities" },
        { title: "CURRENCY", icon: DollarSign, path: "/products/currency" },
        { title: "DERIVATIVES", icon: TrendingUp, path: "/products/derivatives" },
        { title: "PERSONAL FINANCE", icon: DollarSign, path: "/products/financialPlanning" },
        
        
      ].map((item, index) => (
        <Link to={item.path} key={index}>
          <div 
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-50 cursor-pointer"
          >
            {React.createElement(item.icon, { className: "w-12 h-12 text-blue-600 mb-4" })}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">Comprehensive solutions for your investment needs.</p>
          </div>
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
              "Expert Research Team",
              "24/7 Customer Support",
              "Advanced Trading Platform",
              "Competitive Brokerage",
              "Secure Transactions",
              "Educational Resources"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-gray-600">We provide exceptional service and support to help you achieve your financial goals.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}