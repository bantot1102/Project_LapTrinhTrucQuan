import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TaskItem from "./Task";

interface Task {
  taskName: string;
  description: string;
  date?: Date; // Có thể là Date hoặc không có
}

const TaskList = () => {
  const [items, setItems] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isSelectingDate, setIsSelectingDate] = useState(false);
  const datePickerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const addItem = () => {
    if (taskName.trim() && description.trim()) {
      const dateToUse = selectedDate ?? new Date(); // Sử dụng ngày hiện tại nếu không có ngày được chọn
      setItems([...items, { taskName, description, date: dateToUse }]);
      setTaskName("");
      setDescription("");
      setSelectedDate(null);
      setShowDatePicker(false); // Đóng DatePicker sau khi thêm task
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleRemoveTask = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      if (isSelectingDate) {
        setShowDatePicker(false); // Đóng DatePicker khi chọn ngày
      }
    }
  };

  const handleDatePickerChange = (date: Date | null) => {
    setIsSelectingDate(true);
    handleDateChange(date);
  };

  const handleTimeChange = (date: Date | null) => {
    setIsSelectingDate(false);
    handleDateChange(date);
  };

  // Tính toán vị trí của DatePicker dựa trên vị trí của nút Today
  useEffect(() => {
    if (showDatePicker && buttonRef.current && datePickerRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      datePickerRef.current.style.position = "absolute";
      datePickerRef.current.style.top = `${
        buttonRect.top + window.scrollY + buttonRect.height
      }px`; // Đặt ở phía dưới nút
      datePickerRef.current.style.left = `${
        buttonRect.left + window.scrollX - datePickerRef.current.offsetWidth
      }px`; // Đặt ở phía bên trái nút
    }
  }, [showDatePicker]);

  return (
    <div className="bg-white p-4 rounded shadow relative">
      <h1 className="text-2xl font-bold">Today</h1>
      <div className="mt-4 p-4 border rounded">
        <h2 className="text-xl font-bold">Add Task</h2>
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          className="w-full p-2 mt-2 rounded border"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <h2 className="text-xl font-bold">Description</h2>
        <input
          type="text"
          placeholder="Description"
          value={description}
          className="w-full p-2 mt-2 rounded border"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex items-center mt-4">
          <button
            ref={buttonRef} // Để tính toán vị trí
            className="bg-blue-500 text-white p-2 rounded"
            onClick={toggleDatePicker}
          >
            Today
          </button>
          <button className="ml-2 p-2 border rounded">Priority</button>
          <button className="ml-2 p-2 border rounded">Reminders</button>
        </div>
        {showDatePicker && (
          <div ref={datePickerRef} className="mt-4">
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => {
                if (date && date.getDate() !== (selectedDate?.getDate() ?? 0)) {
                  handleDatePickerChange(date);
                } else {
                  handleTimeChange(date);
                }
              }}
              showTimeSelect
              timeIntervals={15}
              dateFormat="Pp"
              inline
            />
          </div>
        )}
        <div className="mt-4">
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={addItem}
          >
            Add task
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded ml-2"
            onClick={() => {
              setTaskName("");
              setDescription("");
              setShowDatePicker(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <TaskItem
            key={index}
            taskName={item.taskName}
            description={item.description}
            date={item.date}
            onRemove={() => handleRemoveTask(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
