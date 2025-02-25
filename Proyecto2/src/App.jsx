import { useState } from 'react'
import './App.css'
import ListaUsuarios from './Components/ListaUsuarios'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import User from './Pages/User'
import Login from './Pages/Login';


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  )
}

export default App
