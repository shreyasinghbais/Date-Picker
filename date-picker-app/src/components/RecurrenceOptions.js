import { useRecurrenceSettings } from './RecurrenceContext';

export const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useRecurrenceSettings();

  const handlePatternChange = (e) => {
    setRecurrence({ ...recurrence, pattern: e.target.value });
  };

  return (
    <div className="recurrence-options mb-4">
      <label className="block mb-2">Recurrence Pattern:</label>
      <select
        onChange={handlePatternChange}
        value={recurrence.pattern}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};
