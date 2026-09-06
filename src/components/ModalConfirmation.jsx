import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalConfirmation({ isOpen, onClose, data }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/45 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-modal max-w-lg w-full rounded-[24px] p-6 sm:p-8 relative shadow-2xl border border-tertiary-fixed-dim"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </motion.button>

            {/* Modal Content */}
            <div className="text-center space-y-4 pt-2">
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 300, damping: 20 }}
                className="w-16 h-16 rounded-full bg-secondary-container/40 border border-secondary/40 text-primary mx-auto flex items-center justify-center shadow-inner"
              >
                <span className="material-symbols-outlined text-3xl text-secondary">verified_user</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
                  Bilateral NDA Protocol Active
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-primary font-semibold mt-1">
                  Submission Confirmed
                </h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-xs sm:text-sm text-on-surface-variant leading-relaxed"
              >
                Thank you, <strong className="text-primary">{data?.name || 'Creator'}</strong>. Your confidential dossier has been secured and routed directly to Senior Partner Elena Vance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-4 rounded-xl bg-surface-container-low/90 border border-tertiary-fixed-dim/60 text-left space-y-2 text-xs"
              >
                <div className="flex justify-between">
                  <span className="text-outline">Transmission Type:</span>
                  <span className="font-medium text-primary">{data?.type || 'Confidential Intake'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Creator Handle / Contact:</span>
                  <span className="font-medium text-primary">{data?.handle || data?.email || 'Confidential'}</span>
                </div>
                {data?.slot && (
                  <div className="flex justify-between">
                    <span className="text-outline">Reserved Consultation:</span>
                    <span className="font-medium text-secondary">{data.slot}</span>
                  </div>
                )}
                {(data?.bookingId || data?.messageId) && (
                  <div className="flex justify-between">
                    <span className="text-outline">Tracking Reference:</span>
                    <span className="font-mono text-primary font-semibold">{data.bookingId || data.messageId}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-outline">Encryption Standard:</span>
                  <span className="text-emerald-700 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    256-Bit Encrypted Ledger
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Response Guarantee:</span>
                  <span className="font-medium text-primary">Within 24 Business Hours</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  onClick={onClose}
                  className="w-full py-3.5 px-6 rounded-xl bg-primary-container text-surface text-xs sm:text-sm font-semibold shadow-plum-glow hover:bg-primary transition-colors cursor-pointer"
                >
                  Return to Ascend Platform
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
