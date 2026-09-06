import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientGlows() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Upper-left dusty rose orb */}
      <motion.div
        animate={{
          x: [-20, 25, -15, -20],
          y: [-15, 30, -10, -15],
          scale: [1, 1.08, 0.95, 1],
          opacity: [0.3, 0.45, 0.32, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-1/4 -translate-x-1/2 -top-40 w-[650px] h-[650px] bg-secondary-container/35 rounded-full blur-[140px] pointer-events-none transform-gpu"
      />

      {/* Mid-right champagne orb */}
      <motion.div
        animate={{
          x: [15, -30, 20, 15],
          y: [20, -25, 15, 20],
          scale: [0.95, 1.05, 0.92, 0.95],
          opacity: [0.35, 0.48, 0.3, 0.35],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-1/3 right-0 translate-x-1/3 w-[580px] h-[580px] bg-tertiary-fixed/40 rounded-full blur-[130px] pointer-events-none transform-gpu"
      />

      {/* Lower-left dusty rose dim orb */}
      <motion.div
        animate={{
          x: [-15, 30, -20, -15],
          y: [25, -20, 15, 25],
          scale: [1, 1.1, 0.96, 1],
          opacity: [0.22, 0.34, 0.2, 0.22],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-10 left-10 w-[520px] h-[520px] bg-secondary-fixed-dim/25 rounded-full blur-[120px] pointer-events-none transform-gpu"
      />

      {/* Bottom right subtle glow */}
      <motion.div
        animate={{
          x: [25, -20, 15, 25],
          y: [-20, 15, -25, -20],
          scale: [0.92, 1.06, 0.95, 0.92],
          opacity: [0.18, 0.28, 0.16, 0.18],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute -bottom-20 right-1/4 w-[480px] h-[480px] bg-primary-fixed/20 rounded-full blur-[130px] pointer-events-none transform-gpu"
      />
    </div>
  );
}
