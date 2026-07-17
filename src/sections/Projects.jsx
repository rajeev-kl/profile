import React from 'react';
import SectionHeading from '../components/SectionHeading';
import OptimizedMotion from '../components/OptimizedMotion';
import { PROJECTS } from '../data/projects';
import { ChevronRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => (
  <OptimizedMotion
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
    className="h-full"
  >
    <div className="card h-full flex flex-col">
      <div className="mb-3">
        <h3 className="text-catppuccin-text font-bold text-lg">{project.title}</h3>
        <p className="text-catppuccin-overlay0 text-xs uppercase tracking-wider">
          {project.period}
        </p>
      </div>

      <p className="text-catppuccin-subtext0 text-sm mb-4">{project.summary}</p>

      <ul className="space-y-1.5 mb-4 flex-1">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-catppuccin-subtext0 text-xs">
            <ChevronRight size={12} className="mt-0.5 flex-shrink-0 text-catppuccin-mauve" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-catppuccin-surface1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs rounded-full bg-catppuccin-surface1 text-catppuccin-overlay0"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </OptimizedMotion>
);

const Projects = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <SectionHeading accent="ARE YOU CURIOUS ABOUT MY WORK?" title="PROJECTS" className="mb-6" />

      <OptimizedMotion
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-catppuccin-subtext0 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
          I partner with founders and product teams to deliver dependable backends,
          AI copilots, and deployment automation. Each engagement here shipped to
          production, balancing data modeling, systems design, and hands-on cloud/CI
          plumbing to unlock customer wins fast.
        </p>
      </OptimizedMotion>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
