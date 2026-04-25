import { motion, useScroll, useTransform } from 'framer-motion'
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
      className="relative py-32 bg-midnight-900 overflow-hidden"
      id="quality"
    >
      {/* Background */}
      <AnimatedGrid cellSize={40} opacity={0.04} color="#FF4500" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-molten-500/5 rounded-full blur-3xl" />

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
            className="text-molten-500 text-sm uppercase tracking-widest font-semibold"
          >
            Technical Authority
          </motion.span>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Industry-Leading <span className="text-molten-500">Specifications</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
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
                <div className="text-5xl md:text-7xl font-bold text-white mb-2 group-hover:text-molten-500 transition-colors duration-300">
                  <span ref={(el) => (countersRef.current[index] = el)}>0</span>
                  <span className="text-2xl md:text-3xl text-molten-500">{stat.suffix}</span>
                </div>
                {stat.unit && (
                  <div className="text-lg md:text-xl text-molten-500/80 font-medium">{stat.unit}</div>
                )}
              </div>
              <p className="text-white/60 text-sm md:text-base mt-4 uppercase tracking-wider">
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
          className="glass-dark rounded-2xl p-8 md:p-12 border border-white/5 mb-24"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
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
                className="text-center p-6 rounded-xl bg-midnight-800/50 border border-white/5 hover:border-molten-500/30 transition-colors"
              >
                <div className="text-3xl font-bold text-molten-500 mb-2">{item.cert}</div>
                <div className="text-white/50 text-sm">{item.desc}</div>
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
            <span className="text-white/40 text-sm uppercase tracking-widest">
              Authorized Partner For
            </span>
          </motion.div>

          <div className="relative py-8">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-midnight-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-midnight-900 to-transparent z-10" />

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
