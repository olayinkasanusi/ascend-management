import React from 'react';
import { motion } from 'framer-motion';
import contentImg from '../../assets/content-editorial.png';

export default function MonetisationService() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center scroll-mt-28" id="monetisation">
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
              alt="Curated Content Flatlay & Calendar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              src={contentImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
          </div>

          {/* Floating Tag */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-6 right-6 glass-container-elevated px-4 py-2 rounded-full flex items-center gap-2 shadow-md cursor-default"
          >
            <span className="material-symbols-outlined text-secondary text-base">calendar_month</span>
            <span className="text-xs font-semibold text-primary">Bespoke Production Calendars</span>
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
          <span className="text-xs font-semibold text-secondary tracking-wider uppercase">04 / RETENTION & VALUE</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl text-primary leading-tight">
          Content Production & Monetisation
        </h2>
        <div className="space-y-space-sm text-sm sm:text-base text-on-surface-variant leading-relaxed">
          <p>
            Creator burnout is the primary destroyer of enterprise value. We replace chaotic daily shooting with meticulously pre-planned editorial shot lists designed to produce an entire month of assets in just 4 to 8 focused hours.
          </p>
          <p>
            Our release desk choreographs dynamic drip releases, seasonal VIP vaults, and tiered episodic storylines that elevate regular subscribers into dedicated, high-paying collectors.
          </p>
        </div>

        {/* Key Pillars */}
        <div className="space-y-2.5 pt-space-xs text-sm font-medium text-on-surface">
          {[
            'Minimal shoot time for maximum output (dedicated anti-burnout pacing)',
            'Custom digital media kits & premier brand collaboration management',
            'Churn prevention & automated tiered re-engagement workflows'
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
            <span className="material-symbols-outlined text-secondary mr-2 text-base">schedule</span>
            Only 4–8 Hours Monthly Creator Shooting Time
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
