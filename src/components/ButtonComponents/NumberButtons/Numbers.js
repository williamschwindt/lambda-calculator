import React, {useState} from "react";

import {numbers} from '../../../data';

import NumberButton from './NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  const [number, setNumber] = useState(numbers);
  return (
    <div>
      {number.map((el, index) => {
        return <NumberButton key={index} numberString={el} />
      })}
    </div>
  );
};
 export default Numbers;