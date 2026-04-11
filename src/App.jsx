import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Collection from './pages/Collection'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import CustomCursor from './Components/CustomCursor'
import Cart from './pages/Cart'




function App() {
  return (
    <div className='min-h-screen w-full bg-linear-to-b from-black via-gray-900 to-black'>
      
      <Navbar />
  <CustomCursor />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/About' element={<About />} />
       <Route path='/product/:pid' element={<SingleProduct />} />
   <Route path='/Contact' element={<Contact />} />
   <Route path='/Cart' element={<Cart />} />
      </Routes>
      
    </div>
  )
}

export default App
