import React, { useCallback, useState } from "react";
import LearnCallbackChild from "./learnCallbackChild";

function LearnCallbackParent() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const handleIncrement = () => {
    setCounterOne(counterOne + 1);
  };
  const handleDecrement = useCallback(() => {
    setCounterTwo(counterTwo - 1);
  }, [counterTwo]);

  return (
    <div>
      <LearnCallbackChild
        counterTwo={counterTwo}
        handleDecrement={handleDecrement}
      />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default LearnCallbackParent;
