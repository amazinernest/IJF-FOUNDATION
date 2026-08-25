import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, MessageCircle } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/foundationData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Isaac Joseph-Fagbemi Foundation";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="bg-linen-100">
      
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-coral-500/10 border border-coral-500/30 text-coral-400 text-xs font-bold uppercase tracking-wider">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Contact the Foundation
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-normal">
              We welcome partnerships, collaborations, program inquiries, and volunteer engagement. We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Cards Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                <h2 className="text-2xl font-bold text-navy-900 flex items-center">
                  <MessageSquare className="w-5 h-5 text-coral-500 mr-2" />
                  Direct Contact Info
                </h2>

                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-coral-50 text-coral-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Phone</span>
                      <a
                        href={`tel:${FOUNDATION_INFO.contact.phone.replace(/\s+/g, '')}`}
                        className="text-base font-bold text-navy-900 hover:text-coral-500 transition-colors"
                      >
                        {FOUNDATION_INFO.contact.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#25D366] flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp Support & Donations</span>
                      <a
                        href={FOUNDATION_INFO.contact.whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-base font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        {FOUNDATION_INFO.contact.whatsapp}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email</span>
                      <a
                        href={`mailto:${FOUNDATION_INFO.contact.email}`}
                        className="text-base font-bold text-navy-900 hover:text-coral-500 transition-colors"
                      >
                        {FOUNDATION_INFO.contact.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Location</span>
                      <span className="text-base font-bold text-navy-900">{FOUNDATION_INFO.contact.location}</span>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4 pt-4 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Response Time</span>
                      <span className="text-sm font-semibold text-navy-900">
                        {FOUNDATION_INFO.contact.responseTime}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl space-y-6">
                
                <h2 className="text-2xl font-bold text-navy-900">Send Us a Message</h2>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h3 className="text-xl font-bold text-emerald-900">Message Sent Successfully!</h3>
                    <p className="text-emerald-700 text-sm">
                      Thank you for contacting the Isaac Joseph-Fagbemi Foundation. We will review your message and reply within 2–3 business days.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Isaac Fagbemi"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-coral-500 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. isaac@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-coral-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +234 816 000 0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-coral-500 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Subject *
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-coral-500 text-sm"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Partnership Proposal">Partnership Proposal</option>
                          <option value="Program Sponsorship">Program Sponsorship</option>
                          <option value="Student Mentorship">Student Mentorship</option>
                          <option value="Media & Press">Media & Press</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message to the foundation team..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-coral-500 text-sm"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-base shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};
