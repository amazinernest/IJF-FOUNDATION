import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { PROGRAMS } from '../../data/foundationData';
import { ProgramCard } from '../programs/ProgramCard';

export const ProgramGrid: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-coral-600 bg-coral-50 px-3.5 py-1.5 rounded-full border border-coral-200">
              <Layers className="w-3.5 h-3.5" />
              <span>OUR STRATEGIC PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Initiatives That Drive Real Change
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Targeted development programs designed to address critical social and economic challenges facing young people in Nigeria.
            </p>
          </div>

          <Link
            to="/programs"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-navy-800 text-navy-900 hover:bg-navy-900 hover:text-white font-bold text-sm transition-all group flex-shrink-0"
          >
            <span>View All 6 Programs</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

      </div>
    </section>
  );
};
