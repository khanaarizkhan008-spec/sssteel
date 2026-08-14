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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a192f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Green glow backdrop */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#1b4d3e]/20 blur-3xl pointer-events-none" />

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
            {/* Logo Container */}
            <div className="relative w-[283px] h-[242px] md:w-[354px] md:h-[303px] drop-shadow-[0_0_35px_rgba(27,77,62,0.4)]">
              {/* Main S shape (h2) */}
              <img
                src={`${import.meta.env.BASE_URL}assets/logo h2.png`}
                alt="SS Steel Main"
                className="absolute inset-0 w-full h-full object-contain"
                style={{ imageRendering: 'crisp-edges' }}
              />

              {/* Small accent piece (h1) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[49.7%] h-[49.8%]">
                <img
                  src={`${import.meta.env.BASE_URL}assets/logo h1.png`}
                  alt="SS Steel Accent"
                  className="w-full h-full object-contain"
                  style={{ imageRendering: 'crisp-edges', transform: 'translate(25px, 33px)' }}
                />
              </div>
            </div>
            {/* Company name below logo */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-max">
              <p className="text-emerald-400/80 text-xs md:text-sm uppercase tracking-[0.5em] font-bold">
                SS Steel India Corporation
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CinematicIntro
