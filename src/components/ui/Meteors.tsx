import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Meteor {
  id: number
  left: number
  delay: number
  duration: number
}

interface MeteorsProps {
  count?: number
  className?: string
}

export const Meteors = ({ count = 20, className = '' }: MeteorsProps) => {
  const [meteors, setMeteors] = useState<Meteor[]>([])

  useEffect(() => {
    const newMeteors = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }))
    setMeteors(newMeteors)
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-molten-500/50 to-transparent"
          style={{
            left: `${meteor.left}%`,
            top: -100,
          }}
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Infinity,
            repeatDelay: 5 + Math.random() * 5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default Meteors
