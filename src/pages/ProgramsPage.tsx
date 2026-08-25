import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../data/foundationData';
import { ProgramCard } from '../components/programs/ProgramCard';
import { PartnerCTA } from '../components/home/PartnerCTA';

export const ProgramsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Programs | Isaac Joseph-Fagbemi Foundation";
  }, []);

  return (
    <main className="bg-linen-100">
      
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-coral-500/10 border border-coral-500/30 text-coral-400 text-xs font-bold uppercase tracking-wider">
              WHAT WE DO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Our Strategic Programs
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-normal">
              Strategic programs designed to address critical social and economic challenges affecting youth and underserved communities across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-coral-600 bg-coral-50 px-3.5 py-1.5 rounded-full border border-coral-200">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE INITIATIVES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Initiatives That Drive Real Change
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Select any program below to explore its specific objectives, target beneficiaries, and community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

        </div>
      </section>

      <PartnerCTA />
    </main>
  );
};
