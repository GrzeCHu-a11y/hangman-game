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
    //get random word
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];

    //set missing letters
    const missingLetters = word
      .split("")
      .filter((_, index) => index % 2 === 0)
      .join("");
    setData((prevData) => ({ ...prevData, word: word, hint: hint, missingLetters: missingLetters }));
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  useEffect(() => {
    console.log(data.missingLetters, data.word);
  }, [data.missingLetters != ""]);

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
