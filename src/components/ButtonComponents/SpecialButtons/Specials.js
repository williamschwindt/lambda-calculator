import React, {useState} from "react";

//import any components needed
import SpecialButton from './SpecialButton';
//Import your array data to from the provided data file
import { specials } from '../../../data';

const Specials = () => {
  const [special, setSpecial] = useState(specials);

  return (
    <div>
      {special.map((el, index) => {
        return <SpecialButton key={index} specialString={el} />
      })}

    </div>
  );
};
 export default Specials;