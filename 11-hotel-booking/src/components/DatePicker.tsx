import Day from './Day';
import './DatePicker.css';
import { useState } from 'react';

interface DatePickerProps {
  onDateChange: (date: string) => void;
  checkInDate?: string; // Añadir prop para check-in
  checkOutDate?: string; // Añadir prop para check-out
}


const DatePicker: React.FC<DatePickerProps> = ({ onDateChange, checkInDate, checkOutDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const renderMonthYear = () => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return (
      <div className="month-year">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>{currentDate.toLocaleDateString(undefined, options)}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
    );
  };
  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    // Calcular el primer día del mes y la cantidad de días en el mes
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0); // Último día del mes
    // Suponiendo que el mes tiene 30 días
    // Rellenar los días anteriores del mes
    for (let i = 1; i < firstDay.getDay(); i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

     // Rellenar los días del mes
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day); // Definición de date aquí
      const isCheckIn = checkInDate ? date.toISOString().split('T')[0] === checkInDate : false;
const isCheckOut = checkOutDate ? date.toISOString().split('T')[0] === checkOutDate : false;
const isInRange = checkInDate && checkOutDate ? date > new Date(checkInDate) && date < new Date(checkOutDate) : false;      
      days.push(
        <Day 
          key={day} 
          date={date} 
          onDateChange={onDateChange} 
          isCheckIn={isCheckIn} 
          isCheckOut={isCheckOut} 
          isInRange={isInRange} 
        />
      );
    }
    return days;
  };

  return (
    <div className="datepicker">
      {renderMonthYear()}
      {renderDaysOfWeek()}
      <div className="days-container">
        {renderDays()}
      </div>
    </div>
  );
};

export default DatePicker;