import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedGridProps {
  className?: string
  cellSize?: number
  opacity?: number
  color?: string
}

export const AnimatedGrid = ({
  className = '',
  cellSize = 50,
  opacity = 0.03,
  color = '#FF4500'
}: AnimatedGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const yOffset = useTransform(scrollY, [0, 1000], [0, cellSize])

  return (
    <motion.div
      ref={gridRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(${hexToRgb(color)}, ${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(${hexToRgb(color)}, ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: `${cellSize}px ${cellSize}px`,
        y: yOffset,
      }}
    />
  )
}

// Helper function to convert hex to RGB
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (result) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
  }
  return '255, 69, 0' // Default to molten orange
}

export default AnimatedGrid
