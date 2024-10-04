import { memo } from "react";

const HooksDemoChild = memo((props) => {
  console.log("Child");
  return (
    <div
      style={{
        border: "2px solid red",
      }}
    >
      <h1>Hooks Child Component</h1>
      {/* <h3>Child Counter as prop {props.counter}</h3> */}
      <button onClick={props.onCounterIncrease}>Increase</button>
    </div>
  );
});

export default HooksDemoChild;
