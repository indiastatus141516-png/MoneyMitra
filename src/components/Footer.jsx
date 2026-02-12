import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,119,198,0.1),transparent_50%)]"></div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.02) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 0%, transparent 50%)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-pink-500/5 to-orange-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* MAIN GRID */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Contact Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Contact Our Agent Now!
              </h3>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  +1 800 123 1234
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-300 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Street Address
                  </h4>
                  <p className="text-gray-400 text-sm">
                    85 Broad St,<br />New York City, NY 10004
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-300 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Postal Address
                  </h4>
                  <p className="text-gray-400 text-sm">
                    85 Broad St,<br />New York City, NY 10004
                  </p>
                </div>
              </div>
            </div>

            {/* Center Text */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="/CashzenUsa.jpeg"
                  alt="CashZen USA logo"
                  className="h-20 w-20 rounded-full object-cover border border-white/20 shadow-lg"
                />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                CashZen USA
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6"></div>

              <p className="text-gray-300 bg-indigo-500/20 p-4 rounded-xl border border-indigo-500/20">
                Your trusted path to financial peace in the United States.
              </p>
            </div>

            {/* Open Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="font-bold mb-6 flex items-center text-white">
                <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Open Hours
              </h4>

            <div className="space-y-3">
  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, i) => (
    <div key={i} className="flex justify-between py-2 px-3 bg-white/5 rounded-lg">
      <span className="text-gray-300 text-sm">{day}</span>
      <span className="text-white font-medium text-sm">9am-7pm</span>
    </div>
  ))}
</div>

            </div>
          </div>
        </div>

        {/* ⬇ CENTER FOOTER (Updated as you requested) */}
        <div className="text-center py-6 border-t border-gray-700/50">

          {/* Social Icons (Only Facebook, IG, LinkedIn kept) */}
          <div className="flex justify-center space-x-4 mb-4">

            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-blue-600/25">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a href="#">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-pink-500/25">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.001 2C4.243 2 2 4.243 2 7.001v9.998C2 19.757 4.243 22 7.001 22h9.998C19.757 22 22 19.757 22 16.999V7.001C22 4.243 19.757 2 16.999 2H7.001zM12 17a5 5 0 110-10 5 5 0 010 10zm6.5-11.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
                </svg>
              </div>
            </a>

            {/* LinkedIn */}
           <a href="#">
  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-blue-600/25">
    <svg
      className="w-6 h-6 text-white"
      fill="currentColor"
      viewBox="0 0 448 512"
    >
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.79 53.79 0 1153.79-53.79A53.79 53.79 0 0153.84 107zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.7V148.9h88.9v40.8h1.3c12.4-23.5 42.6-48.3 87.7-48.3 93.8 0 111 61.8 111 142.3z"/>
    </svg>
  </div>
</a>

          </div>

          {/* Center Text */}
          <p className="text-gray-400 text-sm mb-2">
            © 2025 CashZen USA. All Rights Reserved.
          </p>

          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <span className="flex items-center space-x-1">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>SSL Secured</span>
            </span>

            <span className="flex items-center space-x-1">
              <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>FCA Regulated</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
