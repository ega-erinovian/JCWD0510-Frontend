import { useState } from "react";

const useCounter = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  return { number, handleIncrement, handleDecrement };
};

export default useCounter;
