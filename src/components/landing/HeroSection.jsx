import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../../assets/hero-workspace.png';

export default function HeroSection({ onExploreApproach, onScaleGrowth }) {
  return (
    <section className="relative pt-space-2xl md:pt-space-3xl pb-space-3xl overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Category Chip */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/40 border border-secondary/30 text-primary-container mb-space-lg shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">PRIVATE CREATOR MANAGEMENT</span>
            </motion.div>

            {/* Editorial Headline with subtle staggered entrance */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight mb-space-lg leading-[1.15]"
            >
              Your individuality.<br />
              Our expertise.<br />
              <span className="italic font-normal text-secondary">Your growth.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="text-base sm:text-lg text-on-surface-variant max-w-xl mb-space-2xl leading-relaxed"
            >
              We help elite creators scale their revenue and subscriber base through tailored strategies, 24/7 empathetic engagement, and absolute respect for your creative boundaries.
            </motion.p>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto mb-space-2xl"
            >
              <motion.button
                animate={{
                  boxShadow: [
                    '0 4px 14px rgba(69, 40, 60, 0.25)',
                    '0 8px 26px rgba(123, 83, 92, 0.45)',
                    '0 4px 14px rgba(69, 40, 60, 0.25)'
                  ],
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onScaleGrowth}
                className="inline-flex items-center justify-center px-space-xl py-3.5 bg-primary-container text-surface text-sm font-semibold rounded-[14px] text-center cursor-pointer"
              >
                Scale Your Growth
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={onExploreApproach}
                className="inline-flex items-center justify-center px-space-lg py-3.5 bg-surface/70 border border-tertiary-fixed-dim text-primary text-sm font-semibold rounded-[14px] hover:bg-secondary-fixed/30 backdrop-blur-md transition-colors text-center cursor-pointer"
              >
                Explore Our Approach
              </motion.button>
            </motion.div>

            {/* Trust Badges Under Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-space-md border-t border-outline-variant/40 w-full flex flex-wrap items-center gap-x-space-xl gap-y-space-sm text-xs text-on-surface-variant"
            >
              {[
                { icon: 'verified_user', label: '100% Creator Autonomy' },
                { icon: 'lock', label: 'Private & Confidential' },
                { icon: 'trending_up', label: 'Top 0.5% Trajectories' }
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 cursor-default"
                >
                  <span className="material-symbols-outlined text-secondary text-lg">{badge.icon}</span>
                  <span className="font-semibold text-primary">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual Editorial Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-space-xl lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft Ambient Backlight */}
              <motion.div
                animate={{
                  opacity: [0.6, 0.85, 0.6],
                  scale: [1, 1.03, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-4 bg-gradient-to-tr from-secondary-container/40 to-tertiary-fixed/40 rounded-[28px] blur-xl"
              />

              {/* Main Editorial Image Frame */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="relative rounded-[22px] p-2.5 bg-surface/85 border border-tertiary-fixed-dim/70 shadow-2xl backdrop-blur-md overflow-hidden group"
              >
                <img
                  alt="Ascend Management Editorial Workspace"
                  className="w-full h-[440px] sm:h-[480px] object-cover rounded-[18px] transition-transform duration-700 group-hover:scale-[1.03]"
                  src={heroImg}
                />

                {/* Floating Glass Metric Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -7, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.6, duration: 0.5 },
                    scale: { delay: 0.6, type: 'spring', stiffness: 280, damping: 22 },
                    y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  whileHover={{ scale: 1.04, y: -9 }}
                  className="absolute bottom-6 left-6 right-6 glass-container-elevated rounded-[18px] p-4 flex items-center justify-between border border-tertiary-fixed-dim/80 shadow-lg cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-10 h-10 rounded-full bg-secondary-fixed/60 flex items-center justify-center text-primary shadow-sm"
                    >
                      <span className="material-symbols-outlined text-secondary text-xl">query_stats</span>
                    </motion.div>
                    <div>
                      <div className="text-[11px] font-semibold text-outline uppercase tracking-wider">Verified Benchmark</div>
                      <div className="text-sm font-semibold text-primary">Over 4.8x Avg. Elevation</div>
                    </div>
                  </div>
                  <span className="font-editorial text-2xl text-secondary font-bold">99.4%</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
