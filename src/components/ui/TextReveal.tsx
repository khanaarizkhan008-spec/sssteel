import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export const TextReveal = ({ text, className = '', as = 'h1' }: TextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const words = text.split(' ')

  useEffect(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll('.char')

    gsap.to(chars, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.03,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === containerRef.current) t.kill()
      })
    }
  }, [])

  const Tag = as

  return (
    <div ref={containerRef} className={`text-reveal ${className}`}>
      <Tag>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="word inline-block mr-[0.25em] overflow-hidden">
            {word.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                className="char inline-block"
                style={{ transform: 'translateY(100%)', opacity: 0 }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </Tag>
    </div>
  )
}

export default TextReveal
