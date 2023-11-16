import React, { useState } from "react";

const Cricket = () => {
  const [count, setCount] = useState(0);
  //   const [c, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button className="red-button" onClick={() => setCount(count + 1)}>
        1
      </button>
      &emsp;
      <button className="red-button" onClick={() => setCount(count + 2)}>
        2
      </button>
      &emsp;
      <button className="red-button" onClick={() => setCount(count + 4)}>
        4
      </button>
      &emsp;
      <button className="red-button" onClick={() => setCount(count + 6)}>
        6
      </button>
      &emsp;
      <button className="red-button" onClick={() => setCount(count)}>
        Wicket
      </button>
    </div>
  );
};

export default Cricket;