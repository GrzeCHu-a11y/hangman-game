import React from "react";

const Keyboard = ({ fun }) => {
  return (
    <div className="keyboard">
      <button onClick={(e) => fun(e.target.innerHTML)}>Q</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>W</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>E</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>R</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>T</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>Y</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>U</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>I</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>O</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>P</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>A</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>S</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>D</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>F</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>G</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>H</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>J</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>K</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>L</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>Z</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>X</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>C</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>V</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>B</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>N</button>
      <button onClick={(e) => fun(e.target.innerHTML)}>M</button>
    </div>
  );
};

export default Keyboard;
