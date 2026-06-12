import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Eye, Brain, Cpu, Database, Activity } from 'lucide-react';

const roles = [
  'AI Engineer',
  'Computer Vision Engineer',
  'Generative AI Engineer',
  'LLM Engineer',
  'MLOps Engineer'
];

const stats = [
  { label: 'Experience', value: '2+ Years', icon: Cpu, color: 'text-neon-cyan' },
  { label: 'Production Systems', value: '4+', icon: Activity, color: 'text-neon-blue' },
  { label: 'Model Accuracy', value: '90%+ mAP', icon: Eye, color: 'text-neon-indigo' },
  { label: 'Inference Speed', value: '25+ FPS', icon: Terminal, color: 'text-neon-violet' },
  { label: 'Docs Processed', value: '1000+', icon: Database, color: 'text-neon-pink' },
  { label: 'Inference Optimization', value: '12×', icon: Brain, color: 'text-neon-cyan' },
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden z-10">
      
      {/* Radiant glow overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-indigo/10 rounded-full glow-glow" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-neon-cyan/80 rounded-full glow-glow" />
      
      <div className="w-full max-w-5xl text-center flex flex-col items-center">
        
        {/* Terminal/AI greeting badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-dark-border bg-dark-surface/40 backdrop-blur-md mb-8 text-xs font-mono text-slate-300"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>system_status: online</span>
          <span className="text-slate-500">|</span>
          <span className="text-neon-cyan">v2.4.0-prod</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-white mb-4"
        >
          Sugandhar K
        </motion.h1>

        {/* Rotating Role animation */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-2xl md:text-4xl font-display font-semibold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-indigo bg-clip-text text-transparent"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl font-sans font-medium text-slate-200 max-w-3xl leading-relaxed mb-6"
        >
          Building Production-Ready AI Systems That Solve Real-World Problems
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed mb-10 font-light"
        >
          AI Engineer with 2+ years of experience developing Computer Vision, Large Language Model, and Generative AI solutions. Specialized in deploying scalable AI systems including YOLO-based safety monitoring, ANPR vehicle tracking, enterprise RAG assistants, and LLM fine-tuning pipelines.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 z-20"
        >
          <a
            href="/Sugandhar_AI_ML.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Download className="w-5 h-5" />
            <span>View Resume / CV</span>
          </a>
          
          <button
            onClick={() => handleScroll('projects')}
            className="btn-secondary"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 text-neon-cyan" />
          </button>
          
          <button
            onClick={() => handleScroll('contact')}
            className="btn-secondary"
          >
            <Mail className="w-4 h-4 text-neon-violet" />
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="backdrop-blur-md bg-dark-card/45 border border-dark-border/50 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-neon-indigo/30 hover:bg-dark-card/75"
              >
                <Icon className={`w-5 h-5 mb-2 ${stat.color}`} />
                <span className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 mt-1 font-light">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
