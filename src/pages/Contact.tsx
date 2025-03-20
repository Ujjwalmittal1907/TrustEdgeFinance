// import React from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';

// export default function Contact() {
//   return (
//     <div className="pt-16">
//       <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//         <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get in Touch</h2>
//             <p className="mt-3 text-lg text-gray-500">
//               We're here to help you with your investment journey. Reach out to us through any of these channels.
//             </p>
            
//             <div className="mt-8 space-y-6">
//               <div className="flex items-center">
//                 <Phone className="h-6 w-6 text-blue-600" />
//                 <span className="ml-3 text-gray-500">+1 (555) 123-4567</span>
//               </div>
              
//               <div className="flex items-center">
//                 <Mail className="h-6 w-6 text-blue-600" />
//                 <span className="ml-3 text-gray-500">contact@portfoliomax.com</span>
//               </div>
              
//               <div className="flex items-center">
//                 <MapPin className="h-6 w-6 text-blue-600" />
//                 <span className="ml-3 text-gray-500">123 Investment Street, Financial District</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-12 sm:mt-16 md:mt-0">
//             <form className="grid grid-cols-1 gap-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   rows={4}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 ></textarea>
//               </div>
              
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 py-3 px-6 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          {/* Contact Info Section */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get in Touch</h2>
            <p className="mt-3 text-lg text-gray-500">
              We're here to help you with your investment journey. Reach out to us through any of these channels.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 animate-bounce" />
                <span className="ml-3 text-gray-500">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 animate-bounce" />
                <span className="ml-3 text-gray-500">contact@portfoliomax.com</span>
              </div>

              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 animate-bounce" />
                <span className="ml-3 text-gray-500">123 Investment Street, Financial District</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-12 sm:mt-16 md:mt-0 animate-fade-in">
            <form className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:bg-gray-300 transition duration-300" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:bg-gray-300 transition duration-300" 
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:bg-gray-300 transition duration-300" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:bg-gray-300 transition duration-300" 
                ></textarea>
              </div>

              <div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 py-3 px-6 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

