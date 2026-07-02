import React from 'react';
import SectionHeading from '../components/SectionHeading';
import OptimizedMotion from '../components/OptimizedMotion';
import { SKILLS, OVERVIEW } from '../data/skills';

const AboutMe = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, ease: 'easeInOut' },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <SectionHeading accent="WANT TO KNOW MORE?" title="ABOUT ME" className="mb-8" />

      <OptimizedMotion
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-catppuccin-subtext0 text-base md:text-lg leading-relaxed max-w-4xl mb-8 whitespace-pre-line">
          {OVERVIEW}
        </div>
      </OptimizedMotion>

      <OptimizedMotion
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-catppuccin-subtext0 text-base md:text-lg mb-6">
          Here's a quick peek at the tools and platforms I lean on the most in
          day-to-day delivery:
        </p>
      </OptimizedMotion>

      <OptimizedMotion
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        {SKILLS.map((skill) => (
          <OptimizedMotion key={skill.name} variants={item}>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-catppuccin-surface0 border border-catppuccin-surface1 hover:border-catppuccin-mauve/30 transition-colors">
              <span className="w-2 h-2 rounded-full bg-catppuccin-mauve flex-shrink-0" />
              <span className="text-catppuccin-text text-sm md:text-base">
                {skill.name}
              </span>
            </div>
          </OptimizedMotion>
        ))}
      </OptimizedMotion>
    </section>
  );
};

export default AboutMe;
