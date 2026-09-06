import React from 'react';
import { motion } from 'framer-motion';
import strategyImg from '../../assets/strategy-moodboard.png';

export default function StrategyService() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center scroll-mt-28" id="strategy">
      {/* Content Column (Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="lg:col-span-6 space-y-space-md"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/50 border border-outline-variant/40">
          <span className="text-xs font-semibold text-secondary tracking-wider uppercase">01 / FOUNDATIONAL BLUEPRINT</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl text-primary leading-tight">
          Bespoke Strategy & Brand Architecture
        </h2>
        <div className="space-y-space-sm text-sm sm:text-base text-on-surface-variant leading-relaxed">
          <p>
            We treat your personal profile as an autonomous high-yield cultural label. Before publishing a single asset, our senior directors craft a confidential master dossier establishing psychological audience resonance and strict privacy protocols.
          </p>
          <p>
            Every revenue stream is engineered around your individual rhythm, ensuring long-term mental wellbeing while systematically positioning your identity within luxury, high-conversion creator niches.
          </p>
        </div>

        {/* Bullet Highlights */}
        <div className="space-y-2.5 pt-space-xs text-sm font-medium text-on-surface">
          {[
            'Creator Comfort Codex & Hard Boundaries codification',
            'Dynamic PPV Tiering & Custom Pricing Models per fan segment',
            'Monthly Valuation, Equity Growth & Tax Optimization Forecasting'
          ].map((bullet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-start gap-2.5 cursor-default"
            >
              <span className="text-secondary text-lg leading-none mt-0.5">✦</span>
              <span>{bullet}</span>
            </motion.div>
          ))}
        </div>

        {/* Stat Chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-space-sm"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full glass-container text-xs font-semibold text-primary">
            <span className="material-symbols-outlined text-secondary mr-2 text-base">verified_user</span>
            100% Boundary Codification Guaranteed
          </span>
        </motion.div>
      </motion.div>

      {/* Visual Column (Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="lg:col-span-6 relative"
      >
        <div className="absolute -inset-4 ambient-glow-rose rounded-3xl blur-xl -z-10"></div>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="glass-container rounded-2xl p-3 relative overflow-hidden group shadow-xl"
        >
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
            <img
              alt="Bespoke Strategy Moodboard"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              src={strategyImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
          </div>

          {/* Floating Pill Tag */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-6 left-6 glass-container-elevated px-4 py-2 rounded-full flex items-center gap-2 shadow-md cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs font-semibold text-primary">Tailored Creator Archetypes</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
