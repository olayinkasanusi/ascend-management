import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OFFERINGS = [
  {
    num: '01 / Bespoke',
    icon: 'tune',
    title: 'Tailored Strategies',
    description: 'Customized blueprints structured strictly around your individual personality, target demographic, private comfort limits, and financial goals. We reject generic agency playbooks.',
    bullets: [
      'Granular demographic & spend-tier analysis',
      'Dynamic PPV price modeling & VIP tiering'
    ]
  },
  {
    num: '02 / Acquisition',
    icon: 'group_add',
    title: 'Subscriber Growth',
    description: 'Precision organic traffic generation, short-form viral funnel architecture, and brand profile optimization that continuously attracts high-LTV, respectful subscribers.',
    bullets: [
      'Multi-platform organic algorithm syndication',
      'High-converting bios, header aesthetics & pinned links'
    ]
  },
  {
    num: '03 / Engagement',
    icon: 'forum',
    title: '24/7 Account Chatting',
    description: 'Highly trained, empathetic, creator-aligned chat specialists engaging fans around the clock. Every interaction preserves your exact tone, maximizes pay-per-view opportunities, and shields you from negativity.',
    bullets: [
      'Creator-verified lexicon & voice playbook',
      'Rapid responses across European, US & Asian time zones'
    ]
  },
  {
    num: '04 / Monetisation',
    icon: 'auto_graph',
    title: 'Content & Monetisation',
    description: 'Personalized shoot schedules and content roadmaps designed to captivate new patrons, elevate lifetime retention, and diversify revenue across tips, customs, and tiered memberships.',
    bullets: [
      'High-efficiency monthly shoot plans (4-8 hours total)',
      'Comprehensive churn prevention & re-engagement campaigns'
    ]
  }
];

export default function OfferingsSection() {
  return (
    <section className="py-space-3xl relative" id="services">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Concierge Capabilities</span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-primary mt-2">
              Engineered For Exponential Value
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
            <p className="text-sm text-on-surface-variant max-w-md">
              Four synchronized operational pillars tailored precisely around each creator's persona, tier, and creative boundaries.
            </p>
            <motion.div whileHover={{ x: 3 }}>
              <Link
                to="/services"
                className="inline-flex items-center text-xs font-semibold text-secondary hover:text-primary mt-2 group"
              >
                View full service methodology
                <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* 2x2 Bento / Frosted Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop">
          {OFFERINGS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 5.5 + idx * 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.6,
                },
                opacity: { duration: 0.5, delay: idx * 0.12 },
              }}
              whileHover={{ y: -10, scale: 1.015, transition: { duration: 0.25 } }}
              className="glass-card-interactive rounded-[20px] p-space-xl flex flex-col justify-between group cursor-default shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-space-lg">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: idx * 0.4,
                    }}
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    className="w-12 h-12 rounded-[14px] bg-secondary-fixed/50 border border-tertiary-fixed-dim/80 flex items-center justify-center transition-colors group-hover:bg-secondary-fixed/80 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-secondary text-2xl">{item.icon}</span>
                  </motion.div>
                  <span className="text-xs font-semibold text-outline tracking-widest uppercase">{item.num}</span>
                </div>
                <h3 className="font-editorial text-2xl font-semibold text-primary mb-space-xs group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-space-md">
                  {item.description}
                </p>
              </div>
              <ul className="space-y-2 pt-space-sm border-t border-outline-variant/30 text-xs text-on-surface">
                {item.bullets.map((b, bIdx) => (
                  <motion.li
                    key={bIdx}
                    whileHover={{ x: 2 }}
                    className="flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
