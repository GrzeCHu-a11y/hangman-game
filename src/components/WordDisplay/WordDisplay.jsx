import React from "react";

const WordDisplay = ({ missingLetters, word, pressedLetters }) => {
  const currentWord = word.split("");
  return (
    <div>
      <ul className="word-display">
        {currentWord.map((el, index) => {
          const isMissing = !missingLetters.includes(el);
          const letterToDisplay = isMissing || pressedLetters.includes(el) ? el : "_";
          return <li key={index}>{letterToDisplay}</li>;
        })}
      </ul>
    </div>
  );
};

export default WordDisplay;
