import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from "./Footer";
import Header from "./Header";
import Content from './Content';

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
