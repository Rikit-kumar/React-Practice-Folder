import React from "react";
import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  console.log("app re-render");

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5 bg-black">
      <h1 className="text-6xl text-white">Count - {count}</h1>
      <button

        // Batching 

        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}

        // onClick={() => {
        //   setCount(count + 1);
        //   setCount(count + 1);
        //   setCount(count + 1);
        // }}
        className="px-8 py-2 border-none text-2xl font-semibold w-fit rounded-2xl bg-blue-600 text-white cursor-pointer"
      >
        Increment
      </button>
    </div>
  );
};

export default App;
