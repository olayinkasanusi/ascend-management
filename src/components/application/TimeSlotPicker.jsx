import React from 'react';
import { motion } from 'framer-motion';

export default function TimeSlotPicker({
  selectedDateString,
  slots,
  loading,
  selectedSlot,
  onSelectSlot
}) {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs sm:text-sm font-semibold text-primary">
          Available Time Slots
        </span>
        <span className="text-[11px] text-outline font-medium">
          {selectedDateString}
        </span>
      </div>

      {loading ? (
        <div className="p-8 text-center glass-container rounded-xl flex items-center justify-center gap-2 text-xs text-outline">
          <div className="w-4 h-4 rounded-full border-2 border-secondary border-t-transparent animate-spin"></div>
          <span>Checking calendar API...</span>
        </div>
      ) : slots.length === 0 ? (
        <div className="p-6 text-center bg-surface-container-low rounded-xl text-xs text-outline">
          No slots available for this date. Please pick another business day.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
          {slots.map((slotObj, idx) => {
            const isSlotSelected = selectedSlot === slotObj.time;
            const isAvailable = slotObj.available !== false;

            return (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                whileHover={isAvailable ? { scale: 1.02, x: 2 } : {}}
                whileTap={isAvailable ? { scale: 0.98 } : {}}
                type="button"
                disabled={!isAvailable}
                onClick={() => isAvailable && onSelectSlot(slotObj.time)}
                className={`w-full py-2.5 px-3.5 rounded-xl text-left text-xs transition-colors flex items-center justify-between min-h-[44px] ${
                  isSlotSelected
                    ? 'bg-primary-container text-surface font-semibold shadow-sm border border-primary-container ring-1 ring-secondary'
                    : isAvailable
                    ? 'border border-tertiary-fixed-dim/60 bg-surface-container-lowest/90 hover:border-primary text-on-surface hover:bg-surface-container-lowest cursor-pointer'
                    : 'bg-surface-container/50 border border-transparent text-outline/40 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-sm ${isSlotSelected ? 'text-surface' : 'text-secondary'}`}>
                    {isSlotSelected ? 'check_circle' : 'schedule'}
                  </span>
                  <span className="font-medium">{slotObj.time}</span>
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-semibold ${
                  isSlotSelected
                    ? 'text-secondary-container'
                    : isAvailable
                    ? 'text-secondary'
                    : 'text-outline/40'
                }`}>
                  {isSlotSelected ? 'Selected' : isAvailable ? 'Available' : 'Booked'}
                </span>
              </motion.button>
            );
          })}
        </div>
      )}
    </div>
  );
}
