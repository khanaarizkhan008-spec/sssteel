import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MagneticButton } from './ui/MagneticButton'

interface HeaderProps {
  onNavigate: (section: string) => void
  activeSection: string
}

const Header = ({ onNavigate, activeSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Quality', id: 'quality' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.div
        layout
        initial={false}
        animate={{
          width: isScrolled ? 'auto' : '100%',
          maxWidth: isScrolled ? '800px' : '1400px',
          borderRadius: isScrolled ? '100px' : '16px',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0)',
          border: isScrolled ? '1px solid rgba(27, 77, 62, 0.2)' : '1px solid rgba(10, 25, 47, 0)',
          boxShadow: isScrolled ? '0 10px 30px rgba(10, 25, 47, 0.08)' : 'none',
          paddingLeft: isScrolled ? '24px' : '0px',
          paddingRight: isScrolled ? '24px' : '0px',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 35 }}
        className="backdrop-blur-xl pointer-events-auto h-16 flex items-center justify-between overflow-hidden"
      >
        <motion.div layout className={`flex items-center w-full ${isScrolled ? 'justify-center md:justify-between md:gap-12' : 'justify-between'}`}>
          {/* Logo */}
          <motion.div
            layout
            onClick={() => onNavigate('home')}
            className="relative group cursor-pointer flex-shrink-0"
          >
            <h1 className="text-xl md:text-2xl font-bold text-navy-900 tracking-wider flex items-center">
              <img
                src={`${import.meta.env.BASE_URL}assets/logo.png`}
                className="h-[50px] w-auto drop-shadow-sm"
                alt="Logo"
                style={{ imageRendering: 'crisp-edges' }}
              />
              {!isScrolled && <span className="hidden sm:inline font-display text-navy-900 ml-2"></span>}
            </h1>
          </motion.div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <motion.nav layout className="hidden md:flex items-center gap-6 lg:gap-8 mx-8">
            {navItems.map((item) => (
              <motion.button
                layout
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative py-1 text-sm uppercase tracking-wider font-semibold transition-colors duration-300 group ${
                  activeSection === item.id ? 'text-molten-500' : 'text-navy-800/70 hover:text-navy-900'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-molten-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            layout
            className="hidden md:block overflow-hidden"
            animate={{
              scale: isScrolled ? 0.85 : 1,
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 35 }}
            style={{ transformOrigin: 'right center' }}
          >
            <MagneticButton variant="primary" onClick={() => onNavigate('contact')}>
              <p className="text-xs font-bold uppercase tracking-widest px-2 whitespace-nowrap">Get Quote</p>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Header
