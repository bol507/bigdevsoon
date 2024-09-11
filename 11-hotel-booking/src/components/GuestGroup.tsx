
import "./Guest.css";

interface GuestGroupProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const GuestGroup: React.FC<GuestGroupProps> = ({ label, value, onChange }) => {
  return (
    <div className="guest-group">
      <label>{label}:</label>
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        {[...Array(5).keys()].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GuestGroup;
