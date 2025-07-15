import { useState } from 'react'
import './App.css'
import Herosection from './page/Herosection'
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Routes>
      <Route path="/" element={<Herosection />} />
    </Routes>
  )
}

export default App
