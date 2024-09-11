import{ useState } from 'react';
import GuestGroup from './GuestGroup';
import './Guest.css';

const Guest: React.FC = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  return (
    <div className="guest-selector">
      <GuestGroup label="Adults" value={adults} onChange={setAdults} />
      <GuestGroup label="Children" value={children} onChange={setChildren} />
    </div>
  );
};

export default Guest;