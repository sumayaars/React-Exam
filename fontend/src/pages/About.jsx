import React from 'react'

const About = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-gray-400 min-h-screen">

      <div className='text-2xl text-center pt-8 border-t '>
        <h1 className='text-gray-600'>ABOUT <span className='text-gray-800' >US</span></h1>
      </div>
      
      <div className="ml-4 my-10 mr-4 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src='/src/assets/about_img.png' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Suma_ya is a user-friendly platform designed to simplify your journey while offering a seamless experience. Whether exploring new ideas, connecting with others, or accessing resources, Suma_ya makes it easy to navigate and discover what you need.</p>
          <p>With its sleek interface and personalized features, Suma_ya is your go-to destination for creativity, learning, and collaboration. Every interaction is designed to add value and enhance your experience.</p>
          <b className='text-gray-800'> Mission of Suma_ya</b>
          <p>To empower users through a seamless platform that fosters creativity, learning, and collaboration. We aim to provide valuable resources and meaningful connections that enhance personal and professional growth.</p>
        </div>
      </div>

      <div className='text-4xl py-4 ml-4'>
        <h1 className='text-gray-600'>WHY <span className='text-gray-800' >CHOOSE US</span></h1>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 h-full">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Innovative Solutions:</b>
          <p className='text-gray-600'>We bring creative and cutting-edge ideas tailored to meet your needs.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Personalized Experience:</b>
          <p className='text-gray-600'>Our platform adapts to your unique preferences for a seamless journey.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Community Focused:</b>
          <p className='text-gray-600'>We prioritize building a supportive environment where learning and growth thrive.</p>
        </div>
      </div>
    </div>
  )
}

export default About
