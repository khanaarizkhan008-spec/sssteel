import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { InfiniteMarquee } from './ui/InfiniteMarquee'
import { AnimatedGrid } from './ui/AnimatedGrid'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { label: 'Yield Strength', value: 500, suffix: '+', unit: 'MPa' },
  { label: 'Min Elongation', value: 18, suffix: '%', unit: '' },
  { label: 'Projects Completed', value: 1000, suffix: '+', unit: '' },
  { label: 'Happy Clients', value: 500, suffix: '+', unit: '' },
]

const partnerBrands = [
  'TATA STEEL',
  'JSW',
  'SAIL',
  'AMMAN-TRY',
  'APL APOLLO',
  'JINDAL',
]

const Authority = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const countersRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    countersRef.current = countersRef.current.slice(0, stats.length)

    stats.forEach((stat, index) => {
      const counter = countersRef.current[index]
      if (!counter) return

      gsap.to(counter, {
        innerText: stat.value,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          counter!.innerText = Math.ceil(this.targets()[0].innerText) + stat.suffix
        }
      })
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-midnight-950 overflow-hidden"
      id="quality"
    >
      {/* Background */}
      <AnimatedGrid cellSize={40} opacity={0.04} color="#1b4d3e" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-molten-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-molten-500 text-sm uppercase tracking-widest font-bold"
          >
            Technical Authority
          </motion.span>
          <h2
            className="text-4xl md:text-6xl font-bold text-navy-900 mt-4 mb-6 font-display"
          >
            Industry-Leading <span className="text-molten-500">Specifications</span>
          </h2>
          <p className="text-xl text-navy-800/70 max-w-2xl mx-auto font-light">
            Certified quality meeting national and international standards
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
              className="text-center group"
            >
              <div className="relative">
                <div className="text-5xl md:text-7xl font-bold text-navy-900 mb-2 group-hover:text-molten-500 transition-colors duration-300 font-display">
                  <span ref={(el) => (countersRef.current[index] = el)}>0</span>
                  <span className="text-2xl md:text-3xl text-molten-500">{stat.suffix}</span>
                </div>
                {stat.unit && (
                  <div className="text-lg md:text-xl text-molten-500 font-medium">{stat.unit}</div>
                )}
              </div>
              <p className="text-navy-800/60 text-sm md:text-base mt-4 uppercase tracking-wider font-semibold">
                {stat.label}
              </p>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-molten-500/10 blur-xl rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-dark rounded-3xl p-8 md:p-12 border border-molten-500/20 mb-24 shadow-lg bg-white/90"
        >
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-8 font-display">
            Certified to <span className="text-molten-500">Excellence</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { cert: 'ISI', desc: 'IS 2062 Certified' },
              { cert: 'ISO', desc: '9001:2015' },
              { cert: 'BIS', desc: 'Bureau Verified' },
              { cert: 'GST', desc: 'Compliant' },
            ].map((item, i) => (
              <motion.div
                key={item.cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-molten-500/50 hover:bg-emerald-50/50 transition-all duration-300 shadow-sm"
              >
                <div className="text-3xl font-bold text-molten-500 mb-2 font-display">{item.cert}</div>
                <div className="text-navy-800/70 text-sm font-medium">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Brands Marquee */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <span className="text-navy-800/60 text-sm uppercase tracking-widest font-bold">
              Authorized Partner For
            </span>
          </motion.div>

          <div className="relative py-8">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-midnight-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-midnight-950 to-transparent z-10" />

            <InfiniteMarquee
              items={partnerBrands}
              speed={25}
              className="py-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Authority
