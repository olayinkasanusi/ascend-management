import React from 'react';
import { motion } from 'framer-motion';

const COMPARISONS = [
  {
    feature: 'Private Key Vaults & Data Security',
    generic: 'Shared staff folders, loose logins',
    ascend: 'Zero-Trust Encrypted Hardware, NDAs'
  },
  {
    feature: 'Content Pressure & Cadence',
    generic: 'Daily demands, aggressive burnout',
    ascend: 'Curated 4–8 hr monthly shoot roadmap'
  },
  {
    feature: 'Financial Auditing & Payouts',
    generic: 'Opaque splits, delayed reporting',
    ascend: 'Verifiable, transparent ledger audits'
  },
  {
    feature: 'Dedicated Account Concierge',
    generic: 'Generic offshore rotation pool',
    ascend: 'Bespoke, creator-trained direct lead'
  }
];

export default function ComparisonMatrix() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-space-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-space-xl"
      >
        <h3 className="font-editorial text-2xl sm:text-3xl text-primary mb-2">The Standard of Elevation</h3>
        <p className="text-sm text-on-surface-variant">Why discerning creators transition from mass-market agencies to Ascend Management.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="glass-container-elevated rounded-2xl overflow-hidden border border-tertiary-fixed-dim shadow-xl"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/40 bg-surface-container-low/80">
                <th className="p-space-lg text-sm font-semibold text-primary w-1/3">Core Capability</th>
                <th className="p-space-lg text-sm font-medium text-outline w-1/3">Generic Mass Agencies</th>
                <th className="p-space-lg text-sm font-bold text-primary bg-secondary-fixed/40 w-1/3">The Ascend Bespoke Standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30 text-xs sm:text-sm">
              {COMPARISONS.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.08 }}
                  className="hover:bg-surface-container-low/50 transition-colors"
                >
                  <td className="p-space-lg font-semibold text-on-surface">{row.feature}</td>
                  <td className="p-space-lg text-on-surface-variant">{row.generic}</td>
                  <td className="p-space-lg font-bold text-primary bg-secondary-fixed/15">{row.ascend}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
