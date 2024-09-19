import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Copyright from './Copyright'

const App = () => {
  // console.log("App component rendered");
  const [counter, setCounter] = useState(0); // React JS Variable
  const [userName, setUserName] = useState("John");

  const [year, setYear] = useState(2024);

  // const [bgColor, setBgColor] = useState("#282c34");
  const [colors, setColors] = useState({
    bgColor: "#282c34",
    fontColor: "#ffffff"
  });

  const onDecreaseButtonClick = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const onIncreaseButtonClick = () => {
    // counter++;
    setCounter(counter + 1);
  };

  const onResetButtonClick = () => {
    setCounter(0);
  };

  const handleToggleChange = () => {
    if (userName === "John") {
      setUserName("Alex")
    } else {
      setUserName("John");
    }
  }

  const onDarkThemeClick = () => {
    // setBgColor("#282c34");
    setColors({
      bgColor: "#282c34",
      fontColor: "#ffffff"
    })
    console.log("Dark theme clicked")
  }

  const onLightThemeClicked = () => {
    // setBgColor("#ffffff");
    setColors({
      bgColor: "#ffffff",
      fontColor: "#282c34"
    })
    console.log("Light theme clicked")
  };

  const onDecreaseYearClick = () => { 
    setYear(year - 1);
  };

  const onIncreaseYearClick = () => { 
    setYear(year + 1);
  };

  return (
    <div style={{
      backgroundColor: colors.bgColor,
      color: colors.fontColor,
      width: "100vw",
      height: "100vh"
    }}>
      <h1>Counter App</h1>
      <div style={{ border: "1px solid black" }}>
        <button onClick={onDecreaseButtonClick}>Decrease (-)</button>
        <h2>{counter}</h2>
        <button onClick={onIncreaseButtonClick}>Increase (+)</button>
        <button onClick={onResetButtonClick}>Reset</button>
      </div>

      <div style={{ border: "1px solid black" }}>
        UserName : {userName}
        <button onClick={handleToggleChange}>Toggle Name</button>
      </div>
      Dark
      <input onClick={onDarkThemeClick} type='radio' name='theme' />
      Light
      <input onClick={onLightThemeClicked} type='radio' name='theme' />

      <div>
        <button onClick={onDecreaseYearClick}>Decrease Year</button>
        <button onClick={onIncreaseYearClick}>Increase Year</button>
      </div>
      <Copyright year={year} />
      <Copyright year={year} />
      <Copyright year={year} />
      <Copyright year={year} />
      <Copyright year={year} />
    </div>
  )
}

export default App
