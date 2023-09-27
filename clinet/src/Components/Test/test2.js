import React, { useMemo, useState } from "react";

function LearnMemo() {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  const handleIncrement = () => {
    setIncrement(increment + 1);
  };
  const handleDecrement = () => {
    setDecrement(decrement - 1);
  };
  const isEven = useMemo(() => {
    console.log("-----");
    let i = 0;
    while (i < 2000000000) i++;
    return increment % 2 == 0;
  }, [increment]);

  return (
    <div>
      <h3>{isEven ? "Event" : "Odd"}</h3>
      <button onClick={handleIncrement}>Increment{increment}</button>
      <button onClick={handleDecrement}>Decrement{decrement}</button>
    </div>
  );
}

export default LearnMemo;
