import React from "react";

const Hangman = ({ imgNum }) => {
  return (
    <div>
      <img src={`hangman-${imgNum}.svg`} alt="img" />
    </div>
  );
};

export default Hangman;
