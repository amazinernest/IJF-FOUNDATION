import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, ShieldCheck, Users, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-linen-100">
      {/* Subtle decorative background gradient accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Non-Profit Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-navy-900/5 border border-navy-900/10 text-navy-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-coral-500 animate-ping"></span>
              <ShieldCheck className="w-4 h-4 text-coral-500 mr-1" />
              <span>NONPROFIT ORGANISATION</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600 font-normal">NIGERIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.1]">
              Empowering Young People.{' '}
              <span className="block text-gradient-accent mt-1 sm:mt-2">
                Building Stronger Communities.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl font-normal">
              Creating opportunities for young people to learn, lead, build livelihoods, and contribute to thriving, sustainable communities across Nigeria.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-base shadow-xl hover:shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Heart className="w-5 h-5 mr-2.5 fill-current" />
                Donate Now
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl border-2 border-navy-800 text-navy-900 hover:bg-navy-900 hover:text-white font-bold text-base transition-all text-center group"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-coral-500 font-bold border border-slate-100">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base sm:text-lg font-bold text-navy-900">Youth First</span>
                  <span className="text-xs text-slate-500">Grassroots Focus</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-amber-500 font-bold border border-slate-100">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base sm:text-lg font-bold text-navy-900">5+ Years</span>
                  <span className="text-xs text-slate-500">Active Impact</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-500 font-bold border border-slate-100">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base sm:text-lg font-bold text-navy-900">Verified</span>
                  <span className="text-xs text-slate-500">Accountability</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Original Primary Hero Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/images/sport-13.jpg"
                  alt="IJF Foundation youth participating in sports and leadership activity"
                  className="w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-80" />
                
                {/* Floating Image Label Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-card text-navy-900">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-coral-500 animate-ping"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Active Youth Program</span>
                  </div>
                  <p className="text-sm font-bold text-navy-900 mt-1">
                    Leadership & Civic Empowerment in Action
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Empowering Nigerian youth through sports, education & mentorship.
                  </p>
                </div>
              </div>

              {/* Secondary Floating Accent Card */}
              <div className="hidden sm:flex absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 items-center space-x-3 z-20">
                <div className="w-12 h-12 rounded-xl bg-coral-50 flex items-center justify-center text-coral-500">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase">Impact Goal</span>
                  <span className="text-sm font-extrabold text-navy-900">Community First</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
