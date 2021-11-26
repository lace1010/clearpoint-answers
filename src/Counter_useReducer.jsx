import React, { useReducer, useState } from 'react'

const Counter_useReducer = () => {
  const [number, updateNumber] = useState(0);
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
        return {count: state.count + number};
        case 'decrement':
        return {count: state.count - number};
        default:
        throw new Error();
    }
}

  const add = () => dispatch({ type: "increment" });
  const subtract = () => dispatch({ type: "decrement" });

  const handleNumberChange = (e) => updateNumber(Number(e.target.value));

  return (
    <div>
      <div id="result">{state.count}</div>
      <div>
        <button id="add" onClick={add}>
          Add
        </button>
        <button id="subtract" onClick={subtract}>
          Subtract
        </button>
      </div>
      <div>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
    </div>
  );
}

export default Counter_useReducer
