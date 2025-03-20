import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Services from "./pages/Services";
import Equity from './pages/products/Equity';
import Derivatives from './pages/products/Derivatives';
import Commodities from './pages/products/Commodities';
import Currency from './pages/products/Currency';
import MutualFunds from './pages/products/MutualFunds';
import IPO from './pages/products/IPO';
import FinancialPlanning from './pages/products/FinancialPlanning';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products/equity" element={<Equity />} />
            <Route path="/products/derivatives" element={<Derivatives />} />
            <Route path="/products/commodities" element={<Commodities />} />
            <Route path="/products/currency" element={<Currency />} />
            <Route path="/products/mutual-funds" element={<MutualFunds />} />
            <Route path="/products/ipo" element={<IPO />} />
            <Route path="/products/financialPlanning" element={<FinancialPlanning />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;