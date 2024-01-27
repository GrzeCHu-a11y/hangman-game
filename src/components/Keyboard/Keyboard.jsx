import React from "react";

const Keyboard = ({ fun }) => {
  return (
    <div className="keyboard">
      <button onClick={(e) => fun(e.target.innerHTML)}>Q</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>W</button>
      <button>E</button>
      <button>R</button>
      <button>T</button>
      <button>Y</button>
      <button>U</button>
      <button>I</button>
      <button>O</button>
      <button>P</button>
      <button>A</button>
      <button>S</button>
      <button>D</button>
      <button>F</button>
      <button>G</button>
      <button>H</button>
      <button>J</button>
      <button>K</button>
      <button>L</button>
      <button>Z</button>
      <button>X</button>
      <button>C</button>
      <button>V</button>
      <button>B</button>
      <button>N</button>
      <button>M</button>
    </div>
  );
};

export default Keyboard;
