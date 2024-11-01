import useCounter from "../hooks/useCounter";

const UseCustomHookkPage = () => {
  const { number, handleIncrement, handleDecrement } = useCounter();
  return (
    <div>
      <button onClick={handleIncrement}>increment</button>
      <h3>{number}</h3>
      <button disabled={number <= 0} onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default UseCustomHookkPage;
