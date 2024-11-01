import { useEffect, useState } from "react";

const UseEffectpage = () => {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // mode 1 -> akan dijalankan kalo ada perubahan state/props
  useEffect(() => {
    console.log("useEffect mode 1 dijalankan");
  });

  // mode 2 -> akan dijalankan sekali saat pertama kali render
  // Biasanya digunakan untuk fetching data
  useEffect(() => {
    console.log("useEffect mode 2 dijalankan");
  }, []);

  // Mode 3 -> sama kek mode 2, tapi kalo ada perubahan di dependency, akan dijalankan ulang
  useEffect(() => {
    console.log("useEffect mode 3 dijalankan");
  }, [count]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
};

export default UseEffectpage;
