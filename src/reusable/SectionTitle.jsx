import React from 'react'

const SectionTitle = ({ children, className = '', border = true }) => (
  <h2 className={`text-purple-400 text-xl font-bold ${border ? 'border-b border-gray-700' : ''} ${className}`}>{children}</h2>
)

export default SectionTitle


