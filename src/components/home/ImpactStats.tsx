import React from 'react';
import { CheckCircle2, TrendingUp, Users, BookOpen, Laptop, Globe } from 'lucide-react';
import { IMPACT_STATS } from '../../data/foundationData';

export const ImpactStats: React.FC = () => {
  const getStatIcon = (id: string) => {
    switch (id) {
      case 'youth-reached':
        return <Users className="w-6 h-6 text-coral-500" />;
      case 'students-supported':
        return <BookOpen className="w-6 h-6 text-amber-500" />;
      case 'digitally-trained':
        return <Laptop className="w-6 h-6 text-sky-500" />;
      default:
        return <Globe className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-coral-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-800 border border-navy-700 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>MEASURABLE OUTCOMES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Growing Impact Across Communities
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Through strategic partnerships and grassroots initiatives, we are creating verifiable opportunities for youth to thrive.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {IMPACT_STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-navy-800/80 backdrop-blur-md p-8 rounded-3xl border border-navy-700/80 hover:border-coral-500/50 transition-all duration-300 transform hover:-translate-y-1 group shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-navy-900 border border-navy-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getStatIcon(stat.id)}
                </div>
                {stat.verified && (
                  <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Verified Data
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {stat.number}
                  </span>
                  <span className="text-3xl font-extrabold text-coral-500">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-100">{stat.label}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
