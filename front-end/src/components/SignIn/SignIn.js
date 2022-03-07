import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='bg-grey-lighter min-h-screen flex flex-col'>
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 className='mb-8 text-3xl text-center'>Sign up</h1>
          <input
            type='text'
            className='block border border-grey-light w-full p-3 rounded mb-4'
            name='fullname'
            placeholder='Full Name'
          />

          <input
            type='text'
            className='block border border-grey-light w-full p-3 rounded mb-4'
            name='email'
            placeholder='Email'
          />

          <input
            type='password'
            className='block border border-grey-light w-full p-3 rounded mb-4'
            name='password'
            placeholder='Password'
          />
          <input
            type='password'
            className='block border border-grey-light w-full p-3 rounded mb-4'
            name='confirm_password'
            placeholder='Confirm Password'
          />

          <button class='w-full text-center inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg my-1'>
            Create Account
          </button>

          <div className='text-center text-sm text-grey-dark mt-4'>
            By signing up, you agree to the&nbsp;
            <a
              className='no-underline border-b border-grey-dark text-grey-dark'
              href='#'
            >
              Terms of Service
            </a>
            &nbsp; and &nbsp;
            <a
              className='no-underline border-b border-grey-dark text-grey-dark'
              href='#'
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className='text-grey-dark mt-6'>
          Already have an account?&nbsp;
          <Link
            className='no-underline border-b border-blue text-blue'
            to='../login/'
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  )
}

export default SignIn
