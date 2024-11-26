import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
 <ToastContainer/>
     <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
       
      </Routes>
   
    </>
  )
}

