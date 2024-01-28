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
    wins: 0,
    mistakes: 0,
    hangamnImg: 0,
    pressedLetters: [],
    missingLetters: [],
    disabledButtons: [],
  });

  const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];

    //set missing letters
    const missingLetters = word
      .split("")
      .filter((_, index) => index % 3 === 0)
      .join("");
    setData((prevData) => ({ ...prevData, word: word, hint: hint, missingLetters: missingLetters }));
  };

  const getPressedLetter = (letter) => {
    setData((prevData) => ({
      ...prevData,
      pressedLetters: [...prevData.pressedLetters, letter.toLowerCase()],
      //disable clicked button
      disabledButtons: [...prevData.disabledButtons, letter],
    }));

    //set misatke if letter is wrong
    data.missingLetters.includes(letter.toLowerCase())
      ? ""
      : setData((prevData) => ({
          ...prevData,
          mistakes: prevData.mistakes + 1,
          hangamnImg: prevData.hangamnImg + 1,
        }));
  };

  // check if the clicked letters match the hidden ones
  useEffect(() => {
    if (data.pressedLetters.length > 0) {
      const missingLettersSet = new Set(data.missingLetters);
      const pressedLettersSet = new Set(data.pressedLetters);
      const allMissingLettersInPressed = [...missingLettersSet].every((letter) => pressedLettersSet.has(letter));

      //do it when allMissingLettersIsPressed
      if (allMissingLettersInPressed) {
        data.wins += 1;
        resetData();
        getRandomWord();
      }

      //do it when misatkes is more than 6
      if (data.mistakes === 6) {
        alert("Game over");
        data.wins = 0;
        resetData();
        getRandomWord();
      }
    }
  }, [data.pressedLetters]);

  const resetData = () => {
    setData((prevState) => ({ ...prevState, pressedLetters: [], missingLetters: [], mistakes: 0, hangamnImg: 0, disabledButtons: [] }));
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  return (
    <div className="container">
      <div>
        <Hangman imgNum={data.hangamnImg} />
      </div>
      <div>
        <WordDisplay missingLetters={data.missingLetters} word={data.word} pressedLetters={data.pressedLetters} />
        <Hints mistakes={data.mistakes} hint={data.hint} />
        <Keyboard fun={getPressedLetter} disabledButtons={data.disabledButtons} />
      </div>
    </div>
  );
};

export default Game;
