import React from 'react';
import { motion } from 'framer-motion';

const OptimizedMotion = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default OptimizedMotion;
