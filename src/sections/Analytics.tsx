import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/UI/SectionHeader';
import { GlassCard } from '../components/UI/GlassCard';
import { Users, Cpu, Activity, Database, GitBranch, ShieldCheck } from 'lucide-react';

export const Analytics: React.FC = () => {
  const [profileViews, setProfileViews] = useState(384);
  const [inferences, setInferences] = useState(14023);
  const [cpuUsage, setCpuUsage] = useState(24);
  const [gpuUsage, setGpuUsage] = useState(58);
  const [activeCameraStreams, setActiveCameraStreams] = useState(4);

  // Live simulation variables
  useEffect(() => {
    const interval = setInterval(() => {
      setInferences(prev => prev + Math.floor(Math.random() * 3) + 1);
      setCpuUsage(prev => {
        const diff = Math.floor(Math.random() * 5) - 2;
        const target = prev + diff;
        return target > 10 && target < 40 ? target : prev;
      });
      setGpuUsage(prev => {
        const diff = Math.floor(Math.random() * 7) - 3;
        const target = prev + diff;
        return target > 40 && target < 80 ? target : prev;
      });
      setActiveCameraStreams(prev => {
        return Math.random() > 0.85 ? (prev === 4 ? 3 : 4) : prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Increment recruiter views occasionally
    const viewInterval = setInterval(() => {
      setProfileViews(prev => prev + 1);
    }, 15000);
    return () => clearInterval(viewInterval);
  }, []);

  // Generate realistic GitHub contribution matrix (53 columns x 7 rows)
  const generateHeatmapData = () => {
    const data: number[][] = [];
    // 7 rows representing days of the week
    for (let r = 0; r < 7; r++) {
      const row: number[] = [];
      // 36 columns representing weeks
      for (let c = 0; c < 36; c++) {
        // Higher values representing higher contributions
        const rand = Math.random();
        let value = 0;
        if (rand > 0.85) value = 4;      // Max green
        else if (rand > 0.65) value = 3; // Med green
        else if (rand > 0.4) value = 2;  // Low green
        else if (rand > 0.15) value = 1; // Very low green
        row.push(value);
      }
      data.push(row);
    }
    return data;
  };

  const heatmap = generateHeatmapData();

  const getHeatmapColor = (val: number) => {
    switch (val) {
      case 4: return 'bg-neon-cyan/90 shadow-sm shadow-neon-cyan/20';
      case 3: return 'bg-neon-indigo/70';
      case 2: return 'bg-neon-indigo/40';
      case 1: return 'bg-neon-indigo/20';
      default: return 'bg-dark-border/40';
    }
  };

  const days = ['Mon', '', 'Wed', '', 'Fri', '', ''];

  return (
    <section id="analytics" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Live Telemetry"
          title="Recruiter Analytics & MLOps Hub"
          subtitle="A live-simulating telemetry panel and contribution heatmap showcasing system performance and activity metrics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          
          {/* MLOps metrics panels (Col span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Inference counter */}
            <GlassCard className="flex flex-col justify-between border-neon-cyan/20 bg-neon-cyan/[0.01]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Inference Engine</span>
                <Activity className="w-5 h-5 text-neon-cyan animate-pulse" />
              </div>
              <div>
                <span className="text-3xl font-display font-black text-white tracking-tight">
                  {inferences.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-neon-cyan block mt-1">Live YOLOv8 Inference Calls</span>
              </div>
              <div className="mt-4 pt-3 border-t border-dark-border/30 text-[10px] font-mono text-slate-500">
                Streams: {activeCameraStreams} | Avg Latency: 22ms | TensorRT INT8
              </div>
            </GlassCard>

            {/* Recruiter views */}
            <GlassCard className="flex flex-col justify-between border-neon-indigo/20 bg-neon-indigo/[0.01]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Recruiter Telemetry</span>
                <Users className="w-5 h-5 text-neon-indigo" />
              </div>
              <div>
                <span className="text-3xl font-display font-black text-white tracking-tight">
                  {profileViews}
                </span>
                <span className="text-xs font-mono text-neon-indigo block mt-1">Active Portfolio Sessions</span>
              </div>
              <div className="mt-4 pt-3 border-t border-dark-border/30 text-[10px] font-mono text-slate-500">
                Unique Geolocation: US, IN, EU
              </div>
            </GlassCard>

            {/* GPU usage */}
            <GlassCard className="flex flex-col justify-between border-neon-violet/20 bg-neon-violet/[0.01]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">GPU Cluster Load</span>
                <Cpu className="w-5 h-5 text-neon-violet" />
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-3xl font-display font-black text-white tracking-tight">{gpuUsage}%</span>
                  <span className="text-xs font-mono text-slate-400">NVIDIA Jetson / T4</span>
                </div>
                {/* Visual bar */}
                <div className="w-full bg-dark-bg/60 h-2 rounded-full overflow-hidden border border-dark-border/40">
                  <motion.div 
                    className="bg-gradient-to-r from-neon-indigo to-neon-violet h-full"
                    animate={{ width: `${gpuUsage}%` }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-dark-border/30 text-[10px] font-mono text-slate-500">
                CPU: {cpuUsage}% | VRAM: 6.8 GB / 16 GB | Temp: 62°C
              </div>
            </GlassCard>

            {/* RAG pipeline */}
            <GlassCard className="flex flex-col justify-between border-neon-pink/20 bg-neon-pink/[0.01]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Vector Index Status</span>
                <Database className="w-5 h-5 text-neon-pink" />
              </div>
              <div>
                <span className="text-3xl font-display font-black text-white tracking-tight">1,024</span>
                <span className="text-xs font-mono text-neon-pink block mt-1">Chunk Nodes Indexed</span>
              </div>
              <div className="mt-4 pt-3 border-t border-dark-border/30 text-[10px] font-mono text-slate-500">
                DB: ChromaDB | Embedding: text-embedding-3-small
              </div>
            </GlassCard>

          </div>

          {/* GitHub heatmap card (Col span 5) */}
          <div className="lg:col-span-5 flex">
            <GlassCard className="w-full flex flex-col justify-between border-dark-border/80 h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-neon-cyan" />
                    <h3 className="text-lg font-display font-semibold text-white">Activity Map</h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">sugandharkannan</span>
                </div>

                {/* Heatmap Grid */}
                <div className="flex gap-2 p-3 bg-dark-bg/40 border border-dark-border/40 rounded-xl overflow-x-auto">
                  {/* Row indicators */}
                  <div className="flex flex-col justify-between text-[8px] font-mono text-slate-500 pr-1 select-none">
                    {days.map((d, i) => (
                      <span key={i} className="h-3 leading-3">{d}</span>
                    ))}
                  </div>

                  {/* Grid columns */}
                  <div className="flex flex-col gap-1 flex-grow">
                    {heatmap.map((row, ri) => (
                      <div key={ri} className="flex gap-1">
                        {row.map((val, ci) => (
                          <div
                            key={ci}
                            className={`heatmap-cell ${getHeatmapColor(val)}`}
                            title={`${val > 0 ? val * 3 : 0} commits in this cell`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Heatmap Footer Legend */}
              <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-3 border-t border-dark-border/30">
                <span>Total: 843 commits (Year)</span>
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 bg-dark-border/40 rounded-[1px]" />
                  <div className="w-2.5 h-2.5 bg-neon-indigo/20 rounded-[1px]" />
                  <div className="w-2.5 h-2.5 bg-neon-indigo/40 rounded-[1px]" />
                  <div className="w-2.5 h-2.5 bg-neon-indigo/70 rounded-[1px]" />
                  <div className="w-2.5 h-2.5 bg-neon-cyan/90 rounded-[1px]" />
                  <span>More</span>
                </div>
              </div>
            </GlassCard>
          </div>

        </div>

        {/* Live system state console banner */}
        <div className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.02] text-xs font-mono text-emerald-400">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span>System status: ALL DEPLOYED APP PIPELINES STABLE. NO ERRORS DETECTED IN LOG BUFFERS.</span>
        </div>

      </div>
    </section>
  );
};
