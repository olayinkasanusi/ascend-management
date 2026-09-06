import React from 'react';
import { motion } from 'framer-motion';

const ANCHORS = [
  { href: '#strategy', label: '01. Bespoke Strategy' },
  { href: '#growth', label: '02. Subscriber Growth' },
  { href: '#chatting', label: '03. 24/7 Account Chatting' },
  { href: '#monetisation', label: '04. Content & Monetisation' },
];

export default function ServicesHero() {
  return (
    <section className="relative pt-space-2xl md:pt-space-3xl pb-space-2xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
      {/* Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] ambient-glow-rose pointer-events-none -z-10 rounded-full blur-3xl"
      />

      {/* Eyebrow Tag */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-tertiary-fixed-dim bg-surface/85 backdrop-blur-md mb-space-lg shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
        <span className="text-xs font-semibold text-primary tracking-widest uppercase">CONCIERGE CAPABILITIES & METHODOLOGY</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-primary max-w-4xl mx-auto leading-tight mb-space-md"
      >
        Expertise Tailored to You
      </motion.h1>

      {/* Artistic Dusty Rose Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="w-24 h-1 bg-secondary-fixed-dim mx-auto rounded-full mb-space-lg origin-center"
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-space-2xl leading-relaxed"
      >
        A discreet, comprehensive operational suite built to protect your peace of mind while scaling your enterprise to top-tier valuation.
      </motion.p>

      {/* Anchor Pill Row */}
      <div className="flex flex-wrap items-center justify-center gap-space-sm max-w-3xl mx-auto">
        {ANCHORS.map((anchor, idx) => (
          <motion.a
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.08 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-4 py-2 rounded-full glass-card-interactive text-xs font-semibold text-primary hover:border-secondary transition-all cursor-pointer shadow-sm"
            href={anchor.href}
          >
            {anchor.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
