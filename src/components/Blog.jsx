import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ articles }) => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-200/25 to-rose-200/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 right-16 animate-bounce delay-300">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-2xl">📚</span>
        </div>
      </div>
      <div className="absolute bottom-16 left-16 animate-bounce delay-700">
        <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-lg">💡</span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 shadow-xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Latest Financial Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert financial advice, market trends, and practical tips to help you make smarter money decisions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 overflow-hidden"
            >
              {/* Card Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${article.gradient}`}></div>

              {/* Icon and Category Badge */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${article.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg">{article.icon}</span>
                    </div>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${article.gradient} bg-clip-text text-transparent px-3 py-1 rounded-full border border-gray-200`}>
                      {article.category}
                    </span>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="text-xs text-gray-500 font-medium">{article.date}</span>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300 leading-tight cursor-pointer line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/blog/${index}`, { state: { article, articles } })}
                    className={`inline-flex items-center space-x-2 font-semibold bg-gradient-to-r ${article.gradient} bg-clip-text text-transparent hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 group`}
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>

                  {/* Hover Indicator */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </article>
          ))}
        </div>



        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/50">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-gray-700 font-medium">More articles coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
