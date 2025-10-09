import React from 'react'
import { motion } from 'framer-motion'

const groups = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript'] },
  { title: 'Databases', items: ['SQLite', 'PostgreSQL', 'Mongodb', 'Firebase'] },
  { title: 'Tools', items: ['VSCode', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome'] },
  { title: 'Frameworks', items: ['React', 'Angular '] },
  { title: 'Other', items: ['HTML', 'CSS'] },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Skills = () => {
  return (
    <motion.div 
      className="mx-auto max-w-6xl px-6 md:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
        className="text-purple-400 text-xl font-bold mb-8"
        variants={cardVariants}
      >
        #skills
      </motion.h2>
      <motion.div 
        className="grid md:grid-cols-3 gap-4"
        variants={containerVariants}
      >
        {groups.map((g) => (
          <motion.div 
            key={g.title} 
            className="border border-gray-700 rounded-md p-4 text-sm text-gray-300"
            variants={cardVariants}
            whileHover={{ scale: 1.02, borderColor: '#14b8a6' }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-gray-200 font-semibold mb-2">{g.title}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="inline-block px-2 py-0.5 rounded bg-gray-800/40 border border-gray-700 text-gray-300">{i}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Skills


