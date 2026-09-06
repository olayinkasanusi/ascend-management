import React from 'react';
import { motion } from 'framer-motion';

export default function IntakeHeader() {
  return (
    <section className="relative pt-space-2xl md:pt-space-3xl pb-space-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
      {/* Discreet Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed/50 border border-outline-variant/60 text-primary text-xs font-semibold uppercase tracking-widest mb-space-md shadow-sm cursor-default"
      >
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
        STRICTLY CONFIDENTIAL INTAKE • ROSTER APPLICATIONS OPEN
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-primary mb-space-sm tracking-tight"
      >
        Join Ascend Management.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed"
      >
        Tell us a bit about yourself, your current goals, and where you want to take your brand.
      </motion.p>

      {/* Trust Badges Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-space-lg pt-space-md border-t border-tertiary-fixed-dim/40 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs font-semibold text-secondary"
      >
        {[
          { icon: 'lock', label: '100% Bilateral NDA Protected' },
          { icon: 'verified_user', label: 'Zero Obligation Consultation' },
          { icon: 'schedule', label: 'Direct Executive Review Within 24 Hours' }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-default"
          >
            <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
