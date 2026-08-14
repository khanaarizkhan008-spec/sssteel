import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  variant?: 'primary' | 'secondary' | 'outline'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

export const MagneticButton = ({
  children,
  className = '',
  intensity = 0.3,
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    x.set(offsetX * intensity)
    y.set(offsetY * intensity)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const variantStyles = {
    primary: 'bg-molten-500 text-white hover:bg-molten-600 shadow-md shadow-molten-500/20',
    secondary: 'bg-navy-800 text-white hover:bg-navy-900 border border-navy-700 shadow-sm',
    outline: 'bg-white/80 backdrop-blur-md text-navy-800 border-2 border-navy-800/20 hover:border-molten-500 hover:text-molten-500 hover:bg-molten-50'
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className={`magnetic-wrapper inline-block ${className}`}
    >
      {/* Outer gradient border wrapper — only for primary */}
      <div className={`relative rounded-xl ${variant === 'primary' ? 'p-[2px]' : ''}`}>
        {variant === 'primary' && (
          <div
            className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
            style={{
              background: isHovered
                ? 'linear-gradient(45deg, #1b4d3e, #155e42, #0a192f, #1b4d3e)'
                : 'linear-gradient(45deg, #1b4d3e, #1b4d3e)',
              backgroundSize: '300% 300%',
              animation: isHovered ? 'shinyBorder 2s linear infinite' : 'none',
            }}
          />
        )}
        <motion.button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={`
            relative inline-flex items-center justify-center 
            px-8 py-4 rounded-xl font-semibold text-base
            transition-all duration-300 
            ${variantStyles[variant]}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          whileHover={disabled ? {} : { scale: 1.03 }}
          whileTap={disabled ? {} : { scale: 0.97 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>

          {/* Inner glow on hover */}
          {isHovered && variant === 'primary' && !disabled && (
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                background: 'radial-gradient(circle at center, rgba(21, 94, 66, 0.4) 0%, transparent 70%)',
              }}
            />
          )}
        </motion.button>
      </div>
    </motion.div>
  )
}

export default MagneticButton
