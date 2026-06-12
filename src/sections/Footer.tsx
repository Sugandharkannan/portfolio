import React from 'react';
import { LinkedinIcon, GithubIcon } from '../components/UI/BrandIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 border-t border-dark-border/60 bg-dark-bg/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo/Copyright */}
        <div className="text-center md:text-left">
          <span className="font-display font-bold text-white text-lg tracking-tight flex items-center justify-center md:justify-start gap-1">
            Sugandhar<span className="text-neon-cyan">.ai</span>
          </span>
          <p className="text-xs text-slate-500 mt-2 font-light">
            &copy; {currentYear} Sugandhar K. All rights reserved.
          </p>
        </div>

        {/* Short navigation links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-slate-400">
          <button onClick={() => handleScroll('about')} className="hover:text-neon-cyan transition-colors">
            ABOUT
          </button>
          <button onClick={() => handleScroll('skills')} className="hover:text-neon-cyan transition-colors">
            SKILLS
          </button>
          <button onClick={() => handleScroll('experience')} className="hover:text-neon-cyan transition-colors">
            EXPERIENCE
          </button>
          <button onClick={() => handleScroll('projects')} className="hover:text-neon-cyan transition-colors">
            PROJECTS
          </button>
          <button onClick={() => handleScroll('analytics')} className="hover:text-neon-cyan transition-colors">
            TELEMETRY
          </button>
        </div>

        {/* Bottom stats signature */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-3 text-slate-400">
            <a href="https://linkedin.com/in/sugandhark" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="https://github.com/Sugandharkannan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
          <span className="text-[9px] font-mono text-slate-600 tracking-wider">
            VITE_PORTFOLIO_BUILD: SUCCESS (PROD-v2.4)
          </span>
        </div>

      </div>
    </footer>
  );
};
