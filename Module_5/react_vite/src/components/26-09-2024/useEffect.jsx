import { useState, useEffect } from 'react'
import './App.css'

const App = () => {

  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState(0);
  const [premium, setPremium] = useState(0);
  const [randomNo, setRandomNo] = useState(0);

  // useEffect(() => {
  //   setPremium(age * 2.5 * 10000); // This line will run everytime when the value of age changes
  // }, [age]); // Updation

  // useEffect(() => {}.[userName]);

  // const onBtnClick = () => {
  //   setTimeout(() => {
  //     setRandomNo(Math.random())
  //   }, 3000)
  // }
  
  useEffect(() => {
    setTimeout(() => {
      // console.log(Math.random())
      setRandomNo(Math.random());
    }, 3000);
  },[userName])

  return (
    <>
      <h1>use Effect Demo</h1>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={(e) => {
            setUserName(e.target.value)
          }} type='text' id='name' />
        </div>

        <div>
          <label htmlFor='address'>Address</label>
          <input onChange={(e) => {
            setAddress(e.target.value)
          }} type='text' id='address' />
        </div>

        <div>
          <label htmlFor='age'>Age</label>
          <input onChange={(e) => {
            setAge(Number(e.target.value))
          }} type='number' id='age' />
        </div>



      </form>
      <div>
        <h3>{userName}</h3>
        <h3>{address}</h3>
        <h3>{age}</h3>
        <h3>Policy Premium : Rs {premium}</h3>
      </div>
      <h3>Randon Number : {randomNo}</h3>
      {/* <button onClick={onBtnClick}>Click Me</button> */}
    </>
  )
}

export default App
