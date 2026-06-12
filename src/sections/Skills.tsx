import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/UI/SectionHeader';
import { GlassCard } from '../components/UI/GlassCard';
import { Terminal, Eye, Brain, Database, Cpu, Cloud, Settings } from 'lucide-react';

const skillCategories = [
  {
    id: 'vision',
    title: 'Computer Vision',
    icon: Eye,
    color: 'border-neon-cyan/30 hover:border-neon-cyan/60 text-neon-cyan',
    skills: [
      'YOLOv8', 'YOLOv5', 'OpenCV', 'DeepSORT', 'EasyOCR', 
      'TensorRT', 'ONNX', 'RTSP Streaming', 'Video Analytics', 'Edge AI'
    ]
  },
  {
    id: 'genai',
    title: 'Generative AI',
    icon: Brain,
    color: 'border-neon-indigo/30 hover:border-neon-indigo/60 text-neon-indigo',
    skills: [
      'Llama 3', 'Mistral', 'Qwen2-VL', 'LangChain', 'LangGraph', 
      'RAG Systems', 'Prompt Engineering', 'Agentic AI', 'Vision Language Models'
    ]
  },
  {
    id: 'mlops',
    title: 'MLOps & Cloud',
    icon: Cloud,
    color: 'border-neon-pink/30 hover:border-neon-pink/60 text-neon-pink',
    skills: [
      'FastAPI', 'Docker', 'Kubernetes', 'AWS EC2', 'AWS S3', 
      'AWS ECR', 'MLflow', 'Weights & Biases', 'GitHub Actions', 'Triton Inference Server'
    ]
  },
  {
    id: 'programming',
    title: 'Programming Core',
    icon: Terminal,
    color: 'border-neon-blue/30 hover:border-neon-blue/60 text-neon-blue',
    skills: ['Python', 'SQL', 'Bash', 'Git', 'Linux']
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    icon: Cpu,
    color: 'border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Transfer Learning', 'Model Quantization']
  },
  {
    id: 'finetuning',
    title: 'Fine-Tuning',
    icon: Settings,
    color: 'border-neon-violet/30 hover:border-neon-violet/60 text-neon-violet',
    skills: ['LoRA', 'QLoRA', 'PEFT', 'Hugging Face Transformers']
  },
  {
    id: 'vectordb',
    title: 'Vector Databases',
    icon: Database,
    color: 'border-amber-500/30 hover:border-amber-500/60 text-amber-400',
    skills: ['FAISS', 'ChromaDB', 'Qdrant']
  }
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-20 px-6 relative z-10 bg-dark-bg/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Technical Skills"
          title="Engineered to Run Fast and Scale"
          subtitle="Explore the technologies and tools I use to design, optimize, and deploy industrial-strength AI."
        />

        {/* Tab filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-neon-indigo/25 text-white border border-neon-indigo/55'
                : 'bg-dark-surface/40 border border-dark-border text-slate-400 hover:text-white hover:bg-dark-surface/80'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((c) => {
            return (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === c.id
                    ? 'bg-neon-indigo/25 text-white border border-neon-indigo/55'
                    : 'bg-dark-surface/40 border border-dark-border text-slate-400 hover:text-white hover:bg-dark-surface/80'
                }`}
              >
                <span>{c.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <GlassCard
                key={category.id}
                delay={index * 0.05}
                className={`flex flex-col h-full border ${category.color} group`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-dark-border/40">
                  <div className={`p-2 rounded-lg bg-dark-bg/60`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills tags list */}
                <div className="flex flex-wrap gap-2 flex-grow">
                  {category.skills.map((skill, si) => (
                    <motion.span
                      key={si}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: si * 0.02 }}
                      className="px-3 py-1.5 text-xs font-mono bg-dark-bg/40 text-slate-300 rounded-lg border border-dark-border/55 hover:border-neon-indigo/35 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
