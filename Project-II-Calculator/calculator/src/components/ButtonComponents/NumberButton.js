import React from 'react';
import './Button.css';

const NumberButton = ({ number, numClick }) => {
  return (
    <div className="number-button" onClick={() => numClick(number)}>
      {number}
    </div>
  );
};

export default NumberButton;
