import React from 'react'
import { motion } from 'framer-motion'

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Contacts = () => {
  return (
    <motion.div 
      className="mx-auto max-w-6xl px-6 md:px-8 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 
        className="text-green-var text-xl font-bold mb-6"
        variants={itemVariants}
      >
        #contacts
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.p 
          className="text-gray-300"
          variants={itemVariants}
        >
          Reach out via phone or email. You can also include the full address if needed for any official correspondence.
        </motion.p>
        <motion.div 
          className="border border-gray-700 rounded-md p-4 text-sm text-gray-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02, borderColor: '#14b8a6' }}
          transition={{ duration: 0.2 }}
        >
          <div className="font-semibold text-gray-200 mb-2">Message me here</div>
          <div className="space-y-1">
            <div>Phone: <span className="text-gray-100">09096876798</span></div>
            <div>Email: <span className="text-gray-100">galamayeugenioiii@gmail.com</span></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contacts


