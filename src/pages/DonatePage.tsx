import React, { useState, useEffect } from 'react';
import { Heart, CheckCircle2, ShieldCheck, CreditCard, Lock, Sparkles, MessageCircle } from 'lucide-react';

export const DonatePage: React.FC = () => {
  const [amount, setAmount] = useState<number | 'custom'>(25000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [donorInfo, setDonorInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    anonymous: false
  });
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Donate | Isaac Joseph-Fagbemi Foundation";
  }, []);

  const presets = [5000, 10000, 25000, 50000, 100000];

  const getFinalAmount = () => {
    if (amount === 'custom') {
      return parseInt(customAmount, 10) || 0;
    }
    return amount;
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalVal = getFinalAmount();
    if (finalVal <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    setProcessing(true);

    // Simulate Paystack public gateway popup trigger or server side redirect
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <main className="bg-linen-100">
      
      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-coral-500/20 border border-coral-500/30 text-coral-400 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-4 h-4 mr-1.5 fill-current text-coral-500" />
            SUPPORT OUR CAUSE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Your Support Can Create Opportunity
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Every contribution helps us create pathways for young people to learn, lead, build skills, and strengthen their communities.
          </p>
        </div>
      </section>

      {/* Main Donation Experience */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xl space-y-10">
            
            {success ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-extrabold text-navy-900">Thank You For Your Support!</h2>
                <p className="text-slate-600 text-lg max-w-md mx-auto">
                  Your generous donation of <span className="font-bold text-navy-900">₦{getFinalAmount().toLocaleString()}</span> ({frequency}) will directly fund our student scholarships and youth leadership workshops.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setDonorInfo({ fullName: '', email: '', phone: '', anonymous: false });
                    }}
                    className="px-8 py-3.5 rounded-2xl bg-navy-800 text-white font-bold text-sm hover:bg-navy-900 transition-colors"
                  >
                    Make Another Donation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit} className="space-y-8">
                
                {/* Frequency Selector */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider">
                    Donation Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFrequency('one-time')}
                      className={`py-3.5 px-6 rounded-2xl font-bold text-sm transition-all border ${
                        frequency === 'one-time'
                          ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                          : 'bg-linen-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      Give One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency('monthly')}
                      className={`py-3.5 px-6 rounded-2xl font-bold text-sm transition-all border ${
                        frequency === 'monthly'
                          ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                          : 'bg-linen-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      Give Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selector */}
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider">
                    Select Amount (NGN ₦)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {presets.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => {
                          setAmount(val);
                          setCustomAmount('');
                        }}
                        className={`py-4 px-4 rounded-2xl font-black text-lg transition-all border ${
                          amount === val
                            ? 'bg-coral-500 text-white border-coral-500 shadow-lg scale-105'
                            : 'bg-white text-navy-900 border-slate-300 hover:border-coral-500'
                        }`}
                      >
                        ₦{val.toLocaleString()}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setAmount('custom')}
                      className={`py-4 px-4 rounded-2xl font-bold text-sm transition-all border ${
                        amount === 'custom'
                          ? 'bg-coral-500 text-white border-coral-500 shadow-lg scale-105'
                          : 'bg-white text-navy-900 border-slate-300 hover:border-coral-500'
                      }`}
                    >
                      Custom Amount
                    </button>
                  </div>

                  {amount === 'custom' && (
                    <div className="pt-2">
                      <input
                        type="number"
                        min="500"
                        placeholder="Enter custom amount in Naira (e.g. 150000)"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl border-2 border-coral-500 text-lg font-bold text-navy-900 focus:outline-none bg-linen-50"
                        required
                      />
                    </div>
                  )}
                </div>

                {/* Donor Details */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-navy-900">Your Information</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Isaac Fagbemi"
                        value={donorInfo.fullName}
                        onChange={(e) => setDonorInfo({ ...donorInfo, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-coral-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. donor@example.com"
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-coral-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +234 816 000 0000"
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-coral-500"
                    />
                  </div>
                </div>

                {/* Secure Gateway Badge & Buttons */}
                <div className="pt-6 space-y-4">
                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-extrabold text-lg shadow-xl hover:shadow-glow transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                  >
                    {processing ? (
                      <span>Initializing Secure Checkout...</span>
                    ) : (
                      <>
                        <Heart className="w-5 h-5 fill-current" />
                        <span>Donate ₦{getFinalAmount().toLocaleString()} Now</span>
                      </>
                    )}
                  </button>

                  <a
                    href="https://wa.me/2348117114735?text=Hello%20IJF%20Foundation%2C%20I%20would%20like%20to%20make%20a%20donation%20or%20transfer%20support."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Donate via WhatsApp Chat (+234 811 711 4735)</span>
                  </a>

                  <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 pt-2">
                    <Lock className="w-3.5 h-3.5 text-emerald-500" />
                    <span>256-Bit SSL Encrypted & Direct WhatsApp Donation Support</span>
                  </div>
                </div>

              </form>
            )}

          </div>

          {/* Allocation Info Box */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="block text-xl font-bold text-navy-900 mb-1">Education</span>
              <span className="text-xs text-slate-500">Scholarships & Student Bursaries</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="block text-xl font-bold text-navy-900 mb-1">Leadership</span>
              <span className="text-xs text-slate-500">Mentorship & Civic Bootcamps</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="block text-xl font-bold text-navy-900 mb-1">Digital Skills</span>
              <span className="text-xs text-slate-500">Tech Bootcamps & Tools</span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};
