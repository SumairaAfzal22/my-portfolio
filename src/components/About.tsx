import React from 'react'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>AboutMe</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
        <img 
        src="/about.png" 
        alt="about Icon" 
        className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
        <div className='flex-1'>
            <p className='text-lg mb-8'>
        I am a passionate full-stack developer with the focus on building modern and responsive application.
         with a strong foundation in both front and back and technology,
         I strike to create themeless and efficient user experiences.
        </p>
            <div className='space-y-4'>
                <div className='flex items-center'>
                    <label htmlFor='htmlandcss'className='w-2/12' >  HTML & CSS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scle-105 w-10/12'></div>

                    </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor='htmlandcss'className='w-2/12' > React Js</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scle-105 w-11/12'></div>

                    </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor='htmlandcss'className='w-2/12' > Node Js</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scle-105 w-9/12'></div>

                    </div>
                </div>
            </div>
            <div className='mt-12 flex justify-between text-center'>
                <div>
                    <h3 className='text 2xl font-bold text-white bg-clip-text
                    '>
                        1
                    </h3>
                    <p>Year Experience</p>
                </div>
                
                <div>
                    <h3 className='text 2xl font-bold text-white bg-clip-text
                     '>
                        6+
                    </h3>
                    <p>Projects Completed</p>
                </div>
                
                <div>
                    <h3 className='text 2xl font-bold text-white bg-clip-text
                     '>
                        2+
                    </h3>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
   
    
  )
}

export default About
