import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    {
      title: "Personal Loans",
      description:
        "Flexible personal loans for any purpose - from home improvements to debt consolidation.",
      icon: "💰",
      features: [
        "Up to $10,000",
        "Flexible terms",
        "Quick approval",
        "No collateral required",
      ],
    },
    {
      title: "Student Loans",
      description:
        "Educational financing to help students achieve their academic goals.",
      icon: "🎓",
      features: [
        "Tuition coverage",
        "Living expenses",
        "Deferred payments",
        "Low interest rates",
      ],
    },
    {
      title: "Business Loans",
      description:
        "Capital solutions for entrepreneurs and small business owners.",
      icon: "🏢",
      features: [
        "Working capital",
        "Equipment financing",
        "Expansion funding",
        "Fast processing",
      ],
    },
    {
      title: "Senior Loans",
      description:
        "Specialized loan programs designed for seniors and retirees.",
      icon: "👴",
      features: [
        "Retirement planning",
        "Medical expenses",
        "Home modifications",
        "Flexible terms",
      ],
    },
    {
      title: "Unemployed Loans",
      description:
        "Support during career transitions with understanding terms.",
      icon: "🔄",
      features: [
        "Income verification",
        "Grace periods",
        "Career counseling",
        "Flexible payments",
      ],
    },
    {
      title: "Emergency Loans",
      description: "Quick access to funds when you need them most.",
      icon: "🚨",
      features: [
        "Same-day approval",
        "Minimal paperwork",
        "Emergency funding",
        "24/7 support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-indigo-900 mb-6">
            Our Loan Services
          </h1>
          <p className="text-xl font-inter text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of loan products tailored to meet your
            specific financial needs. Find the perfect solution for your
            situation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-poppins font-bold text-indigo-900 mb-3">
                {service.title}
              </h3>
              <p className="font-inter text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/apply-now"
                className="mt-6 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold block text-center"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-poppins font-bold mb-4">
            Not Sure Which Loan is Right for You?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our loan specialists are here to help you find the perfect financing
            solution. Contact us today for personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
            >
              Contact Us
            </Link>
            <Link
              to="/"
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-center"
            >
              Calculate Your Rate
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
