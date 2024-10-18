import "./App.css";

import { useState, createContext, useReducer, useCallback, useMemo, useEffect, Suspense, lazy } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./components/14-10-2024/Auth";
// import Misc from "./components/18-10-2024/Misc";
// import Aboutus from "./components/18-10-2024/Aboutus";

const Misc = lazy(() => import("./components/18-10-2024/Misc"));
const Aboutus = lazy(() => import("./components/18-10-2024/Aboutus"));

export const MyContext = createContext(); // Common storage

// function isPrime(n) {
//   console.log("is prime fn called");
//   const max = Math.ceil(Math.sqrt(n));

//   if (n === 2) {
//     return true;
//   }

//   for (let counter = 2; counter <= max; counter++) {
//     if (n % counter === 0) {
//       return false;
//     }
//   }

//   return true;
// }

const App = () => {
  const [counter, setCounter] = useState(0);
  // const [primeLimit, setPrimeLitmit] = useState(1);

  // const [percent, setPercent] = useState(100);
  // const [result, setResult] = useState(100);



  // useEffect(() => {
  //   calculatePercent(50)
  // }, []);

  // const [arr, setArr] = useState(["A", "B", "C", "D"]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Misc />,
    },
    {
      path: "/about-us",
      element: <Aboutus />
    }
  ]);

  // const onInputChange = e => {
  //   setPrimeLitmit(e.target.value)
  // };

  // // const demoFn = useCallback(() => { }, []); // return value => function
  // const isPrime = useCallback((n) => {
  //   console.log("is prime fn called");
  //   const max = Math.ceil(Math.sqrt(n));

  //   if (n === 2) {
  //     return true;
  //   }

  //   for (let counter = 2; counter <= max; counter++) {
  //     if (n % counter === 0) {
  //       return false;
  //     }
  //   }

  //   return true;
  // }, [percent]);

  // const calculatePercent = useCallback((n) => {
  //   const result = (n / 100) * percent;
  //   setResult(result);
  // }, []);

  // const primes = useMemo(() => {
  //   const primeNumber = [];

  //   for (let i = 1; i <= primeLimit; i++) {
  //     if (isPrime(i)) {
  //       primeNumber.push(i);
  //     }
  //   }
  //   return primeNumber;
  // }, [primeLimit]) // return value => wrapped fn return value

  const name = "xyz"


  return (
    <>

      <Suspense fallback={<h1>Loading....</h1>}>
        <RouterProvider router={router} />
      </Suspense>

      {/* {timer} */}
      <br />
      {/* Precentage : {percent} <br />
      <input type="number" onChange={(e) => setPercent(e.target.value)} /> */}
      {/* {counter}
      <button onClick={() => setCounter(counter + 1)}>Increase counter</button> */}
      {/* <br />
      <input type="number" onChange={onInputChange} />
      <br />
      {
        primes.join(", ")
      }
      <Misc arr={primeNumber} name={name} fn={demoFn} /> */}
    </>
  );
};

export default App;
