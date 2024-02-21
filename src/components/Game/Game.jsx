import React, { useEffect, useState } from "react";
import Hangman from "../Hangman/Hangman";
import WordDisplay from "../WordDisplay/WordDisplay";
import Keyboard from "../Keyboard/Keyboard";
import Hints from "../Hints/Hints";
import Popup from "../Popup/Popup";
import { wordList } from "../../words/wordList";
import Stats from "../Stats/Stats";

const Game = () => {
  const [popupVisible, setPopup] = useState(false);
  const [data, setData] = useState({
    word: "",
    hint: "",
    guessedWords: 0,
    mistakes: 0,
    hangamnImg: 0,
    score: 0,
    round: 1,
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
        data.guessedWords += 1;
        data.score += 200;
        data.round += 1;

        //clear after word is correct
        data.disabledButtons = [];
        data.missingLetters = [];
        data.pressedLetters = [];
        data.mistakes = 0;
        data.hangamnImg = 0;
        getRandomWord();
      }

      //do it when misatkes is more than 6
      if (data.mistakes === 6) {
        data.guessedWords = 0;
        setPopup(true);
      }
    }
  }, [data.pressedLetters]);

  const resetData = () => {
    setData((prevState) => ({
      ...prevState,
      pressedLetters: [],
      missingLetters: [],
      disabledButtons: [],
      mistakes: 0,
      hangamnImg: 0,
      guessedWords: 0,
      round: 0,
      score: 0,
    }));
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  return (
    <div className="container">
      {popupVisible === true ? <Popup word={data.word} resetData={resetData} setPopup={setPopup} getRandomWord={getRandomWord} /> : ""}
      <div className="hangman-img-container">
        <Hangman imgNum={data.hangamnImg} />
      </div>
      <div className="words-container">
        <WordDisplay missingLetters={data.missingLetters} word={data.word} pressedLetters={data.pressedLetters} />
        <Hints mistakes={data.mistakes} hint={data.hint} />
        <Keyboard fun={getPressedLetter} disabledButtons={data.disabledButtons} />
      </div>
      <div className="stats-container">
        <Stats guessedWords={data.guessedWords} mistakes={data.mistakes} round={data.round} score={data.score} />
      </div>
    </div>
  );
};

export default Game;
