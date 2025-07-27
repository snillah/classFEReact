import React, { useState } from "react";

function CounterFunctional() {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Functional Component</h2>
      <p>Count : {count}</p>
      <button onClick={increament}>Increament</button>
    </div>
  );
}

export default CounterFunctional;
