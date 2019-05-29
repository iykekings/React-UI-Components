import React from 'react';
import './Display.css';

const CalculatorResult = props => {
  return (
    <div className="calculator-result">
      <p className="result-tiny">{props.tiny}</p>
      <p className="result-main">{props.main}</p>
    </div>
  );
};

export default CalculatorResult;
