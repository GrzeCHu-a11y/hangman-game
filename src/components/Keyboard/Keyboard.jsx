import React from "react";

const Keyboard = ({ fun, disabledButtons }) => {
  return (
    <div className="keyboard">
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("Q")}>
        Q
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("W")}>
        W
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("E")}>
        E
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("R")}>
        R
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("T")}>
        T
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("Y")}>
        Y
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("U")}>
        U
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("I")}>
        I
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("O")}>
        O
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("P")}>
        P
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("A")}>
        A
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("S")}>
        S
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("D")}>
        D
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("F")}>
        F
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("G")}>
        G
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("H")}>
        H
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("J")}>
        J
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("K")}>
        K
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("L")}>
        L
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("Z")}>
        Z
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("X")}>
        X
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("C")}>
        C
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("V")}>
        V
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("B")}>
        B
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("N")}>
        N
      </button>
      <button className="kb-btn" onClick={(e) => fun(e.target.innerHTML)} disabled={disabledButtons.includes("M")}>
        M
      </button>
    </div>
  );
};

export default Keyboard;
