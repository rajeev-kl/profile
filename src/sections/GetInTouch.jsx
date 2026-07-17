import React from 'react';
import OptimizedMotion from '../components/OptimizedMotion';
import { Mail } from 'lucide-react';

const GetInTouch = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <OptimizedMotion
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative rounded-3xl glass overflow-hidden text-center px-6 md:px-16 py-12 md:py-20">
          <div className="absolute top-10 left-10 w-48 h-48 bg-catppuccin-mauve/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-catppuccin-blue/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-catppuccin-green/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-catppuccin-mauve font-medium tracking-wider text-sm md:text-base uppercase mb-4">
              WHAT'S NEXT?
            </p>
            <h2 className="text-catppuccin-text font-bold text-3xl md:text-5xl mb-6">
              GET IN TOUCH
            </h2>
            <p className="text-catppuccin-subtext0 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              I'm actively seeking exciting new opportunities to architect the next
              generation of backend systems! My inbox is wide open - whether you've
              got a challenging project, an amazing opportunity, or want to discuss
              how I can elevate your tech stack, I'm ready to dive in!
            </p>
            <a
              href="mailto:rajeev@prodot.in"
              className="inline-flex items-center gap-2 px-8 py-4 bg-catppuccin-mauve hover:bg-catppuccin-mauve/80 text-catppuccin-base font-bold rounded-xl transition-all duration-300 text-lg"
            >
              <Mail size={20} />
              Say Hello!
            </a>
          </div>
        </div>
      </OptimizedMotion>
    </section>
  );
};

export default GetInTouch;
