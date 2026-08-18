"use client";

import React, { useState } from "react";

interface DonationFormProps {
  defaultCause?: string;
}

const PRESET_AMOUNTS = [10, 25, 50, 100, 250, 500];

export const DonationForm: React.FC<DonationFormProps> = ({ defaultCause }) => {
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "bank">("card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    cause: defaultCause || "general",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    if (val && !isNaN(Number(val))) {
      setAmount(Number(val));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-12 bg-white rounded-3xl shadow-xl text-center border border-gray-100 max-w-xl mx-auto">
        <div className="w-20 h-20 bg-red-100 text-[#F00101] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
          <i className="fa-solid fa-heart"></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Your Generosity!</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Your <span className="font-bold text-[#002A8C]">${amount}</span> {frequency} donation to Amrai Agami will bring immediate hope, shelter, and education to vulnerable communities.
        </p>
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-left text-xs space-y-1.5 mb-6">
          <p className="text-gray-500">Transaction ID: <span className="font-mono font-bold text-gray-800">AA-{Math.floor(100000 + Math.random() * 900000)}</span></p>
          <p className="text-gray-500">Donor Name: <span className="font-bold text-gray-800">{formData.firstName} {formData.lastName}</span></p>
          <p className="text-gray-500">Email: <span className="font-bold text-gray-800">{formData.email}</span></p>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-[#002A8C] hover:bg-[#001a57] text-white font-bold text-xs rounded-xl shadow transition"
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-10 bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-2xl mx-auto">
      <h3 className="text-2xl font-extrabold text-[#002A8C] mb-6 text-center">Make an Impact Today</h3>

      {/* Frequency Toggle */}
      <div className="flex bg-blue-50 p-1.5 rounded-2xl mb-8 border border-blue-100">
        <button
          type="button"
          onClick={() => setFrequency("one-time")}
          className={`flex-1 py-3 text-xs font-bold rounded-xl transition ${
            frequency === "one-time"
              ? "bg-[#002A8C] text-white shadow-md"
              : "text-[#002A8C] hover:text-[#F00101]"
          }`}
        >
          One-Time Donation
        </button>
        <button
          type="button"
          onClick={() => setFrequency("monthly")}
          className={`flex-1 py-3 text-xs font-bold rounded-xl transition ${
            frequency === "monthly"
              ? "bg-[#002A8C] text-white shadow-md"
              : "text-[#002A8C] hover:text-[#F00101]"
          }`}
        >
          Monthly Giving
        </button>
      </div>

      {/* Preset Amounts */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
          Select Donation Amount
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
          {PRESET_AMOUNTS.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => handleAmountClick(val)}
              className={`py-3 rounded-xl text-sm font-extrabold border transition ${
                amount === val && !customAmount
                  ? "bg-[#F00101] text-white border-[#F00101] shadow-md"
                  : "bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-200"
              }`}
            >
              ${val}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
          <input
            type="number"
            min="1"
            placeholder="Or enter custom amount in USD"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className="w-full pl-8 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#002A8C] text-sm font-bold text-gray-800"
          />
        </div>
      </div>

      {/* Payment Method Selector */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
          Payment Method
        </label>
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => setPaymentMethod("card")}
            className={`py-3 px-2 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 transition ${
              paymentMethod === "card"
                ? "bg-blue-50 border-[#002A8C] text-[#002A8C]"
                : "bg-gray-50 border-gray-200 text-gray-600"
            }`}
          >
            <i className="fa-regular fa-credit-card"></i> Credit Card
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod("paypal")}
            className={`py-3 px-2 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 transition ${
              paymentMethod === "paypal"
                ? "bg-blue-50 border-[#002A8C] text-[#002A8C]"
                : "bg-gray-50 border-gray-200 text-gray-600"
            }`}
          >
            <i className="fa-brands fa-paypal"></i> PayPal
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod("bank")}
            className={`py-3 px-2 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 transition ${
              paymentMethod === "bank"
                ? "bg-blue-50 border-[#002A8C] text-[#002A8C]"
                : "bg-gray-50 border-gray-200 text-gray-600"
            }`}
          >
            <i className="fa-solid fa-building-columns"></i> Bank Transfer
          </button>
        </div>
      </div>

      {/* Personal Info */}
      <div className="space-y-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">First Name *</label>
            <input
              type="text"
              required
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#002A8C] text-xs text-gray-800"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Last Name *</label>
            <input
              type="text"
              required
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#002A8C] text-xs text-gray-800"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              required
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#002A8C] text-xs text-gray-800"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#002A8C] text-xs text-gray-800"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 bg-[#F00101] hover:bg-[#d00000] text-white font-extrabold text-sm rounded-2xl shadow-xl transition flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
      >
        <i className="fa-solid fa-lock text-xs"></i>
        <span>Complete Secure Donation of ${amount}</span>
      </button>

      <p className="text-center text-gray-400 text-[11px] mt-4 flex items-center justify-center gap-1.5">
        <i className="fa-solid fa-shield-halved text-[#002A8C]"></i> 256-Bit SSL Encrypted & Tax Deductible
      </p>
    </form>
  );
};
