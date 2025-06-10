import React from 'react'
import { motion } from 'framer-motion'

function FloatIcons({ Icon, top, left }) {
  return (
    <motion.div
    className='absolute text-purple-500'
    style={{top, left}}
    animate={{ y: [0, -12, 0] }}
    transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
    }}
    >
        <Icon size={24} />
    </motion.div>
  )
}

export default FloatIcons