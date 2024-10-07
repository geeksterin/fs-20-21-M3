import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeList from './components/EmployeeList/EmployeeList'
import TeamList from './components/TeamList/TeamList'

function App() {

  return (
    <>
      <h1>Employee App </h1>
      <EmployeeList />
      <TeamList />
    </>
  )
}

export default App
