import { useState } from "react";

const UseStatePage = () => {
  const [angka, setAngka] = useState<number>(0);

  const handleIncrement = (): void => {
    setAngka(angka + 1);
  };

  return (
    <div>
      <h1>{angka}</h1>
      <button onClick={handleIncrement}>Tambah 1</button>
    </div>
  );
};

export default UseStatePage;
