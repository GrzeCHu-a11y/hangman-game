import React, { useEffect, useState } from "react";
import Hangman from "../Hangman/Hangman";
import WordDisplay from "../WordDisplay/WordDisplay";
import Keyboard from "../Keyboard/Keyboard";
import Hints from "../Hints/Hints";
import { wordList } from "../../words/wordList";

const Game = () => {
  const [data, setData] = useState({
    word: "",
    hint: "",
    win: false,
    pressedLetters: [],
    missingLetters: [],
  });

  const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    setData({ word: word, hint: hint });
  };

  useEffect(() => {
    getRandomWord();
  }, []);

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
