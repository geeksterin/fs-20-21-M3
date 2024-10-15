import { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Login from './container/Login/Login'
import BlogContextProvider from './context/BlogContext'
import BlogList from './container/BlogList/BlogList'
import BlogCreate from './container/BlogCreate/BlogCreate'
import Layout from './container/Layout/Layout'

function App() {

  const router = createBrowserRouter([
    {
      path: "/", // Blog list
      element: <Layout />,
      children: [
        {
          path: "/", // Blog list
          element: <BlogList />,
        },
        {
          path: "/create", // Blog create
          element: <BlogCreate />
        }
      ]
    },
    {
      path: "/login", // Login
      element: <Login />
    }
  ])

  return (
    <>
      <BlogContextProvider>
        <RouterProvider router={router} />
      </BlogContextProvider>
    </>
  )
}

export default App
