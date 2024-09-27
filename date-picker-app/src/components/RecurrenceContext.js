 'use client'; // Mark this as a client-side component

import { createContext, useContext, useState } from 'react';

// Create the context
const RecurrenceSettingsContext = createContext();

// Hook to use the context
export const useRecurrenceSettings = () => useContext(RecurrenceSettingsContext);

// Context provider to manage recurrence settings
export const RecurrenceSettingsProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    pattern: 'daily', // Default recurrence pattern
    customSettings: {}, // Fine-tuning settings like 'Every X days'
    startDate: null,
    endDate: null,
    selectedDates: [], // Dates generated based on the recurrence settings
  });

  const value = { recurrence, setRecurrence };

  return (
    <RecurrenceSettingsContext.Provider value={value}>
      {children}
    </RecurrenceSettingsContext.Provider>
  );
};
