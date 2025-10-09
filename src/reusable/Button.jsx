import React from 'react'
import { motion } from 'framer-motion'

// Variants supported:
// - liveOutline: outlined purple
// - liveFilled: filled purple
// - demoOutline: outlined gray
// - demoDisabled: disabled gray
const Button = ({
  variant = 'liveOutline',
  className = '',
  children,
  disabled = false,
  ...props
}) => {
  const base = 'px-4 py-2 rounded-md font-medium text-white inline-flex items-center justify-between gap-2 transition-colors duration-200 ease-in-out';

  const byVariant = {
    liveOutline: 'bg-transparent border border-purple-500 hover:bg-[#2d1b3d]',
    liveFilled: 'bg-purple-700 hover:bg-purple-600',
    demoOutline: 'bg-transparent border border-gray-400 hover:bg-[#2a2a2a]',
    demoDisabled: 'bg-gray-800 border border-gray-600 text-gray-400 cursor-not-allowed',
  }

  const content = (
    <span className="flex w-full items-center justify-between">
      <span className="font-mono">{props.label}</span>
      <span aria-hidden="true" className={disabled ? 'text-gray-400' : ''}>{props.icon}</span>
    </span>
  )

  const classes = [
    base,
    disabled ? byVariant.demoDisabled : byVariant[variant],
    className,
  ].join(' ')

  if (disabled) {
    return (
      <button className={classes} disabled {...props}>
        {content}
      </button>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export default Button


