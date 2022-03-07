import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <Link to='/signin'>
      <button class='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        Sign Up
      </button>
    </Link>
  )
}

export default Button
