import React from "react";

const Keyboard = ({ fun, disabledButtons }) => {
  return (
    <div className="keyboard">
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("Q")}>
        Q
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("W")}>
        W
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("E")}>
        E
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("R")}>
        R
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("T")}>
        T
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("Y")}>
        Y
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("U")}>
        U
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("I")}>
        I
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("O")}>
        O
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("P")}>
        P
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("A")}>
        A
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("S")}>
        S
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("D")}>
        D
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("F")}>
        F
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("G")}>
        G
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("H")}>
        H
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("J")}>
        J
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("K")}>
        K
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("L")}>
        L
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("Z")}>
        Z
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("X")}>
        X
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("C")}>
        C
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("V")}>
        V
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("B")}>
        B
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("N")}>
        N
      </button>
      <button onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("M")}>
        M
      </button>
    </div>
  );
};

export default Keyboard;
