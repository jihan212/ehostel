import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div class='grid min-h-screen place-items-center'>
      <div class='w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12'>
        <h1 class='text-xl font-semibold'>
          Hello there 👋,{' '}
          <span class='font-normal'>
            please fill in your information to continue
          </span>
        </h1>
        <form class='mt-6'>
          <div class='flex justify-between gap-3'>
            <span class='w-1/2'>
              <label
                for='firstname'
                class='block text-xs font-semibold text-gray-600 uppercase'
              >
                Firstname
              </label>
              <input
                id='firstname'
                type='text'
                name='firstname'
                placeholder='John'
                autocomplete='given-name'
                class='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                required
              />
            </span>
            <span class='w-1/2'>
              <label
                for='lastname'
                class='block text-xs font-semibold text-gray-600 uppercase'
              >
                Lastname
              </label>
              <input
                id='lastname'
                type='text'
                name='lastname'
                placeholder='Doe'
                autocomplete='family-name'
                class='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                required
              />
            </span>
          </div>
          <label
            for='email'
            class='block mt-2 text-xs font-semibold text-gray-600 uppercase'
          >
            E-mail
          </label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='john.doe@company.com'
            autocomplete='email'
            class='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
            required
          />
          <label
            for='password'
            class='block mt-2 text-xs font-semibold text-gray-600 uppercase'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            placeholder='********'
            autocomplete='new-password'
            class='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
            required
          />
          <label
            for='password-confirm'
            class='block mt-2 text-xs font-semibold text-gray-600 uppercase'
          >
            Confirm password
          </label>
          <input
            id='password-confirm'
            type='password'
            name='password-confirm'
            placeholder='********'
            autocomplete='new-password'
            class='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
            required
          />
          <button
            // type='submit'
            class='w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-indigo-500 shadow-lg focus:outline-none hover:bg-indigo-600 hover:shadow-none'
          >
            Sign up
          </button>
          <div class='text-center text-sm text-grey-dark mt-4'>
            By signing up, you agree to the &nbsp;
            <a
              class='no-underline border-b border-grey-dark text-grey-dark'
              href='#'
            >
              Terms of Service
            </a>
            &nbsp; and &nbsp;
            <a
              class='no-underline border-b border-grey-dark text-grey-dark'
              href='#'
            >
              Privacy Policy
            </a>
          </div>
        </form>
        <div class='text-grey-dark mt-6'>
          Already have an account?&nbsp;
          <Link
            class='no-underline border-b border-blue text-blue'
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
