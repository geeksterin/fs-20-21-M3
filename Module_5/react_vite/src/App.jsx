import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutUs from "./components/04-10-2024/AboutUs";
import ContactUs from "./components/04-10-2024/ContactUs";
import Home from "./components/04-10-2024/Home";
import NotFound from "./components/04-10-2024/NotFound";
import Layout from "./components/04-10-2024/Layout";
import HotelDetails from "./components/04-10-2024/HotelDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/hotel/:hotelId",
          element: <HotelDetails />
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
