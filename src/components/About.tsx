import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { AnimatedGrid } from './ui/AnimatedGrid'
import { MagneticButton } from './ui/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    year: 'February 2015',
    title: 'The Foundation',
    description: 'SS Steel India Corporation officially opens its doors.',
  },
  {
    year: '2018',
    title: 'Scaling Up',
    description: 'Expanded our dedicated workforce to over 20 specialized members.',
  },
  {
    year: '2019',
    title: 'Trusted Authority',
    description: 'Secured official authorized dealerships for premier brands including TATA Astrum, JSW Steel, SAIL, AMMAN-TRY, and APL Apollo.',
  },
  {
    year: '2020',
    title: 'Massive Expansion',
    description: 'Expanded operational facilities and storage yards to over 1 acre to handle massive inventory.',
  },
  {
    year: '2026',
    title: 'National Reach',
    description: 'Successfully supplying and executing major infrastructure projects across India.',
  },
]

interface AboutProps {
  onNavigate: (section: string) => void
}

const About = ({ onNavigate }: AboutProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    const container = containerRef.current

    if (!track || !container) return

    const scrollWidth = track.scrollWidth
    const viewportWidth = window.innerWidth
    const xToScroll = scrollWidth - viewportWidth

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -xToScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        },
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-midnight-950 text-navy-900 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center pt-20 px-6">
        <AnimatedGrid cellSize={60} opacity={0.04} color="#1b4d3e" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-molten-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tight mb-6 text-navy-900">
            A Legacy of <span className="text-molten-500">Steel</span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-800/70 max-w-2xl mx-auto font-light leading-relaxed">
            From our foundation to becoming a trusted authority in the industry, our journey is forged in strength and built on trust.
          </p>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-sm tracking-[0.2em] text-navy-800/50 uppercase font-semibold">Scroll to explore</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-molten-500 to-transparent" />
        </motion.div>
      </section>

      {/* Horizontal Scroll Timeline Container */}
      <div ref={containerRef} className="h-screen w-full relative overflow-hidden bg-slate-100/90 flex items-center border-t border-b border-slate-200">
        {/* The Track that moves horizontally */}
        <div 
          ref={trackRef} 
          className="flex items-center h-full px-[50vw] relative"
          style={{ width: 'fit-content' }}
        >
          {/* Glowing continuous line */}
          <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-navy-900/10 -translate-y-1/2">
             <div className="h-full bg-gradient-to-r from-transparent via-molten-500 to-transparent w-full opacity-80 shadow-[0_0_15px_rgba(27,77,62,0.4)]" />
          </div>

          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col items-center justify-center relative"
            >
              {/* Node on the line */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-molten-500 rounded-full z-10 shadow-[0_0_15px_rgba(27,77,62,0.5)]" />
              
              <div className={`w-full max-w-md px-8 ${index % 2 === 0 ? 'mb-64' : 'mt-64'}`}>
                <div className="bg-white/95 p-8 border border-slate-200/80 rounded-2xl relative group hover:border-molten-500/60 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="text-molten-500 font-display text-4xl font-black mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4 font-display">
                    {milestone.title}
                  </h3>
                  <p className="text-navy-800/70 leading-relaxed font-light">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-32 px-6 flex flex-col items-center justify-center bg-midnight-950 text-center relative overflow-hidden">
        <AnimatedGrid cellSize={60} opacity={0.04} color="#1b4d3e" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black text-navy-900 mb-10">
            Ready to work with the <span className="text-molten-500">best?</span>
          </h2>
          <MagneticButton variant="primary" onClick={() => onNavigate('contact')}>
             <span className="text-lg font-bold uppercase tracking-widest px-6 py-2 block">Get in Touch</span>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}

export default About
