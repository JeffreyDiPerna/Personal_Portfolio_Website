'use client';

import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(10px)"
  },
  enter: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    filter: "blur(10px)",
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
