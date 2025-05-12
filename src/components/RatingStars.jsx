import React from 'react';

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  return (
    <div style={{ color: '#4CAF50' }}>
      {Array.from({ length: totalStars }, (_, i) => (
        <span key={i}>
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
