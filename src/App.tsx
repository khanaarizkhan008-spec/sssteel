import { useState, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
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
    // Scroll to top and refresh ScrollTrigger when section changes
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })

    // Dynamic SEO Titles & Meta Descriptions for each page section
    const seoTitles: Record<string, { title: string; desc: string }> = {
      home: {
        title: 'SS Steel India Corporation | Authorized TATA, JSW & SAIL Steel Distributor',
        desc: 'SS Steel India Corporation - Premier Iron & Steel Supplier in Hosur & Bengaluru. Authorized dealers for TATA Steel, JSW Steel, SAIL, AMMAN-TRY, and APL Apollo.',
      },
      about: {
        title: 'A Legacy of Steel | About SS Steel India Corporation',
        desc: 'Discover the company journey of SS Steel India Corporation since 2015. Over 1-acre storage facility on NH-7, Hosur delivering trusted steel nationwide.',
      },
      products: {
        title: 'Our Heavy Arsenal | Products - SS Steel India Corporation',
        desc: 'Explore our full range of TMT Bars, ERW Steel Pipes, HR/CR Coils & Plates, Structural Beams, Channels, and Angles for industrial construction.',
      },
      quality: {
        title: 'Technical Authority & ISI Quality | SS Steel India Corporation',
        desc: 'Certified ISI, ISO 9001:2015, and BIS compliant iron and steel products. Trusted quality assurance for major infrastructure projects.',
      },
      contact: {
        title: 'Contact & Get a Free Quote | SS Steel India Corporation',
        desc: 'Contact SS Steel India Corporation in Hosur on NH-7. Request a free quote for TMT bars, structural steel, and ERW pipes with 24-hour response.',
      },
    }

    const currentSeo = seoTitles[activeSection] || seoTitles.home
    document.title = currentSeo.title

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSeo.desc)
    }

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
      case 'home': return <Hero key="home" onNavigate={setActiveSection} />
      case 'about': return <About key="about" onNavigate={setActiveSection} />
      case 'products': return <Products key="products" onNavigate={setActiveSection} />
      case 'quality': return <Authority key="quality" />
      case 'contact': return <Contact key="contact" />
      default: return <Hero key="home" onNavigate={setActiveSection} />
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

            <Footer onNavigate={setActiveSection} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
