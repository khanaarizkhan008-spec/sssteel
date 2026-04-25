import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FrameScrubberProps {
  totalFrames: number
  framePath: string
}

const FrameScrubber = ({ totalFrames, framePath }: FrameScrubberProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([])
  const currentFrameRef = useRef<number>(0)

  useEffect(() => {
    // Preload all frames
    const images: HTMLImageElement[] = []
    let loaded = 0

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image()
      // Match the ezgif-frame-001.jpg naming convention
      img.src = `${framePath}/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`
      img.onload = () => {
        loaded++
        images[i - 1] = img
        if (loaded === totalFrames) {
          setLoadedImages([...images])
        }
      }
      img.onerror = () => {
        console.error(`Failed to load frame ${i}`)
      }
    }
  }, [totalFrames, framePath])

  useEffect(() => {
    if (loadedImages.length === 0 || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match first image
    canvas.width = loadedImages[0].width
    canvas.height = loadedImages[0].height

    // Draw initial frame
    ctx.drawImage(loadedImages[0], 0, 0)

    // Create scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: canvas,
        start: 'top top',
        end: `+=${totalFrames * 100}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            Math.floor(self.progress * (totalFrames - 1)),
            totalFrames - 1
          )

          if (frameIndex !== currentFrameRef.current && loadedImages[frameIndex]) {
            currentFrameRef.current = frameIndex
            ctx.drawImage(loadedImages[frameIndex], 0, 0)
          }
        }
      }
    })

    tl.to({}, { duration: 1 })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [loadedImages, totalFrames])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover"
      style={{ willChange: 'transform' }}
    />
  )
}

export default FrameScrubber
