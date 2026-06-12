import { SectionHeader } from '../components/UI/SectionHeader';
import { GlassCard } from '../components/UI/GlassCard';
import { Eye, Cpu, Network, Layers, Server, Terminal } from 'lucide-react';

const pillars = [
  {
    title: 'Computer Vision',
    desc: 'Real-time object detection, object tracking, and video analytics using YOLOv5/v8 and OpenCV.',
    icon: Eye,
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10'
  },
  {
    title: 'Generative AI & LLMs',
    desc: 'Developing context-aware RAG search, semantic search chatbots, and fine-tuning models like Llama 3 & Mistral.',
    icon: Network,
    color: 'text-neon-indigo',
    bgColor: 'bg-neon-indigo/10'
  },
  {
    title: 'Agentic AI Systems',
    desc: 'Designing stateful multi-agent decision chains with LangChain and LangGraph for reasoning tasks.',
    icon: Brain,
    color: 'text-neon-violet',
    bgColor: 'bg-neon-violet/10'
  },
  {
    title: 'MLOps & Deployment',
    desc: 'Deploying high-concurrency systems using FastAPI, Docker, Kubernetes, AWS, and Triton Inference Server.',
    icon: Server,
    color: 'text-neon-pink',
    bgColor: 'bg-neon-pink/10'
  },
  {
    title: 'Edge AI Optimization',
    desc: 'Quantizing models, compiling to ONNX, and optimizing for real-time edge processing via TensorRT.',
    icon: Cpu,
    color: 'text-neon-blue',
    bgColor: 'bg-neon-blue/10'
  },
  {
    title: 'Deep Learning Core',
    desc: 'Applying core neural architectures (CNNs, Transformers, Sequence Models) using PyTorch and TensorFlow.',
    icon: Layers,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10'
  }
];

// Helper Brain icon if not imported from lucide
function Brain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 6a3.5 3.5 0 0 0-3.5 3.5c0 1 .5 1.5 1 2s1 .5 1 1v1.5" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="About Me"
          title="Translating Research into Production Systems"
          subtitle="A summary of my engineering philosophy, background, and core focus areas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio text column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassCard hoverEffect={false} className="h-full flex flex-col justify-between">
              <div>
                {/* Profile Photo Header */}
                <div className="flex flex-col sm:flex-row gap-5 items-center mb-6 pb-6 border-b border-dark-border/30">
                  <div className="relative shrink-0 group">
                    {/* Pulsing neon glowing ring behind avatar */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-indigo rounded-full blur opacity-65 group-hover:opacity-100 transition duration-500 animate-pulse" />
                    
                    {/* Inner bezel border */}
                    <div className="relative p-[2px] bg-dark-bg rounded-full">
                      <img 
                        src="/sugandhar.jpg" 
                        alt="Sugandhar K" 
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center sm:text-left flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      Core Developer
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-white tracking-tight leading-none">
                      Sugandhar K
                    </h3>
                    <p className="text-xs font-mono text-neon-cyan">
                      Applied Data Scientist
                    </p>
                    <div className="mt-1 flex items-center justify-center sm:justify-start gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[11px] font-medium text-emerald-400/90 font-mono">
                        Available for Projects
                      </span>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-neon-cyan" />
                  <span>Who is Sugandhar?</span>
                </h4>
                
                <p className="text-slate-300 leading-relaxed font-light mb-4 text-sm">
                  I am a passionate <strong className="text-white font-medium">Applied Data Scientist</strong> at <strong className="text-neon-cyan font-medium">SeeWise AI</strong>. My day-to-day involves building industrial-grade Computer Vision and Generative AI products.
                </p>
                <p className="text-slate-300 leading-relaxed font-light mb-4 text-sm">
                  I specialize in transforming complex artificial intelligence research papers and raw models into scalable, production-ready solutions that run on local edge servers or cloud infrastructure.
                </p>
                <p className="text-slate-300 leading-relaxed font-light text-sm">
                  With over 2 years of hands-on experience, I focus heavily on performance optimization—squeezing maximum frame rates from edge devices, ensuring sub-second response times for enterprise knowledge assistants, and maintaining clean codebases with standard MLOps practices.
                </p>
              </div>

              {/* Status footer inside card */}
              <div className="mt-8 pt-4 border-t border-dark-border/40 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Location: Chennai, India</span>
                <span className="text-neon-cyan">Active Developer</span>
              </div>
            </GlassCard>
          </div>

          {/* Pillars grid column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <GlassCard
                  key={index}
                  delay={index * 0.05}
                  className="flex flex-col h-full hover:border-neon-cyan/20 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-lg ${pillar.bgColor} ${pillar.color} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-display font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400 font-light leading-relaxed flex-grow">
                    {pillar.desc}
                  </p>
                </GlassCard>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
