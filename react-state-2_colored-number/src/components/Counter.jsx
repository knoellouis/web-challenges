import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decreaseCount}
        >
          -
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={increaseCount}
        >
          +
        </button>
      </div>
    </div>
  );
}
