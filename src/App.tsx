import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Terminal, Cpu, Check } from 'lucide-react';
import { NeuralCanvas } from './components/Background/NeuralCanvas';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Analytics } from './sections/Analytics';
import { Certifications } from './sections/Certifications';
import { Blog } from './sections/Blog';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const App: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [bootStep, setBootStep] = useState(0);

  const bootLogs = [
    'Initializing Sugandhar_AI Core Node...',
    'Loading YOLOv8 & TensorRT Inference Engines...',
    'Building vector indexing pipelines...',
    'Handshake established. Welcoming recruiter...'
  ];

  // Boot loader sequence
  useEffect(() => {
    const logInterval = setInterval(() => {
      setBootStep(prev => {
        if (prev < bootLogs.length - 1) return prev + 1;
        clearInterval(logInterval);
        return prev;
      });
    }, 450);

    const finishTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(logInterval);
      clearTimeout(finishTimeout);
    };
  }, []);

  // Theme synchronization
  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light');
      document.body.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light');
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const toggleTheme = () => setIsLightMode(!isLightMode);

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Telemetry', id: 'analytics' },
    { label: 'Publications', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-[#08070d] flex flex-col items-center justify-center p-6 text-emerald-400 font-mono"
          >
            <div className="w-full max-w-md border border-dark-border bg-dark-surface/65 p-6 rounded-2xl shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-dark-border/40 text-slate-300">
                <Terminal className="w-5 h-5 text-neon-cyan animate-pulse" />
                <span className="font-semibold text-sm">SUGANDHAR_OS v2.4 BOOT</span>
              </div>
              
              {/* Animated checklist console */}
              <div className="space-y-2 mb-6">
                {bootLogs.slice(0, bootStep + 1).map((log, i) => (
                  <div key={i} className="text-xs flex items-start gap-2">
                    <span className="text-neon-cyan select-none shrink-0">&gt;</span>
                    <span className="flex-grow">{log}</span>
                    {i < bootStep ? (
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    ) : (
                      <div className="w-3 h-3 border border-t-transparent border-emerald-400 rounded-full animate-spin shrink-0 mt-0.5" />
                    )}
                  </div>
                ))}
              </div>

              {/* Status bar */}
              <div className="w-full bg-dark-bg/60 h-2 rounded-full overflow-hidden border border-dark-border/40">
                <motion.div 
                  className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-indigo h-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen selection:bg-neon-cyan/20 selection:text-white"
          >
            {/* Interactive neural net canvas background */}
            <NeuralCanvas />

            {/* Radiant glowing blobs to break UI monotony */}
            <div className="fixed top-[20%] right-[-5%] w-[450px] h-[450px] rounded-full bg-neon-indigo/5 glow-glow -z-10" />
            <div className="fixed bottom-[15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-neon-cyan/5 glow-glow -z-10" />

            {/* Glassmorphic Sticky Header Navbar */}
            <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-dark-bg/65 dark:bg-dark-bg/65 border-b border-dark-border/40 light-mode:bg-white/70 light-mode:border-light-border/80 transition-colors duration-300">
              <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                
                {/* Brand */}
                <button
                  onClick={() => handleScroll('root')}
                  className="font-display font-black text-white light-mode:text-slate-800 text-xl tracking-tight flex items-center gap-1.5"
                >
                  <Cpu className="w-5 h-5 text-neon-cyan" />
                  <span>Sugandhar<span className="text-neon-cyan">.ai</span></span>
                </button>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleScroll(item.id)}
                      className="text-xs font-mono tracking-widest text-slate-400 hover:text-white light-mode:text-slate-600 light-mode:hover:text-slate-900 transition-colors duration-200 uppercase"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  {/* Theme toggler */}
                  <button
                    onClick={toggleTheme}
                    className="p-2 border border-dark-border rounded-xl text-slate-400 hover:text-white light-mode:border-light-border light-mode:hover:text-slate-900 transition-all duration-300"
                  >
                    {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  </button>
                </div>

                {/* Mobile controls */}
                <div className="flex md:hidden items-center gap-4">
                  <button
                    onClick={toggleTheme}
                    className="p-2 border border-dark-border rounded-xl text-slate-400 light-mode:border-light-border"
                  >
                    {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 border border-dark-border rounded-xl text-slate-400 light-mode:border-light-border"
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>

              </nav>

              {/* Mobile Drawer */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="md:hidden border-t border-dark-border/40 bg-dark-surface/90 light-mode:bg-white/95 overflow-hidden"
                  >
                    <div className="flex flex-col p-6 gap-4">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleScroll(item.id)}
                          className="text-left text-sm font-mono tracking-wider text-slate-300 light-mode:text-slate-700 hover:text-white uppercase"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

            {/* Layout Grid container */}
            <main id="root" className="pt-16 max-w-6xl mx-auto overflow-hidden">
              <Hero />
              
              <div className="max-w-6xl mx-auto px-6">
                <hr className="border-dark-border/30" />
                <About />
                
                <hr className="border-dark-border/30" />
                <Skills />
                
                <hr className="border-dark-border/30" />
                <Experience />
                
                <hr className="border-dark-border/30" />
                <Projects />
                
                <hr className="border-dark-border/30" />
                <Analytics />
                
                <hr className="border-dark-border/30" />
                <Certifications />
                
                <hr className="border-dark-border/30" />
                <Blog />
                
                <hr className="border-dark-border/30" />
                <Contact />
              </div>

              <Footer />
            </main>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
