import React, { useState, useEffect } from 'react';
import { PARTNER_CATEGORIES } from '../data/foundationData';
import { Globe, GraduationCap, Building2, Landmark, Sparkles, Handshake, CheckCircle2, Send } from 'lucide-react';

export const PartnersPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    category: 'Nonprofit Organisations',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Partners | Isaac Joseph-Fagbemi Foundation";
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-coral-500" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-amber-500" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-sky-500" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-indigo-500" />;
      default: return <Sparkles className="w-6 h-6 text-emerald-500" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-linen-100">
      
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-coral-500/10 border border-coral-500/30 text-coral-400 text-xs font-bold uppercase tracking-wider">
              STRATEGIC ALLIANCES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Our Partners & Collaborators
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-normal">
              The Isaac Joseph-Fagbemi Foundation believes that collaboration is essential to achieving sustainable impact. Together, we amplify our reach and transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-coral-600 bg-coral-50 px-3.5 py-1.5 rounded-full border border-coral-200">
              WHO WE PARTNER WITH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Institutional Categories
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              We collaborate with institutions across sectors to design programs that reach more communities and deliver lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNER_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-linen-100 flex items-center justify-center mb-6 border border-slate-200 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{cat.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Partnership Intake Form */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-linen-100 p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-lg space-y-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-coral-500 text-white flex items-center justify-center mx-auto">
                <Handshake className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-navy-900">Partner With IJF Foundation</h2>
              <p className="text-slate-600 text-base">
                If your organization is interested in collaborating on youth programs, research, or CSR initiatives, please fill out the form below.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-900">Partnership Request Received!</h3>
                <p className="text-emerald-700 text-sm">
                  Thank you for reaching out. Our partnership team will review your inquiry and respond within 2–3 business days.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      placeholder="e.g. Acme Global Foundation"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g. Sarah Johnson"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. partner@acme.org"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                      Partner Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent text-sm bg-white"
                    >
                      {PARTNER_CATEGORIES.map((c) => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Proposed Collaboration Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe how your organization would like to partner with IJF Foundation..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent text-sm bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-base shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Partnership Proposal</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>
    </main>
  );
};
