import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./components/04-10-2024/NotFound";
import Dashboard from "./components/08-10-2024/Dashboard";
import { useState } from "react";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <NotFound />,
    },
  ]);

  const [userName, setUserName] = useState("A");

  return (
    <>
    <h1>App</h1>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
