import { useReducer } from "react";

interface CountState {
  count: number;
}

interface CountAction {
  type: "increment" | "decrement";
  payload: number;
}

function reducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const UseReducerPage = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: "increment", payload: 1 });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: 1 });
  };
  return (
    <div>
      <button onClick={handleIncrement}>increment</button>
      <h3>{state.count}</h3>
      <button onClick={handleDecrement} disabled={state.count <= 0}>
        decrement
      </button>
    </div>
  );
};

export default UseReducerPage;
