import React from 'react';
import OptimizedMotion from '../components/OptimizedMotion';
import { Linkedin, Github, FileText } from 'lucide-react';

const LINKS = [
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/rajeev-k-l/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/rajeev-kl',
    icon: Github,
  },
  {
    label: 'Resume',
    url: 'https://drive.google.com/file/d/1VQiO2iw7QjnP7e9oR1oE_zoOicBzVOr6/view',
    icon: FileText,
  },
];

const SocialMedia = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-8 lg:px-16">
      <OptimizedMotion
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="flex justify-center gap-4 md:gap-6 flex-wrap"
      >
        {LINKS.map((link) => (
          <OptimizedMotion
            key={link.label}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl glass border border-catppuccin-surface1 hover:border-catppuccin-mauve/50 text-catppuccin-text font-medium transition-all duration-300 group"
            >
              <link.icon
                size={20}
                className="text-catppuccin-mauve group-hover:text-catppuccin-text transition-colors"
              />
              {link.label}
            </a>
          </OptimizedMotion>
        ))}
      </OptimizedMotion>
    </section>
  );
};

export default SocialMedia;
