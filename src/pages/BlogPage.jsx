import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Bad Credit', 'Income', 'Planning', 'Savings', 'Family', 'Loans', 'Students', 'Emergency', 'Seniors', 'Unemployment'];

  const articles = [
    {
      title: "Bad Credit History: Your Path to Financial Recovery",
      date: "23 May",
      category: "Bad Credit",
      excerpt: "Learn how to rebuild your credit score and access loans even with a challenging credit history. Discover practical strategies and our flexible lending options.",
      gradient: "from-red-500 to-pink-600",
      icon: "💳",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Having a bad credit history can feel like a roadblock to financial freedom, but it's not the end of the road. In this comprehensive guide, we'll explore proven strategies to rebuild your credit score and regain access to favorable loan terms. We'll cover everything from understanding your credit report to implementing daily habits that boost your score over time. Our flexible lending options are designed specifically for individuals with less-than-perfect credit, providing a pathway to financial recovery. Learn about credit repair services, debt consolidation techniques, and how to work with lenders who understand your situation. With patience and consistent effort, you can transform your credit history and open doors to better financial opportunities."
    },
    {
      title: "Making Extra Cash: Smart Side Hustle Strategies",
      date: "23 May",
      category: "Income",
      excerpt: "Explore legitimate ways to boost your income and achieve financial stability. From freelancing to passive income streams, find what works for you.",
      gradient: "from-green-500 to-emerald-600",
      icon: "💰",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "In today's economy, relying on a single income source is increasingly risky. This article delves into smart side hustle strategies that can significantly boost your income and provide financial security. We'll explore freelancing opportunities on platforms like Upwork and Fiverr, gig economy jobs through Uber and TaskRabbit, and creative ways to monetize your skills. Learn about passive income streams such as creating digital products, affiliate marketing, and real estate investing. We'll also discuss the importance of balancing side hustles with your primary job, tax implications, and how to scale your efforts for maximum profitability. Whether you're looking to pay off debt or build wealth, these strategies offer practical paths to financial independence."
    },
    {
      title: "Secure Your Future: Long-term Financial Planning",
      date: "27 Nov",
      category: "Planning",
      excerpt: "Build a solid foundation for your financial future with expert advice on budgeting, saving, and investment strategies that last.",
      gradient: "from-blue-500 to-indigo-600",
      icon: "🎯",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Long-term financial planning is the cornerstone of financial security and wealth building. This comprehensive guide covers essential strategies for securing your financial future, from creating effective budgets to diversifying your investment portfolio. We'll explore retirement planning, including 401(k)s, IRAs, and Social Security optimization. Learn about risk management through insurance planning and emergency fund creation. Discover investment strategies suitable for different life stages and risk tolerances, including stocks, bonds, real estate, and alternative investments. We'll also discuss estate planning, tax optimization, and how to adapt your plan as life circumstances change. With disciplined execution of these principles, you can build lasting wealth and achieve financial freedom."
    },
    {
      title: "5 Essential Tips For Saving Money Effectively",
      date: "23 Nov",
      category: "Savings",
      excerpt: "Master the art of saving with these proven techniques. From automated savings to smart spending habits, transform your financial habits.",
      gradient: "from-purple-500 to-violet-600",
      icon: "💸",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Saving money effectively requires discipline, strategy, and the right tools. This article presents five essential tips that can transform your saving habits and accelerate your path to financial goals. First, we'll explore automated savings techniques that make saving effortless. Learn about the 50/30/20 rule for budgeting and how to track expenses effectively. Discover high-yield savings accounts and CDs for maximizing your returns. We'll also cover negotiation strategies for better rates on services and how to avoid common saving pitfalls. By implementing these tips consistently, you'll build substantial savings and create a strong financial foundation for the future."
    },
    {
      title: "Family Budget Solutions: Managing Money Together",
      date: "20 Nov",
      category: "Family",
      excerpt: "Create harmony in your household finances. Learn how to budget as a family, teach kids about money, and achieve common financial goals.",
      gradient: "from-orange-500 to-red-600",
      icon: "👨‍👩‍👧‍👦",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Managing family finances can be challenging, but with the right approach, it can strengthen family bonds and achieve shared goals. This comprehensive guide explores effective family budget solutions that promote financial harmony. Learn how to create inclusive budgeting processes that involve all family members. We'll cover strategies for teaching children about money management, from allowance systems to entrepreneurial opportunities. Discover ways to align family spending with values and long-term goals. Explore tools for tracking shared expenses and communication techniques for discussing financial matters openly. Whether you're planning for education, vacations, or retirement, these solutions will help your family build wealth together and create lasting financial security."
    },
    {
      title: "5 Essential Tips to Get Approved for a Loan",
      date: "15 Nov",
      category: "Loans",
      excerpt: "Increase your chances of loan approval with these insider tips. From improving your credit score to choosing the right lender, we've got you covered.",
      gradient: "from-cyan-500 to-blue-600",
      icon: "📋",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Getting approved for a loan requires preparation and strategy. This article provides five essential tips to maximize your chances of loan approval and secure favorable terms. First, we'll discuss credit score improvement techniques and the factors lenders consider. Learn about debt-to-income ratio optimization and how to strengthen your application. Discover the importance of choosing the right lender and loan type for your needs. We'll also cover documentation preparation and timing strategies for loan applications. By following these expert tips, you'll approach lenders with confidence and increase your likelihood of approval, whether for personal, business, or mortgage loans."
    },
    {
      title: "Cash Loans for Students: Education Without Debt",
      date: "10 Nov",
      category: "Students",
      excerpt: "Navigate student financing with confidence. Discover loan options designed specifically for students and young professionals pursuing education.",
      gradient: "from-yellow-500 to-orange-600",
      icon: "🎓",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Pursuing higher education shouldn't come at the cost of lifelong debt. This guide explores cash loan options specifically designed for students and young professionals. Learn about federal student loan programs, private student loans, and alternative financing options. We'll discuss eligibility requirements, interest rates, and repayment terms. Discover strategies for minimizing student debt, including scholarships, work-study programs, and income-share agreements. Explore loan forgiveness programs and refinancing options for existing debt. With the right knowledge and planning, you can fund your education without sacrificing your financial future."
    },
    {
      title: "Fast Money Loans: When You Need Cash Quickly",
      date: "08 Nov",
      category: "Emergency",
      excerpt: "Understanding emergency lending options and how to access funds when time is critical. Make informed decisions in urgent situations.",
      gradient: "from-emerald-500 to-teal-600",
      icon: "⚡",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Life's emergencies don't wait for payday. This article explores fast money loan options for when you need cash quickly and can't wait for traditional approval processes. Learn about payday loans, cash advances, and online lenders offering rapid funding. We'll discuss interest rates, fees, and repayment terms to help you make informed decisions. Discover alternatives like credit union loans and emergency assistance programs. Explore strategies for avoiding predatory lending and building emergency savings to reduce future reliance on fast loans. With careful consideration, you can access needed funds while protecting your financial health."
    },
    {
      title: "Cash Loans for Seniors: Retirement Financial Solutions",
      date: "28 Oct",
      category: "Seniors",
      excerpt: "Tailored financial solutions for seniors. Learn about loan options that respect your retirement lifestyle and provide the support you need.",
      gradient: "from-indigo-500 to-purple-600",
      icon: "👴",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Retirement brings new financial challenges and opportunities. This comprehensive guide explores cash loan options tailored for seniors, designed to support your retirement lifestyle. Learn about reverse mortgages, senior-specific loan programs, and alternatives to traditional lending. We'll discuss how Social Security and pension income affect loan eligibility. Discover strategies for debt management in retirement and ways to leverage home equity. Explore loan forgiveness options and government assistance programs for seniors. With the right financial tools, you can maintain independence and security throughout your retirement years."
    },
    {
      title: "Loans for Unemployed: Financial Support During Transitions",
      date: "05 Oct",
      category: "Unemployment",
      excerpt: "Navigate financial challenges during unemployment. Discover loan programs and support options available when you need them most.",
      gradient: "from-slate-500 to-gray-600",
      icon: "🔄",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Job loss can create immediate financial pressure, but there are loan options and support programs designed to help during unemployment. This article explores loans for unemployed individuals, including unemployment assistance loans and hardship programs. Learn about eligibility requirements and how to qualify during job transitions. We'll discuss alternatives like credit union loans and community assistance programs. Discover strategies for rebuilding credit during unemployment and preparing for re-employment. Explore government programs and nonprofit organizations offering financial support. With the right resources, you can navigate unemployment with confidence and maintain financial stability."
    }
  ];

  const blogPosts = articles;

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(filteredPosts.length / 3));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [filteredPosts.length]);

  const slides = [];
  for (let i = 0; i < filteredPosts.length; i += 3) {
    slides.push(filteredPosts.slice(i, i + 3));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-indigo-900 mb-6">
            Financial Insights & Tips
          </h1>
          <p className="text-xl font-inter text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest articles on personal finance, loan tips, and financial planning advice.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Slider */}
        <div className="relative overflow-hidden mb-16">
          <motion.div
            className="flex"
            animate={{ x: -currentIndex * 100 + '%' }}
            transition={{ duration: 0.5 }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex-shrink-0 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {slide.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>

                      <h2 className="text-xl font-poppins font-bold text-indigo-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="font-inter text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{post.readTime}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <button
                          onClick={() => navigate(`/blog/${blogPosts.indexOf(post)}`, { state: { article: post, articles: blogPosts } })}
                          className="text-indigo-600 hover:text-indigo-800 font-semibold"
                        >
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-indigo-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-poppins font-bold mb-4">
            Stay Updated with Financial Tips
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest financial insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
