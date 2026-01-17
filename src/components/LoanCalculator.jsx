import React, { useState } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [repayment, setRepayment] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateLoan = async () => {
    const principal = parseFloat(loanAmount);
    const months = parseInt(loanTerm);
    const annualRate = 0.10; // Fixed 10% interest rate for payday loans

    if (principal > 0 && months > 0) {
      setIsCalculating(true);
      setProgress(0);

      // Simulate progress
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i);
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      const monthlyRate = annualRate / 12;
      const monthlyPaymentCalc = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

      setRepayment(monthlyPaymentCalc.toFixed(2));
      setIsCalculating(false);
    } else {
      alert('Please enter valid values for amount and term.');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How much do you need?
            </h2>
            <p className="text-lg text-gray-600">
              You could get up to $5000!*
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <form onSubmit={(e) => { e.preventDefault(); calculateLoan(); }} className="space-y-6">
                <div>
                  <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
                    Amount of money ($)
                  </label>
                  <input
                    id="loanAmount"
                    name="loanAmount"
                    type="number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter loan amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-2">
                    How long for?
                  </label>
                  <input
                    id="loanTerm"
                    name="loanTerm"
                    type="number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter loan term in months"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isCalculating}
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center"
                >
                  {isCalculating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculating...
                    </>
                  ) : (
                    'Get your loan now!'
                  )}
                </button>

                {isCalculating && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">Processing your loan calculation...</p>
                  </div>
                )}
              </form>
            </div>

            {/* Results */}
            {repayment > 0 && (
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Repayment</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3">
                    <span className="text-lg font-medium text-gray-700">Monthly Repayment:</span>
                    <span className="text-2xl font-bold text-indigo-600">${repayment}</span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-lg">
                    Get your loan now!
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;
