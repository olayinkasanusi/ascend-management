import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ServicesCtaBanner() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-space-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative rounded-2xl glass-container-elevated border border-tertiary-fixed-dim p-space-2xl md:p-space-3xl text-center overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 ambient-glow-rose pointer-events-none -z-10"></div>
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed/70 border border-outline-variant/40 text-xs font-semibold text-secondary uppercase tracking-widest mb-space-md cursor-default shadow-sm"
        >
          Selective Roster Representation
        </motion.span>
        <h2 className="font-editorial text-3xl sm:text-5xl text-primary max-w-2xl mx-auto mb-space-sm leading-tight">
          Ready to scale your revenue?
        </h2>
        <p className="text-base text-on-surface-variant max-w-xl mx-auto mb-space-xl">
          Inquire confidentially. We review creator applications on a selective, rolling basis.
        </p>
        <motion.div
          animate={{
            scale: [1, 1.025, 1],
            boxShadow: [
              '0 4px 14px rgba(69, 40, 60, 0.25)',
              '0 10px 32px rgba(123, 83, 92, 0.45)',
              '0 4px 14px rgba(69, 40, 60, 0.25)'
            ],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block rounded-xl"
        >
          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-primary-container text-surface px-8 py-4 rounded-xl text-sm font-semibold border border-primary-container"
          >
            Apply for Representation Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
