import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CalendarMonthPicker from './CalendarMonthPicker';
import TimeSlotPicker from './TimeSlotPicker';
import {
  TIMEZONE_OPTIONS,
  COMMUNICATION_CHANNELS,
  fetchAvailableTimeSlots,
  bookConsultationSession,
  formatEditorialDate
} from '../../utils/calendar';

export default function CalendarBookingView({ onOpenModal }) {
  // Calendar View State
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [monthIndex, setMonthIndex] = useState(today.getMonth());
  
  // Default selected date: tomorrow or upcoming weekday
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  if (tomorrow.getDay() === 0) tomorrow.setDate(tomorrow.getDate() + 1);
  if (tomorrow.getDay() === 6) tomorrow.setDate(tomorrow.getDate() + 2);

  const defaultDateString = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;
  
  const [selectedDateString, setSelectedDateString] = useState(defaultDateString);
  const [selectedDay, setSelectedDay] = useState(tomorrow.getDate());
  const [timezone, setTimezone] = useState(TIMEZONE_OPTIONS[0].value);
  const [slots, setSlots] = useState([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    handle: '',
    channel: COMMUNICATION_CHANNELS[0].label,
    notes: '',
    ndaConsent: true
  });

  // Fetch slots whenever selected date or timezone changes
  useEffect(() => {
    let isMounted = true;
    async function loadSlots() {
      setSlotsLoading(true);
      try {
        const availableSlots = await fetchAvailableTimeSlots(selectedDateString, timezone);
        if (isMounted) {
          setSlots(availableSlots);
          const firstAvail = availableSlots.find(s => s.available !== false);
          if (firstAvail) {
            setSelectedSlot(firstAvail.time);
          }
        }
      } catch (err) {
        console.error('Failed to load slots:', err);
      } finally {
        if (isMounted) setSlotsLoading(false);
      }
    }
    loadSlots();
    return () => { isMounted = false; };
  }, [selectedDateString, timezone]);

  const handlePrevMonth = () => {
    if (monthIndex === 0) {
      setMonthIndex(11);
      setYear(year - 1);
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (monthIndex === 11) {
      setMonthIndex(0);
      setYear(year + 1);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  const handleSelectDate = (dateString, day) => {
    setSelectedDateString(dateString);
    setSelectedDay(day);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!selectedSlot) {
      setErrorMessage('Please select an available time slot.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await bookConsultationSession({
        name: formData.name,
        email: formData.email,
        handle: formData.handle,
        channel: formData.channel,
        notes: formData.notes,
        date: selectedDateString,
        time: selectedSlot,
        timezone: timezone
      });

      onOpenModal({
        name: formData.name,
        email: formData.email,
        handle: formData.handle,
        slot: `${selectedDateString} at ${selectedSlot}`,
        bookingId: response.bookingId,
        type: 'Executive Strategy Call'
      });
    } catch (err) {
      setErrorMessage(err.message || 'Consultation booking failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* View Header */}
      <div className="border-b border-tertiary-fixed-dim/30 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/50 text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            Direct Executive Access
          </span>
          <span className="text-xs text-secondary flex items-center gap-1 font-semibold">
            <span className="material-symbols-outlined text-sm">lock</span>
            Encrypted Booking Session
          </span>
        </div>
        <h2 className="font-editorial text-2xl sm:text-3xl text-primary tracking-tight font-semibold">
          Reserve Your Confidential Executive Session
        </h2>
        <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
          A 30-minute private consultation with Senior Partner Elena Vance to audit revenue models, brand positioning, and discretion infrastructure.
        </p>
      </div>

      {/* Calendar Card Container */}
      <div className="glass-card-interactive rounded-2xl p-4 sm:p-6 border border-tertiary-fixed-dim/60 space-y-5">
        {/* Session Details Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-tertiary-fixed-dim/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center text-primary shadow-sm flex-shrink-0">
              <span className="material-symbols-outlined text-xl text-secondary">videocam</span>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-primary">30-Min Encrypted Video or Signal Audio</div>
              <div className="text-[11px] sm:text-xs text-on-surface-variant">One-on-one session with Senior Partner Elena Vance</div>
            </div>
          </div>

          {/* Timezone Select */}
          <div className="flex items-center gap-1.5 bg-surface-container-lowest/90 border border-tertiary-fixed-dim/60 px-3 py-1.5 rounded-xl text-xs text-on-surface-variant shadow-sm w-full sm:w-auto">
            <span className="material-symbols-outlined text-sm text-secondary">public</span>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="bg-transparent border-none text-xs text-on-surface outline-none cursor-pointer w-full"
            >
              {TIMEZONE_OPTIONS.map(tz => (
                <option key={tz.value} value={tz.value}>{tz.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Calendar Grid & Time Slots Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          <div className="lg:col-span-7 w-full">
            <CalendarMonthPicker
              year={year}
              monthIndex={monthIndex}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
              selectedDateString={selectedDateString}
              onSelectDate={handleSelectDate}
            />
          </div>

          <div className="lg:col-span-5 w-full">
            <TimeSlotPicker
              selectedDateString={formatEditorialDate(year, monthIndex, selectedDay)}
              slots={slots}
              loading={slotsLoading}
              selectedSlot={selectedSlot}
              onSelectSlot={setSelectedSlot}
            />
          </div>
        </div>
      </div>

      {/* Consultation Details Form */}
      <form className="space-y-5 sm:space-y-6 pt-2" onSubmit={handleSubmit}>
        <div className="border-b border-tertiary-fixed-dim/30 pb-3 flex items-baseline justify-between">
          <h3 className="font-editorial text-lg sm:text-xl text-primary font-semibold">
            Consultation Details & Contact
          </h3>
          <span className="text-xs text-secondary font-semibold">Direct Liaison</span>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-primary">
              Creator or Legal Name <span className="text-secondary">*</span>
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
            <label className="block text-xs font-semibold text-primary">
              Platform URL or Primary Handle <span className="text-secondary">*</span>
            </label>
            <input
              className="w-full h-11 sm:h-12 px-4 rounded-xl bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-xs sm:text-sm text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-secondary-fixed transition-all outline-none"
              required
              type="text"
              placeholder="onlyfans.com/... or @handle"
              value={formData.handle}
              onChange={(e) => setFormData({...formData, handle: e.target.value})}
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-primary flex justify-between">
              <span>Preferred Channel</span>
              <span className="text-[11px] text-outline font-normal">Encrypted Link</span>
            </label>
            <select
              className="w-full h-11 sm:h-12 px-3.5 rounded-xl bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-xs sm:text-sm text-on-surface focus:border-primary focus:ring-2 focus:ring-secondary-fixed transition-all cursor-pointer"
              value={formData.channel}
              onChange={(e) => setFormData({...formData, channel: e.target.value})}
            >
              {COMMUNICATION_CHANNELS.map(ch => (
                <option key={ch.value} value={ch.label}>{ch.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-primary flex justify-between">
            <span>Topics or Questions for Elena Vance</span>
            <span className="text-[11px] text-outline font-normal">Optional</span>
          </label>
          <textarea
            className="w-full p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest/80 border border-tertiary-fixed-dim text-xs sm:text-sm text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-secondary-fixed transition-all outline-none resize-none"
            rows={2}
            placeholder="e.g., Current scale hurdles, privacy geo-blocking inquiries, subscriber retention strategy..."
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          ></textarea>
        </div>

        <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
          <input
            className="mt-1 h-4 w-4 rounded border-tertiary-fixed-dim text-primary-container focus:ring-secondary-fixed"
            type="checkbox"
            required
            checked={formData.ndaConsent}
            onChange={(e) => setFormData({...formData, ndaConsent: e.target.checked})}
          />
          <span className="text-xs text-on-surface leading-relaxed">
            I understand this conversation is strictly confidential, held under bilateral NDA, and commits me to zero obligation.
          </span>
        </label>

        {/* Submit Button */}
        <div className="pt-3 text-center space-y-3">
          <motion.button
            whileHover={{ scale: submitting ? 1 : 1.02, y: submitting ? 0 : -1 }}
            whileTap={{ scale: submitting ? 1 : 0.97 }}
            disabled={submitting}
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] py-3.5 sm:py-4 px-8 sm:px-10 rounded-xl text-xs sm:text-sm font-semibold bg-primary-container text-surface hover:bg-primary shadow-md hover:shadow-plum-glow transition-all duration-200 active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
            type="submit"
          >
            {submitting ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-surface border-t-transparent animate-spin"></div>
                <span>Securing Reservation...</span>
              </>
            ) : (
              <>
                <span>Confirm Consultation Booking</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </>
            )}
          </motion.button>
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-outline">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span>Encrypted 256-bit SSL booking • Instant calendar invitation sent via email</span>
          </div>
        </div>
      </form>
    </div>
  );
}
