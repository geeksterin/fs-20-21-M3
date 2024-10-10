import "./App.css";

import { useState, createContext } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./components/04-10-2024/NotFound";
import Dashboard from "./components/08-10-2024/Dashboard";

export const MyContext = createContext(); // Common storage

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <NotFound />,
    },
  ]);

  const [userName, setUserName] = useState("");
  const [todos, setTodos] = useState([]);

  // const [state, setState] = useState({
  //   userName: "",
  //   todos: []
  // })

  return (
    <>
      <h1>App</h1>
      <MyContext.Provider value={{ userName, setUserName, todos, setTodos }}>
        {/* MyContext.Provider => Component */}
        <Dashboard />
      </MyContext.Provider>
    </>
  );
};

export default App;
