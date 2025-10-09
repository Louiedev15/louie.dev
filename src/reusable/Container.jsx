import React from 'react'

const Container = ({ className = '', children }) => (
  <div className={`mx-auto max-w-6xl px-6 md:px-8 ${className}`}>{children}</div>
)

export default Container


