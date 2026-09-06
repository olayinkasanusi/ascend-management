import React from 'react';
import { motion } from 'framer-motion';

const PILLARS = [
  {
    icon: 'shield',
    title: 'Zero-Compromise Safety',
    description: 'Creator-retained password integrity, strict non-disclosure legal charters, and zero pressure on content styles. Your boundaries are codified into our operating manuals.',
    actionLabel: 'Rigorous Protocols'
  },
  {
    icon: 'palette',
    title: 'Bespoke Brand Identity',
    description: 'We amplify your authentic persona rather than imposing a copy-paste aesthetic. Your tone of voice, visual direction, and exclusive narrative stay entirely unadulterated.',
    actionLabel: 'Tailored Direction'
  },
  {
    icon: 'spa',
    title: 'Anti-Burnout Pacing',
    description: 'Sustainable career design through strategic batching, full concierge inbox management, and dedicated rest schedules. Reclaim your personal life while earnings scale.',
    actionLabel: 'Sustainable Vitality'
  }
];

export default function PhilosophySection() {
  return (
    <section className="py-space-3xl relative" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-space-2xl"
        >
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">The Ascend Philosophy</span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-primary mt-2 mb-space-md">
            Curated Growth Without Creative Compromise
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Each creator’s voice, comfort, and boundaries guide our approach. We reject aggressive, generic formulas in favor of high-touch bespoke stewardship that elevates long-term brand equity.
          </p>
        </motion.div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="glass-card-interactive rounded-[20px] p-space-xl flex flex-col justify-between group cursor-default"
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="w-12 h-12 rounded-xl bg-secondary-fixed/50 border border-secondary-fixed-dim flex items-center justify-center text-primary mb-space-lg"
                >
                  <span className="material-symbols-outlined text-secondary text-2xl">{pillar.icon}</span>
                </motion.div>
                <h3 className="font-editorial text-xl font-semibold text-primary mb-space-xs group-hover:text-secondary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm border-t border-outline-variant/30 flex items-center text-xs font-semibold text-primary">
                <span>{pillar.actionLabel}</span>
                <span className="material-symbols-outlined ml-1 text-sm text-secondary group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
