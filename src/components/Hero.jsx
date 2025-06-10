import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Sparkles, Settings2, Atom, } from 'lucide-react'
import FloatIcons from './FloatIcons'

function Hero() {
  return (
    <div className='min-h-screen w-full bg-black relative flex items-center justify-center px-4'>

    <div className='absolute inset-0 z-0'
    style={{
        backgroundImage: `
            linear-gradient(to right, #3B3C3D 1px, transparent 1px),
            linear-gradient(to bottom, #3B3C3D 1px, transparent 1px)  
        `,
        backgroundSize: "40px 40px"
    }} />

    <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

    <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />


    <FloatIcons Icon={Sparkles} top='20%' left='15%' />
    <FloatIcons Icon={Atom} top='15%' left='80%' />
    <FloatIcons Icon={Code2} top='75%' left='13%' />
    <FloatIcons Icon={Settings2} top='75%' left='85%' />

    <div className="z-10 relative text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-200">
          One Platform,
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-purple-500 mb-4">
          Endless Opportunities
        </h1>

        <p className='text-gray-400 mb-6'>
        Discover a unified solution to launch, grow, and scale your next big idea.
        <br></br>
        Experience the perfect blend of Design and Code.
        </p>

        <div className='flex justify-center gap-4'>
            <button className='bg-purple-500 rounded-full text-white px-6 py-2 hover:bg-violet-700 transition' >
                Get Started
            </button>
            <button className='border border-purple-500 text-purple-500 rounded-full px-6 py-2 hover:bg-white/20  transition'>
                Learn More
            </button>
        </div>

    </div>

    </div>
  )
}

export default Hero