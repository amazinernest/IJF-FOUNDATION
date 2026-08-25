import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Target, ShieldCheck, Zap, Users, Lightbulb, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FOUNDATION_INFO, CORE_VALUES } from '../data/foundationData';
import { PartnerCTA } from '../components/home/PartnerCTA';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Isaac Joseph-Fagbemi Foundation";
  }, []);

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-coral-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Users': return <Users className="w-6 h-6 text-sky-500" />;
      default: return <Lightbulb className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <main className="bg-linen-100">
      
      {/* Editorial Page Hero */}
      <section className="bg-navy-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-coral-500/10 border border-coral-500/30 text-coral-400 text-xs font-bold uppercase tracking-wider">
              WHO WE ARE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              About the Foundation
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-normal">
              Empowering young people and communities to reach their full potential through targeted programs, strategic partnerships, and grassroots engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-coral-600 bg-coral-50 px-3.5 py-1.5 rounded-full border border-coral-200">
                OUR FOUNDING STORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Empowering Growth Through Opportunity
              </h2>
              
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  {FOUNDATION_INFO.aboutFull}
                </p>
                <p>
                  We believe that young people are not passive recipients of aid, but active architects of society. By equipping them with education access, ethical leadership skills, and technology training, we unleash self-sustaining economic growth.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-500 flex items-center justify-center font-bold">
                    5+
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-navy-900">Years of Impact</span>
                    <span className="text-xs text-slate-500">Across Communities</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold">
                    100%
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-navy-900">Dedicated Mission</span>
                    <span className="text-xs text-slate-500">Youth-Centric Focus</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Original Asset Photography Showcase */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/youth-empo-1.jpg"
                  alt="IJF Foundation youth community gathering"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 glass-card text-navy-900 rounded-2xl">
                  <span className="text-xs font-bold text-coral-600 uppercase tracking-wider">Grassroots Focus</span>
                  <p className="text-sm font-bold text-navy-900 mt-1">
                    Direct community engagement creating measurable, lasting change.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Split Cards */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="bg-linen-100 p-8 sm:p-10 rounded-3xl border border-slate-200/80 relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">OUR VISION</span>
              <h3 className="text-2xl font-bold text-navy-900 mt-2 mb-4">
                A World of Equal Opportunity
              </h3>
              <p className="text-lg font-medium text-slate-700 leading-relaxed italic">
                "{FOUNDATION_INFO.vision}"
              </p>
            </div>

            {/* Mission */}
            <div className="bg-linen-100 p-8 sm:p-10 rounded-3xl border border-slate-200/80 relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-coral-100 text-coral-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">OUR MISSION</span>
              <h3 className="text-2xl font-bold text-navy-900 mt-2 mb-4">
                Empowering Through Action
              </h3>
              <p className="text-lg font-medium text-slate-700 leading-relaxed italic">
                "{FOUNDATION_INFO.mission}"
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-coral-600 bg-coral-50 px-3.5 py-1.5 rounded-full border border-coral-200">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Values That Guide Us
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Our core values form the ethical foundation for every initiative we design and every partnership we cultivate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-linen-100 flex items-center justify-center mb-6 border border-slate-200 group-hover:scale-110 transition-transform">
                  {getValueIcon(val.icon)}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <PartnerCTA />
    </main>
  );
};
