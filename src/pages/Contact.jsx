import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { text: 'Hi! How can I help you with your loan questions today?', sender: 'bot' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleChatSend = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { text: chatInput, sender: 'user' }]);
      setChatInput('');
      // Simulate bot response
      setTimeout(() => {
        const responses = [
          'I can help you with loan applications and eligibility.',
          'Our loans range from $100 to $5,000 with flexible terms.',
          'Please provide more details about your loan needs.',
          'Our support team is available 24/7 to assist you.'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setChatMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-indigo-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl font-inter text-gray-600 max-w-3xl mx-auto">
            Have questions about our loans? Need help with your application?
            We're here to help 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-poppins font-bold text-indigo-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Info */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-poppins font-bold text-indigo-900 mb-6">Visit Our Office</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">123 Finance Street<br />Business District<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">(555) 123-LOAN<br />(555) 123-5626</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Office Hours</p>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 font-semibold">Interactive Map Coming Soon</p>
            </div>

            {/* Quick Contact */}
            <div className="bg-indigo-600 text-white p-8 rounded-lg">
              <h3 className="text-xl font-poppins font-bold mb-4">Need Immediate Help?</h3>
              <p className="mb-6">Call our support line for instant assistance with your loan questions.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+15551235626"
                  className="flex-1 px-4 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
                >
                  Call Now
                </a>
                <button
                  onClick={handleChatToggle}
                  className="flex-1 px-4 py-3 border border-white text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                >
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Widget */}
      {isChatOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
        >
          <div className="bg-indigo-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Live Chat Support</h3>
            <button
              onClick={handleChatToggle}
              className="text-white hover:text-gray-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-4 h-64 overflow-y-auto">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg max-w-xs ${
                    message.sender === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                onClick={handleChatSend}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
