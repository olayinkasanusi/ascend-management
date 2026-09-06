import React from 'react';
import { motion } from 'framer-motion';
import ChatHubMockup from './ChatHubMockup';

export default function ChattingService() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center scroll-mt-28" id="chatting">
      {/* Content Column (Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="lg:col-span-6 space-y-space-md"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/50 border border-outline-variant/40">
          <span className="text-xs font-semibold text-secondary tracking-wider uppercase">03 / ENGAGEMENT & CONVERSION</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl text-primary leading-tight">
          24/7 Bespoke Account Chatting
        </h2>
        <div className="space-y-space-sm text-sm sm:text-base text-on-surface-variant leading-relaxed">
          <p>
            True fan loyalty requires emotional nuance, immediate responsiveness, and complete tonal authenticity. Our specialized chat directors are immersion-trained on your individual phrasing, vocal cadence, and storytelling.
          </p>
          <p>
            Operating seamlessly across global time zones, our team delivers high-ticket pay-per-view conversion and bespoke fan intimacy while you sleep—with absolute zero tolerance for boundary violations.
          </p>
        </div>

        {/* Key Pillars */}
        <div className="space-y-2.5 pt-space-xs text-sm font-medium text-on-surface">
          {[
            'Trained chat specialists steeped in creator voice & humor',
            'Continuous subscriber tiering & VIP custom relationship nurturing',
            'Real-time boundary shielding: toxic patrons filtered instantly'
          ].map((pillar, idx) => (
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
              <span>{pillar}</span>
            </motion.div>
          ))}
        </div>

        {/* Stat Chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap gap-3 pt-space-sm"
        >
          <motion.span whileHover={{ scale: 1.03 }} className="inline-flex items-center px-4 py-2 rounded-full glass-container text-xs font-semibold text-primary cursor-default">
            <span className="material-symbols-outlined text-secondary mr-2 text-base">forum</span>
            Average Response Time &lt; 90s
          </motion.span>
          <motion.span whileHover={{ scale: 1.03 }} className="inline-flex items-center px-4 py-2 rounded-full glass-container text-xs font-semibold text-primary cursor-default">
            <span className="material-symbols-outlined text-secondary mr-2 text-base">shield</span>
            Active Sentiment & Harassment Filter
          </motion.span>
        </motion.div>
      </motion.div>

      {/* UI Graphic Mockup Column (Right) */}
      <ChatHubMockup />
    </section>
  );
}
