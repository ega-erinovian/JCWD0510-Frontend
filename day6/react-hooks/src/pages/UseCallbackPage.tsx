import { useCallback, useEffect, useState } from "react";

const UseCallbackPage = () => {
  const [items, setItems] = useState<string[]>([]);

  const addItemWithoutCallback = () => {
    setItems((prev) => [...prev, "item"]);
  };

  const addItemWithCallback = useCallback(() => {
    setItems((prev) => [...prev, "item"]);
  }, [setItems]);

  useEffect(() => {
    console.log("Add item function without callback");
  }, [addItemWithoutCallback]);

  useEffect(() => {
    console.log("Add item function with callback");
  }, [addItemWithCallback]);

  return (
    <div>
      <button onClick={addItemWithCallback}>Add With Callback</button>
      <button onClick={addItemWithoutCallback}>Add Without Callback</button>
      <ul>
        {items.map((item: string, idx: number) => (
          <li key={idx}>
            {item} {idx + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallbackPage;
