import { useRecurrenceSettings } from './RecurrenceContext';
import { format, addDays, addWeeks, addMonths, addYears, eachDayOfInterval } from 'date-fns';

export const MiniCalendarPreview = () => {
  const { recurrence } = useRecurrenceSettings();

  // Helper function to generate recurring dates based on the recurrence pattern
  const generateRecurringDates = () => {
    if (!recurrence.startDate) return [];

    const startDate = new Date(recurrence.startDate);
    const endDate = recurrence.endDate ? new Date(recurrence.endDate) : null;
    const pattern = recurrence.pattern;
    const dates = [];

    let currentDate = startDate;

    // Generate dates based on the recurrence pattern
    while (!endDate || currentDate <= endDate) {
      dates.push(currentDate);
      
      switch (pattern) {
        case 'daily':
          currentDate = addDays(currentDate, 1); // Add 1 day for daily recurrence
          break;
        case 'weekly':
          currentDate = addWeeks(currentDate, 1); // Add 1 week for weekly recurrence
          break;
        case 'monthly':
          currentDate = addMonths(currentDate, 1); // Add 1 month for monthly recurrence
          break;
        case 'yearly':
          currentDate = addYears(currentDate, 1); // Add 1 year for yearly recurrence
          break;
        default:
          break;
      }

      // Break the loop if there's no end date and you've generated 10 future dates
      if (!endDate && dates.length >= 10) break;
    }

    return dates;
  };

  // Generate the list of dates
  const dates = generateRecurringDates();

  return (
    <div className="mini-calendar-preview mt-6">
      <h3 className="text-lg mb-2">Recurring Dates Preview:</h3>
      <ul className="list-disc list-inside">
        {dates.map((date, index) => (
          <li key={index}>{format(date, 'yyyy-MM-dd')}</li>
        ))}
      </ul>
    </div>
  );
};
