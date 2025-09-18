'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  className?: string
  amplitude?: number
  duration?: number
  delay?: number
}

export default function FloatingElement({
  children,
  className = '',
  amplitude = 10,
  duration = 3,
  delay = 0
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-amplitude/2, amplitude/2, -amplitude/2]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}