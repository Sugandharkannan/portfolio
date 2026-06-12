import React from 'react';
import { SectionHeader } from '../components/UI/SectionHeader';
import { GlassCard } from '../components/UI/GlassCard';
import { Award, CheckCircle, ExternalLink, GraduationCap } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  topics: string[];
  credentialId?: string;
  link?: string;
}

const mainCert: Certification = {
  title: 'Deep Learning Specialization',
  issuer: 'Stanford University (via Coursera)',
  topics: [
    'Neural Networks & Deep Learning Core architectures',
    'Convolutional Neural Networks (CNNs) for vision tasks',
    'Sequence Models (RNNs, LSTMs, Transformers) for sequential data',
    'Hyperparameter Tuning, Regularization & Optimization algorithms',
    'Structuring Machine Learning projects and datasets'
  ],
  credentialId: 'COURSERA-DL-SPEC-99',
  link: 'https://coursera.org'
};

const courses = [
  {
    title: 'Data Science Program',
    provider: 'Quality Thoughts',
    desc: 'Advanced predictive modeling, statistical modeling, data analysis architectures, and custom regression/classification pipelines.'
  },
  {
    title: 'Python with Machine Learning',
    provider: 'Industrial Specialization Training',
    desc: 'Core implementation of custom algorithms (SVMs, Trees, Forests) and exploratory analytics in Python.'
  }
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-6 relative z-10 bg-dark-bg/20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Credentials"
          title="Certifications & Education"
          subtitle="Continuous learning and professional validations in Artificial Intelligence and Data Science."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main specialization card */}
          <div className="lg:col-span-7">
            <GlassCard className="h-full border-neon-cyan/20 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex gap-3">
                    <div className="p-3 bg-neon-cyan/10 rounded-xl text-neon-cyan shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-neon-cyan font-bold block mb-1">
                        {mainCert.issuer}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white leading-tight">
                        {mainCert.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Topics Covered:</h4>
                  <ul className="space-y-2">
                    {mainCert.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 font-light">
                        <CheckCircle className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-dark-border/40 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified Credential</span>
                {mainCert.link && (
                  <a
                    href={mainCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-neon-cyan hover:underline hover:text-white transition-colors duration-200"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </GlassCard>
          </div>

          {/* Other courses */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {courses.map((course, index) => (
              <GlassCard key={index} className="flex-1 flex flex-col justify-between border-dark-border/80">
                <div>
                  <div className="flex items-center gap-2.5 mb-3 text-neon-violet">
                    <GraduationCap className="w-5 h-5" />
                    <span className="text-xs font-mono uppercase tracking-wider font-bold">
                      {course.provider}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-display font-bold text-white mb-2 leading-snug">
                    {course.title}
                  </h4>
                  
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {course.desc}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-dark-border/30 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Completed Coursework
                </div>
              </GlassCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
