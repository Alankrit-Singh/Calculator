import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import "./App.css";
import React, { useReducer } from "react";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CLEAR: "clear",
  CHOOSE_OPERATION: "choose-operation",
  DELETE: "delete",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "." && state.current == null) {
        return {
          current: "0."
        }
      }
      if (payload.digit === "0" && state.current === "0") {
        return state;
      }
      if (payload.digit === "." && state.current.includes(".")) {
        return state;
      }
      return {
        ...state,
        current: `${state.current || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.current == null && state.previous == null ) {
        return state;
      }
      return {
        ...state,
        current: `${state.current || ""}${payload.operation}`,
      };
    
    case ACTIONS.CLEAR:
      return {}
    
    case ACTIONS.DELETE:
      return {}

    case ACTIONS.EVALUATE:
      return {}
    }
}

function App() {
  const [{ current, previous, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous">
          {previous} {operation}
        </div>
        <div className="current" >{current}</div>
      </div>
      <button className="span-two" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="x" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
