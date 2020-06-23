import React from "react";

export const FiveComponent = ({ counter, increment_8, mult_8 }) => {
  return (
    <>
      <div>
        <button onClick={increment_8}>Plus 8</button>
        {counter}
      </div>
      <div>
        <button onClick={mult_8}>Mult 8</button>
      </div>
    </>
  );
};
