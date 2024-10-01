import { useState, useRef, useEffect } from "react";

const RefsDemo = () => {
  console.log("RefsDemo Component");
  const [name, setName] = useState("");

  const inputFieldRef = useRef(null); // The value of ref variable is preserved across re-renders
  const inputNumberRef = useRef(null);

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  useEffect(() => {
    // inputFieldRef.current.focus();
    console.log("input field ref", inputFieldRef.current);
    console.log("input number ref", inputNumberRef.current);
  }, []);

  const onBtnClick = () => {
    // console.log("Btn clicked", inputFieldRef.current.value); // e.target.value =  inputFieldRef.current.value
    if (inputFieldRef.current.value == "") {
      inputFieldRef.current.focus();
      // Field is empty
      // Focus the field
    } else if (inputNumberRef.current.value == "") {
      inputNumberRef.current.focus();
    } else {
      // Field has value
      // Alert for confirmation
      alert("Query submitted successfully");
    }
  };

  return (
    <>
      <h1>Refs Demo</h1>
      {/* Requirement : Store and use the value of user inupt as and when they type something */}
      {/* <input
        type="text"
        placeholder="Without ref field (Normal)"
        onChange={onInputChange}
      /> */}
      <br />

      <div
        style={{
          border: "1px solid black",
        }}
      >
        {/* Requirement : Fetch the user input from the text field when the button is clicked */}
        <input type="text" ref={inputFieldRef} placeholder="Ref field" />
        <input type="number" ref={inputNumberRef} placeholder="Enter number" />
        <button onClick={onBtnClick}>Submit</button>
      </div>
    </>
  );
};

export default RefsDemo;
