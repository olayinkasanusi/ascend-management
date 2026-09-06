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
          transition={{ delay: idx * 0.12, duration: 0.5 }}
          whileHover={{ y: -4, scale: 1.02 }}
          className="glass-card-interactive rounded-2xl p-5 border border-tertiary-fixed-dim/60 flex flex-col justify-between cursor-default"
        >
          <div className="flex items-center justify-between mb-3">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 6 }}
              className="w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center text-primary"
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
