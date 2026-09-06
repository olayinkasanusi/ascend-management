import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: '"Before Ascend, I was working 14 hours every single day answering DMs and feeling completely drained. Within two months, revenue tripled while my active work dropped to just shooting once a week."',
    author: 'Elena V.',
    role: 'Lifestyle & Fitness Creator',
    badge: 'Top 0.1%'
  },
  {
    quote: '"The boundary management was what sold me. They never once pushed me to produce content I wasn\'t comfortable with. Their chat team matches my cadence and humor so well fans never notice a difference."',
    author: 'Camille M.',
    role: 'Fashion & Editorial Creator',
    badge: '5.2x Revenue'
  },
  {
    quote: '"Ascend transformed my creative endeavor into a high-functioning enterprise. Professionalism, rapid reporting, and total confidentiality. Truly a luxury management experience."',
    author: 'Sophia R.',
    role: 'Cosplay & Modeling',
    badge: 'Top 0.05%'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-space-3xl relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-space-2xl"
        >
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Creator Proof</span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-primary mt-2">
            Voices of Elevation
          </h2>
          <p className="text-sm text-on-surface-variant mt-2">
            Protected identities, authentic testimonies from partners in the top percentile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                y: {
                  duration: 4.8 + idx * 0.7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.5,
                },
                opacity: { duration: 0.5, delay: idx * 0.15 },
              }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
              className="glass-card-interactive rounded-[20px] p-space-xl flex flex-col justify-between cursor-default shadow-md hover:shadow-xl"
            >
              <div className="mb-space-lg">
                <div className="flex text-secondary mb-space-md gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.25, rotate: 10 }}
                      className="material-symbols-outlined text-sm material-symbols-fill inline-block"
                    >
                      star
                    </motion.span>
                  ))}
                </div>
                <p className="text-sm text-on-surface italic leading-relaxed">
                  {item.quote}
                </p>
              </div>
              <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-primary">{item.author}</div>
                  <div className="text-xs text-outline">{item.role}</div>
                </div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-2.5 py-1 rounded-full bg-secondary-fixed/50 text-primary text-xs font-semibold"
                >
                  {item.badge}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
