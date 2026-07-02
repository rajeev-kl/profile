import React from 'react';
import OptimizedMotion from './OptimizedMotion';

const SectionHeading = ({ accent, title, className = '' }) => {
  return (
    <div className={className}>
      <OptimizedMotion
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-heading-accent">{accent}</p>
      </OptimizedMotion>
      <OptimizedMotion
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="section-heading-title">{title}</h2>
      </OptimizedMotion>
    </div>
  );
};

export default SectionHeading;
