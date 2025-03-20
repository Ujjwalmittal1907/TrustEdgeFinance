import React from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
  <Link to="/">
    <img src="/logo.jpg" alt="TrustEdgeFin Logo" className="h-16 w-50" />
  </Link>
</div>

          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">HOME</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">SERVICES</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition">BLOG</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">CONTACT US</Link>
            <a 
              href="https://wa.me/8195896258" 
              className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
            >
              <PhoneCall size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">HOME</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">SERVICES</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">BLOG</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">CONTACT US</Link>
            <a 
              href="https://wa.me/1234567890" 
              className="block px-3 py-2 text-green-500 hover:text-green-600"
            >
              CONTACT (WhatsApp)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}