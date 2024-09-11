import React from 'react';
import './Day.css';

interface DayProps {
  date: Date;
  onDateChange: (date: string) => void;
  isInRange?: boolean; // Añadir prop para rango
  isCheckIn?: boolean; // Añadir prop para check-in
  isCheckOut?: boolean; // Añadir prop para check-out
}
const Day: React.FC<DayProps> = ({ date, onDateChange, isInRange, isCheckIn, isCheckOut }) => {
  const handleClick = () => {
    onDateChange(date.toISOString().split('T')[0]);
  };

  const getClassName = () => {
    if (isCheckIn) return 'day check-in';
    if (isCheckOut) return 'day check-out';
    if (isInRange) return 'day in-range';
    return 'day';
  };

  return (
    <div className={getClassName()} onClick={handleClick}>
      {date.getDate()}
    </div>
  );
};

export default Day;