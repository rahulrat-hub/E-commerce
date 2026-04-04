import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Collection from './pages/Collection'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'




function App() {
  return (
    <div className='h-screen w-full'>
      <Navbar />
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/About' element={<About />} />
       <Route path='/product/:pid' element={<SingleProduct />} />
   <Route path='/Contact' element={<Contact />} />
      </Routes>
      
    </div>
  )
}

export default App
