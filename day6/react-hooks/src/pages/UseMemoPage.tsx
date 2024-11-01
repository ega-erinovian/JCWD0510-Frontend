import { useMemo, useState } from "react";

const UseMemoPage = () => {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const incrementNumber = () => setNumber(number + 1);
  const incrementCount = () => setCount(count + 1);

  let i = 0;
  const isEvenNumber = useMemo(() => {
    while (i < 2_000_000) {
      i++;
    }

    return number % 2 === 0;
  }, [number]);

  return (
    <div>
      <button onClick={incrementNumber}>number: 0</button>
      <p>{isEvenNumber ? "Even" : "Odd"}</p>
      <button onClick={incrementCount}>count: 0</button>
    </div>
  );
};

export default UseMemoPage;
