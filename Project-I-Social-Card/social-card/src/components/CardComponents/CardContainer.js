import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => {
  return (
    <div className="card-container" onClick={goToReact}>
      <CardBanner />
      <CardContent />
    </div>
  );
};
const goToReact = () => window.location = 'https://reactjs.org'
export default CardContainer;
