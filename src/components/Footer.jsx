import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="w-full bg-primary-container text-surface border-t border-outline-variant/20 transition-all duration-200"
    >
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-space-2xl">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop pb-space-2xl border-b border-on-primary-container/20">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-6 space-y-3"
          >
            <div className="flex items-center gap-space-xs">
              <motion.span
                whileHover={{ scale: 1.1, rotate: 6 }}
                className="w-8 h-8 rounded-full bg-surface text-primary flex items-center justify-center font-editorial text-lg font-semibold shadow-sm cursor-default"
              >
                A
              </motion.span>
              <span className="font-editorial text-2xl font-semibold text-surface">
                Ascend Management
              </span>
            </div>
            <p className="text-surface-dim text-sm max-w-md leading-relaxed">
              The private executive office for premier digital creators. Scaling autonomous careers through bespoke monetization, organic reach, and 24/7 engagement stewardship.
            </p>
            <div className="pt-2">
              <motion.span
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/10 border border-surface/20 text-surface text-xs font-medium cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Private Client Desk Active 24/7
              </motion.span>
            </div>
          </motion.div>

          {/* Links Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 flex flex-col sm:flex-row justify-between gap-space-lg"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-secondary-container mb-space-sm">
                Governance & Security
              </div>
              <ul className="space-y-2.5 text-xs text-surface-dim">
                {[
                  { text: 'Privacy Policy', alert: 'Ascend Management Confidentiality Charter: All creator communications and assets are legally protected under mutual strict NDA.' },
                  { text: 'Confidentiality Charter', alert: 'Confidentiality Charter: Zero third-party tracking, sovereign password retention, encrypted local vaults.', highlight: true },
                  { text: 'Terms of Representation', alert: 'Terms of Representation: Non-exclusive, creator-first, zero IP lock-in agreement.' }
                ].map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 3 }}>
                    <a
                      href={`#${item.text.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={(e) => { e.preventDefault(); alert(item.alert); }}
                      className={`transition-colors cursor-pointer ${item.highlight ? 'text-surface font-medium hover:text-secondary-container' : 'hover:text-surface'}`}
                    >
                      {item.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-secondary-container mb-space-sm">
                Ethos & Access
              </div>
              <ul className="space-y-2.5 text-xs text-surface-dim">
                <motion.li whileHover={{ x: 3 }}>
                  <a
                    href="#ethics"
                    onClick={(e) => { e.preventDefault(); alert("Creator Code of Ethics: Unwavering boundary protection, transparent ledgers, anti-burnout pacing."); }}
                    className="hover:text-surface transition-colors cursor-pointer"
                  >
                    Creator Code of Ethics
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 3 }}>
                  <Link to="/apply" className="block text-left hover:text-surface transition-colors">
                    Schedule Consultation
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 3 }}>
                  <Link to="/services" className="block text-left hover:text-surface transition-colors">
                    Concierge Capabilities
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-xs text-surface-dim">
          <div>
            © 2025 Ascend Management. All rights reserved. Bespoke & Confidential Creator Elevation.
          </div>
          <div className="flex items-center gap-space-md">
            {['London', 'New York', 'Paris'].map((city, idx) => (
              <React.Fragment key={city}>
                <motion.span whileHover={{ scale: 1.1, color: '#fff8f3' }} className="hover:text-surface transition-colors cursor-default">
                  {city}
                </motion.span>
                {idx < 2 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
