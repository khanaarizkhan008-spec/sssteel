import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'

interface GlareCardProps {
  children: React.ReactNode
  className?: string
  glareIntensity?: number
}

export const GlareCard = ({
  children,
  className = '',
  glareIntensity = 0.5
}: GlareCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)

  const springConfig = { damping: 20, stiffness: 200 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  // Hooks must be called unconditionally
  const glareX = useMotionTemplate`${mouseXSpring}%`
  const glareY = useMotionTemplate`${mouseYSpring}%`
  const glareBackground = useMotionTemplate`radial-gradient(
    250px circle at ${glareX} ${glareY},
    rgba(255, 69, 0, ${glareIntensity}),
    transparent 60%
  )`

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(50)
    mouseY.set(50)
  }

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(255, 69, 0, 0.25)'
      }}
    >
      {/* Card content */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* Radial glare effect following cursor — always rendered, opacity toggled */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
        style={{
          background: glareBackground,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none z-20 transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? 'inset 0 0 30px rgba(255, 69, 0, 0.2), 0 0 15px rgba(255, 69, 0, 0.1)'
            : 'none',
        }}
      />
    </motion.div>
  )
}

export default GlareCard
