import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Collection from './pages/Collection'
import About from './pages/About'
import Product from './pages/Product'
import Home from './pages/Home'
import Contact from './pages/Contact'





function App() {
  return (
    <div className='h-screen w-full'>
      <Navbar />
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/About' element={<About />} />
   <Route path='/Product/:pid' element={<Product />} />
   <Route path='/Contact' element={<Contact />} />
      </Routes>
      
    </div>
  )
}

export default App
