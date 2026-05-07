import React from 'react';
import './DealCard.css';

const DealCard = ({ deal }) => {
  return (
    <div className="deal-card">
      <div className="deal-card__img-wrap">
        <img
          src={deal.image}
          alt={deal.name}
          className="deal-card__img"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/160x160/f5f5f5/999?text=${encodeURIComponent(deal.name)}`;
          }}
        />
      </div>
      <p className="deal-card__name">{deal.name}</p>
      {deal.discount && (
        <p className="deal-card__discount">{deal.discount}</p>
      )}
    </div>
  );
};

export default DealCard;
