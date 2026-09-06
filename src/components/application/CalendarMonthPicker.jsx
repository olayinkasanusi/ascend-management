import React from 'react';
import { motion } from 'framer-motion';
import { MONTH_NAMES, generateCalendarGrid } from '../../utils/calendar';

export default function CalendarMonthPicker({
  year,
  monthIndex,
  onPrevMonth,
  onNextMonth,
  selectedDateString,
  onSelectDate
}) {
  const grid = generateCalendarGrid(year, monthIndex);
  const currentMonthLabel = `${MONTH_NAMES[monthIndex]} ${year}`;

  return (
    <div className="w-full bg-surface-container-lowest/90 rounded-2xl p-3 sm:p-5 border border-tertiary-fixed-dim/40 space-y-3 sm:space-y-4 shadow-sm">
      {/* Month & Navigation Header */}
      <div className="flex items-center justify-between px-1">
        <span className="text-sm sm:text-base font-semibold text-primary font-editorial">
          {currentMonthLabel}
        </span>
        <div className="flex items-center gap-1">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={onPrevMonth}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-secondary-fixed/40 transition-colors cursor-pointer"
            aria-label="Previous month"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={onNextMonth}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-secondary-fixed/40 transition-colors cursor-pointer"
            aria-label="Next month"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </motion.button>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] sm:text-xs font-semibold text-outline pb-1">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span className="text-outline/50">Sat</span>
        <span className="text-outline/50">Sun</span>
      </div>

      {/* 7xN Calendar Day Tiles */}
      <div className="grid grid-cols-7 gap-1 sm:gap-1.5 text-center text-xs">
        {grid.map((cell, idx) => {
          const isSelected = selectedDateString === cell.dateString;
          return (
            <motion.button
              key={`${cell.dateString}-${idx}`}
              whileHover={cell.isSelectable ? { scale: 1.08 } : {}}
              whileTap={cell.isSelectable ? { scale: 0.94 } : {}}
              type="button"
              onClick={() => cell.isSelectable && onSelectDate(cell.dateString, cell.day)}
              disabled={!cell.isSelectable}
              className={`min-h-[36px] sm:min-h-[40px] flex items-center justify-center rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                isSelected
                  ? 'bg-primary-container text-surface font-semibold shadow-md ring-2 ring-secondary'
                  : !cell.isCurrentMonth
                  ? 'text-outline/25 cursor-not-allowed'
                  : cell.isWeekend
                  ? 'text-outline/35 cursor-not-allowed'
                  : cell.isPast
                  ? 'text-outline/35 cursor-not-allowed line-through'
                  : 'hover:bg-secondary-fixed/40 text-on-surface font-medium cursor-pointer'
              }`}
            >
              {cell.day}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
