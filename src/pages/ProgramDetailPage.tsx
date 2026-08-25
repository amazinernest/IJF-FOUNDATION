import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Users, Target, Award, ArrowRight, Heart } from 'lucide-react';
import { PROGRAMS } from '../data/foundationData';

export const ProgramDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const program = PROGRAMS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (program) {
      document.title = `${program.title} | IJF Foundation Program`;
    }
  }, [slug, program]);

  if (!program) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-linen-100">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">Program Not Found</h2>
        <p className="text-slate-600 mb-6">The requested program route does not exist.</p>
        <Link to="/programs" className="px-6 py-3 rounded-xl bg-coral-500 text-white font-bold text-sm">
          Return to All Programs
        </Link>
      </div>
    );
  }

  const relatedPrograms = PROGRAMS.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <main className="bg-linen-100">
      
      {/* Program Hero */}
      <section className="bg-navy-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-6">
            <Link
              to="/programs"
              className="inline-flex items-center text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to All Programs
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-coral-500/20 border border-coral-500/30 text-coral-300 text-xs font-bold uppercase tracking-wider">
                <span>PILLAR {program.number}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {program.title}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                {program.tagline}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/donate"
                  className="px-6 py-3 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm shadow-md inline-flex items-center"
                >
                  <Heart className="w-4 h-4 mr-2 fill-current" />
                  Support This Program
                </Link>
                <Link
                  to="/partners"
                  className="px-6 py-3 rounded-xl border border-slate-600 text-white hover:bg-navy-800 font-bold text-sm"
                >
                  Partner With IJF
                </Link>
              </div>
            </div>

            {/* Original Program Photography */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Program Details Content */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Overview Block */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-navy-900 flex items-center">
                  <Award className="w-6 h-6 text-coral-500 mr-2.5" />
                  Program Overview
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  {program.fullContent.overview}
                </p>
              </div>

              {/* Why It Matters Block */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-navy-900 flex items-center">
                  <Target className="w-6 h-6 text-amber-500 mr-2.5" />
                  Why This Program Matters
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  {program.fullContent.whyItMatters}
                </p>
              </div>

              {/* Key Activities Grid */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                <h2 className="text-2xl font-bold text-navy-900">
                  Key Program Activities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.fullContent.keyActivities.map((act, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-linen-100 border border-slate-200/60">
                      <CheckCircle2 className="w-5 h-5 text-coral-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-semibold text-navy-900 leading-snug">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Outcomes */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                <h2 className="text-2xl font-bold text-navy-900">
                  Expected Impact & Outcomes
                </h2>
                <ul className="space-y-3">
                  {program.fullContent.expectedOutcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-slate-700 text-base">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex items-center justify-center mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Target Beneficiaries Card */}
              <div className="bg-navy-900 text-white p-8 rounded-3xl border border-navy-800 shadow-xl space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-coral-500/20 text-coral-400 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Target Beneficiaries</h3>
                </div>

                <ul className="space-y-3">
                  {program.fullContent.targetBeneficiaries.map((ben, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-500"></span>
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-navy-800">
                  <Link
                    to="/donate"
                    className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm transition-colors text-center"
                  >
                    <Heart className="w-4 h-4 mr-2 fill-current" />
                    Sponsor This Pillar
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* Related Programs Switcher */}
          <div className="mt-20 pt-16 border-t border-slate-200 space-y-8">
            <h2 className="text-2xl font-bold text-navy-900">Explore Other Program Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPrograms.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/programs/${rel.slug}`}
                  className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all group flex items-center space-x-4"
                >
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-coral-500">Pillar {rel.number}</span>
                    <h3 className="text-sm font-bold text-navy-900 group-hover:text-coral-500 transition-colors truncate">
                      {rel.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};
