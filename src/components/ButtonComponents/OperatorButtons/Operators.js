import React, { useState } from "react";

import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = () => {
  const [operator, setOperator] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {operator.map((el, index) => {
        return <OperatorButton key={index} operatorString={el.char} />;
      })}
    </div>
  );
};

export default Operators;