import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Steps = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: (
        <svg
          className="w-14 h-14 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Apply Online",
      description:
        "Fill out our simple online application form in just 5 minutes with our user-friendly interface",
      gradient: "from-emerald-500 to-teal-600",
      step: "01",
    },
    {
      icon: (
        <svg
          className="w-14 h-14 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Get Approved",
      description:
        "Receive instant approval decision within 15 minutes through our advanced AI-powered system",
      gradient: "from-blue-500 to-indigo-600",
      step: "02",
    },
    {
      icon: (
        <svg
          className="w-14 h-14 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: "Receive Money",
      description:
        "Get your loan funds deposited directly to your bank account within minutes of approval",
      gradient: "from-purple-500 to-pink-600",
      step: "03",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.2,
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-200/25 to-rose-200/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 right-16 animate-bounce delay-300">
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-2xl">⚡</span>
        </div>
      </div>
      <div className="absolute bottom-16 left-16 animate-bounce delay-700">
        <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-lg">🚀</span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 shadow-xl">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Get Money in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process ensures you get the funds you need quickly
            and securely. No complicated paperwork, just fast and easy
            borrowing.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-8"></div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Connecting Elements for Desktop */}
          <div className="hidden md:block">
            {/* Main connecting line */}
            <motion.div
              className="absolute top-16 left-12 transform translate-x-12 w-full max-w-2x3 z-0"
              variants={lineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="h-1 bg-gradient-to-r from-emerald-400 via-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 via-blue-400 via-indigo-400 to-purple-400 rounded-full blur-sm opacity-50"></div>
            </motion.div>

            {/* Animated arrows between steps */}
            <motion.div
              className="absolute top-12 left-1/2 transform -translate-x-1/2 flex justify-between w-full max-w-2xl px-32 z-10"
              variants={arrowVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.div>
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative group"
                variants={itemVariants}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                    <span className="text-white font-bold text-sm">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Icon Container */}
                <motion.div
                  className={`w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.15 }}
                  transition={{
                    type: "tween",
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-2xl group-hover:bg-white/10 transition-colors duration-500"></div>
                  <div className="relative z-10">{step.icon}</div>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-20 transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-2xl hover:shadow-indigo-500/25 flex items-center space-x-3 mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/apply-now")}
          >
            <span>Start Your Application</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.button>

          <p className="text-gray-500 mt-4 text-sm">
            No credit check • Instant approval • Funds in minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Steps;
