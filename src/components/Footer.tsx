import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, AlertTriangle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-yellow-500 overflow-hidden">
  <div className="animate-marquee whitespace-nowrap py-2 flex">
    <span className="text-black mx-4 font-semibold">📞 Contact: +91 1234567890</span>
    <span className="text-black mx-4 font-semibold">📱 Telegram: @TrustEdgeFinance</span>
    <span className="text-black mx-4 font-semibold">📸 Instagram: @trust_edge_finance</span>
    <span className="text-black mx-4 font-semibold">📧 Email: contact@trustedgefinance.com</span>
    <span className="text-black mx-4 font-semibold">📊 Investment Tips: Diversify your portfolio to minimize risk!</span>
    <span className="text-black mx-4 font-semibold">🛡️ Secure Your Future: Explore our Portfolio Restructuring Services!</span>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TrustEdgeFinance</h3>
            <h4 style={{ fontStyle: "italic"  , color:"gray"}}>
  <strong>Your Trusted Partner in Financial Growth</strong>
</h4>

            <p className="text-gray-400">
              At TrustEdgeFinance, we are committed to empowering your financial future with tailored investment solutions that align with your unique goals and aspirations. Whether you're an individual investor, a seasoned trader, or a business looking for strategic financial planning, we provide expert guidance and cutting-edge tools to help you make informed decisions.
              <br /><br />
              With years of market expertise, we navigate the complexities of the financial world, offering personalized strategies across stocks, mutual funds, bonds, and alternative investments. Our team of financial experts stays ahead of market trends, ensuring that you have access to the latest insights, risk assessment tools, and wealth-building opportunities.
              <br /><br />
              At TrustEdgeFinance, transparency, trust, and growth are at the core of our services. We believe in educating our clients, fostering financial literacy, and providing seamless, technology-driven investment experiences. <br /><br />
            </p>
          </div>

        

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-blue-400 transition-transform hover:scale-110 duration-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-transform hover:scale-110 duration-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-pink-400 transition-transform hover:scale-110 duration-300"><Instagram size={24} /></a>
              <a href="#" className="hover:text-red-500 transition-transform hover:scale-110 duration-300"><Youtube size={24} /></a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2">
          <span className="text-white mx-0.5">Kyc is one time excercisen while dealing in securities markets - Once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund, etc.), you need not undergo the same process again when you approach another intermediary. 2. Prevent unauthorised transactions in your trading account - Update your mobile numbers/email IDs with your stock broker(s). Receive information of your transactions directly from exchange on your mobile/email at the end of the day. 3. Prevent unauthorized transactions in your demat account - Update your mobile number with your Depository Participant, to receive alerts on your registered mobile number for all debit and other important transactions in your demat account directly from NSDL/CDSL on the same day. - Issued in the interest of the investors. 4. SEBI Notification for all investors including retail individual investors for all public issues opening on or after January 01, 2016 No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account. 5. Please note that we Broker are undertaking Proprietary Trading in our own account in addition to Client base business</span>
         
        </div>
      </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-4">
            <AlertTriangle size={24} className="animate-pulse" />
            <h3 className="text-xl font-bold">ATTENTION INVESTORS</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.

            Update your mobile number & email ID with your stock broker/depository participant and receive OTP directly from the depository on your email ID and/or mobile number to create a pledge. <br /><br />

            Pay 20% upfront margin of the transaction value to trade in the cash market segment.<br /><br />

            Investors may please refer to the Exchange's Frequently Asked Questions (FAQs) issued vide circular reference NSE/INSP/45191 dated July 31, 2020,
            NSE/INSP/45534, and BSE vide notice no. 20200731-7 dated July 31, 2020, and 20200831-45 dated August 31, 2020, and other guidelines issued from time to time in this regard. <br /><br />

            Check your Securities / MF / Bonds in the consolidated account statement issued by NSDL/CDSL every month. <br /><br />

            <strong>Copyright 2024-2025 TrustEdgeFinance. All rights reserved.</strong>
          </p>
        </div>

      </div>
    </footer>
  );
}