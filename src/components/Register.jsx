import React from 'react'

function Register({openLogin}) {
  return (
    <div className='w-96 mx-auto p-4 bg-white rounded'>
       <h2 className='text-2xl font-bold mb-4'>Sign up</h2>
       <form className='space-y-4'>
          <div className='mb-4'>
              <label htmlFor='name' className='block text-gray-700'>Name</label>
              <input type='text' id='name' name='name' required  className='border border-gray-300 py-2 px-3 w-full rounded'/>
          </div>
         <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>Email</label>
            <input type='email' id='email' name='email' required  className='border border-gray-300 py-2 px-3 w-full rounded'/>
         </div>
         <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700'>Password</label>
            <input type='password' id='password' name='password' required className='border border-gray-300 py-2 px-3 w-full rounded'/>
         </div>

         <div className='mb-4'>
            <button type='submit' className='bg-red-600 text-white py-2 px-4 rounded w-full'>Sign up</button>
         </div>
       </form>
       <div className='text-center mt-2'>
       <span className=' text-gray-700'>Already have an account? </span>
         <a href='#' className='text-red-800' onClick={openLogin}>Login</a>
       </div>
    </div>
  )
}

export default Register
