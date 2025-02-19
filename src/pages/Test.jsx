import React, { useRef, useEffect } from "react";
import "../styles/Test.css";

function Test({ selectedDate, setSelectedDate, onClose }) {
  const datepickerContainer = useRef();

  useEffect(() => {
    // Initialize jQuery datepicker
    window.$(datepickerContainer.current).datepicker({
      dateFormat: "yy-mm-dd", // Ensure consistent format
      onSelect: (date) => {
        setSelectedDate(date); // Update selected date in the parent component
        onClose(); // Close the calendar after selecting a date
      },
      defaultDate: selectedDate ? new Date(selectedDate) : new Date(), // Fix issue
    });

    // Cleanup function to destroy datepicker on unmount
    return () => {
      window.$(datepickerContainer.current).datepicker("destroy");
    };
  }, [selectedDate, setSelectedDate]);

  return <div className="DatePicker" ref={datepickerContainer} />;
}

export default Test;
