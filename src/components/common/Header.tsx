import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone } from 'lucide-react';
import { FOUNDATION_INFO } from '../../data/foundationData';
import { IJFLogo } from './IJFLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or when pressing Escape key
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Impact', path: '/impact' },
    { name: 'Live Dashboard', path: '/dashboard', isLive: true },
    { name: 'Partners', path: '/partners' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Announcement / Utility Bar */}
      <div className="bg-navy-900 text-slate-300 text-xs py-2 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
              Official Non-Profit Foundation Website
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">Empowering Youth & Strengthening Communities</span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${FOUNDATION_INFO.contact.phone.replace(/\s+/g, '')}`} 
              className="inline-flex items-center hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              {FOUNDATION_INFO.contact.phone}
            </a>
            <Link to="/contact" className="hover:text-amber-400 transition-colors hidden sm:inline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-header py-3 shadow-md'
            : 'bg-linen-100/95 backdrop-blur-md py-4 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Clean Transparent Logo */}
            <IJFLogo variant="dark" size="md" />

            {/* Desktop Navigation Links (visible on lg screens) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                      active
                        ? 'text-coral-500 bg-coral-50/90 shadow-sm font-bold'
                        : 'text-navy-900 hover:text-coral-500 hover:bg-slate-100/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Header Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-semibold text-navy-900 hover:text-coral-500 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-coral-500 hover:bg-coral-600 text-white text-sm font-bold shadow-md hover:shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Heart className="w-4 h-4 mr-2 fill-current" />
                Donate Now
              </Link>
            </div>

            {/* Mobile / Tablet Hamburger Toggle */}
            <div className="flex items-center lg:hidden space-x-3">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center px-3.5 py-2 rounded-xl bg-coral-500 text-white text-xs font-bold shadow-sm"
              >
                Donate
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-navy-900 hover:bg-slate-100 hover:text-coral-500 transition-all shadow-sm flex items-center justify-center"
                aria-expanded={mobileMenuOpen}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* High-Contrast Mobile / Tablet Menu Modal Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end sm:justify-start">
          
          {/* Dimmed Blurred Backdrop */}
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Card Content Drawer */}
          <div className="relative z-50 bg-white border-b border-slate-200 shadow-2xl w-full max-h-[90vh] overflow-y-auto rounded-b-3xl p-6 sm:p-8 space-y-6 animate-slideDown">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <IJFLogo variant="dark" size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-coral-50 hover:text-coral-600 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Nav Links */}
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3.5 rounded-2xl text-base font-bold transition-all flex items-center justify-between ${
                      active
                        ? 'text-coral-500 bg-coral-50 border-l-4 border-coral-500 shadow-sm'
                        : 'text-navy-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-slate-400 font-normal">→</span>
                  </Link>
                );
              })}
            </nav>

            {/* Drawer CTA Action Buttons */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-extrabold text-base shadow-lg transition-all"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Donate Now
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-3.5 rounded-2xl border-2 border-navy-800 text-navy-900 hover:bg-navy-900 hover:text-white font-bold text-sm transition-all"
              >
                Contact Foundation
              </Link>
            </div>

            {/* Drawer Footer Contact Note */}
            <div className="pt-2 text-center text-xs text-slate-500">
              <span>Need help? Email us at </span>
              <a href={`mailto:${FOUNDATION_INFO.contact.email}`} className="text-coral-600 font-bold">
                {FOUNDATION_INFO.contact.email}
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
