import React from "react";
import Hangman from "../Hangman/Hangman";
import WordDisplay from "../WordDisplay/WordDisplay";
import Keyboard from "../Keyboard/Keyboard";
import Hints from "../Hints/Hints";

const Game = () => {
  return (
    <div className="container">
      <div>
        <Hangman />
      </div>
      <div>
        <WordDisplay />
        <Hints />
        <Keyboard />
      </div>
    </div>
  );
};

export default Game;
