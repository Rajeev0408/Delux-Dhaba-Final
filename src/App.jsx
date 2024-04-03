import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}> {/* Wrap all routes with Layout */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='menu' element={<Menu />} />
        <Route path='contactus' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
