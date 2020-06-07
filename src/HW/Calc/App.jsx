import React, { useState } from "react";

export function App() {
  const [display, setDisplay] = useState("0");
  const [arg1, setArg1] = useState("");
  const [arg2, setArg2] = useState("");

  function changeDisplay(arg) {
    if (display === "0") {
      setDisplay(arg);
    } else {
      setDisplay(display + arg);
    }
  }

  function result() {
    setDisplay(+display);
  }

  return (
    <>
      <div className="calc">
        <div className="display">{display}</div>
        <div className="keyboard">
          <div className="numsClear">
            <div className="clear" onClick={() => setDisplay("0")}>
              clear
            </div>
            <div onClick={() => changeDisplay("0")}>0</div>
            <div onClick={() => changeDisplay("1")}>1</div>
            <div onClick={() => changeDisplay("2")}>2</div>
            <div onClick={() => changeDisplay("3")}>3</div>
            <div onClick={() => changeDisplay("4")}>4</div>
            <div onClick={() => changeDisplay("5")}>5</div>
            <div onClick={() => changeDisplay("6")}>6</div>
            <div onClick={() => changeDisplay("7")}>7</div>
            <div onClick={() => changeDisplay("8")}>8</div>
            <div onClick={() => changeDisplay("9")}>9</div>
          </div>
          <div className="tools">
            <div onClick={() => changeDisplay("+")}>"+"</div>
            <div>"-"</div>
            <div>"/"</div>
            <div>"="</div>
          </div>
        </div>
      </div>
    </>
  );
}
