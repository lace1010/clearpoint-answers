import React from "react";
import Cards from "./Cards";
import Counter from "./Counter_useReducer";
import Context from "./Context";

function App() {
  return (
    <>
      <Context />
      <br />
      <Counter />
      <br />
      <Cards amount={8} />
    </>
  );
}

export default App;
