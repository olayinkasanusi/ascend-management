import React from 'react';
import { motion } from 'framer-motion';

const VIP_THREADS = [
  {
    patron: 'Patron #842 (VIP Tier I)',
    spend: '$8,450 Spend',
    message: '"Loved the Parisian archive drop yesterday..."',
    replyTime: '< 45s reply'
  },
  {
    patron: 'Patron #109 (Collector)',
    spend: '$5,200 Spend',
    message: 'Custom Vault PPV Request #04 Unlocked',
    replyTime: '< 80s reply'
  }
];

const STATS = [
  { day: 'Mon', rate: '74%' },
  { day: 'Wed', rate: '82%' },
  { day: 'Fri', rate: '89%' },
  { day: 'Sun', rate: '92%', highlight: true }
];

export default function ChatHubMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="lg:col-span-6 relative"
    >
      <div className="absolute -inset-4 ambient-glow-rose rounded-3xl blur-xl -z-10"></div>

      {/* Mockup Card Container with continuous levitation */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="glass-container-elevated rounded-2xl p-space-lg border border-tertiary-fixed-dim shadow-2xl relative space-y-space-md"
      >
        {/* Header bar of mock UI */}
        <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.15, rotate: 6 }}
              className="w-10 h-10 rounded-full bg-primary-container text-surface flex items-center justify-center font-editorial font-semibold shadow-sm"
            >
              A
            </motion.div>
            <div>
              <h4 className="text-sm font-semibold text-primary leading-tight">Concierge Chat Hub</h4>
              <p className="text-xs text-outline">Live 24/7 Global Desk</p>
            </div>
          </div>
          <motion.span
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-secondary-fixed text-primary font-bold shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
            Active Protocol
          </motion.span>
        </div>

        {/* VIP Message simulated threads with staggered slide */}
        <div className="space-y-space-xs">
          {VIP_THREADS.map((thread, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.15 }}
              whileHover={{ x: 4, scale: 1.01 }}
              className="p-3.5 rounded-xl bg-surface-container-low/80 border border-outline-variant/40 flex items-center justify-between transition-colors hover:bg-surface-container-lowest cursor-default"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-primary">{thread.patron}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-secondary-fixed/70 text-primary font-semibold">{thread.spend}</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1">{thread.message}</p>
              </div>
              <div className="text-right pl-3">
                <span className="text-[11px] font-semibold text-secondary">{thread.replyTime}</span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 ml-auto mt-1"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversion Breakdown Metric Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-4 rounded-xl bg-surface-container/70 border border-outline-variant/40 space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Weekly PPV Conversion Rate</span>
            <span className="text-sm font-bold text-secondary">78.4% Average</span>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-2 text-center">
            {STATS.map((s, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.06, y: -2 }}
                className={`p-2 rounded-lg border transition-shadow ${
                  s.highlight
                    ? 'bg-surface-container-high border-secondary/50 shadow-sm'
                    : 'bg-surface/90 border-outline-variant/30'
                }`}
              >
                <p className={`text-[11px] ${s.highlight ? 'text-secondary font-semibold' : 'text-outline'}`}>{s.day}</p>
                <p className="text-sm font-bold text-primary">{s.rate}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
