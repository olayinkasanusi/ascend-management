import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitWrittenApplicationToBrevo, isBrevoConfigured } from '../../utils/brevo';

const OBJECTIVES = [
  { id: 'subscribers', title: 'More High-LTV Subscribers', desc: 'Targeted luxury organic reach, bespoke PR & elite funnel acquisition.' },
  { id: 'ppv', title: 'Better PPV & Conversions', desc: '24/7 bespoke VIP messaging, high-yield intimacy scripting & tier segmentation.' },
  { id: 'burnout', title: 'Time Management & Anti-Burnout', desc: 'Reclaiming daily lifestyle autonomy with structured 4–8 hr weekly shoot workflows.' },
  { id: 'elevation', title: 'Complete Bespoke Brand Elevation', desc: 'Full-suite white glove representation, PR, asset creation & strategic scaling.' }
];

export default function WrittenApplicationView({ onOpenModal }) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const brevoLive = isBrevoConfigured();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    platformLink: '',
    monthlyGross: '$15,000 – $35,000 / mo',
    primaryObjective: 'subscribers',
    boundaries: '',
    ndaConsent: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitting(true);

    try {
      const result = await submitWrittenApplicationToBrevo(formData);
      onOpenModal({
        name: formData.name,
        email: formData.email,
        handle: formData.platformLink || formData.name,
        type: 'Written Application Dossier (Brevo Sync)',
        messageId: result.messageId
      });
    } catch (err) {
      setErrorMessage(err.message || 'Submission failed. Please verify your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Brevo API Indicator Pill */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/50 text-primary text-[11px] font-semibold uppercase tracking-wider">
          <span className={`w-2 h-2 rounded-full ${brevoLive ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`}></span>
          {brevoLive ? 'Brevo v3 API Connected' : 'Brevo Protocol Ready (Dev Mode)'}
        </span>
        <span className="text-[11px] text-secondary font-medium flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">enhanced_encryption</span>
          Direct Executive Delivery
        </span>
      </div>

      {/* Stepper Header with animated progress */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center pb-4 border-b border-outline-variant/40">
        {[
          { stepNum: 1, label: 'Identity & Presence', sub: 'Step 01' },
          { stepNum: 2, label: 'Scale & Goals', sub: 'Step 02' },
          { stepNum: 3, label: 'Boundaries', sub: 'Step 03' }
        ].map((s) => (
          <motion.div
            key={s.stepNum}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center cursor-pointer select-none"
            onClick={() => setStep(s.stepNum)}
          >
            <span className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider mb-1 ${step >= s.stepNum ? 'text-primary' : 'text-secondary'}`}>
              {s.sub}
            </span>
            <span className={`text-xs sm:text-sm ${step === s.stepNum ? 'font-semibold text-primary' : 'font-medium text-on-surface-variant'}`}>
              {s.label}
            </span>
            <div className="w-full h-1 bg-surface-container-high mt-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={false}
                animate={{ width: step >= s.stepNum ? '100%' : '0%' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-3.5 rounded-xl bg-error-container/60 border border-error/40 text-xs text-on-error-container flex items-center gap-2 overflow-hidden"
          >
            <span className="material-symbols-outlined text-sm text-error">error</span>
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {/* STEP 1: IDENTITY & PRESENCE */}
          {step === 1 && (
            <motion.section
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="flex items-baseline justify-between border-b border-tertiary-fixed-dim/30 pb-3">
                <h2 className="font-editorial text-xl sm:text-2xl text-primary font-semibold">01 / Identity & Presence</h2>
                <span className="text-xs text-secondary font-semibold">Confidential Verification</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-primary">
                    Legal or Preferred Creator Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    className="w-full h-11 sm:h-12 px-4 rounded-xl bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-xs sm:text-sm text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-secondary-fixed transition-all outline-none"
                    required
                    type="text"
                    placeholder="e.g., Elena Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-primary">
                    Confidential Direct Email <span className="text-secondary">*</span>
                  </label>
                  <input
                    className="w-full h-11 sm:h-12 px-4 rounded-xl bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-xs sm:text-sm text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-secondary-fixed transition-all outline-none"
                    required
                    type="email"
                    placeholder="concierge@yourbrand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-primary flex justify-between">
                    <span>Phone / Signal Liaison</span>
                    <span className="text-[11px] text-outline font-normal">Optional</span>
                  </label>
                  <input
                    className="w-full h-11 sm:h-12 px-4 rounded-xl bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-xs sm:text-sm text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-secondary-fixed transition-all outline-none"
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-primary">
                    Primary Platform / Creator Page <span className="text-secondary">*</span>
                  </label>
                  <input
                    className="w-full h-11 sm:h-12 px-4 rounded-xl bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-xs sm:text-sm text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-secondary-fixed transition-all outline-none"
                    required
                    type="text"
                    placeholder="onlyfans.com/... or instagram.com/..."
                    value={formData.platformLink}
                    onChange={(e) => setFormData({...formData, platformLink: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => {
                    if (!formData.name || !formData.email || !formData.platformLink) {
                      setErrorMessage("Please complete all required fields (*).");
                      return;
                    }
                    setErrorMessage("");
                    setStep(2);
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary-container text-surface text-xs sm:text-sm font-semibold hover:shadow-plum-glow transition-shadow cursor-pointer"
                >
                  Continue to Step 02 &rarr;
                </motion.button>
              </div>
            </motion.section>
          )}

          {/* STEP 2: SCALE & OBJECTIVES */}
          {step === 2 && (
            <motion.section
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="flex items-baseline justify-between border-b border-tertiary-fixed-dim/30 pb-3">
                <h2 className="font-editorial text-xl sm:text-2xl text-primary font-semibold">02 / Scale & Objectives</h2>
                <span className="text-xs text-secondary font-semibold">Bespoke Calibration</span>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-primary">
                  Current Monthly Gross Trajectory / Revenue Bracket <span className="text-secondary">*</span>
                </label>
                <select
                  className="w-full h-11 sm:h-12 px-4 rounded-xl bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-xs sm:text-sm text-on-surface focus:border-primary focus:ring-2 focus:ring-secondary-fixed transition-all cursor-pointer"
                  value={formData.monthlyGross}
                  onChange={(e) => setFormData({...formData, monthlyGross: e.target.value})}
                >
                  <option value="$5,000 – $15,000 / mo">$5,000 – $15,000 / mo</option>
                  <option value="$15,000 – $35,000 / mo">$15,000 – $35,000 / mo</option>
                  <option value="$35,000 – $75,000 / mo">$35,000 – $75,000 / mo</option>
                  <option value="$75,000+ / mo">$75,000+ / mo</option>
                  <option value="Pre-launch / Brand New">Pre-launch / Brand New</option>
                </select>
              </div>

              <div className="space-y-3 pt-2">
                <span className="block text-xs font-semibold text-primary">
                  Primary Focus for the Next 6 Months <span className="text-secondary">*</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {OBJECTIVES.map((obj) => (
                    <motion.label
                      key={obj.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`glass-card-interactive rounded-xl p-3.5 sm:p-4 cursor-pointer flex items-start gap-3 border transition-colors ${
                        formData.primaryObjective === obj.id
                          ? 'border-primary bg-surface-container-lowest shadow-md ring-1 ring-secondary'
                          : 'border-tertiary-fixed-dim/60'
                      }`}
                    >
                      <input
                        className="mt-1 text-primary-container focus:ring-secondary-fixed cursor-pointer"
                        name="written_primary_objective"
                        type="radio"
                        value={obj.id}
                        checked={formData.primaryObjective === obj.id}
                        onChange={() => setFormData({...formData, primaryObjective: obj.id})}
                      />
                      <div className="space-y-1">
                        <div className="text-xs sm:text-sm font-semibold text-primary">{obj.title}</div>
                        <div className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">{obj.desc}</div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-xl border border-tertiary-fixed-dim text-xs font-semibold text-primary hover:bg-surface-container text-center cursor-pointer"
                >
                  &larr; Back to Step 01
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-8 py-3.5 rounded-xl bg-primary-container text-surface text-xs sm:text-sm font-semibold hover:shadow-plum-glow transition-shadow text-center cursor-pointer"
                >
                  Continue to Step 03 &rarr;
                </motion.button>
              </div>
            </motion.section>
          )}

          {/* STEP 3: BOUNDARIES & AUTONOMY */}
          {step === 3 && (
            <motion.section
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="flex items-baseline justify-between border-b border-tertiary-fixed-dim/30 pb-3">
                <h2 className="font-editorial text-xl sm:text-2xl text-primary font-semibold">03 / Confidentiality & Strict Boundaries</h2>
                <span className="text-xs text-secondary font-semibold">Codified & Absolute</span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-container-high/60 border border-tertiary-fixed-dim/40 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl flex-shrink-0">policy</span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Your personal and brand boundaries are non-negotiable and legally codified directly into our operational partner agreements.
                </p>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-primary">
                  Are there any strict content, scheduling, or promotional boundaries we should know about?
                </label>
                <textarea
                  className="w-full p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-xs sm:text-sm text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-secondary-fixed transition-all outline-none resize-y"
                  rows={4}
                  placeholder="e.g., No face reveals, strict geo-blocking requirements, weekend chatting blackout, specific DM conversational limits, content types strictly prohibited..."
                  value={formData.boundaries}
                  onChange={(e) => setFormData({...formData, boundaries: e.target.value})}
                ></textarea>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    className="mt-1 h-4 w-4 rounded border-tertiary-fixed-dim text-primary-container focus:ring-secondary-fixed cursor-pointer"
                    type="checkbox"
                    required
                    checked={formData.ndaConsent}
                    onChange={(e) => setFormData({...formData, ndaConsent: e.target.checked})}
                  />
                  <span className="text-xs text-on-surface leading-relaxed">
                    I understand that all submissions are immediately covered under Ascend's bilateral non-disclosure agreement and handled with absolute executive discretion via Brevo secure transmission.
                  </span>
                </label>
              </div>

              <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-3 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-tertiary-fixed-dim text-xs font-semibold text-primary hover:bg-surface-container text-center cursor-pointer"
                >
                  &larr; Back to Step 02
                </motion.button>
                <motion.button
                  whileHover={{ scale: submitting ? 1 : 1.02, y: submitting ? 0 : -1 }}
                  whileTap={{ scale: submitting ? 1 : 0.97 }}
                  disabled={submitting}
                  type="submit"
                  className="w-full sm:w-auto min-w-[280px] py-3.5 sm:py-4 px-8 rounded-xl text-xs sm:text-sm font-semibold bg-primary-container text-surface hover:bg-primary shadow-plum-glow transition-all duration-200 active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-surface border-t-transparent animate-spin"></div>
                      <span>Transmitting Dossier to Brevo...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Written Dossier to Executive Desk</span>
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
