import React from "react";

const Popup = ({ word, resetData, setPopup, getRandomWord }) => {
  return (
    <div className="popup">
      <h1>You lose</h1>
      <br />
      <h2>
        The correct word was: <span className="red-word">{word}</span>
      </h2>
      <br />
      <button
        className="popup-btn"
        onClick={() => {
          resetData();
          getRandomWord();
          setPopup(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Popup;
