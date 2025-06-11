import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div>
        <hr className='text-gray-800'></hr>
        <div className='flex flex-row items-center justify-center gap-12 mt-6'>
            <a href='#' className='text-gray-400  hover:text-white'>Home</a>
            <a href='#' className='text-gray-400  hover:text-white'>Platform</a>
            <a href='#' className='text-gray-400  hover:text-white'>Features</a>
            <a href='#' className='text-gray-400  hover:text-white'>FAQ</a>
            <a href='#' className='text-gray-400  hover:text-white'>Contact</a>
        </div>
        <p className='text-lg text-zinc-400 text-center mt-10'>From idea to interface — design systems made simple.</p>
        <div className='flex justify-center gap-6 py-4'>

        <a href='https://facebook.com'>
        <FaFacebookF className='text-purple-400 w-6 h-6' />
        </a>
        <a href='https://Instagram.com'>
        <FaInstagram className='text-purple-400 w-6 h-6' />
        </a>
        <a href='https://Twitter.com'>
        <FaTwitter className='text-purple-400 w-6 h-6' />
        </a>
        <a href='http://linkedin.com'>
        <FaLinkedinIn className='text-purple-400 w-6 h-6' />
        </a>
        


        </div>

        <hr className='text-gray-800 mt-4'></hr>
       <div className='text-zinc-400 flex justify-around gap-6 mt-8 pb-8'>
       <span className="text-sm text-muted-foreground hover:text-white">
              © 2025 Your Company, Inc.
            </span>
            <span className='hover:text-white'>Privacy Policy</span>
            <span className='hover:text-white'>Terms & Conditions</span>
       </div>
    </div>
  )
}

export default Footer