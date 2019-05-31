import React, { useState } from 'react';
import './Display.css';
import CalculatorResult from './CalculatorResult';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
import calc from '../../math';

const CalculatorDisplay = () => {
  // States
  const [strMain, setStrMain] = useState('');
  const [strTiny, setStrTiny] = useState('');

  // Functions
  const numClicked = num => setStrMain(strMain + num);
  const symClicked = sym => {
    if (sym === '=') {
      setStrTiny(strMain);
      setStrMain(calc(strMain));
    } else {
      setStrMain(strMain + sym);
    }
  };

  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const symbols = ['+', '-', 'x', '/', '='];

  return (
    <div className="calculator-display">
      <CalculatorResult main={strMain} tiny={strTiny} />
      <div className="c-d-numbers">
        <span
          className="clear"
          onClick={() => {
            setStrMain('');
            setStrTiny('');
          }}
        >
          Clear
        </span>
        {numbers.map(num => (
          <NumberButton
            key={num.toString()}
            numClick={() => numClicked(num)}
            number={num}
          />
        ))}
      </div>
      <div className="c-d-actions">
        {symbols.map(sym => (
          <ActionButton
            key={sym.toString()}
            symClick={() => symClicked(sym)}
            symbol={sym}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorDisplay;
