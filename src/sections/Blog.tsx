import React from 'react';
import { SectionHeader } from '../components/UI/SectionHeader';
import { GlassCard } from '../components/UI/GlassCard';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const articles: Article[] = [
  {
    title: 'YOLOv8 Demystified: Industrial PPE Detection & Speed Optimization',
    excerpt: 'A deep dive into training YOLOv8 models for real-world personal protective equipment monitoring. Learn how to export to ONNX and compile TensorRT engines to achieve 25+ FPS inference.',
    date: 'May 12, 2026',
    readTime: '6 min read',
    tags: ['YOLOv8', 'Computer Vision', 'TensorRT', 'Edge AI']
  },
  {
    title: 'Building Production-Grade RAG Systems with Citation Backing',
    excerpt: 'Scaling context search over 1000+ enterprise documents. How to structure recursive character splitters, manage document embeddings, and index vector data efficiently to query responses under 1s.',
    date: 'Apr 28, 2026',
    readTime: '8 min read',
    tags: ['RAG', 'Llama 3', 'VectorDB', 'LangChain']
  },
  {
    title: 'Fine-Tuning LLMs: LoRA vs QLoRA Parameter Efficiency',
    excerpt: 'Comparing standard Low-Rank Adaptation (LoRA) with Quantized LoRA (QLoRA). Learn how we fine-tune 7B model weights using 4-bit NF4 quantization on standard developer workstations without performance degradation.',
    date: 'Mar 15, 2026',
    readTime: '5 min read',
    tags: ['Fine-Tuning', 'QLoRA', 'Hugging Face', 'W&B']
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 px-6 relative z-10 bg-dark-bg/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Publications"
          title="Technical Writing & Insights"
          subtitle="Read some of my written articles outlining deep learning concepts, optimization strategies, and deployment pipelines."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art, index) => (
            <GlassCard
              key={index}
              delay={index * 0.05}
              className="flex flex-col justify-between border-dark-border/80 hover:border-neon-indigo/35 group h-full"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs text-slate-400 font-mono mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neon-cyan" />
                    {art.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neon-violet" />
                    {art.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-neon-cyan transition-colors duration-300 mb-3 leading-snug">
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                  {art.excerpt}
                </p>
              </div>

              {/* Tags & Action Button */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {art.tags.map((t, ti) => (
                    <span
                      key={ti}
                      className="px-2 py-0.5 text-[10px] font-mono bg-dark-bg/40 text-slate-300 rounded border border-dark-border"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <a
                  href="#blog"
                  onClick={(e) => e.preventDefault()}
                  className="w-full py-2.5 rounded-lg border border-dark-border bg-dark-bg/50 hover:bg-dark-surface hover:text-white text-slate-300 text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 text-neon-cyan group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
