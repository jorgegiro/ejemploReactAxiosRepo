import { useState } from 'react'
import './App.css'
import ListaUsuarios from './Components/ListaUsuarios'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
