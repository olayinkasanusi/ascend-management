import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function QuickApplyForm({ onOpenModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    trajectory: '$15,000 – $40,000 / mo',
    socialLink: '',
    goals: '',
    ndaAgreed: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.ndaAgreed) {
      alert("Please accept the confidentiality charter agreement.");
      return;
    }
    onOpenModal({
      name: formData.name,
      email: formData.email,
      handle: formData.socialLink || formData.name,
      type: 'Quick Application'
    });
  };

  return (
    <section className="py-space-3xl relative" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="glass-container-elevated rounded-[24px] p-space-xl md:p-space-3xl max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="text-center max-w-xl mx-auto mb-space-2xl">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Strictly Confidential</span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-primary mt-2 mb-space-xs">
              Apply for Representation
            </h2>
            <p className="text-sm text-on-surface-variant">
              Ready to elevate your trajectory without compromising your peace? Tell us about your platform. We review applications on a selective, rolling basis.
            </p>
          </div>

          <form className="space-y-space-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div>
                <label className="block text-xs font-semibold text-primary mb-1.5">Creator / Stage Name</label>
                <input
                  className="w-full h-12 px-4 rounded-[12px] bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-sm focus:border-primary focus:ring-2 focus:ring-secondary-fixed/50 transition-all outline-none"
                  placeholder="e.g. @auroracreative"
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary mb-1.5">Confidential Email</label>
                <input
                  className="w-full h-12 px-4 rounded-[12px] bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-sm focus:border-primary focus:ring-2 focus:ring-secondary-fixed/50 transition-all outline-none"
                  placeholder="concierge@ascend.com"
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div>
                <label className="block text-xs font-semibold text-primary mb-1.5">Current Monthly Gross Trajectory</label>
                <select
                  className="w-full h-12 px-4 rounded-[12px] bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-sm focus:border-primary focus:ring-2 focus:ring-secondary-fixed/50 transition-all outline-none text-on-surface"
                  value={formData.trajectory}
                  onChange={(e) => setFormData({...formData, trajectory: e.target.value})}
                >
                  <option>$5,000 – $15,000 / mo</option>
                  <option>$15,000 – $40,000 / mo</option>
                  <option>$40,000 – $100,000+ / mo</option>
                  <option>Pre-Launch / Emerging Talent</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary mb-1.5">Primary Social Channel Link</label>
                <input
                  className="w-full h-12 px-4 rounded-[12px] bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-sm focus:border-primary focus:ring-2 focus:ring-secondary-fixed/50 transition-all outline-none"
                  placeholder="instagram.com/... or tiktok.com/..."
                  type="text"
                  value={formData.socialLink}
                  onChange={(e) => setFormData({...formData, socialLink: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-primary mb-1.5">Primary Goals & Specific Boundaries</label>
              <textarea
                className="w-full p-4 rounded-[12px] bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-sm focus:border-primary focus:ring-2 focus:ring-secondary-fixed/50 transition-all outline-none resize-none"
                placeholder="Tell us what you wish to outsource (chatting, marketing, strategy) and any specific non-negotiables..."
                rows={3}
                value={formData.goals}
                onChange={(e) => setFormData({...formData, goals: e.target.value})}
              ></textarea>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input
                className="mt-1 w-4 h-4 rounded border-tertiary-fixed-dim text-primary-container focus:ring-secondary-container cursor-pointer"
                id="nda-agree"
                required
                type="checkbox"
                checked={formData.ndaAgreed}
                onChange={(e) => setFormData({...formData, ndaAgreed: e.target.checked})}
              />
              <label className="text-xs text-on-surface-variant cursor-pointer select-none" htmlFor="nda-agree">
                I understand that all submissions are protected under Ascend’s bilateral non-disclosure agreement and handled with absolute executive confidentiality.
              </label>
            </div>

            <div className="text-center pt-space-md flex flex-col sm:flex-row items-center justify-center gap-4">
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
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-space-2xl py-3.5 bg-primary-container text-surface text-sm font-semibold rounded-[14px] cursor-pointer"
                type="submit"
              >
                Submit Concierge Application
              </motion.button>
              <Link
                to="/apply"
                className="text-xs font-medium text-secondary hover:text-primary underline underline-offset-2"
              >
                Prefer to schedule a direct 30-min strategy call?
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
