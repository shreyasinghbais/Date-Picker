import { useRecurrenceSettings } from './RecurrenceContext';

export const DateRangePicker = () => {
  const { recurrence, setRecurrence } = useRecurrenceSettings();

  const handleStartDateChange = (e) => {
    setRecurrence({ ...recurrence, startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    setRecurrence({ ...recurrence, endDate: e.target.value });
  };

  return (
    <div className="date-range-picker mb-4">
      <label className="block mb-2">Start Date:</label>
      <input
        type="date"
        onChange={handleStartDateChange}
        value={recurrence.startDate || ''}
        className="p-2 border border-gray-300 rounded"
      />

      <label className="block mt-4 mb-2">End Date (optional):</label>
      <input
        type="date"
        onChange={handleEndDateChange}
        value={recurrence.endDate || ''}
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};
