import React from 'react';
import SectionHeading from '../components/SectionHeading';
import OptimizedMotion from '../components/OptimizedMotion';
import { EXPERIENCE, CONTRACTS, HIGHLIGHTS } from '../data/experience';
import { Briefcase, ChevronRight } from 'lucide-react';

const ExperienceCard = ({ exp, index }) => (
  <OptimizedMotion
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
  >
    <div className="group relative pl-8 pb-8 border-l-2 border-catppuccin-surface2 last:pb-0 hover:border-catppuccin-mauve/50 transition-colors">
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-catppuccin-base border-2 border-catppuccin-mauve flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-catppuccin-mauve" />
      </div>

      <div className="glass rounded-xl p-5 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="text-catppuccin-text font-semibold text-lg">
            {exp.role}
          </h3>
          <span className="text-catppuccin-overlay0 text-sm">{exp.period}</span>
        </div>
        <p className="text-catppuccin-mauve font-medium text-sm mb-3">
          {exp.company}
        </p>
        {exp.description && (
          <p className="text-catppuccin-subtext0 text-sm mb-3 italic">
            {exp.description}
          </p>
        )}
        <ul className="space-y-1.5 mb-3">
          {exp.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-catppuccin-subtext0 text-sm">
              <ChevronRight size={14} className="mt-0.5 flex-shrink-0 text-catppuccin-mauve" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 text-xs rounded-full bg-catppuccin-surface1 text-catppuccin-subtext0"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </OptimizedMotion>
);

const Experience = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <SectionHeading accent="ARE YOU SERIOUS ABOUT?" title="MY EXPERIENCE" className="mb-6" />

        <OptimizedMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-catppuccin-subtext0 text-base md:text-lg leading-relaxed mb-8">
            I'm a Senior Backend & DevOps Engineer with 7+ years spent owning
            mission-critical platforms for venture-backed SaaS, edtech, and
            fintech teams. I specialise in dependable APIs, reliable data
            pipelines, and infrastructure that can be iterated on quickly without
            sacrificing resilience.
          </p>
        </OptimizedMotion>

        <OptimizedMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="glass rounded-xl p-5 md:p-6 mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={18} className="text-catppuccin-mauve" />
              <span className="text-catppuccin-text font-semibold">Key Highlights</span>
            </div>
            <ul className="space-y-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex gap-2 text-catppuccin-subtext0 text-sm">
                  <span className="text-catppuccin-mauve mt-0.5">-</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </OptimizedMotion>

        <OptimizedMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-catppuccin-text font-semibold text-xl mb-6">
            <Briefcase size={20} className="inline mr-2 text-catppuccin-mauve" />
            Employment
          </h3>
        </OptimizedMotion>

        <div className="mb-12">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>

        <OptimizedMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-catppuccin-text font-semibold text-xl mb-6">
            <Briefcase size={20} className="inline mr-2 text-catppuccin-mauve" />
            Contracts & Freelance
          </h3>
        </OptimizedMotion>

        <div>
          {CONTRACTS.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
