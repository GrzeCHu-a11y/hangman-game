import React from "react";

const Hints = ({ hint }) => {
  return (
    <div>
      <h3 className="hint">
        Hint: <span>{hint}</span>
      </h3>
    </div>
  );
};

export default Hints;
