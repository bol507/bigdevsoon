import { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(4);

  const handleClick = (value: number) => {
    setRating(value);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)} 
          style={{
            cursor: 'pointer',
            color: star <= rating ? '#FFD700' : '#B58037', 
            fontSize: '24px', 
            marginRight: '4px',
          }}
        >
          ★
        </span>
      ))}
      
    </div>
  );
};

export default StarRating;