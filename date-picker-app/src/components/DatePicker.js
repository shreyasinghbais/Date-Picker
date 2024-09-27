'use client'; // Mark this as a client-side component

import { RecurrenceOptions } from './RecurrenceOptions';
import { DateRangePicker } from './DateRangePicker';
import { MiniCalendarPreview } from './MiniCalendarPreview';

export const DatePicker = () => {
  return (
    <div className="date-picker-container p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4">Select Recurring Dates</h2>
      <RecurrenceOptions />
      <DateRangePicker />
      <MiniCalendarPreview />
    </div>
  );
};
