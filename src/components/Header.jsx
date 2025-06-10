import React from 'react'
import { Rocket } from 'lucide-react'

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 px-14 py-4 flex items-center justify-between backdrop-blur-md bg-black/30">
      
      {/* Logo */}
      <div className="flex items-center">
        <div className="p-2">
          <Rocket className='text-purple-500' />
        </div>  
        <h1 className="text-white/90 font-semibold text-lg">DriftUI</h1>
      </div>

      {/* Nav Menu */}
      <nav className="hidden md:flex items-center bg-white/10 backdrop-blur-md text-white/90 px-8 py-3 rounded-full space-x-8 border border-white/20">
        <a href="#" className="hover:text-purple-400 transition">Features</a>
        <a href="#" className="hover:text-purple-400 transition">Dashboard</a>
        <a href="#" className="hover:text-purple-400 transition">Testimonials</a>
        <a href="#" className="hover:text-purple-400 transition">Pricing</a>
      </nav>

      {/* CTA Button */}
      <button className="bg-white/90 text-black px-5 py-3 rounded-full font-medium hover:bg-white/70 transition">
        Join Waitlist
      </button>
    </header>
  )
}

export default Header