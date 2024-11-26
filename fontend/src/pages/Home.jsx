import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (

    <div>
       <div className="min-h-screen bg-gradient-to-r from-pink-50 to-gray-400 flex flex-col justify-center items-center text-center text-gray-800 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome to Suma_ya!</h1>
        <p className="text-xl mb-6 text-gray-600">Your journey towards creativity, learning, and connection begins here. Explore, grow, and thrive with us.</p>
        
        <div className="space-x-4">
          <NavLink 
            to="/about" 
            className="btn btn-active text-black hover:text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-800 transition duration-300"
          >
            Learn More
          </NavLink>

          
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Home