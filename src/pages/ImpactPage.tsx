import React, { useEffect } from 'react';
import { ImpactStats } from '../components/home/ImpactStats';
import { PartnerCTA } from '../components/home/PartnerCTA';
import { ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const ImpactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Impact | Isaac Joseph-Fagbemi Foundation";
  }, []);

  const impactStories = [
    {
      title: "Youth Civic Leadership Assemblies",
      category: "Leadership Pillar",
      image: "/images/youth-emp-4.jpg",
      description: "Equipping young leaders across communities with ethical guidance, conflict resolution techniques, and democratic participation tools."
    },
    {
      title: "Vocational & Digital Skills Acquisition",
      category: "Technology & Skills Pillar",
      image: "/images/youth-acq-1.jpg",
      description: "Hands-on technical workshops providing immediate market-ready skills to young entrepreneurs and high school graduates."
    },
    {
      title: "Academic Bursaries & Mentorship Outreach",
      category: "Education Pillar",
      image: "/images/edu-9.jpg",
      description: "Providing study materials, tutoring, and financial micro-bursaries to students in underserved secondary institutions."
    },
    {
      title: "Community Sports & Youth Engagement",
      category: "Community Wellbeing Pillar",
      image: "/images/sport-1.jpg",
      description: "Fostering teamwork, discipline, and healthy social connections through grassroots sports tournaments."
    }
  ];

  return (
    <main className="bg-linen-100">
      
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-coral-500/10 border border-coral-500/30 text-coral-400 text-xs font-bold uppercase tracking-wider">
              MEASURABLE RESULTS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Measuring What Matters
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-normal">
              The Isaac Joseph-Fagbemi Foundation is committed to creating measurable, verifiable, and sustainable impact in communities through targeted programs and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Stats Section */}
      <ImpactStats />

      {/* Impact Storytelling Photography Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-coral-600 bg-coral-50 px-3.5 py-1.5 rounded-full border border-coral-200">
              REAL COMMUNITY OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Our Footprint Across Communities
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Visual records of our grassroots outreach programs, education mentorship circles, and youth leadership workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactStories.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden bg-navy-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-navy-900/90 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <h3 className="text-2xl font-bold text-navy-900 group-hover:text-coral-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-3 flex items-center text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 mr-1.5" />
                    Verified Community Outreach Activity
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Transparency & Governance Banner */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-coral-50 text-coral-500 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
            Accountability & Impact Integrity
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            Every donation and partner contribution to the IJF Foundation is directly allocated towards verified program costs, student learning materials, and community workshop execution.
          </p>
        </div>
      </section>

      <PartnerCTA />
    </main>
  );
};
