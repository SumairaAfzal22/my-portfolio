import React from 'react'
 
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
     <img src='./icon.png' alt=''
     className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
     
     
    
      <h1 className='text-4xl font-bold px-4 md:px-32'>
           I&#39;m {" "}
        <span className=' text-white px-4
        ' >Sumaira Afzal</span>
        ,Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300 px-4' >
        I specialize in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
        <button  className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
        <button  className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4  py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default Hero
