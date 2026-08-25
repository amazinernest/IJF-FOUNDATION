import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, ArrowRight, Heart } from 'lucide-react';

export const PartnerCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-navy-800 to-navy-950 p-8 sm:p-12 lg:p-16 rounded-3xl border border-navy-700/80 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-coral-500/10 border border-coral-500/30 text-coral-400 text-xs font-bold uppercase tracking-wider">
                <Handshake className="w-4 h-4" />
                <span>COLLABORATE FOR CHANGE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Let's Create Greater Impact Together
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Whether you're an educational institution, non-profit, donor, corporate organization, or community leader, there are meaningful ways to partner with IJF Foundation.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                to="/partners"
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-base shadow-lg hover:shadow-glow transition-all text-center group"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-navy-800 hover:bg-navy-700 border border-navy-600 text-white font-bold text-base transition-all text-center"
              >
                Contact the Foundation
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
