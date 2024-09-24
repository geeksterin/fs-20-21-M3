const UseEffectDemo = () => {
    const [counter, setCounter] = useState(0);

    // console.log("App rendered")
    useEffect(() => {
      alert("Welcome to My WebApp");// Skip this line on re-render, only render it first time when the component loads
      // Call API here
    }, []); // Mounting phase
  
    const handleBtnClick = () => {
      // console.log("Btn clicked");
      setCounter(counter + 1);
    };
  
    return (
      <div>
        <h1>useEffect</h1>
        Counter : {counter}
        <button onClick={handleBtnClick}>Click Me</button>
      </div>
    )
};