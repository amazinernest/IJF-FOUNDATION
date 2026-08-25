import React from 'react';
import { Link } from 'react-router-dom';

interface IJFLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const IJFLogo: React.FC<IJFLogoProps> = ({
  variant = 'dark', // 'dark' text for light backgrounds, 'light' text for dark backgrounds
  size = 'md',
  showText = true,
}) => {
  const iconHeight = size === 'sm' ? 'h-9' : size === 'lg' ? 'h-14' : 'h-11 sm:h-12';
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-900';
  const subtitleColor = variant === 'light' ? 'text-amber-400' : 'text-slate-500';

  return (
    <Link to="/" className="inline-flex items-center space-x-3 group" aria-label="Isaac Joseph-Fagbemi Foundation Home">
      {/* Icon Image with clean transparent background */}
      <img
        src="/images/ijf-logo-clean.png"
        alt="IJF Foundation Icon"
        className={`${iconHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm`}
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/images/Isaac-Joseph-Fagbemi-Foundation.png';
        }}
      />

      {showText && (
        <div className="flex flex-col">
          <span className={`${textColor} font-black text-lg sm:text-xl tracking-tight leading-none group-hover:text-coral-500 transition-colors`}>
            IJF FOUNDATION
          </span>
          <span className={`${subtitleColor} text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-0.5`}>
            Isaac Joseph-Fagbemi
          </span>
        </div>
      )}
    </Link>
  );
};
