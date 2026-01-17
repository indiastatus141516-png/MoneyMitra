// Updated Hero Component with LoanCalculator Logic (Correct EMI Formula Applied)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loanAmount: '',
    loanTerm: ''
  });

  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [repayment, setRepayment] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.loanAmount || formData.loanAmount <= 0) newErrors.loanAmount = 'Please enter a valid amount';
    if (!formData.loanTerm || formData.loanTerm <= 0) newErrors.loanTerm = 'Please enter a valid term';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) return setErrors(formErrors);

    const principal = parseFloat(formData.loanAmount);
    const months = parseInt(formData.loanTerm);
    const annualRate = 0.10; // 10% fixed
    const monthlyRate = annualRate / 12;

    setIsCalculating(true);
    setProgress(0);

    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Correct EMI Formula
    const monthlyPaymentCalc = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setRepayment(monthlyPaymentCalc.toFixed(2));
    setIsCalculating(false);
  };

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-r from-navy-blue to-blue-900 flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="text-white animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Getting Money is now as <span className="text-lime-green">easy</span> as sending a message.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Fast, easy, and secure payday loans up to <span className="text-lime-green font-bold">$5,000</span>.
            </p>
          </div>

          {/* Right (Form) */}
          <div className="card animate-slideUp bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-navy-blue mb-2">How much do you need?</h2>
              <h5 className="text-lg text-text-gray mb-4">You could get up to $5000!*</h5>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-navy-blue mb-2">Amount of money ($)</label>
                <input
                  type="number"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green ${errors.loanAmount ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="0"
                />
                {errors.loanAmount && <p className="text-red-500 text-sm mt-1">{errors.loanAmount}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-blue mb-2">How long for? (Months)</label>
                <input
                  type="number"
                  name="loanTerm"
                  value={formData.loanTerm}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green ${errors.loanTerm ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="1"
                />
                {errors.loanTerm && <p className="text-red-500 text-sm mt-1">{errors.loanTerm}</p>}
              </div>

              {isCalculating && (
                <div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-lime-green h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">Processing calculation...</p>
                </div>
              )}

              <button type="submit" className="w-full btn-primary">Calculate & Apply</button>
            </form>

            {repayment && (
              <div className="mt-6 p-4 bg-gray-50 border rounded-lg text-center">
                <p className="text-lg font-semibold text-navy-blue">Monthly Repayment:</p>
                <p className="text-3xl font-bold text-lime-green mt-2">${repayment}</p>
              </div>
            )}

            <button
              onClick={() => navigate('/apply-now')}
              className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 font-semibold"
            >
              Get your loan now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;