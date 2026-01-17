import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;
  const articles = location.state?.articles || [];
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(42);

  // Get related articles (exclude current article and pick 3 random ones)
  const relatedArticles = articles
    .filter((_, index) => index !== parseInt(id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold"
            >
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section with Featured Image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${article.gradient} bg-clip-text text-transparent px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg`}>
              <span className="text-lg">{article.icon}</span>
              <span>{article.category}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        {/* Article Content Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-500">
          {/* Featured Image */}
          <div className="h-64 relative overflow-hidden rounded-t-3xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg first-letter:text-6xl first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-2 first-letter:float-left">
                {article.content}
              </p>
            </div>

            {/* Quote Section */}
            <div className="my-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-l-4 border-indigo-500">
              <blockquote className="text-lg text-gray-700 italic">
                "Financial literacy is the foundation of financial freedom. Understanding your money and how it works is the first step towards building wealth."
              </blockquote>
              <cite className="text-sm text-gray-500 mt-2 block">- Financial Wisdom</cite>
            </div>

            {/* Key Points Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Key Takeaway</h3>
                <p className="text-gray-600">Understanding your credit score is crucial for financial planning and loan approvals.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Action Item</h3>
                <p className="text-gray-600">Regularly monitor your credit report and work on improving your financial habits.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mt-8 border border-white/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setLikes(likes + 1)}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors group"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="font-semibold">{likes}</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-semibold">12</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span className="font-semibold">Share</span>
              </button>
            </div>

            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isBookmarked
                  ? 'bg-yellow-100 text-yellow-700 border border-yellow-300'
                  : 'text-gray-600 hover:text-yellow-500 hover:bg-yellow-50'
              }`}
            >
              <svg className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span className="font-semibold">{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle, index) => (
              <div
                key={index}
                onClick={() => navigate(`/blog/${articles.indexOf(relatedArticle)}`, { state: { article: relatedArticle, articles } })}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50 overflow-hidden group cursor-pointer"
              >
                <div className={`h-32 bg-gradient-to-r ${relatedArticle.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl">{relatedArticle.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{relatedArticle.readTime}</span>
                    <span>{relatedArticle.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Blogs</span>
          </button>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            <span>Home</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
