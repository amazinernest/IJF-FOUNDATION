import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { FOUNDATION_INFO } from '../../data/foundationData';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-linen-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Copy on Left, Image & Vision/Mission on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Foundation Story */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-coral-600 bg-coral-50 px-3.5 py-1.5 rounded-full border border-coral-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT THE FOUNDATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              Investing in People. <br />
              <span className="text-gradient-accent">Building Futures.</span>
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed font-normal">
              {FOUNDATION_INFO.aboutFull}
            </p>

            {/* Key Pillars Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-coral-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-navy-900 text-base">Human-Centered Investment</h3>
                  <p className="text-sm text-slate-600">Empowering individuals as the primary engine for sustainable community development.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-coral-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-navy-900 text-base">Targeted Grassroots Initiatives</h3>
                  <p className="text-sm text-slate-600">Co-designing initiatives alongside community members to ensure lasting local ownership.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-900 text-white font-bold text-sm shadow-md transition-all group"
              >
                <span>Learn More About IJF Foundation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Right Column: Visual Image Frame & Vision/Mission Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Authentic Original Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/youth-empo-1.jpg"
                alt="IJF Foundation youth community gathering"
                className="w-full h-[340px] sm:h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card text-white">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Foundation Story</p>
                <p className="text-sm font-semibold text-navy-900">
                  Expanding opportunities for young people to reach their full potential.
                </p>
              </div>
            </div>

            {/* Vision & Mission Split Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Vision Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Our Vision</h3>
                <p className="text-sm font-bold text-navy-900 mt-1 leading-snug">
                  "{FOUNDATION_INFO.vision}"
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Our Mission</h3>
                <p className="text-sm font-bold text-navy-900 mt-1 leading-snug">
                  "{FOUNDATION_INFO.mission}"
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
