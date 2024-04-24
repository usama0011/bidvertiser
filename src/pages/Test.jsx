import React, { useState, useRef, useEffect } from "react";
import "../styles/Test.css";

function Test({ selectedDate, setSelectedDate }) {
  return (
    <div className="">
      <div className="">
        <DatePicker
          onDateChange={(date) => setSelectedDate(date)}
          initialDate={selectedDate}
        />
      </div>
    </div>
  );
}

function DatePicker({ onDateChange, initialDate }) {
  const datepickerContainer = useRef();

  useEffect(() => {
    window.$(datepickerContainer.current).datepicker({
      onSelect: onDateChange,
      defaultDate: initialDate,
    });

    return () => {
      window.$(datepickerContainer.current).datepicker("destroy");
    };
  }, [initialDate, onDateChange]);

  return <div className="DatePicker" ref={datepickerContainer} />;
}

export default Test;

