import React from 'react'
import { motion } from 'framer-motion'
import heroPic from '../assets/hero-pic.png'
import resumePdf from '../assets/Galamay_Eugenio.pdf'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const Hero = () => {
  return (
    <motion.div 
      className="mx-auto max-w-6xl px-6 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-100 leading-tight">
          Eugenio is a <span className="text-orange-var">web designer</span> and <span className="text-green-var">front-end developer</span>
        </h1>
        <motion.p 
          className="text-gray-400 mt-4"
          variants={itemVariants}
        >
          I love crafting responsive websites where technologies meet creativity
        </motion.p>
        <motion.div 
          className="flex items-center gap-3 mt-6"
          variants={itemVariants}
        >
          <a href="#contacts" className="inline-block bg-orange-var hover:brightness-110 text-white px-6 py-2 rounded-md font-semibold transition-all">
            Contact me
          </a>
          <a href={resumePdf} download className="inline-block border border-gray-600 hover:border-gray-500 text-gray-100 px-6 py-2 rounded-md font-semibold transition-all">
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="relative"
        variants={imageVariants}
      >
        <div className="aspect-[4/3] w-full rounded-md bg-gray-800/40 border border-gray-700 mt-4 flex items-end justify-center overflow-hidden">
          <img
            src={heroPic}
            alt="Hero"
            className="h-[100%] md:h-[110%] w-auto object-contain"
          />
        </div>
        <div className="absolute -top-6 -left-6 h-16 w-16 border-2 border-teal-var opacity-70" />
        <div className="absolute top-10 -right-8 h-24 w-24 border-2 border-teal-var opacity-70" />

        <div className="flex items-center gap-2 mt-4 px-4 py-1 border border-gray-600 rounded-md text-sm w-max">
          <span className="w-3 h-3 bg-green-var rounded-sm" />
          <span>Currently working on <span className="text-gray-100">His Self</span></span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Hero


