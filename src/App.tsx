import { useState, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Products from './components/Products'
import Authority from './components/Authority'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ScrollIndicator } from './components/ui/ScrollIndicator'
import { AnimatePresence, motion } from 'framer-motion'
import CircularNavbar from './components/ui/demo'
import CinematicIntro from './components/CinematicIntro'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    // Refresh ScrollTrigger after all content loads
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 1000)

    return () => clearTimeout(timer)
  }, [activeSection])

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Hero key="home" />
      case 'about': return <WhyChooseUs key="about" />
      case 'products': return <Products key="products" />
      case 'quality': return <Authority key="quality" />
      case 'contact': return <Contact key="contact" />
      default: return <Hero key="home" />
    }
  }

  return (
    <>
      {/* Cinematic Intro — plays on every refresh */}
      {!introComplete && <CinematicIntro onComplete={handleIntroComplete} />}

      {/* Main Site — pops in after intro */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            className="min-h-screen bg-midnight-950 flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Header onNavigate={setActiveSection} activeSection={activeSection} />
            <CircularNavbar onNavigate={setActiveSection} activeSection={activeSection} />

            <main className={`flex-grow ${activeSection === 'home' ? 'pt-0' : 'pt-28 md:pt-32'}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  {renderSection()}
                </motion.div>
              </AnimatePresence>
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App


