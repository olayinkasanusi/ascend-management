import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ConfidentialityBanner() {
  return (
    <section className="py-space-3xl relative" id="approach">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative rounded-[24px] overflow-hidden p-space-xl md:p-space-3xl bg-gradient-to-br from-secondary-fixed/45 via-surface-bright to-tertiary-fixed/35 border border-tertiary-fixed-dim shadow-xl"
        >
          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/90 border border-secondary/30 text-primary mb-space-md shadow-sm"
            >
              <span className="material-symbols-outlined text-sm text-secondary">lock_clock</span>
              <span className="text-xs font-semibold tracking-wider">THE ASCEND CONFIDENTIALITY STANDARD</span>
            </motion.div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-primary mb-space-md">
              Your Privacy Is Non-Negotiable
            </h2>
            <p className="text-base text-on-surface-variant mb-space-xl leading-relaxed">
              We operate with the discretion of a private family office. No shared logins, zero exposure of personal identifiers, and a legally enforceable Confidentiality Charter signed prior to any onboarding.
            </p>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mb-space-xl">
              {[
                { icon: 'key', title: 'Creator-Owned', desc: 'You hold 100% root access' },
                { icon: 'rule', title: 'Boundaries Matrix', desc: 'Customized hard limits' },
                { icon: 'encrypted', title: 'Encrypted Vaults', desc: 'Military-grade asset storage' }
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-container-elevated rounded-[16px] p-space-md border border-tertiary-fixed-dim/70 shadow-sm cursor-default"
                >
                  <motion.span
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    className="material-symbols-outlined text-secondary mb-1 text-2xl inline-block"
                  >
                    {badge.icon}
                  </motion.span>
                  <div className="text-sm font-semibold text-primary">{badge.title}</div>
                  <div className="text-xs text-outline">{badge.desc}</div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ x: 3 }}>
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group cursor-pointer"
              >
                <span className="underline underline-offset-4 decoration-secondary">Read Our Full Confidentiality Charter & Apply</span>
                <span className="material-symbols-outlined text-secondary group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
