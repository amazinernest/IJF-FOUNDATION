import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, BookOpen, Laptop, TrendingUp, Heart, FileText } from 'lucide-react';
import { Program } from '../../types';

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-500 flex flex-col group h-full transform hover:-translate-y-1.5">
      
      {/* Program Image Header */}
      <div className="relative h-56 overflow-hidden bg-navy-900">
        <img
          src={program.image}
          alt={program.imageAlt}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
        
        {/* Number Badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/50 text-navy-900 font-extrabold text-sm shadow-sm flex items-center space-x-1.5">
          <span className="text-coral-500 font-bold">{program.number}</span>
          <span className="text-slate-300">|</span>
          <span className="text-xs uppercase text-slate-600 font-medium">PILLAR</span>
        </div>

        {/* Icon Floating Badge */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-coral-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          {getIcon(program.iconName)}
        </div>
      </div>

      {/* Program Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-navy-900 group-hover:text-coral-500 transition-colors leading-snug">
            {program.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {program.tagline}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/programs/${program.slug}`}
            className="inline-flex items-center text-sm font-bold text-navy-900 group-hover:text-coral-500 transition-colors"
          >
            <span>Learn More</span>
            <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <span className="text-xs text-slate-400 font-medium">IJF Initiative</span>
        </div>
      </div>

    </div>
  );
};
