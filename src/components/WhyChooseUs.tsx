import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedGrid } from './ui/AnimatedGrid'
import { Meteors } from './ui/Meteors'

const features = [
  {
    icon: '📍',
    title: 'Prime Location',
    description: 'Strategically located on NH-7, Hosur - just 40 KM from Bengaluru. Zero city traffic, lightning-fast logistics.',
    stat: '40 KM',
    statLabel: 'From Bengaluru',
  },
  {
    icon: '💰',
    title: 'Unbeatable Pricing',
    description: 'Direct from manufacturers pricing with no middlemen. Get the best deal in iron and steel.',
    stat: 'BEST',
    statLabel: 'Market Rates',
  },
  {
    icon: '✅',
    title: 'Superior Quality',
    description: 'ISI Certified materials meeting industry standards. Every batch tested for compliance.',
    stat: 'ISI',
    statLabel: 'Certified',
  },
  {
    icon: '🚛',
    title: 'Reliable Logistics',
    description: 'On-time delivery with our trusted transport network. Strategic highway access ensures speed.',
    stat: '100%',
    statLabel: 'On-Time',
  },
]

const WhyChooseUs = () => {
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
      id="about"
    >
      {/* Background effects */}
      <AnimatedGrid cellSize={60} opacity={0.05} color="#FF4500" />
      <Meteors count={15} />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-molten-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-molten-500/5 rounded-full blur-3xl" />

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
            Why Choose Us
          </motion.span>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 font-display"
          >
            The SS Steel <span className="text-molten-500">Advantage</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Building trust through quality, reliability, and customer-focused service since inception
          </p>
        </motion.div>

        {/* Scroll-triggered NH-7 Typography Highlight */}
        <motion.div
          ref={typographyRef}
          className="mb-24 relative"
          style={{ opacity: typographyOpacity }}
        >
          <div className="glass-dark rounded-2xl p-10 md:p-16 border border-white/5 text-center overflow-hidden">
            <motion.p
              className="text-lg md:text-xl text-white/50 mb-4 uppercase tracking-widest"
              style={{ x: typographyX }}
            >
              Strategically positioned on
            </motion.p>
            <div className="relative inline-block">
              <h3 className="text-5xl md:text-8xl font-bold text-white font-display">
                NH-7, <span className="text-molten-500">HOSUR</span>
              </h3>
              {/* Animated underline highlight */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-molten-500 to-molten-400 rounded-full"
                style={{ width: highlightWidth }}
              />
            </div>
            <motion.p
              className="text-xl md:text-2xl text-white/60 mt-6 max-w-xl mx-auto"
              style={{ x: typographyX }}
            >
              Just <span className="text-molten-500 font-bold">40 KM</span> from Bengaluru — Zero city traffic, lightning-fast logistics
            </motion.p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl glass-dark border border-white/5 hover:border-molten-500/30 transition-all duration-500">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-molten-500 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Stat */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-3xl font-bold text-molten-500">{feature.stat}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{feature.statLabel}</div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-molten-500/10 to-transparent rounded-2xl" />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-molten-500/20 to-transparent transform rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
        >
          <div className="glass-dark rounded-2xl p-8 md:p-12 border border-white/5">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4 font-display">
                  Strategic <span className="text-molten-500">Location</span>
                </h3>
                <p className="text-white/60 text-lg mb-6">
                  Our facility on NH-7, Hosur provides unparalleled connectivity to major industrial hubs.
                  Just 40 kilometers from Bengaluru with zero city traffic delays.
                </p>
                <ul className="space-y-3">
                  {[
                    'Direct highway access',
                    '40 KM from Bengaluru',
                    'Connected to Chennai & Mumbai highways',
                    '24/7 logistics operations',
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <span className="w-2 h-2 bg-molten-500 rounded-full flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative h-64 md:h-full min-h-[250px] rounded-xl overflow-hidden">
                {/* Map placeholder with grid */}
                <div className="absolute inset-0 bg-gradient-to-br from-midnight-800 to-midnight-900">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255, 69, 0, 0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 69, 0, 0.2) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px',
                    }}
                  />
                </div>
                {/* Route line */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                  <motion.path
                    d="M 80 60 Q 200 150 320 240"
                    fill="none"
                    stroke="rgba(255, 69, 0, 0.3)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </svg>
                {/* Bengaluru marker */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <div className="w-3 h-3 bg-white/40 rounded-full" />
                  <span className="text-white/40 text-sm font-medium">Bengaluru</span>
                </div>
                {/* Location marker */}
                <motion.div
                  className="absolute bottom-12 right-12"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-molten-500 rounded-full molten-glow" />
                    <div className="absolute inset-0 w-4 h-4 bg-molten-500 rounded-full animate-ping" />
                  </div>
                </motion.div>
                <div className="absolute bottom-4 right-4 text-right">
                  <div className="text-molten-500 font-bold text-lg">Hosur (NH-7)</div>
                  <div className="text-white/40 text-xs">SS Steel India Corp.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
