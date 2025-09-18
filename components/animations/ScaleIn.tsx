'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  scale?: number
}

export default function ScaleIn({
  children,
  delay = 0,
  duration = 0.4,
  className = '',
  scale = 0.9
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ scale, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}