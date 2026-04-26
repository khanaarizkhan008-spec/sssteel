import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CinematicIntroProps {
  onComplete: () => void
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState<'hold' | 'zoom' | 'done'>('hold')

  useEffect(() => {
    // Phase 1: Hold centered logo for exactly 2 seconds
    const holdTimer = setTimeout(() => {
      setPhase('zoom')
    }, 2000)

    // Phase 2: After zoom animation completes (0.6s), signal done and onComplete
    const doneTimer = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 2600)

    return () => {
      clearTimeout(holdTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              phase === 'hold' 
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 10 }
            }
            transition={
              phase === 'hold'
                ? { duration: 1, ease: 'easeOut' }
                : { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Violent easing
            }
            className="relative"
          >
            {/* The Logo Text with Metallic Glow */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] select-none">
              SS STEEL INDIA
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CinematicIntro
