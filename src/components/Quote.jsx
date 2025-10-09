import React from 'react'
import { motion } from 'framer-motion'

const quoteVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const Quote = () => {
  return (
    <motion.div 
      className="mx-auto max-w-6xl px-6 md:px-8 py-12"
      variants={quoteVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="border-l-4 border-purple-500 pl-6 italic text-gray-300 text-lg">
        <p>“The only way to do great work is to love what you do.”</p>
        <p className="text-right not-italic text-sm text-gray-500 mt-2">- Steve Jobs</p>
      </div>
    </motion.div>
  )
}

export default Quote


