import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  alignment = 'center',
}) => {
  const isLeft = alignment === 'left';

  return (
    <div className={`mb-12 md:mb-16 flex flex-col ${isLeft ? 'items-start text-left' : 'items-center text-center'}`}>
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 rounded-full mb-4"
      >
        {badge}
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-slate-400 max-w-2xl text-base md:text-lg font-light leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};
