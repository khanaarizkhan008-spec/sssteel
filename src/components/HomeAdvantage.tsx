import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedGrid } from './ui/AnimatedGrid'

export const HomeAdvantage = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const typographyRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const typographyOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1])
  const typographyX = useTransform(scrollYProgress, [0, 0.3], [-100, 0])
  const highlightWidth = useTransform(scrollYProgress, [0.15, 0.35], ['0%', '100%'])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-midnight-950 overflow-hidden"
    >
      <AnimatedGrid cellSize={60} opacity={0.04} color="#1b4d3e" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-molten-500 text-sm uppercase tracking-widest font-bold">
            The Advantage
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-navy-900 mt-4 mb-6 font-display">
            Strategic <span className="text-molten-500">Logistics</span>
          </h2>
        </div>

        {/* Scroll-triggered NH-7 Typography Highlight */}
        <motion.div
          ref={typographyRef}
          className="mb-12 relative"
          style={{ opacity: typographyOpacity }}
        >
          <div className="glass-dark rounded-3xl p-10 md:p-16 border border-molten-500/20 text-center overflow-hidden relative shadow-lg bg-white/90">
            <div className="absolute top-0 right-0 w-64 h-64 bg-molten-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <motion.p
              className="text-lg md:text-xl text-navy-800/60 mb-4 uppercase tracking-widest font-medium"
              style={{ x: typographyX }}
            >
              Strategically positioned on
            </motion.p>
            <div className="relative inline-block">
              <h3 className="text-5xl md:text-8xl font-bold text-navy-900 font-display">
                NH-7, <span className="text-molten-500">HOSUR</span>
              </h3>
              {/* Animated underline highlight */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-molten-500 to-emerald-600 rounded-full"
                style={{ width: highlightWidth }}
              />
            </div>
            <motion.p
              className="text-xl md:text-2xl text-navy-800/80 mt-6 mb-8 max-w-xl mx-auto font-light"
              style={{ x: typographyX }}
            >
              Just <span className="text-molten-500 font-bold">40 KM</span> from Bengaluru — Zero city traffic, lightning-fast logistics
            </motion.p>
            
            <a 
              href="https://www.google.com/maps/search/SS+Steel+India+Corporation,+756%2F6-B,+Krishnagiri+Main+Road,+Hosur,+Tamil+Nadu+635109" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-navy-900/20 text-navy-900 hover:border-molten-500 hover:text-molten-500 hover:bg-molten-50 px-6 py-3 rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 shadow-sm"
            >
              <span>📍</span> View Map
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
