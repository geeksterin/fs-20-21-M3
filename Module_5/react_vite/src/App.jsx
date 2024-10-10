import "./App.css";

import { useState, createContext, useReducer } from "react";

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

  const initState = {
    userName: "",
    todos: [],
    products: []
  }

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "SET_USERNAME":
        return {
          ...state,
          userName: action.payload
        };
      case "ADD_TODO":
        return {
          ...state
        }
      case "REMOVE_TODO":
        return {
          ...state
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initState);

  return (
    <>
      <h1>App</h1>
      <MyContext.Provider value={{ state, dispatch }}>
        {/* MyContext.Provider => Component */}
        <Dashboard />
      </MyContext.Provider>
    </>
  );
};

export default App;
