import React from 'react';
import { motion } from 'framer-motion';

const ASSURANCES = [
  {
    icon: 'groups',
    tag: 'Exclusivity',
    title: 'Zero Roster Overcrowding',
    desc: 'Strictly capped at 15 active creators per talent director to assure white-glove focus.'
  },
  {
    icon: 'shield',
    tag: 'Sovereignty',
    title: 'Full IP Ownership',
    desc: 'You retain 100% master copyright, login credentials, and creative autonomy indefinitely.'
  },
  {
    icon: 'timer',
    tag: 'Speed',
    title: '24-Hour Review Turnaround',
    desc: 'Our executive committee inspects submissions daily and reaches out via encrypted channels.'
  }
];

export default function AssuranceCards() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
      {ASSURANCES.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            y: {
              duration: 4.5 + idx * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: idx * 0.6,
            },
            opacity: { duration: 0.5, delay: idx * 0.12 },
          }}
          whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.2 } }}
          className="glass-card-interactive rounded-2xl p-5 border border-tertiary-fixed-dim/60 flex flex-col justify-between cursor-default shadow-md hover:shadow-xl"
        >
          <div className="flex items-center justify-between mb-3">
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 3 + idx,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: idx * 0.4,
              }}
              whileHover={{ scale: 1.2, rotate: 6 }}
              className="w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center text-primary shadow-sm"
            >
              <span className="material-symbols-outlined text-lg text-secondary">{card.icon}</span>
            </motion.div>
            <span className="text-xs text-secondary font-semibold">{card.tag}</span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary mb-1">{card.title}</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">{card.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
