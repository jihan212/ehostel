import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='md:ml-auto flex flex-wrap items-center title-font sm:text-2xl text-2xl font-medium   justify-center'>
        <Link className='mr-5 hover:text-gray-900' to='/'>
          Home
        </Link>
        <Link className='mr-5 hover:text-gray-900' to='/'>
          About
        </Link>
        <Link className='mr-5 hover:text-gray-900' to='/'>
          Contact
        </Link>
        <Link className='mr-5 hover:text-gray-900' to='/dashboard'>
          Dashboard
        </Link>
      </nav>
    </>
  )
}

export default Navbar
