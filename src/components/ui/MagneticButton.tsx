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
    primary: 'bg-molten-500 text-white hover:bg-molten-600',
    secondary: 'bg-midnight-800 text-white border border-midnight-700 hover:border-molten-500',
    outline: 'bg-transparent text-white border-2 border-white/30 hover:border-molten-500 hover:text-molten-500'
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
            className="absolute inset-0 rounded-xl overflow-hidden"
            style={{
              background: isHovered
                ? 'linear-gradient(45deg, #FF4500, #FF6B35, #FF8C00, #FF4500)'
                : 'linear-gradient(45deg, #FF4500, #FF4500)',
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
            ${variant === 'primary' ? 'shadow-lg shadow-molten-500/25' : ''}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          whileHover={disabled ? {} : { scale: 1.05 }}
          whileTap={disabled ? {} : { scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>

          {/* Inner glow on hover */}
          {isHovered && variant === 'primary' && !disabled && (
            <motion.div
              className="absolute inset-0 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                background: 'radial-gradient(circle at center, rgba(255, 107, 53, 0.3) 0%, transparent 70%)',
              }}
            />
          )}
        </motion.button>
      </div>
    </motion.div>
  )
}

export default MagneticButton
