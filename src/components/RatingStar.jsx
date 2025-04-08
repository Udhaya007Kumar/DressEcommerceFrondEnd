import React from 'react';

const RatingStar = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`ri-star${i <= rating ? '-fill' : '-line'}`}></span>
    );
  }
  return (
    <div className="mb-1 text-sm text-[goldenrod]">
      {stars}
    </div>
  );
};

export default RatingStar;
