import "./App.css";

import { useState, createContext, useReducer } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./components/14-10-2024/Auth";

export const MyContext = createContext(); // Common storage

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
