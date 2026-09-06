import React from 'react';
import { motion } from 'framer-motion';
import growthImg from '../../assets/subscriber-growth.png';

export default function GrowthService() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center scroll-mt-28" id="growth">
      {/* Visual Column (Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="lg:col-span-6 order-2 lg:order-1 relative"
      >
        <div className="absolute -inset-4 ambient-glow-champagne rounded-3xl blur-xl -z-10"></div>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="glass-container rounded-2xl p-3 relative overflow-hidden group shadow-xl"
        >
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
            <img
              alt="Subscriber Growth Workspace"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              src={growthImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
          </div>

          {/* Floating Frosted Metric Card with animated bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 300, damping: 22 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="absolute top-6 right-6 glass-container-elevated p-4 rounded-xl max-w-xs shadow-xl border border-tertiary-fixed-dim/80 cursor-default"
          >
            <div className="flex items-center justify-between gap-4 mb-1">
              <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">Organic Inflow</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-secondary-fixed text-primary font-bold">+420%</span>
            </div>
            <p className="text-xs font-semibold text-primary">Top-Tier Retention Velocity</p>
            <div className="w-full bg-surface-container-high h-2 rounded-full mt-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '84%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                className="bg-secondary h-full rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content Column (Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="lg:col-span-6 order-1 lg:order-2 space-y-space-md"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/50 border border-outline-variant/40">
          <span className="text-xs font-semibold text-secondary tracking-wider uppercase">02 / PATRON ACQUISITION</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl text-primary leading-tight">
          High-Retention Subscriber Growth
        </h2>
        <div className="space-y-space-sm text-sm sm:text-base text-on-surface-variant leading-relaxed">
          <p>
            Audience scale without discretion dilutes premium perceived value. We engineer bespoke top-of-funnel syndication across short-form viral ecosystems, positioning your visual narrative with high-fashion restraint.
          </p>
          <p>
            Our internal acquisition desk filters inbound demographics, deliberately targeting patrons with demonstrated high-disposable-income profiles who respect your boundaries and commit to lasting subscriptions.
          </p>
        </div>

        {/* Key Pillars */}
        <div className="space-y-2.5 pt-space-xs text-sm font-medium text-on-surface">
          {[
            'Algorithmically tuned multi-channel syndication (TikTok, IG Reels, X)',
            'Premium bio and pinned content conversion rate optimization',
            'High-LTV (Lifetime Value) fan targeting & respectful demographic curation'
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-start gap-2.5 cursor-default"
            >
              <span className="text-secondary text-lg leading-none mt-0.5">✦</span>
              <span>{pillar}</span>
            </motion.div>
          ))}
        </div>

        {/* Stat Chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="pt-space-sm"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full glass-container text-xs font-semibold text-primary">
            <span className="material-symbols-outlined text-secondary mr-2 text-base">trending_up</span>
            Top 0.1% Audience Inflow Velocity
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
