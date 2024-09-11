import { useState } from "react";
import "./InputDate.css";
import DatePicker from "./DatePicker";

interface InputDateProps {
  id: string;
  label: string;
  onDateSelect: (date: string) => void;
  checkInDate?: string; // Añadir prop para check-in
  checkOutDate?: string; // Añadir prop para check-out
}

const InputDate: React.FC<InputDateProps> = ({
  id,
  label,
  onDateSelect,
  checkInDate,
  checkOutDate,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const handleDateChange = (date: string) => {
    const parsedDate = new Date(date + 'T00:00:00');
    const formattedDate = formatDate(parsedDate);
    setSelectedDate(formattedDate);
    onDateSelect(date);
    setIsPickerOpen(false);
  };
  return (
    <div className="input-date">
      <label htmlFor={id}>{label}</label>

      <div className="input-container">
        <input
          type="text"
          id={id}
          value={selectedDate}
          readOnly
          onClick={() => setIsPickerOpen(true)}
        />
        <span className="calendar-icon" onClick={() => setIsPickerOpen(true)}>
          📅
        </span>
      </div>

      {isPickerOpen && (
        <DatePicker
          onDateChange={handleDateChange}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
        />
      )}
    </div>
  );
};

export default InputDate;
