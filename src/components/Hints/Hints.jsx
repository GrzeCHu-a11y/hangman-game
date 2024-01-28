import React from "react";

const Hints = ({ mistakes, hint }) => {
  return (
    <div>
      <h3>
        Hint:
        <b>{hint}</b>
      </h3>
      <h3>
        Inccorect guesses:
        <b>{mistakes}/6</b>
      </h3>
    </div>
  );
};

export default Hints;
