import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !localStorage.getItem('newsletterSubscribed') && !localStorage.getItem('newsletterDismissed')) {
        setIsVisible(true);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 1000 && !localStorage.getItem('newsletterSubscribed') && !localStorage.getItem('newsletterDismissed')) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('newsletterSubscribed', 'true');
      setIsSubscribed(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  };

  const handleClose = () => {
    localStorage.setItem('newsletterDismissed', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSubscribed ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-poppins font-bold text-indigo-900 mb-2">
                    Stay Updated!
                  </h3>
                  <p className="text-gray-600">
                    Subscribe to our newsletter for the latest loan offers and financial tips.
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                  >
                    Subscribe Now
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  No spam, unsubscribe at any time.
                </p>
              </>
            ) : (
              <div className="text-center">
                <div className="text-green-500 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-poppins font-bold text-green-600 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  You've successfully subscribed to our newsletter.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
