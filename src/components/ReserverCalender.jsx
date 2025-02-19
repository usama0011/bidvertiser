import React, { useState, useRef, useEffect } from "react";
import "../styles/Test.css";

function ReserverCalender({ selectedDate, setSelectedDate, onClose }) {
  return (
    <div className="">
      <div className="">
        <DatePicker
          onDateChange={(date) => {
            setSelectedDate(date);
            onClose(); // Close the calendar after selecting a date
          }}
          initialDate={selectedDate}
        />
      </div>
    </div>
  );
}

function DatePicker({ onDateChange, initialDate }) {
  const datepickerContainer = useRef();

  useEffect(() => {
    // Initialize jQuery datepicker
    window.$(datepickerContainer.current).datepicker({
      onSelect: (date) => {
        onDateChange(date); // Trigger date change
      },
      defaultDate: initialDate,
    });

    // Cleanup function to destroy datepicker on unmount
    return () => {
      window.$(datepickerContainer.current).datepicker("destroy");
    };
  }, [initialDate, onDateChange]);

  return <div className="DatePicker" ref={datepickerContainer} />;
}

export default ReserverCalender;
