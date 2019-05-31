import React from 'react';
import './Button.css';

const ActionButton = ({symbol, symClick}) => {
  return <div className="action-button" onClick={() => symClick(symbol)}>{symbol}</div>;
};

export default ActionButton;
