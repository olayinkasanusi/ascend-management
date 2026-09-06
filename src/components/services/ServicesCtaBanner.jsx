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
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed/70 border border-outline-variant/40 text-xs font-semibold text-secondary uppercase tracking-widest mb-space-md cursor-default"
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
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="inline-block"
        >
          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-primary-container text-surface px-8 py-4 rounded-xl text-sm font-semibold hover:shadow-plum-glow-lg transition-shadow border border-primary-container"
          >
            Apply for Representation Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
