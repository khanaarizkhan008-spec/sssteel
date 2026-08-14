import { motion } from 'framer-motion'
import { useState } from 'react'
import { MagneticButton } from './ui/MagneticButton'

const capabilities = [
  {
    title: 'TMT Bars',
    description: 'High-strength thermo-mechanically treated bars (Fe 500 & Fe 550D) for core structural integrity.',
    brands: ['TATA Tiscon', 'JSW NeoSteel', 'SAIL SeQR', 'AMMAN-TRY'],
  },
  {
    title: 'Structural Steel',
    description: 'Heavy-duty angles, channels, I-beams, and joists engineered for massive load-bearing capacities.',
    brands: ['SAIL', 'JSW', 'RINL'],
  },
  {
    title: 'ERW Pipes & Tubes',
    description: 'Precision-welded round, square, and rectangular hollow sections for modern construction.',
    brands: ['APL Apollo', 'TATA Structura'],
  },
  {
    title: 'Flat Products',
    description: 'Premium HR coils, CR sheets, and chequered plates for industrial manufacturing.',
    brands: ['TATA Astrum', 'JSW'],
  }
]

interface HomeCapabilitiesProps {
  onNavigate: (section: string) => void
}

export const HomeCapabilities = ({ onNavigate }: HomeCapabilitiesProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-midnight-950 py-32 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm tracking-[0.3em] uppercase text-molten-500 font-bold mb-4">Our Arsenal</h2>
            <h3 className="text-4xl md:text-6xl font-black font-display text-navy-900">
              Capabilities
            </h3>
          </div>
          <MagneticButton variant="outline" onClick={() => onNavigate('products')}>
            <span className="px-4 py-2 block text-sm font-bold tracking-widest uppercase">View Full Specs</span>
          </MagneticButton>
        </div>

        <div className="border-t border-slate-200">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              className="group relative border-b border-slate-200 py-8 md:py-12 cursor-pointer transition-colors duration-300"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => onNavigate('products')}
            >
              {/* Hover Background */}
              <div 
                className={`absolute inset-0 bg-emerald-50/60 rounded-xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} 
              />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center px-4">
                <div className="md:col-span-1 text-molten-500 font-display font-bold text-xl opacity-70">
                  0{index + 1}
                </div>
                <div className="md:col-span-4">
                  <h4 className="text-3xl font-bold text-navy-900 group-hover:text-molten-500 transition-colors duration-300 font-display">
                    {item.title}
                  </h4>
                </div>
                <div className="md:col-span-5">
                  <p className="text-navy-800/70 font-light text-lg">
                    {item.description}
                  </p>
                </div>
                <div className="md:col-span-2 flex flex-wrap gap-2">
                  {item.brands.slice(0, 2).map((brand, i) => (
                    <span key={i} className="text-xs border border-navy-900/15 text-navy-800 bg-white/80 px-3 py-1 rounded-full font-medium shadow-sm">
                      {brand}
                    </span>
                  ))}
                  {item.brands.length > 2 && (
                    <span className="text-xs border border-navy-900/15 text-navy-800 bg-white/80 px-3 py-1 rounded-full font-medium shadow-sm">
                      +{item.brands.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
