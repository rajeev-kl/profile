import React from 'react';
import OptimizedMotion from '../components/OptimizedMotion';
import { ArrowDown } from 'lucide-react';

const Banner = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 md:px-8 lg:px-16 py-12 md:py-24 mb-12 rounded-3xl bg-gradient-to-br from-catppuccin-mantle to-catppuccin-crust overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-catppuccin-mauve/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-catppuccin-blue/10 rounded-full blur-3xl" />

      <div className="flex-1 z-10">
        <OptimizedMotion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-catppuccin-mauve font-medium tracking-wider text-sm md:text-base uppercase mb-4">
            Platform & Backend Engineering Lead
          </p>
        </OptimizedMotion>

        <OptimizedMotion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="stroke-text">Hey, I'm Rajeev</span>
            <br />
            let's turn your
            <br />
            <span className="stroke-text">FRAGILE MONOLITH</span>
            <br />
            into a DISTRIBUTED POWERHOUSE
          </h1>
        </OptimizedMotion>

        <OptimizedMotion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-catppuccin-subtext0 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            8+ years building systems that don't buckle — across edtech, fintech,
            and AI. Specializing in Python/Django backends, multi-cloud architecture,
            and automation pipelines that pay for themselves in hours, not months.
            <br />
            <br />
            Your product deserves infrastructure that scales.
          </p>
        </OptimizedMotion>

        <OptimizedMotion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-catppuccin-surface0 hover:bg-catppuccin-surface1 border border-catppuccin-surface2 rounded-xl text-catppuccin-text font-medium transition-all duration-300 group"
          >
            Explore my work
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </OptimizedMotion>
      </div>

      <OptimizedMotion
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="flex-shrink-0 z-10"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-catppuccin-mauve/20 to-catppuccin-blue/20 flex items-center justify-center border-2 border-catppuccin-surface1">
          <span className="text-8xl md:text-9xl font-bold text-catppuccin-text/10 select-none">
            RK
          </span>
        </div>
      </OptimizedMotion>
    </section>
  );
};

export default Banner;
