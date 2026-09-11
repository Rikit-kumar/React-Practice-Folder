import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <main>
      <h2>Count - {count}</h2>
      <div className="btns">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me
        </button>

        <button onClick={()=>{
            setCount(count - 1)
        }}>Reset</button>
      </div>
    </main>
  );
};

export default App;
