import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { TextReveal } from './ui/TextReveal'
import { MagneticButton } from './ui/MagneticButton'
import MarqueeSection from './MarqueeSection'
import { HomeAdvantage } from './HomeAdvantage'
import { HomeShowcase } from './HomeShowcase'
import { HomeCapabilities } from './HomeCapabilities'

gsap.registerPlugin(ScrollTrigger)

interface HeroProps {
  onNavigate: (section: string) => void
}

const Hero = ({ onNavigate }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([])
  const [loadProgress, setLoadProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const currentFrameRef = useRef<number>(0)
  const totalFrames = 184

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(totalFrames)
    let loaded = 0

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image()
      img.src = `${import.meta.env.BASE_URL}assets/frames/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`
      img.onload = () => {
        loaded++
        images[i - 1] = img
        setLoadProgress(Math.floor((loaded / totalFrames) * 100))
        if (loaded === totalFrames) {
          setLoadedImages([...images])
          setTimeout(() => setIsLoaded(true), 300)
        }
      }
      img.onerror = () => {
        loaded++
        console.error(`Failed to load frame ${i}`)
        if (loaded === totalFrames) {
          setLoadedImages([...images.filter(Boolean)])
          setTimeout(() => setIsLoaded(true), 300)
        }
      }
    }
  }, [])

  // Canvas resize handler
  const resizeCanvas = useCallback(() => {
    if (!canvasRef.current || loadedImages.length === 0) return
    const canvas = canvasRef.current
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(dpr, dpr)
      drawFrame(ctx, loadedImages[currentFrameRef.current], rect.width, rect.height)
    }
  }, [loadedImages])

  // Draw a frame with cover-fit
  const drawFrame = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvasW: number, canvasH: number) => {
    if (!img) return
    ctx.clearRect(0, 0, canvasW, canvasH)

    const imgRatio = img.width / img.height
    const canvasRatio = canvasW / canvasH

    let drawW, drawH, drawX, drawY
    if (canvasRatio > imgRatio) {
      drawW = canvasW
      drawH = canvasW / imgRatio
      drawX = 0
      drawY = (canvasH - drawH) / 2
    } else {
      drawH = canvasH
      drawW = canvasH * imgRatio
      drawX = (canvasW - drawW) / 2
      drawY = 0
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH)
  }

  // Canvas frame scrubbing animation
  useEffect(() => {
    if (loadedImages.length === 0 || !canvasRef.current || !heroRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const scrollTrigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: `+=${totalFrames * 60}`,
      scrub: 0.5,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const frameIndex = Math.min(
          Math.floor(self.progress * (totalFrames - 1)),
          totalFrames - 1
        )

        if (frameIndex !== currentFrameRef.current && loadedImages[frameIndex]) {
          currentFrameRef.current = frameIndex
          const rect = canvas.getBoundingClientRect()
          drawFrame(ctx, loadedImages[frameIndex], rect.width, rect.height)
        }
      }
    })

    return () => {
      scrollTrigger.kill()
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [loadedImages, resizeCanvas])

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-midnight-950 text-navy-900"
      id="home"
    >
      {/* Frame Scrubber Canvas - Full Screen Pin */}
      <div className="relative h-screen w-full">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-60 mix-blend-multiply"
          style={{ willChange: 'transform' }}
        />

        {/* Light overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-950/95 via-midnight-950/80 to-midnight-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-midnight-950/30" />

        {/* Subtle animated grid overlay - Green tint */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(27, 77, 62, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(27, 77, 62, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center">
          <div className="max-w-5xl">
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 flex items-center gap-4"
            >
              <div className="h-[2px] w-12 bg-molten-500" />
              <span className="uppercase tracking-[0.3em] text-molten-500 font-bold text-xs md:text-sm">
                SS Steel India Corporation
              </span>
            </motion.div>

            <TextReveal
              text="FORGED IN STRENGTH."
              className="text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-black bg-clip-text bg-gradient-to-br from-navy-900 via-navy-800 to-molten-500 leading-[1.05] mb-8 drop-shadow-sm tracking-tighter"
              as="h1"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-2xl text-navy-800/80 mb-12 max-w-2xl font-light leading-relaxed border-l-2 border-molten-500/40 pl-6"
            >
              <span className="text-navy-900 font-semibold">Creating a Customer for Life.</span><br />
              Delivering premium industrial strength with uncompromising quality and reliability for your most demanding projects.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton variant="primary" onClick={() => onNavigate('contact')}>
                Get a Quote
              </MagneticButton>
              <MagneticButton variant="outline" onClick={() => onNavigate('products')}>
                Explore Products
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dual Infinite Marquee Section */}
      <MarqueeSection />

      {/* The Advantage */}
      <HomeAdvantage />

      {/* The Showcase */}
      <HomeShowcase />

      {/* Capabilities */}
      <HomeCapabilities onNavigate={onNavigate} />
    </section>
  )
}

export default Hero
