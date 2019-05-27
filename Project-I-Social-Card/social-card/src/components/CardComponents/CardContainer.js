import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => {
  return (
    <a className="card-container" href="https://www.reactjs.org">
      <CardBanner />
      <CardContent />
    </a>
  );
};

export default CardContainer;
