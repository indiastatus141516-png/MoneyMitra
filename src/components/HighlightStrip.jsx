import React from 'react';
import { useNavigate } from 'react-router-dom';

const HighlightStrip = () => {
  const navigate = useNavigate();
  const scrollText = "🚀 FAST APPROVAL • 💰 UP TO $5000 • ⚡ INSTANT TRANSFER • 🛡️ SECURE & ENCRYPTED • 📱 MOBILE FRIENDLY • 🎯 NO CREDIT CHECK • 🚀 FAST APPROVAL • 💰 UP TO $5000 • ⚡ INSTANT TRANSFER • 🛡️ SECURE & ENCRYPTED • 📱 MOBILE FRIENDLY • 🎯 NO CREDIT CHECK";

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Animated Background with Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(120,219,226,0.2),transparent_50%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400/25 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-yellow-400/20 rounded-full animate-bounce delay-1000"></div>
        {/* Additional dynamic particles */}
        <div className="absolute top-1/6 left-1/2 w-1.5 h-1.5 bg-emerald-400/20 rounded-full animate-ping delay-200"></div>
        <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-orange-400/15 rounded-full animate-ping delay-400"></div>
        <div className="absolute bottom-1/6 left-1/6 w-1 h-1 bg-indigo-400/25 rounded-full animate-ping delay-600"></div>
        <div className="absolute top-5/6 right-2/3 w-1.5 h-1.5 bg-teal-400/20 rounded-full animate-ping delay-800"></div>
        <div className="absolute bottom-2/3 left-3/4 w-2 h-2 bg-rose-400/15 rounded-full animate-ping delay-1200"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Enhanced Title */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-wider mb-4 leading-none">
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
              C
            </span>
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-pulse delay-100 drop-shadow-lg">
              A
            </span>
            <span className="inline-block bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 bg-clip-text text-transparent animate-pulse delay-200 drop-shadow-lg">
              P
            </span>
            <span className="inline-block bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent animate-pulse delay-300 drop-shadow-lg">
              I
            </span>
            <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent animate-pulse delay-500 drop-shadow-lg">
              T
            </span>
            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent animate-pulse delay-700 drop-shadow-lg">
              A
            </span>
            <span className="inline-block bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-pulse delay-1000 drop-shadow-lg">
              L
            </span>
          </h2>

          {/* Subtitle with enhanced styling */}
          <p className="text-2xl md:text-3xl text-white mt-6 max-w-4xl mx-auto font-bold leading-tight">
            Your trusted partner for <span className="text-yellow-400 animate-pulse">fast</span> and <span className="text-cyan-400 animate-pulse">reliable</span> financial solutions
          </p>
        </div>

        {/* Enhanced Auto-scrolling text with multiple layers */}
        <div className="mt-12 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

          <div className="whitespace-nowrap animate-marquee">
            <span className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-500 via-cyan-400 via-green-400 via-orange-400 to-red-400 bg-clip-text drop-shadow-sm">
              {scrollText}
            </span>
          </div>

          {/* Secondary scrolling layer */}
          <div className="whitespace-nowrap animate-marquee-reverse mt-2 opacity-60">
            <span className="text-lg font-medium text-white/80">
              💎 TRUSTED BY MILLIONS • 🔒 BANK-LEVEL SECURITY • ⚡ LIGHTNING FAST • 🎯 PRECISION ACCURACY • 💎 TRUSTED BY MILLIONS • 🔒 BANK-LEVEL SECURITY • ⚡ LIGHTNING FAST • 🎯 PRECISION ACCURACY
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button onClick={() => navigate('/apply-now')} className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 flex items-center space-x-2 mx-auto group">
            <span>Get Started Today</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HighlightStrip;
