import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * IMPORTANT:
 * - Replace APPS_SCRIPT_URL value below with your deployed Apps Script Web App URL.
 * - This submission uses URLSearchParams (application/x-www-form-urlencoded) to avoid CORS preflight.
 */
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbybOGymieH9mn_MRZUsVo2456PfSe02--WkHNmrZ59RXuzgLQCURWfyqfaUJPTaCy3C/exec";

export default function ApplyNow() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    loanAmount: "",
    purpose: "",
    gender: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    maritalStatus: "",
    numberOfDependants: "",
    country: "",
    townCity: "",
    street: "",
    houseNameNumber: "",
    homeownerStatus: "",
    timeAtAddress: "",
    employmentStatus: "",
    employmentIndustry: "",
    employerName: "",
    workPhoneNumber: "",
    lengthOfEmployment: "",
    monthlyIncome: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedForm = localStorage.getItem("loanApplication");
    if (savedForm) {
      try {
        setForm(JSON.parse(savedForm));
      } catch (err) {
        console.warn("Could not parse saved form:", err);
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("loanApplication", JSON.stringify(form));
  }, [form]);

  // Handle scroll for sticky button
  useEffect(() => {
    const handleScroll = () => setShowStickyButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? format(date, "MM-dd-yyyy") : "";
    setForm((prev) => ({ ...prev, dateOfBirth: formattedDate }));
  };

  // Submit: send as application/x-www-form-urlencoded to avoid preflight CORS
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const params = new URLSearchParams();
      Object.entries(form).forEach(([k, v]) => params.append(k, v ?? ""));

      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: params,
      });

      // Try to parse JSON; fallback to text for clearer errors
      let data;
      try {
        data = await res.json();
      } catch (parseErr) {
        const txt = await res.text();
        throw new Error(`Invalid JSON response: ${txt}`);
      }

      if (!res.ok) {
        throw new Error(data?.message || `Status ${res.status}`);
      }

      if (data.result === "success") {
        toast.success("Application submitted successfully!");
        localStorage.removeItem("loanApplication");
        setForm({
          loanAmount: "",
          purpose: "",
          gender: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          maritalStatus: "",
          numberOfDependants: "",
          country: "",
          townCity: "",
          street: "",
          houseNameNumber: "",
          homeownerStatus: "",
          timeAtAddress: "",
          employmentStatus: "",
          employmentIndustry: "",
          employerName: "",
          workPhoneNumber: "",
          lengthOfEmployment: "",
          monthlyIncome: "",
        });
        // small delay to show toast then navigate home
        setTimeout(() => navigate("/"), 1200);
      } else {
        throw new Error(data.message || "Unknown response from server");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(`Failed to submit application: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative min-h-screen bg-gradient-to-r from-navy-blue to-blue-900 flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center gradient-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Apply for Your <span className="text-lime-green">Loan Today</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Fast, easy, and secure payday loans up to{" "}
              <span className="text-lime-green font-bold">$5,000</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Single Page Application Form */}
      <section className="py-16 bg-soft-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Complete Your Application</h2>
              <p className="subtitle">Fill out the form below to get started</p>
            </div>

            <div className="card">
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <h3 className="text-xl font-semibold text-navy-blue mb-6">
                  Loan & Personal Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Loan Amount ($) *
                    </label>
                    <input
                      type="number"
                      name="loanAmount"
                      value={form.loanAmount}
                      onChange={handleChange}
                      min="0"
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter amount"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Purpose of Loan *
                    </label>
                    <select
                      name="purpose"
                      value={form.purpose}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                    >
                      <option value="">Select purpose</option>
                      <option value="personal">Personal Loan</option>
                      <option value="business">Payday Loan</option>
                      <option value="medical">Mortgage Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="education">Education Loan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Date of Birth *
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="MM-dd-yyyy"
                      placeholderText="mm-dd-yyyy"
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Marital Status *
                    </label>
                    <select
                      name="maritalStatus"
                      value={form.maritalStatus}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                    >
                      <option value="">Select marital status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Number of Dependants
                    </label>
                    <select
                      name="numberOfDependants"
                      value={form.numberOfDependants}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                    >
                      <option value="">Select number</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-navy-blue mb-6 mt-8">
                  Address Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter your country"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Town/City *
                    </label>
                    <input
                      type="text"
                      name="townCity"
                      value={form.townCity}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter your town/city"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Street *
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={form.street}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter your street"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      House Name/Number *
                    </label>
                    <input
                      type="text"
                      name="houseNameNumber"
                      value={form.houseNameNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter house name/number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Homeowner Status *
                    </label>
                    <select
                      name="homeownerStatus"
                      value={form.homeownerStatus}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                    >
                      <option value="">Select homeowner status</option>
                      <option value="owner">Owner</option>
                      <option value="renter">Tanent</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Time at Address *
                    </label>
                    <select
                      name="timeAtAddress"
                      value={form.timeAtAddress}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                    >
                      <option value="">Select time at address</option>
                      <option value="less-than-1-year">Less than 1 year</option>
                      <option value="1-2-years">1-2 years</option>
                      <option value="2-5-years">2-5 years</option>
                      <option value="more-than-5-years">
                        More than 5 years
                      </option>
                    </select>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-navy-blue mb-6 mt-8">
                  Employment Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Employment Status *
                    </label>
                    <select
                      name="employmentStatus"
                      value={form.employmentStatus}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                    >
                      <option value="">Select employment status</option>
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="student">Student</option>
                      <option value="retired">Retired</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Employment Industry
                    </label>
                    <input
                      type="text"
                      name="employmentIndustry"
                      value={form.employmentIndustry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter employment industry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Employer Name
                    </label>
                    <input
                      type="text"
                      name="employerName"
                      value={form.employerName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter employer name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Work Phone Number
                    </label>
                    <input
                      type="tel"
                      name="workPhoneNumber"
                      value={form.workPhoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter work phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Length of Employment
                    </label>
                    <select
                      name="lengthOfEmployment"
                      value={form.lengthOfEmployment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                    >
                      <option value="">Select length of employment</option>
                      <option value="less-than-1-year">Less than 1 year</option>
                      <option value="1-2-years">1-2 years</option>
                      <option value="2-5-years">2-5 years</option>
                      <option value="more-than-5-years">
                        More than 5 years
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-blue mb-2">
                      Monthly Income ($) *
                    </label>
                    <input
                      type="number"
                      name="monthlyIncome"
                      value={form.monthlyIncome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-green focus:border-lime-green transition-colors"
                      placeholder="Enter monthly income"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-navy-blue mb-4">
                    Application Summary
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Loan Amount:</strong> ${form.loanAmount}
                    </div>
                    <div>
                      <strong>Purpose:</strong> {form.purpose}
                    </div>
                    <div>
                      <strong>Name:</strong> {form.firstName} {form.lastName}
                    </div>
                    <div>
                      <strong>Email:</strong> {form.email}
                    </div>
                    <div>
                      <strong>Phone:</strong> {form.phone}
                    </div>
                    <div>
                      <strong>Employment:</strong> {form.employmentStatus}
                    </div>
                    <div>
                      <strong>Monthly Income:</strong> ${form.monthlyIncome}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 ${isSubmitting ? "bg-gray-300 text-gray-700" : "bg-lime-green text-white hover:bg-green-600"} rounded-lg font-semibold transition-colors`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </motion.form>

              <div className="mt-8 p-6 bg-soft-gray rounded-lg">
                <h3 className="font-semibold text-navy-blue mb-4">
                  Important Information:
                </h3>
                <ul className="text-sm text-text-gray space-y-2">
                  <li>• You must be 18+ years old to apply</li>
                  <li>• Valid ID and proof of income required</li>
                  <li>• Applications are processed within 15 minutes</li>
                  <li>• Funds are deposited directly to your bank account</li>
                  <li>• Your information is secure and encrypted</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky Apply Button */}
      {showStickyButton && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-lime-green text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors font-semibold flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Apply Now</span>
          </button>
        </motion.div>
      )}
    </div>
  );
}
