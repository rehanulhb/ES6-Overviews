import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multutiply } from '../../Utils/calculate';



const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first, second);
    const mult = multutiply(first, second);
    console.log(sum);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;