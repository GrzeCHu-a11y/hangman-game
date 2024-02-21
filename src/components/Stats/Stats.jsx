import React from "react";

const Stats = ({ score, guessedWords, round, mistakes }) => {
  return (
    <div className="stats">
      <h2>Stats</h2>
      <h3>GuessedWords: {guessedWords}</h3>
      <h3>
        Mistakes: <span className="red-word">{mistakes}</span>
      </h3>
      <h3>Current round: {round}</h3>
      <h3>Score: {score}</h3>
    </div>
  );
};

export default Stats;
