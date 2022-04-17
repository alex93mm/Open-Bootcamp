const { useState } = require("react");

const useCounter = (defaultValue = 0, max = 10, min = 0) => {
  const [counter, setCounter] = useState(defaultValue);

  const increment = (step = 1) => {
    setCounter((oldValue) => oldValue + step <= max ? oldValue + step : oldValue );
  };

  const decrement = (step = 1) => {
    setCounter((oldValue) => oldValue - step >= min ? oldValue - step : oldValue );
  };

  const reset = () => setCounter(0);

  return { counter, setCounter, increment, decrement, reset };
};

export default useCounter;