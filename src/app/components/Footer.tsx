import React from 'react'

const footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
        <div className='flex-1 mb-4 md:mb-2'>
        <h3 className='text-2xl font-bold mb-2'>Afzal</h3>
        <p className='text-gray-400'>Full-Stack Developer based in the Pakistan, specializing in web </p>
        </div>
        <div className='flex-1 w-full'>
            <form className='flex items-center justify-center'>
                <input type='email'
                 placeholder='Enter email'
                 className='w-full py-2 bg-gray-800 border-gray-600 focus:outline-none
                   focus:border-green-400'/>
                <button type='submit' className='bg-gradient-to-r from-green-400 to to-blue-500 text-white px-4 py-2rounded-r-lg'
                >Subscribe</button>
            </form>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default footer
