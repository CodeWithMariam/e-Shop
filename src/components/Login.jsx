import React from 'react'

function Login({openSignUp}) {
  return (
    <div className='w-96 mx-auto p-4 bg-white rounded'>
       <h2 className='text-2xl font-bold mb-4'>Login</h2>
       <form className='space-y-4'>
         <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>Email</label>
            <input type='email' id='email' name='email' required  className='border border-gray-300 py-2 px-3 w-full rounded'/>
         </div>
         <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700'>Password</label>
            <input type='password' id='password' name='password' required className='border border-gray-300 py-2 px-3 w-full rounded'/>
         </div>
         <div className='flex items-center justify-between mb-4'>
            <label htmlFor='rememberMe' className='inline-flex items-center'>
               <input type='checkbox' id='rememberMe' name='rememberMe' className='form-checkbox'/>
               <span className='ml-2 text-gray-700'>Remember me</span>
            </label>
            <a href='#' className='text-red-800 ml-4'>Forgot Password?</a>
         </div>
         <div className='mb-4'>
            <button type='submit' className='bg-red-600 text-white py-2 px-4 rounded w-full'>Login</button>
         </div>
       </form>
       <div className='text-center mt-2'>
       <span className=' text-gray-700'>Don't have an account? </span>
         <a href='#' className='text-red-800' onClick={openSignUp}>Sign up</a>
       </div>
    </div>
  )
}

export default Login
