import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
       <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 '>
         <div>
           <h2 className='text-xl font-semibold'>e-Shop</h2>
           <p className='mt-4'>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nobis quibusdam error dolorem atque tempore earum dolore perspiciatis unde impedit.
           </p>

         </div>
         <div className='flex flex-col md:items-center'>
           <h4 className='text-lg font-semibold'>Quick Links</h4>
           <ul className='space-y-2 mt-4'>
             <li>
              <Link to="/" className='hover:underline'>Home</Link>
             </li>
             <li>
              <Link to="/shop" className='hover:underline'>Shop</Link>
             </li>
             <li>
              <Link to="/" className='hover:underline'>About</Link>
             </li>
             <li>
              <Link to="/contact" className='hover:underline'>Contact Us</Link>
             </li>
           </ul>
         </div>
         <div>
           <h4 className='text-lg font-semibold'>Follow Us</h4>
           <div className='flex space-x-4 mt-4'>
             <a href="#" className='hover:text-gray-400 w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full'><FaFacebook /></a>
             <a href="#" className='hover:text-gray-400 w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full'><FaLinkedin /></a>
             <a href="#" className='hover:text-gray-400 w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full'><FaTwitter /></a>
             <a href="#" className='hover:text-gray-400 w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full'><FaGithub /></a>
           </div>
           <form className='mt-8 flex items-center justify-center'>
             <input type="email" placeholder="Email Address" className='w-full rounded-l-lg border border-gray-600 p-2 bg-gray-800 ' />
             <button type="submit" className='bg-red-600 border border-red-600 text-white rounded-r-lg hover:bg-red-700 transition-colors duration-300 font-semibold  py-2 px-4'>Subscribe</button>
           </form>
         </div>
       </div>
       <div className='mt-8 pt-4 border-t border-gray-700'>
           <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <p>© 2024 e-Shop. All rights reserved.</p>
            <div className='mt-4 md:mt-0'>
              <Link to="/terms-of-service" className='hover:underline'>Terms & Conditions</Link> | <Link to="/privacy-policy" className='hover:underline'>Privacy Policy</Link>
            </div>
           </div>
       </div>
    </footer>
  )
}

export default Footer
