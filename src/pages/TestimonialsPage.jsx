import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const TestimonialsPage = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'Small Business Owner',
      image: 'https://via.placeholder.com/100x100/6366f1/ffffff?text=JM',
      quote: 'The personal loan I received helped me expand my business during a crucial time. The process was smooth, and the rates were competitive. I couldn\'t have done it without their support.',
      rating: 5,
      loanType: 'Business Loan'
    },
    {
      id: 2,
      name: 'Robert Chen',
      role: 'Software Engineer',
      image: 'https://via.placeholder.com/100x100/14b8a6/ffffff?text=RC',
      quote: 'I needed funds for home renovations, and this company provided exactly what I needed. The approval was fast, and the customer service was exceptional throughout the process.',
      rating: 5,
      loanType: 'Personal Loan'
    },
    {
      id: 3,
      name: 'Maria Gonzalez',
      role: 'Teacher',
      image: 'https://via.placeholder.com/100x100/4f46e5/ffffff?text=MG',
      quote: 'As a teacher, I was worried about my credit score, but they worked with me and found a solution that fit my needs. The monthly payments are manageable, and I\'m grateful for their understanding approach.',
      rating: 5,
      loanType: 'Personal Loan'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Retired',
      image: 'https://via.placeholder.com/100x100/0d9488/ffffff?text=DT',
      quote: 'Their senior loan program was perfect for my situation. The terms were clear, and the staff took the time to explain everything. I felt respected and valued as a customer.',
      rating: 5,
      loanType: 'Senior Loan'
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      role: 'Student',
      image: 'https://via.placeholder.com/100x100/6366f1/ffffff?text=SJ',
      quote: 'The student loan options helped me focus on my studies without financial stress. The deferred payment plan was exactly what I needed during my education.',
      rating: 5,
      loanType: 'Student Loan'
    },
    {
      id: 6,
      name: 'Michael Brown',
      role: 'Construction Worker',
      image: 'https://via.placeholder.com/100x100/14b8a6/ffffff?text=MB',
      quote: 'When I lost my job, their unemployed loan program gave me breathing room. The grace period and flexible terms helped me get back on my feet. Highly recommend!',
      rating: 5,
      loanType: 'Unemployed Loan'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-indigo-900 mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl font-inter text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from real customers who have
            experienced our exceptional service and support.
          </p>
        </div>

        {/* Featured Testimonial Slider */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="relative">
            <div className="text-center">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[activeIndex].rating)}
              </div>
              <blockquote className="text-xl font-inter text-gray-700 mb-6 max-w-4xl mx-auto italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="mb-4">
                <h3 className="text-lg font-poppins font-bold text-indigo-900">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mt-2">
                  {testimonials[activeIndex].loanType}
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-poppins font-bold text-indigo-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>

              <p className="font-inter text-gray-700 mb-4 line-clamp-4">
                "{testimonial.quote}"
              </p>

              <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                {testimonial.loanType}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-poppins font-bold mb-4">
            Ready to Join Our Satisfied Customers?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Experience the same excellent service and support that thousands of customers have enjoyed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/apply-now')} className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Apply Now
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
