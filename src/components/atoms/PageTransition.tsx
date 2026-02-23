import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial State (Start slightly below and transparent)
      animate={{ opacity: 1, y: 0 }}  // Final State (Fully visible and in place)
      exit={{ opacity: 0, y: -20 }}   // Exit State (Fade out and move up)
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier 
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;