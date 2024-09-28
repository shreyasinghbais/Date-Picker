import { DatePicker } from '../components/DatePicker';
import { RecurrenceSettingsProvider } from '../components/RecurrenceContext';

export default function Home() {
  return (
    <RecurrenceSettingsProvider>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <DatePicker />
      </div>
    </RecurrenceSettingsProvider>
  );
}
