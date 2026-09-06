/**
 * Ascend Management - Executive Calendar Scheduling Utility
 *
 * Handles calendar grid generation, time slot availability, timezone calculations,
 * and API integration for booking executive strategy sessions.
 */

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const TIMEZONE_OPTIONS = [
  { value: 'America/New_York', label: 'Eastern Time (US & Canada) GMT-4' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (US & Canada) GMT-7' },
  { value: 'America/Chicago', label: 'Central Time (US & Canada) GMT-5' },
  { value: 'Europe/London', label: 'London (GMT+1 / BST)' },
  { value: 'Europe/Paris', label: 'Paris (CET / GMT+2)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST / GMT+4)' },
  { value: 'Asia/Singapore', label: 'Singapore (SGT / GMT+8)' }
];

export const COMMUNICATION_CHANNELS = [
  { value: 'video', label: 'Encrypted Google Meet / Video', desc: 'HD video with screen sharing' },
  { value: 'signal', label: 'Signal Audio Call (High Security)', desc: 'Zero-knowledge encrypted voice' },
  { value: 'telegram', label: 'Encrypted Telegram Audio', desc: 'End-to-end encrypted secret chat audio' }
];

export const DEFAULT_TIME_SLOTS = [
  '10:30 AM',
  '11:30 AM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM',
  '06:00 PM'
];

/**
 * Returns number of days in a given month of a year.
 */
export function getDaysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

/**
 * Returns the day of the week for the 1st of the month (Monday = 0, Sunday = 6).
 */
export function getFirstDayOfMonthMonday(year, monthIndex) {
  const day = new Date(year, monthIndex, 1).getDay();
  // Standard getDay: 0 = Sun, 1 = Mon ... 6 = Sat
  // We want: 0 = Mon, 1 = Tue ... 6 = Sun
  return (day + 6) % 7;
}

/**
 * Generates the full 7xN calendar grid array for display.
 */
export function generateCalendarGrid(year, monthIndex, today = new Date()) {
  const totalDays = getDaysInMonth(year, monthIndex);
  const firstDayOffset = getFirstDayOfMonthMonday(year, monthIndex);
  
  // Previous month padding
  const prevMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1;
  const prevMonthYear = monthIndex === 0 ? year - 1 : year;
  const prevMonthDays = getDaysInMonth(prevMonthYear, prevMonthIndex);

  const grid = [];

  // 1. Previous month trailing days
  for (let i = firstDayOffset - 1; i >= 0; i--) {
    const day = prevMonthDays - i;
    grid.push({
      day,
      month: prevMonthIndex,
      year: prevMonthYear,
      isCurrentMonth: false,
      isWeekend: false,
      isPast: true,
      isSelectable: false,
      dateString: `${prevMonthYear}-${String(prevMonthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    });
  }

  // 2. Current month days
  for (let day = 1; day <= totalDays; day++) {
    const dateObj = new Date(year, monthIndex, day);
    const dayOfWeek = (dateObj.getDay() + 6) % 7;
    const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // Saturday (5) or Sunday (6)
    
    // Check if in the past compared to today (midnight-normalized)
    const compareToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isPast = dateObj < compareToday;
    const isSelectable = !isWeekend && !isPast;

    grid.push({
      day,
      month: monthIndex,
      year,
      isCurrentMonth: true,
      isWeekend,
      isPast,
      isSelectable,
      dateString: `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    });
  }

  // 3. Next month leading padding to complete the last week (multiple of 7)
  const remainder = grid.length % 7;
  if (remainder !== 0) {
    const nextMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1;
    const nextMonthYear = monthIndex === 11 ? year + 1 : year;
    const paddingNeeded = 7 - remainder;
    for (let day = 1; day <= paddingNeeded; day++) {
      grid.push({
        day,
        month: nextMonthIndex,
        year: nextMonthYear,
        isCurrentMonth: false,
        isWeekend: false,
        isPast: false,
        isSelectable: false,
        dateString: `${nextMonthYear}-${String(nextMonthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      });
    }
  }

  return grid;
}

/**
 * Fetches available time slots for a given date and timezone.
 * Connects to an external Calendar API if configured in `import.meta.env.VITE_CALENDAR_API_URL`.
 * Otherwise falls back to simulated realistic server response.
 */
export async function fetchAvailableTimeSlots(dateString, timezone = 'America/New_York') {
  const apiUrl = import.meta.env?.VITE_CALENDAR_API_URL;

  if (apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/available-slots?date=${encodeURIComponent(dateString)}&timezone=${encodeURIComponent(timezone)}`, {
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) {
        throw new Error(`Calendar API returned status ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data.slots)) {
        return data.slots;
      }
    } catch (err) {
      console.warn('[Calendar API] Falling back to default slots due to error:', err);
    }
  }

  // Fallback: simulated API response with slight dynamic slots
  await new Promise(resolve => setTimeout(resolve, 200));

  // If date ends in an odd number, adjust slightly to demonstrate dynamic API behavior
  const dayNum = parseInt(dateString.slice(-2), 10) || 1;
  const tzSuffix = timezone.includes('London') ? 'BST' : timezone.includes('Paris') ? 'CET' : 'EDT';
  
  return DEFAULT_TIME_SLOTS.map(slot => {
    // Randomly mark a couple slots as booked for realism based on day
    const isBooked = (dayNum % 3 === 0 && slot.startsWith('10:30')) || (dayNum % 2 === 0 && slot.startsWith('03:00'));
    return {
      time: `${slot} ${tzSuffix}`,
      available: !isBooked
    };
  });
}

/**
 * Dispatches consultation booking payload to the Calendar API or Webhook.
 */
export async function bookConsultationSession(payload) {
  const { name, email, handle, channel, notes, date, time, timezone } = payload;

  if (!name || !email || !handle || !date || !time) {
    throw new Error('Please provide all required consultation details.');
  }

  const apiUrl = import.meta.env?.VITE_CALENDAR_API_URL;

  if (apiUrl) {
    const response = await fetch(`${apiUrl}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        creatorName: name,
        creatorEmail: email,
        creatorHandle: handle,
        meetingChannel: channel,
        creatorNotes: notes,
        scheduledDate: date,
        scheduledTime: time,
        timezone: timezone || 'America/New_York',
        bilateralNdaAgreed: true,
        source: 'Ascend Management Web Portal'
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.message || `Booking failed with status ${response.status}`);
    }

    return await response.json();
  }

  // Simulated API response delay
  await new Promise(resolve => setTimeout(resolve, 600));

  return {
    success: true,
    bookingId: `ASC-${Date.now().toString(36).toUpperCase()}`,
    scheduledSession: `${date} at ${time}`,
    leadPartner: 'Elena Vance',
    securityStatus: 'Bilateral NDA Active'
  };
}

/**
 * Formats a selected date object into a human-readable editorial date.
 * e.g. "Friday, November 14, 2025"
 */
export function formatEditorialDate(year, monthIndex, day) {
  const dateObj = new Date(year, monthIndex, day);
  return dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
