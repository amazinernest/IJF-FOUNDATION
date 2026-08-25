import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';
import { FOUNDATION_INFO, PROGRAMS } from '../../data/foundationData';
import { IJFLogo } from './IJFLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-6">
            <IJFLogo variant="light" size="lg" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering young people, strengthening communities, and creating lasting impact through education, leadership development, digital skills, and grassroots initiatives.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={FOUNDATION_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-coral-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={FOUNDATION_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-coral-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={FOUNDATION_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-coral-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Quick Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 text-coral-500" />
                  About Foundation
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-amber-400 transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 text-coral-500" />
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-amber-400 transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 text-coral-500" />
                  Impact & Outcomes
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-amber-400 transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 text-coral-500" />
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-amber-400 transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 text-coral-500" />
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-amber-400 transition-colors inline-flex items-center font-semibold text-coral-400">
                  <Heart className="w-3 h-3 mr-2 text-coral-500 fill-current" />
                  Donate & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Programs */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Program Pillars</h3>
            <ul className="space-y-2.5 text-sm">
              {PROGRAMS.map((program) => (
                <li key={program.id}>
                  <Link
                    to={`/programs/${program.slug}`}
                    className="hover:text-amber-400 transition-colors line-clamp-1 text-slate-400"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <a href={`tel:${FOUNDATION_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {FOUNDATION_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <a href={`mailto:${FOUNDATION_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {FOUNDATION_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <span>{FOUNDATION_INFO.contact.location}</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/donate"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Support Our Programs
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Isaac Joseph-Fagbemi Foundation. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link to="/contact" className="hover:text-slate-400">Privacy & Terms</Link>
            <Link to="/contact" className="hover:text-slate-400">Contact Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
