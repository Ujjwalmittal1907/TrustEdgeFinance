
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Ensure event is used correctly
    setStatus("Sending...");
  
 
  
    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_mezb8yk",
          template_id:"template_92ja88a",
          user_id:"q9loXnbZLCo6sGzL3" ,
          template_params: formData,
        }),
      });
  
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message.");
    }
  };
  

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get in Touch</h2>
            <p className="mt-3 text-lg text-gray-600">Reach out to us through any of these channels.</p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-yellow-600 animate-bounce" />
                <span className="ml-3 text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-yellow-600 animate-bounce" />
                <span className="ml-3 text-gray-700">contact@portfoliomax.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-yellow-600 animate-bounce" />
                <span className="ml-3 text-gray-700">123 Investment Street</span>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0 animate-fade-in">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 bg-white p-8 rounded-lg shadow-lg">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border rounded" required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border rounded" required />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="p-2 border rounded" />
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="p-2 border rounded" required></textarea>
              <button type="submit" className="bg-yellow-600 py-3 px-6 text-white rounded hover:bg-yellow-700 transition">Send Message</button>
              {status && <p className="text-center mt-2 text-gray-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
