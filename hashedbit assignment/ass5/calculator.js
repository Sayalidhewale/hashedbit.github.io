import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAddition = () => {
        const res = parseFloat(num1) + parseFloat(num2);
        setResult(res);
    };

    const handleSubtraction = () => {
        const res = parseFloat(num1) - parseFloat(num2);
        setResult(res);
    };

    const handleMultiplication = () => {
        const res = parseFloat(num1) * parseFloat(num2);
        setResult(res);
    };

    const handleDivision = () => {
        const res = parseFloat(num1) / parseFloat(num2);
        setResult(res);
    };

    return (
        <div>
            <h2>Calculator</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <br />
            <button onClick={handleAddition}>+</button>
            <button onClick={handleSubtraction}>-</button>
            <button onClick={handleMultiplication}>*</button>
            <button onClick={handleDivision}>/</button>
            <br />
            <div>
                Result: {result}
            </div>
        </div>
    );
};

export default Calculator;