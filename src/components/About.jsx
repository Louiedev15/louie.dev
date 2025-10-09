import React from 'react'
import { motion } from 'framer-motion'
import heroPic from '../assets/hero-pic.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const About = () => {
  return (
    <motion.div 
      className="mx-auto max-w-6xl px-6 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={textVariants}>
        <h2 className="text-green-var text-xl font-bold mb-4">#about-me</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm Eugenio Galamay III, a front‑end developer and web designer focused on
          crafting clean, responsive interfaces where usability and aesthetics meet. I enjoy
          turning complex ideas into simple, functional experiences and continuously
          sharpen my skills with modern tools like React, Tailwind, and motion design.
          I thrive in dynamic environments, value clear communication, and love building
          products that genuinely help people.
        </p>
      </motion.div>
      <motion.div 
        className="relative"
        variants={imageVariants}
      >
        <div className="aspect-[3/4] w-full rounded-md bg-gray-800/40 border border-gray-700 overflow-hidden flex items-end justify-center">
          <img src={heroPic} alt="About" className="h-[115%] w-auto object-contain opacity-95" />
        </div>
        <div className="pointer-events-none absolute inset-0 grid grid-cols-6 opacity-30">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border border-dotted border-gray-600" />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About


