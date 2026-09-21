import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/CounterSlice";

const App = () => {
  let dispatch = useDispatch();
  const { count } = useSelector((store) => store.counter);

  return (
    <div>
      <h1>My count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button> &nbsp;
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
