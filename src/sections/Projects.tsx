import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/UI/SectionHeader';
import { GlassCard } from '../components/UI/GlassCard';
import { Terminal, Cpu, CheckCircle2, Server } from 'lucide-react';
import { GithubIcon } from '../components/UI/BrandIcons';

interface Project {
  id: string;
  title: string;
  category: 'vision' | 'genai' | 'finetuning';
  tech: string[];
  features: string[];
  results: string[];
  github: string;
  diagram: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'vision' | 'genai' | 'finetuning'>('all');
  const [viewMode, setViewMode] = useState<Record<string, 'overview' | 'architecture'>>({});

  const projects: Project[] = [
    {
      id: 'safety',
      title: 'Industrial Safety Monitoring System',
      category: 'vision',
      tech: ['YOLOv8', 'OpenCV', 'TensorRT', 'FastAPI', 'Docker'],
      features: [
        'PPE Detection (Helmets, Vests, Boots)',
        'Real-Time Alert Generation via Webhooks',
        'Multi-Camera RTSP Stream Ingestion',
        'Interactive Analytics Dashboard'
      ],
      results: [
        '90%+ mAP (mean Average Precision)',
        '25+ FPS real-time execution',
        '12× Inference latency optimization'
      ],
      github: 'https://github.com/Sugandharkannan',
      diagram: (
        <svg className="w-full h-full max-h-[180px]" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Streams */}
          <rect x="10" y="70" width="70" height="40" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
          <text x="45" y="95" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="monospace">RTSP IP cams</text>
          
          <path d="M80 90H100" stroke="#00f2fe" strokeWidth="1.5" markerEnd="url(#arrow)" />
          
          {/* Preprocess */}
          <rect x="100" y="70" width="70" height="40" rx="6" fill="#0f172a" stroke="#4fa9fe" strokeWidth="1" />
          <text x="135" y="90" fill="#e2e8f0" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Preprocessing</text>
          <text x="135" y="102" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="sans-serif">(Resize/Normal)</text>

          <path d="M170 90H190" stroke="#00f2fe" strokeWidth="1.5" />
          
          {/* YOLOv8 + TensorRT */}
          <rect x="190" y="60" width="85" height="60" rx="6" fill="#111827" stroke="#00f2fe" strokeWidth="1.5" />
          <text x="232.5" y="85" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">YOLOv8 Engine</text>
          <text x="232.5" y="98" fill="#00f2fe" fontSize="9" textAnchor="middle" fontFamily="monospace">TensorRT / ONNX</text>
          <text x="232.5" y="110" fill="#22c55e" fontSize="8" textAnchor="middle" fontFamily="sans-serif">90%+ mAP @25FPS</text>

          <path d="M275 90H295" stroke="#00f2fe" strokeWidth="1.5" />

          {/* FastAPI backend */}
          <rect x="295" y="70" width="70" height="40" rx="6" fill="#0f172a" stroke="#4fa9fe" strokeWidth="1" />
          <text x="330" y="90" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="sans-serif">FastAPI</text>
          <text x="330" y="102" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="sans-serif">Safety Logic</text>

          <path d="M365 90H385" stroke="#a855f7" strokeWidth="1.5" />

          {/* Alert Output */}
          <circle cx="400" cy="90" r="15" fill="#4c0519" stroke="#f43f5e" strokeWidth="1.2" />
          <text x="400" y="93" fill="#fda4af" fontSize="8" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">ALERT</text>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#00f2fe" />
            </marker>
          </defs>
        </svg>
      )
    },
    {
      id: 'anpr',
      title: 'Intelligent Vehicle ANPR System',
      category: 'vision',
      tech: ['YOLOv8', 'DeepSORT', 'EasyOCR', 'Redis', 'FastAPI'],
      features: [
        'Automatic License Plate Character Segmentation',
        'Multi-Camera Vehicle Association & Tracking',
        'Database Logging for Gate Entry/Exit Logs',
        'Fuzzy String Levenshtein Plate Matching'
      ],
      results: [
        '30 FPS stable multi-camera pipeline',
        '80% reduction in manual gate monitoring effort'
      ],
      github: 'https://github.com/Sugandharkannan',
      diagram: (
        <svg className="w-full h-full max-h-[180px]" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Frame Input */}
          <rect x="5" y="70" width="55" height="40" rx="4" fill="#0f172a" stroke="#6366f1" strokeWidth="1" />
          <text x="32.5" y="93" fill="#e2e8f0" fontSize="8" textAnchor="middle" fontFamily="monospace">RTSP stream</text>

          <path d="M60 90H75" stroke="#6366f1" strokeWidth="1" />

          {/* YOLO Detection */}
          <rect x="75" y="60" width="70" height="60" rx="4" fill="#111827" stroke="#00f2fe" strokeWidth="1.2" />
          <text x="110" y="85" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="bold">YOLOv8</text>
          <text x="110" y="98" fill="#a855f7" fontSize="8" textAnchor="middle">Vehicle/Plate</text>

          <path d="M145 78H165" stroke="#00f2fe" strokeWidth="1" />
          <path d="M145 102H165" stroke="#00f2fe" strokeWidth="1" />

          {/* DeepSORT Tracking */}
          <rect x="165" y="55" width="70" height="35" rx="4" fill="#0f172a" stroke="#4fa9fe" strokeWidth="1" />
          <text x="200" y="76" fill="#e2e8f0" fontSize="8" textAnchor="middle">DeepSORT</text>
          
          {/* EasyOCR Extraction */}
          <rect x="165" y="95" width="70" height="35" rx="4" fill="#0f172a" stroke="#4fa9fe" strokeWidth="1" />
          <text x="200" y="116" fill="#e2e8f0" fontSize="8" textAnchor="middle">EasyOCR</text>

          <path d="M235 72H255" stroke="#4facfe" strokeWidth="1" />
          <path d="M235 112H255" stroke="#4facfe" strokeWidth="1" />

          {/* Redis matching */}
          <rect x="255" y="70" width="70" height="40" rx="4" fill="#1e152a" stroke="#a855f7" strokeWidth="1" />
          <text x="290" y="90" fill="#e2e8f0" fontSize="9" textAnchor="middle" fontWeight="bold">Fuzzy Matching</text>
          <text x="290" y="102" fill="#a855f7" fontSize="8" textAnchor="middle" fontFamily="monospace">Redis/FastAPI</text>

          <path d="M325 90H345" stroke="#22c55e" strokeWidth="1" />

          {/* SQL Logs */}
          <rect x="345" y="70" width="70" height="40" rx="4" fill="#022c22" stroke="#22c55e" strokeWidth="1" />
          <text x="380" y="90" fill="#e2e8f0" fontSize="9" textAnchor="middle">Database</text>
          <text x="380" y="102" fill="#22c55e" fontSize="7" textAnchor="middle">Entry/Exit Logs</text>
        </svg>
      )
    },
    {
      id: 'rag',
      title: 'Enterprise RAG Assistant',
      category: 'genai',
      tech: ['LangChain', 'Llama 3', 'FAISS', 'ChromaDB', 'FastAPI'],
      features: [
        'Interactive Context-Aware Multi-turn Conversations',
        'Verification of Citation-backed Responses',
        'Hierarchical PDF/Docx Document Loader & Parser',
        'Conversational Session Context Memory'
      ],
      results: [
        'Sub-second query response time (< 1 sec)',
        '1000+ Enterprise Documents parsed & indexed'
      ],
      github: 'https://github.com/Sugandharkannan',
      diagram: (
        <svg className="w-full h-full max-h-[180px]" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* User query */}
          <rect x="5" y="70" width="55" height="40" rx="4" fill="#0f172a" stroke="#6366f1" strokeWidth="1" />
          <text x="32.5" y="93" fill="#e2e8f0" fontSize="8" textAnchor="middle">User Query</text>

          <path d="M60 90H80" stroke="#00f2fe" strokeWidth="1" />

          {/* Embedding + Vector Database */}
          <rect x="80" y="55" width="80" height="70" rx="4" fill="#111827" stroke="#00f2fe" strokeWidth="1.2" />
          <text x="120" y="76" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="bold">Embeddings</text>
          <text x="120" y="92" fill="#00f2fe" fontSize="8" textAnchor="middle">Chroma / FAISS</text>
          <text x="120" y="108" fill="#e2e8f0" fontSize="7" textAnchor="middle">Retrieve context</text>

          <path d="M160 90H185" stroke="#00f2fe" strokeWidth="1" />

          {/* LangChain Coordinator */}
          <rect x="185" y="60" width="80" height="60" rx="4" fill="#0f172a" stroke="#4fa9fe" strokeWidth="1.2" />
          <text x="225" y="85" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="bold">LangChain</text>
          <text x="225" y="98" fill="#a855f7" fontSize="8" textAnchor="middle">Prompt Builder</text>
          <text x="225" y="110" fill="#94a3b8" fontSize="7" textAnchor="middle">(Memory State)</text>

          <path d="M265 90H285" stroke="#a855f7" strokeWidth="1" />

          {/* Llama 3 LLM */}
          <rect x="285" y="60" width="70" height="60" rx="4" fill="#111827" stroke="#a855f7" strokeWidth="1.2" />
          <text x="320" y="85" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="bold">Llama 3</text>
          <text x="320" y="98" fill="#f43f5e" fontSize="8" textAnchor="middle">Inference</text>
          <text x="320" y="110" fill="#94a3b8" fontSize="7" textAnchor="middle">Generate</text>

          <path d="M355 90H375" stroke="#22c55e" strokeWidth="1" />

          {/* Output */}
          <rect x="375" y="70" width="40" height="40" rx="4" fill="#022c22" stroke="#22c55e" strokeWidth="1" />
          <text x="395" y="93" fill="#e2e8f0" fontSize="7" textAnchor="middle">Citation Answer</text>
        </svg>
      )
    },
    {
      id: 'finetuning',
      title: 'Mistral 7B Fine-Tuning Pipeline',
      category: 'finetuning',
      tech: ['QLoRA', 'PEFT', 'Hugging Face', 'Weights & Biases', 'PyTorch'],
      features: [
        '4-bit NF4 Model Quantization',
        'Parameter-Efficient Fine-Tuning (PEFT) adapter integration',
        'Hugging Face Hub compilation and serialization',
        'Live loss curve tracking with Weights & Biases API'
      ],
      results: [
        'Completed training on limited VRAM system',
        'Zero performance degeneration in core logic parameters'
      ],
      github: 'https://github.com/Sugandharkannan',
      diagram: (
        <svg className="w-full h-full max-h-[180px]" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Model */}
          <rect x="5" y="70" width="70" height="40" rx="4" fill="#0f172a" stroke="#6366f1" strokeWidth="1" />
          <text x="40" y="90" fill="#e2e8f0" fontSize="9" textAnchor="middle">Mistral 7B</text>
          <text x="40" y="102" fill="#94a3b8" fontSize="8" textAnchor="middle">Base Model</text>

          <path d="M75 90H95" stroke="#6366f1" strokeWidth="1" />

          {/* 4-Bit NF4 Quantization */}
          <rect x="95" y="65" width="85" height="50" rx="4" fill="#1e1b4b" stroke="#00f2fe" strokeWidth="1.2" />
          <text x="137.5" y="85" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="bold">Quantization</text>
          <text x="137.5" y="98" fill="#00f2fe" fontSize="8" textAnchor="middle">4-bit NF4 bits</text>

          <path d="M180 90H200" stroke="#00f2fe" strokeWidth="1" />

          {/* LoRA rank Adapters */}
          <rect x="200" y="65" width="85" height="50" rx="4" fill="#111827" stroke="#a855f7" strokeWidth="1.2" />
          <text x="242.5" y="85" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="bold">LoRA Adapters</text>
          <text x="242.5" y="98" fill="#a855f7" fontSize="8" textAnchor="middle">PEFT config</text>

          <path d="M285 90H305" stroke="#a855f7" strokeWidth="1" />

          {/* Training & W&B */}
          <rect x="305" y="60" width="110" height="60" rx="4" fill="#0f172a" stroke="#22c55e" strokeWidth="1" />
          <text x="360" y="82" fill="#e2e8f0" fontSize="9" textAnchor="middle">Fine-Tuning Engine</text>
          <text x="360" y="95" fill="#22c55e" fontSize="8" textAnchor="middle">Hugging Face Trainer</text>
          <text x="360" y="108" fill="#fb923c" fontSize="7" textAnchor="middle">Metrics to W&B API</text>
        </svg>
      )
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  const toggleViewMode = (projectId: string) => {
    setViewMode(prev => ({
      ...prev,
      [projectId]: prev[projectId] === 'architecture' ? 'overview' : 'architecture'
    }));
  };

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Portfolio"
          title="Featured AI Projects"
          subtitle="Explore some of the production-grade artificial intelligence systems I have designed and deployed."
        />

        {/* Tab filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {(['all', 'vision', 'genai', 'finetuning'] as const).map((tab) => {
            const labels = {
              all: 'All Systems',
              vision: 'Computer Vision',
              genai: 'Generative AI & LLMs',
              finetuning: 'Quantization & Fine-Tuning'
            };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-neon-indigo/25 text-white border border-neon-indigo/55'
                    : 'bg-dark-surface/40 border border-dark-border text-slate-400 hover:text-white hover:bg-dark-surface/80'
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const currentMode = viewMode[project.id] || 'overview';
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex"
                >
                  <GlassCard 
                    hoverEffect={false} 
                    className="w-full flex flex-col justify-between border border-dark-border/80 relative"
                  >
                    <div>
                      {/* Card Header & Controls */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-display font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                        
                        {/* Toggle switch between Overview and Architecture */}
                        <div className="flex bg-dark-bg/60 p-1 border border-dark-border/40 rounded-lg shrink-0">
                          <button
                            onClick={() => toggleViewMode(project.id)}
                            className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded transition-all duration-200 ${
                              currentMode === 'overview'
                                ? 'bg-neon-indigo/20 text-white border border-neon-indigo/40'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            OVERVIEW
                          </button>
                          <button
                            onClick={() => toggleViewMode(project.id)}
                            className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded transition-all duration-200 ${
                              currentMode === 'architecture'
                                ? 'bg-neon-indigo/20 text-white border border-neon-indigo/40'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            SYSTEM FLOW
                          </button>
                        </div>
                      </div>

                      {/* Content Panels */}
                      <div className="min-h-[190px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          {currentMode === 'overview' ? (
                            <motion.div
                              key="overview"
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.2 }}
                              className="w-full text-left"
                            >
                              <div className="space-y-4">
                                {/* Features list */}
                                <div>
                                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                                    <Terminal className="w-3.5 h-3.5 text-neon-cyan" />
                                    Key Features
                                  </h4>
                                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                    {project.features.map((feat, fi) => (
                                      <li key={fi} className="text-sm text-slate-300 flex items-center gap-1.5 font-light">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan shrink-0" />
                                        <span>{feat}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Results metrics */}
                                <div className="bg-dark-bg/40 border border-dark-border/40 p-3 rounded-xl">
                                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                                    <Cpu className="w-3.5 h-3.5 text-neon-violet" />
                                    Performance & Deployment Results
                                  </h4>
                                  <ul className="space-y-1">
                                    {project.results.map((res, ri) => (
                                      <li key={ri} className="text-sm text-slate-200 font-mono font-medium flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                                        <span>{res}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="architecture"
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.2 }}
                              className="w-full flex flex-col items-center justify-center p-2 rounded-xl bg-dark-bg/30 border border-dark-border/30"
                            >
                              {project.diagram}
                              <span className="text-[10px] font-mono text-slate-500 mt-2 text-center uppercase tracking-widest flex items-center gap-1">
                                <Server className="w-3.5 h-3.5" />
                                Interactive System Architecture Diagram
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Footer / Tech & Links */}
                    <div className="mt-6 pt-4 border-t border-dark-border/40 flex flex-wrap gap-4 items-center justify-between">
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, ti) => (
                          <span
                            key={ti}
                            className="px-2 py-0.5 text-[11px] font-mono font-semibold bg-dark-bg/60 text-slate-300 rounded border border-dark-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-white hover:bg-dark-bg/80 border border-dark-border/40 rounded-lg transition-all duration-300 flex items-center gap-1.5 text-xs font-mono"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
