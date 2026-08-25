import React from 'react';
import { Compass } from 'lucide-react';
import { APPROACH_STEPS } from '../../data/foundationData';

export const ApproachSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-linen-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-coral-600 bg-coral-50 px-3.5 py-1.5 rounded-full border border-coral-200">
            <Compass className="w-3.5 h-3.5" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Our Approach to Sustainable Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A structured four-step methodology ensuring community participation, rigorous program design, strategic partnerships, and measurable outcomes.
          </p>
        </div>

        {/* 4 Steps Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {APPROACH_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Connecting line for desktop */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 border-t-2 border-dashed border-slate-300 z-10" />
              )}

              <div className="space-y-6">
                {/* Step Top Bar: Icon + Step Number */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-linen-100 p-2.5 border border-slate-200 group-hover:scale-110 transition-transform">
                    <img
                      src={stepItem.icon}
                      alt={`${stepItem.title} Process Icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-coral-500 transition-colors">
                    {stepItem.step}
                  </span>
                </div>

                {/* Step Image */}
                <div className="h-40 rounded-2xl overflow-hidden relative">
                  <img
                    src={stepItem.image}
                    alt={`IJF ${stepItem.title} stage`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-950/20" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-coral-500 uppercase tracking-wider">
                    Step {stepItem.step}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900">
                    {stepItem.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-navy-800">Methodology Pillar</span>
                <span className="w-2 h-2 rounded-full bg-coral-500"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
