import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='md:ml-auto flex flex-wrap items-center title-font sm:text-2xl text-2xl font-medium   justify-center'>
        <a className='mr-5 hover:text-gray-900' href='/'>
          Home
        </a>
        <a className='mr-5 hover:text-gray-900' href='/'>
          About
        </a>
        <a className='mr-5 hover:text-gray-900' href='/'>
          Contact
        </a>
        <a className='mr-5 hover:text-gray-900' href='/dashboard'>
          Dashboard
        </a>
      </nav>
    </>
  )
}

export default Navbar
