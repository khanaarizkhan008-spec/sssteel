import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CinematicIntroProps {
  onComplete: () => void
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState<'hold' | 'split' | 'done'>('hold')

  useEffect(() => {
    // Phase 1: Hold centered logo for 5 seconds
    const holdTimer = setTimeout(() => {
      setPhase('split')
    }, 5000)

    // Phase 2: After split animation completes (~0.8s), signal done
    const doneTimer = setTimeout(() => {
      setPhase('done')
    }, 6200)

    // Phase 3: After fade-out completes, signal parent
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 7000)

    return () => {
      clearTimeout(holdTimer)
      clearTimeout(doneTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  // Spring config for the "shoot" effect
  const splitSpring = {
    type: 'spring' as const,
    stiffness: 120,
    damping: 18,
    mass: 0.8,
  }

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-midnight-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Subtle ambient glow behind the logo */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,69,0,0.08) 0%, transparent 70%)',
            }}
            animate={{
              scale: phase === 'split' ? 3 : [1, 1.1, 1],
              opacity: phase === 'split' ? 0 : 1,
            }}
            transition={
              phase === 'split'
                ? { duration: 0.6 }
                : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }
          />

          {/* Thin horizontal line behind logo */}
          <motion.div
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-molten-500/30 to-transparent"
            initial={{ width: 0 }}
            animate={{
              width: phase === 'hold' ? '300px' : '100vw',
              opacity: phase === 'split' ? 0 : 1,
            }}
            transition={{
              width: { duration: phase === 'hold' ? 1.5 : 0.4, delay: phase === 'hold' ? 0.5 : 0 },
              opacity: { duration: 0.3 },
            }}
          />

          {/* Logo Container — exact aspect ratio of the combined logo (354x303) */}
          <div className="relative w-[283px] h-[242px] md:w-[354px] md:h-[303px]">
            {/* Main orange S shape (h2) — defines the full bounding box */}
            <motion.img
              src={`${import.meta.env.BASE_URL}assets/logo h2.png`}
              alt="SS Steel Main"
              className="absolute inset-0 w-full h-full object-contain"
              style={{ imageRendering: 'crisp-edges' }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={
                phase === 'hold'
                  ? { opacity: 1, scale: 1, x: 0, y: 0 }
                  : {
                    x: '-45vw',
                    y: '-42vh',
                    scale: 0.4,
                    opacity: 0,
                  }
              }
              transition={
                phase === 'hold'
                  ? { duration: 0.8, ease: 'easeOut' }
                  : splitSpring
              }
            />

            {/* Small blue/grey piece (h1) — precisely aligned to right edge, vertically centered */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[49.7%] h-[49.8%]">
              <motion.img
                src={`${import.meta.env.BASE_URL}assets/logo h1.png`}
                alt="SS Steel Accent"
                className="w-full h-full object-contain"
                style={{ imageRendering: 'crisp-edges' }}
                initial={{
                  opacity: 0, scale: 0.3, translateY: " 33px", translateX: " 25px"
                }}
                animate={
                  phase === 'hold'
                    ? { opacity: 1, scale: 1, x: 0, y: 0 }
                    : {
                      x: '45vw',
                      y: '42vh',
                      scale: 0.4,
                      opacity: 0,
                    }
                }
                transition={
                  phase === 'hold'
                    ? { duration: 0.8, ease: 'easeOut' }
                    : splitSpring
                }
              />
            </div>
          </div>

          {/* Company name fades in during hold */}
          <motion.p
            className="absolute bottom-[30%] text-white/30 text-xs md:text-sm uppercase tracking-[0.5em] font-bold"
            initial={{ opacity: 0, y: 10, translateY: "30px" }}
            animate={{
              opacity: phase === 'hold' ? 1 : 0,
              y: phase === 'hold' ? 0 : -20,
            }}
            transition={{ duration: 0.8, delay: phase === 'hold' ? 1.2 : 0 }}
          >
            SS Steel India Corporation
          </motion.p>

          {/* Subtle corner accents */}
          <motion.div
            className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-molten-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'hold' ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-molten-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'hold' ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CinematicIntro
