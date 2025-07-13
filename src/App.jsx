import { useState } from 'react'
import './App.css'
import Herosection from './page/Herosection'
import Herosection2 from './page/Herosection2'
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Routes>
      <Route path="/" element={<Herosection />} />
      <Route path="/herosection2" element={<Herosection2 />} />
    </Routes>
  )
}

export default App
