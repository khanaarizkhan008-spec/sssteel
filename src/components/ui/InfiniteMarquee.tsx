import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { BrandLogo } from './BrandLogos'

interface InfiniteMarqueeProps {
  items: string[]
  className?: string
  direction?: 'left' | 'right'
  speed?: number
  useLogos?: boolean
}

export const InfiniteMarquee = ({
  items,
  className = '',
  direction = 'left',
  speed = 30,
  useLogos = true
}: InfiniteMarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)

  // We duplicate items 4x to create a seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items]

  useEffect(() => {
    if (!containerRef.current) return
    const totalWidth = containerRef.current.scrollWidth
    setContentWidth(totalWidth / 4)
  }, [items])

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        ref={containerRef}
        className="inline-flex items-center gap-8 md:gap-12"
        animate={{
          x: direction === 'left'
            ? [0, -contentWidth || -1000]
            : [-contentWidth || -1000, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 cursor-default select-none py-2">
            {useLogos ? (
              <BrandLogo name={item} />
            ) : (
              <div
                className="text-4xl md:text-6xl font-bold text-navy-900/20 hover:text-molten-500 transition-colors duration-300 px-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {item}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteMarquee
