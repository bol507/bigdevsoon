import { Priority } from "../interfaces/task";

interface PriorityBadgeProps {
  priority: Priority
}

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {

  const getStyles = () => {
    switch (priority) {
      case 'HIGH':
        return 'border border-pink-500 bg-pink-500';
      case 'MEDIUM':
        return 'border border-cyan-500 bg-cyan-500';
      case 'LOW':
        return 'border border-green-500 bg-green-500';
      default:
        return ''; 
    }
  };

  return (
    <span className={`text-md font-semibold rounded-lg px-0.5 text-white ${getStyles()}`}>
      {priority}
    </span>
  );
};

export default PriorityBadge;