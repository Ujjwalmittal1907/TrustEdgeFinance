import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "Bank of England Dilutes Stress Test Scenario for Lenders",
    date: "March 25, 2025",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    excerpt: "The Bank of England has softened the crisis scenario used to assess the resilience of British banks...",
    content: "The Bank of England has softened the crisis scenario used to assess the resilience of British banks, opting for a more moderate increase in inflation and a smaller global economic contraction compared to last year's test. The current scenario requires major UK banks to model how they would handle UK inflation reaching 10% and a 2% decline in global GDP, less severe than the 12% inflation and 3% global GDP drop modeled in 2024. The BoE adjusted its assumptions to counter the impact of the IFRS 9 accounting standard implemented for the first time. However, the test is tougher in certain areas, such as a 20% decline in global trade due to geopolitical tensions. Results will be published later this year, informing adjustments to capital buffers for the banking sector.",
    category: "Market Analysis"
  },
  {
    id: 2,
    title: "London Can Be a Winner as a Neutral Financial Hub, Says Standard Chartered Chair",
    date: "March 25, 2025",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    excerpt: "José Viñals, chairman of Standard Chartered, suggests that London has the potential to emerge as a winner...",
    content: "José Viñals, chairman of Standard Chartered, suggests that London has the potential to emerge as a winner by positioning itself as a neutral financial hub amidst the evolving geopolitical landscape. He notes that globalization is shifting towards a less predictable and more power-based system, which could potentially benefit London. Despite increasing competition from New York and other financial centers like Amsterdam, Viñals believes that London's reputation as a neutral center could work in its favor. He acknowledges the current geopolitical uncertainties, exacerbated by trade wars and strained transatlantic relations under Donald Trump's US administration, but asserts that Standard Chartered, with its operations focused on Asia, Africa, and the Middle East, has historically navigated international uncertainty effectively. The bank remains committed to its UK domicile, and Viñals sees no plans to move its primary stock market listing elsewhere. He also highlights the successful turnaround efforts by CEO Bill Winters, which have strengthened the bank's market position and reduced vulnerability to unsolicited takeovers.",
    category: "Investment Trends"
  },
  {
    id: 3,
    title: "Goldman Sachs Hikes Pay for City Bankers to $764,000 as Dealmaking Jumps",
    date: "March 25, 2025",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Goldman Sachs increased the average pay for its London-based employees to $764,000 in 2024...",
    content: "Goldman Sachs increased the average pay for its London-based employees to $764,000 in 2024, a 16% rise, as dealmaking fees surged and the firm hired more staff. The bank’s overall compensation costs for Goldman Sachs International reached $2.8 billion, up 26% from the previous year, while its total international expenses grew to $6.6 billion due to higher compensation and benefits. Investment banking fees for 2024 were $1.3 billion, a 50% increase year-on-year. However, trading revenues showed mixed results with a 3% decrease in fixed income revenue and a 3% increase in equities fees. The bank has also increased bonuses for investment bankers by 15% and has continued its annual employee cull affecting 4-5% of its global workforce. Headcount in its international unit rose by 300 people to 3,614, driven by increases in risk, compliance, and investment management staff. Additionally, new leaders Anthony Gutman and Kunal Shah took over as heads of the international unit in a recent executive reorganization.",
    category: "Risk Management"
  },
  {
    id: 4,
    title: "Klarna IPO Filing Spurs Hope of British Fintech Listings",
    date: "March 24, 2025",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Klarna's upcoming U.S. initial public offering could help unlock a pipeline of British fintech flotations...",
    content: "Klarna's upcoming U.S. initial public offering could help unlock a pipeline of British fintech flotations after a barren period for new technology listings, investors, lawyers, and an executive told Reuters.",
    category: "Sector Analysis"
  },
  {
    id: 5,
    title: "DBS' New CEO Tan Open to 'Bolt-On' Acquisitions",
    date: "March 24, 2025",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    excerpt: "DBS' new CEO, Tan, has expressed openness to 'bolt-on' acquisitions...",
    content: "DBS' new CEO, Tan, has expressed openness to 'bolt-on' acquisitions as the bank seeks to expand its footprint in key markets.",
    category: "Market Analysis"
  },
  {
    id: 6,
    title: "HSBC Mulls Outsourcing Some Fixed Income Trading",
    date: "March 24, 2025",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    excerpt: "HSBC is considering outsourcing parts of its fixed income trading operations...",
    content: "HSBC is considering outsourcing parts of its fixed income trading operations, according to reports from Bloomberg News.",
    category: "Investment Trends"
  }
];

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Investment Insights
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
                <p className="text-gray-500 text-sm mt-1 mb-2">{post.date}</p>
                <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">
                  {expandedPost === post.id ? post.content : post.excerpt}
                </p>
                <button
                  onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  {expandedPost === post.id ? "Read Less ←" : "Read More →"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
