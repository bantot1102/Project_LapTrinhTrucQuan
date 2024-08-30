import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState<string>("Today");
  const calendarRef = useRef<HTMLDivElement | null>(null);

  const handlePresetDate = (daysToAdd: number) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + daysToAdd);
    onDateChange(newDate);
    setShowCalendar(false);
  };

  const handleDateChange = (date: Date | null) => {
    onDateChange(date);
    setShowCalendar(false); // Tắt bảng lịch sau khi chọn ngày
  };

  useEffect(() => {
    if (selectedDate) {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      setDayOfWeek(days[selectedDate.getDay()]);
    } else {
      setDayOfWeek("Today");
    }
  }, [selectedDate]);

  // Đóng lịch khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col items-start">
        <button
          className="p-2 bg-blue-500 text-white rounded mb-2"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {selectedDate ? dayOfWeek : "Today"}
        </button>
        {showCalendar && (
          <div
            ref={calendarRef}
            className="absolute mt-2 bg-white shadow-lg p-4 rounded-lg z-10"
          >
            <button
              className="block w-full text-left p-2 rounded hover:bg-gray-200"
              onClick={() => handlePresetDate(1)}
            >
              Tomorrow
            </button>
            <button
              className="block w-full text-left p-2 rounded hover:bg-gray-200"
              onClick={() => handlePresetDate(7 - new Date().getDay() + 6)} // Next Saturday
            >
              Next weekend
            </button>
            <button
              className="block w-full text-left p-2 rounded hover:bg-gray-200"
              onClick={() => handlePresetDate(7 - new Date().getDay() + 1)} // Next Monday
            >
              Next week
            </button>
            <button
              className="block w-full text-left p-2 rounded hover:bg-gray-200"
              onClick={() => onDateChange(null)}
            >
              No Date
            </button>
            <div className="mt-4">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
                inline
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDatePicker;
