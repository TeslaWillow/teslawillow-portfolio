import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress Atom
 * A thin progress bar at the top of the viewport.
 */
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // useSpring suaviza el movimiento para que no sea brusco
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-white z-60 origin-left shadow-[0_0_10px_#fff]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;