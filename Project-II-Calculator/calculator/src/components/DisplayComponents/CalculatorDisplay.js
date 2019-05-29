import React from 'react';
import './Display.css';
import CalculatorResult from './CalculatorResult';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = () => {
    const numbers = [7,8,9,4,5,6,1,2,3,0]
    const symbols = ['+','-','x','/','=']
 return (
    <div className="calculator-display">
        <CalculatorResult />
        <div className="c-d-numbers">
            <span className="clear">Clear</span>
            {numbers.map(num => <NumberButton key={num.toString()} number={num} />)}
        </div>
        <div className="c-d-actions">
            <ActionButton symbol="" />
        </div>
    </div>
 );
}

export default CalculatorDisplay;