import React from "react";

import { range } from '../../utils';
import { checkGuess } from "../../game-helpers";


function Guess({value,answer}) {
const check = checkGuess(value,answer);
  return (<>
  <p className="guess"> {range(5).map((col)=>
    <span className= {value?`cell ${check[col].status}`:"cell"} key={col}>
      {value?value[col]:undefined}
    </span>
      )}
    </p>
  </>);
}

export default Guess;
