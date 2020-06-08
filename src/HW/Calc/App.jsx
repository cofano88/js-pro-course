import React, { useState } from "react";
import "./App.css";

export function App() {
  const [display, setDisplay] = useState("0");

  function changeDisplay(arg) {
    if (display === "0") {
      setDisplay(arg);
    } else {
      setDisplay(display + arg);
    }
  }

  function result() {
    setDisplay(eval(display));
  }

  return (
    <>
      <div className="calcWrap">
        <div className="calc">
          <div className="display">{display}</div>
          <div className="keyboard">
            <div className="numsClear">
              <div className="clear" onClick={() => setDisplay("0")}>
                clear
              </div>
              <div className="num" onClick={() => changeDisplay("0")}>
                0
              </div>
              <div className="num" onClick={() => changeDisplay("1")}>
                1
              </div>
              <div className="num" onClick={() => changeDisplay("2")}>
                2
              </div>
              <div className="num" onClick={() => changeDisplay("3")}>
                3
              </div>
              <div className="num" onClick={() => changeDisplay("4")}>
                4
              </div>
              <div className="num" onClick={() => changeDisplay("5")}>
                5
              </div>
              <div className="num" onClick={() => changeDisplay("6")}>
                6
              </div>
              <div className="num" onClick={() => changeDisplay("7")}>
                7
              </div>
              <div className="num" onClick={() => changeDisplay("8")}>
                8
              </div>
              <div className="num" onClick={() => changeDisplay("9")}>
                9
              </div>
            </div>
            <div className="tools">
              <div onClick={() => changeDisplay("+")}>+</div>
              <div onClick={() => changeDisplay("-")}>-</div>
              <div onClick={() => changeDisplay("/")}>/</div>
              <div onClick={() => result()}>=</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
