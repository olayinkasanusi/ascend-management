import React from 'react';
import { motion } from 'framer-motion';

export default function IntakeTabSwitcher({ activeTab, onTabChange }) {
  return (
    <div className="mb-8 p-1.5 rounded-2xl bg-surface-container-high/70 border border-tertiary-fixed-dim/40 backdrop-blur-md flex flex-col sm:flex-row gap-2 relative">
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        onClick={() => onTabChange('calendar')}
        className={`relative flex-1 flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer z-10 ${
          activeTab === 'calendar'
            ? 'text-surface'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        {activeTab === 'calendar' && (
          <motion.div
            layoutId="activeIntakeTab"
            className="absolute inset-0 bg-primary-container rounded-xl shadow-md -z-10"
            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
          />
        )}
        <span className="material-symbols-outlined text-lg">calendar_month</span>
        <span>Schedule Strategy Call</span>
        <span className="px-2 py-0.5 rounded-full text-[10px] bg-secondary-container/50 text-primary font-bold">Priority</span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        onClick={() => onTabChange('written')}
        className={`relative flex-1 flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer z-10 ${
          activeTab === 'written'
            ? 'text-surface'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        {activeTab === 'written' && (
          <motion.div
            layoutId="activeIntakeTab"
            className="absolute inset-0 bg-primary-container rounded-xl shadow-md -z-10"
            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
          />
        )}
        <span className="material-symbols-outlined text-lg">edit_note</span>
        <span>Written Application & Intake</span>
        <span className={`text-[10px] font-normal ${activeTab === 'written' ? 'text-surface-dim' : 'text-outline'}`}>(Async)</span>
      </motion.button>
    </div>
  );
}
