import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { decrement, increment } from "../redux/slices/counter";

const Home = () => {
  // Melihat isi global state
  const counter = useAppSelector((state) => state.counter);

  // Mengubah isi global state
  const dispatch = useAppDispatch();

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrement = () => {
    dispatch(increment(1));
  };
  return (
    <div>
      <button onClick={handleDecrement}>decrement</button>
      <span>{counter.value}</span>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

export default Home;
