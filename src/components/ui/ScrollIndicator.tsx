import { motion, useScroll, useSpring } from 'framer-motion'

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center gap-4">
      <div className="h-40 w-[2px] bg-white/10 relative overflow-hidden rounded-full">
        <motion.div
          className="absolute top-0 left-0 right-0 bg-molten-500 origin-top rounded-full"
          style={{ height: '100%', scaleY }}
        />
      </div>
      <div className="flex flex-col gap-1 items-center">
        <span className="text-[10px] text-molten-500 font-bold tracking-tighter rotate-90 origin-center mb-4 uppercase">
          SCROLL
        </span>
      </div>
    </div>
  )
}
