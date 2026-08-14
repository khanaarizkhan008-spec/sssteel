import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const showcaseItems = [
  {
    title: 'S H E E T S',
    image: '/assets/products/hr-coils.png',
  },
  {
    title: 'P I P E S',
    image: '/assets/products/pipes-tubes.png',
  },
  {
    title: 'T M T',
    image: '/assets/products/tmt-bars.png',
  }
]

const ParallaxImage = ({ item }: { item: typeof showcaseItems[0] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Parallax effect on the background image
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  return (
    <div ref={ref} className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center border-b border-slate-200">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, backgroundImage: `url(${import.meta.env.BASE_URL}${item.image.replace('/', '')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-molten-900/60 to-navy-950/80 mix-blend-multiply" />
      </motion.div>
      <h3 className="relative z-10 text-6xl md:text-[10vw] font-black font-display text-white opacity-95 tracking-widest drop-shadow-2xl">
        {item.title}
      </h3>
    </div>
  )
}

export const HomeShowcase = () => {
  return (
    <section className="w-full bg-midnight-950 pt-20">
      <div className="text-center mb-16 px-6">
        <h2 className="text-sm tracking-[0.3em] uppercase text-molten-500 font-bold">The Showcase</h2>
      </div>
      {showcaseItems.map((item, index) => (
        <ParallaxImage key={index} item={item} />
      ))}
    </section>
  )
}
