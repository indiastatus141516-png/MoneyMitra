import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [counters, setCounters] = useState({
    loans: 0,
    offices: 0,
    awards: 0,
    clients: 0
  });

  const targetValues = {
    loans: 120,
    offices: 38,
    awards: 15,
    clients: 100
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;

        Object.keys(targetValues).forEach(key => {
          if (newCounters[key] < targetValues[key]) {
            newCounters[key] += Math.ceil(targetValues[key] / 100);
            if (newCounters[key] > targetValues[key]) {
              newCounters[key] = targetValues[key];
            }
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(interval);
        }

        return newCounters;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [targetValues]);

  const stats = [
    {
      value: `${counters.loans}k`,
      label: 'Loans taken',
      suffix: '',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-600",
      bgPattern: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    },
    {
      value: counters.offices,
      label: 'Offices',
      suffix: '',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-blue-500 to-indigo-600",
      bgPattern: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    },
    {
      value: counters.awards,
      label: 'Awards Won',
      suffix: '',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600",
      bgPattern: "radial-gradient(circle at 50% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    },
    {
      value: `${counters.clients}%`,
      label: 'Happy Clients',
      suffix: '',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: "from-rose-500 to-pink-600",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 right-16 animate-bounce delay-300">
        <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-16 left-16 animate-bounce delay-700">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 shadow-xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent mb-6 leading-tight">
            The Right Decision, at the Right Time
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust us with their financial needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10"
            >
              {/* Card Background Pattern */}
              <div
                className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundImage: stat.bgPattern }}
              ></div>

              {/* Icon Container */}
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/20 rounded-2xl group-hover:bg-white/10 transition-colors duration-500"></div>
                <div className="relative z-10">
                  {stat.icon}
                </div>
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              <div className="text-center relative z-10">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-indigo-200 font-medium text-lg group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-12 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
            <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-indigo-200 font-medium">Numbers that speak for themselves</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
