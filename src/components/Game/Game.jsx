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

    //set missing letters
    const missingLetters = word
      .split("")
      .filter((_, index) => index % 2 === 0)
      .join("");
    setData((prevData) => ({ ...prevData, word: word, hint: hint, missingLetters: missingLetters }));
  };

  const getPressedLetter = (letter) => {
    setData((prevData) => ({ ...prevData, pressedLetters: [...prevData.pressedLetters, letter.toLowerCase()] }));
  };

  // check win or lose
  useEffect(() => {
    if (data.pressedLetters.length > 0) {
      const missingLettersSet = new Set(data.missingLetters);
      const pressedLettersSet = new Set(data.pressedLetters);
      const allMissingLettersInPressed = [...missingLettersSet].every((letter) => pressedLettersSet.has(letter));

      if (allMissingLettersInPressed) {
        console.log("all letters guessed");
      }
    }
  }, [data.pressedLetters]);

  useEffect(() => {
    getRandomWord();
  }, []);

  return (
    <div className="container">
      <div>
        <Hangman />
      </div>
      <div>
        <WordDisplay missingLetters={data.missingLetters} word={data.word} pressedLetters={data.pressedLetters} />
        <Hints />
        <Keyboard fun={getPressedLetter} />
      </div>
    </div>
  );
};

export default Game;
