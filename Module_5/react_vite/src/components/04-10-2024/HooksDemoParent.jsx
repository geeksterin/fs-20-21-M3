import { useState, useCallback } from "react";
import HooksDemoChild from "./HooksDemoChild";

const HooksDemoParent = () => {
  console.log("Parent");
  const [counter, setCounter] = useState(0);

  // const onCounterIncrease = () => {
  //   setCounter(counter + 1);
  // };

  // Syntax : useCallback(<callback-fn>, <dpenedency-array>)

  const onCounterIncrease = useCallback(() => {
    setCounter(counter + 1);
    x = 20;
  }, []); // Function initialization / declaration / creation will happen only once, it can be called multiple times as required

  return (
    <div
      style={{
        border: "2px solid black",
      }}
    >
      <h1>Hooks Parent Component</h1>
      Counter : {counter}
      <HooksDemoChild onCounterIncrease={onCounterIncrease} />
    </div>
  );
};

export default HooksDemoParent;
