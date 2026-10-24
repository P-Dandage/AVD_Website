import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, y = 30, className, once = true }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once, amount: 0.2 }}
      transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <div className="flex-grow flex items-center justify-center py-20">
      <Reveal>
        <h1 className="text-4xl font-bold text-avdBlue">Welcome to AVD Machine Tools</h1>
      </Reveal>
    </div>
  );
}