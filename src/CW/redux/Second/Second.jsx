import React, { useState } from "react";

export const SecondComponent = ({
  counter,
  increment,
  decrement,
  stateInp,
}) => {
  const [input, setInput] = useState();

  const onChange = (eve) => {
    setInput(eve.target.value);
  };

  return (
    <>
      <div>
        <button onClick={increment}>Inc</button>
        {counter}
      </div>
      <div>
        <button onClick={decrement}>----</button>
      </div>

      <input type="number" value={input} onChange={onChange} />
      <button onClick={() => stateInp(+input)}>Plus</button>
    </>
  );
};
