import { SectionHeader } from '../components/UI/SectionHeader';
import { GlassCard } from '../components/UI/GlassCard';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  achievements: string[];
  isCurrent: boolean;
}

const experiences: ExperienceItem[] = [
  {
    role: 'Applied Data Scientist – Computer Vision & GenAI',
    company: 'SeeWise AI – LMBees Pvt Ltd',
    period: 'Dec 2024 – Present',
    achievements: [
      'Built YOLOv8 PPE Safety Monitoring System achieving 90%+ mAP.',
      'Developed real-time multi-camera surveillance analytics using optimized stream buffers.',
      'Implemented enterprise RAG assistant over 1000+ documents with context retrieval.',
      'Delivered citation-backed AI responses under 1 second response time.',
      'Reduced manual monitoring effort by 60% through automated notifications.'
    ],
    isCurrent: true,
  },
  {
    role: 'Machine Learning Associate – Computer Vision',
    company: 'SeeWise AI – LMBees Pvt Ltd',
    period: 'Mar 2024 – Dec 2024',
    achievements: [
      'Trained YOLOv8 and YOLOv5 models reaching 88–92% mAP for specific industrial targets.',
      'Exported models to ONNX and optimized inference using TensorRT engines.',
      'Improved dataset quality by 40% using automated annotation pipelines.',
      'Reduced false positives by 35% by implementing negative image sampling and data augmentation.'
    ],
    isCurrent: false,
  },
  {
    role: 'Machine Learning Intern – NLP & AI',
    company: 'Sweng Solutions',
    period: 'Mar 2023 – Feb 2024',
    achievements: [
      'Built a semantic search chatbot using BERT embeddings and vector retrieval.',
      'Improved search relevance by 35% compared to keyword matching baseline.',
      'Reduced latency by 40% by implementing query caching and FAISS index optimization.',
      'Implemented FAISS-based retrieval systems for custom documentation indexing.'
    ],
    isCurrent: false,
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Work History"
          title="Professional Journey"
          subtitle="A timeline of my work developing industrial-grade AI and ML products."
        />

        <div className="relative border-l border-dark-border/80 ml-4 md:ml-8 pl-8 md:pl-12 py-4 space-y-12">
          
          {/* Vertical line glow indicator */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-neon-cyan via-neon-indigo to-neon-violet opacity-50" />

          {experiences.map((exp, index) => {
            return (
              <div key={index} className="relative group">
                
                {/* Timeline node */}
                <div className={`
                  absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full border-2 
                  flex items-center justify-center transition-all duration-300 z-20
                  ${exp.isCurrent 
                    ? 'bg-dark-bg border-neon-cyan scale-125 shadow-lg shadow-neon-cyan/20 group-hover:shadow-neon-cyan/40' 
                    : 'bg-dark-bg border-dark-border group-hover:border-neon-indigo'
                  }
                `}>
                  <div className={`
                    w-2.5 h-2.5 rounded-full 
                    ${exp.isCurrent 
                      ? 'bg-neon-cyan animate-pulse' 
                      : 'bg-slate-500 group-hover:bg-neon-indigo'
                    }
                  `} />
                </div>

                <GlassCard
                  delay={index * 0.1}
                  className={`
                    border transition-all duration-300
                    ${exp.isCurrent 
                      ? 'border-neon-cyan/20 bg-neon-cyan/[0.01]' 
                      : 'border-dark-border hover:border-dark-border/90'
                    }
                  `}
                >
                  {/* Card header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neon-cyan flex items-center gap-1.5 mb-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-neon-indigo transition-colors duration-300">
                        {exp.role}
                      </h3>
                    </div>
                    
                    {/* Period badge */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-dark-bg/60 border border-dark-border/40 px-3 py-1.5 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5 text-neon-violet" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Achievements list */}
                  <ul className="space-y-2.5">
                    {exp.achievements.map((ach, ai) => (
                      <li key={ai} className="flex items-start gap-2.5 text-sm md:text-base text-slate-300 leading-relaxed font-light">
                        <ChevronRight className="w-4 h-4 text-neon-cyan shrink-0 mt-1" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Current Active Ribbon */}
                  {exp.isCurrent && (
                    <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none rounded-tr-2xl">
                      <div className="absolute top-4 right-[-28px] w-28 bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-[10px] font-mono font-bold text-center py-1 rotate-45">
                        ACTIVE
                      </div>
                    </div>
                  )}

                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
