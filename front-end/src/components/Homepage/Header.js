import React from 'react'
import Navbar from './Navbar/Navbar'
import Button from './Navbar/Button'

const Header = () => {
  return (
    <header class='text-gray-700 body-font border-b border-gray-200'>
      <div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a
          class='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
          href='/'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            class='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span class='ml-3 text-xl'>eHostel</span>
        </a>
        <Navbar />
        <Button />
      </div>
    </header>
  )
}

export default Header
