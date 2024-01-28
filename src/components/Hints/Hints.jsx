import React from "react";

const Hints = ({ mistakes, hint }) => {
  return (
    <div>
      <h3>
        Hint: <span>{hint}</span>
      </h3>
      <br />
      <h3>
        Inccorect guesses: <span className="red-word">{mistakes}/6</span>
      </h3>
    </div>
  );
};

export default Hints;
