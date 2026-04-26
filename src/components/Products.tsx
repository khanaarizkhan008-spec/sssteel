import { motion } from 'framer-motion'
import { useRef } from 'react'
import { GlareCard } from './ui/GlareCard'
import { AnimatedGrid } from './ui/AnimatedGrid'
import { Meteors } from './ui/Meteors'

const products = [
  {
    category: 'Flat Products',
    title: 'HR Coils / Plates',
    description: 'Premium hot-rolled steel coils and plates for heavy-duty industrial applications.',
    specs: ['TATA Astrum', 'E250 / E350', 'IS 2062 Grade', 'CR & GP Sheets', 'Chequered Plates'],
    image: `${import.meta.env.BASE_URL}assets/products/hr-coils.png`,
    accentColor: '#FF6B35',
  },
  {
    category: 'Long Products',
    title: 'Structural Steel',
    description: 'Complete range of structural materials for construction and fabrication.',
    specs: ['MS Angles up to 250x250x25mm', 'Channels all sizes', 'I-Beams up to 600x210mm', 'Joists & Columns'],
    image: `${import.meta.env.BASE_URL}assets/products/structural-steel.png`,
    accentColor: '#FF4500',
  },
  {
    category: 'ERW Steel Pipes',
    title: 'Pipes & Tubes',
    description: 'High-quality ERW pipes from India\'s most trusted manufacturers.',
    specs: ['TATA Steel Pipes', 'APL Apollo', 'Round Pipes', 'SHS & RHS Tubes', 'All diameters'],
    image: `${import.meta.env.BASE_URL}assets/products/pipes-tubes.png`,
    accentColor: '#E63900',
  },
  {
    category: 'TMT Bars',
    title: 'High-Strength Rebars',
    description: 'Thermo-mechanically treated bars for superior construction strength.',
    specs: ['AMMAN-TRY 500 Guard', 'SAIL TMT', 'JINDAL TMT', 'Fe 500 / Fe 550D', 'All diameters'],
    image: `${import.meta.env.BASE_URL}assets/products/tmt-bars.png`,
    accentColor: '#CC2F00',
  },
]

interface ProductsProps {
  onNavigate: (section: string) => void
}

const Products = ({ onNavigate }: ProductsProps) => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-midnight-950 overflow-hidden"
      id="products"
    >
      {/* Background effects */}
      <AnimatedGrid cellSize={80} opacity={0.03} color="#FF4500" />
      <Meteors count={10} />

      {/* Section Header */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-molten-500 text-sm uppercase tracking-widest font-semibold"
          >
            Our Arsenal
          </motion.span>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 font-display uppercase tracking-tighter"
          >
            Our Heavy <span className="text-molten-500">Arsenal</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive steel solutions for construction, manufacturing, and infrastructure projects
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <GlareCard
              key={product.title}
              className="h-full"
              glareIntensity={0.3}
            >
              <div className="relative h-full flex flex-col bg-midnight-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-molten-500/20 transition-all duration-500">
                {/* Image Section */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-900 z-10" />
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20 bg-midnight-950/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <span className="text-molten-500 text-xs uppercase tracking-wider font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-display">
                      {product.title}
                    </h3>
                    <p className="text-white/60 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specs List (revealed on hover) */}
                    <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <ul className="space-y-2 mb-6">
                        {product.specs.map((spec, i) => (
                          <motion.li
                            key={spec}
                            className="flex items-center gap-2 text-white/70 text-sm"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: product.accentColor }}
                            />
                            {spec}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full mt-4 py-3 border border-white/10 rounded-lg text-sm font-bold uppercase tracking-widest text-white hover:bg-molten-500 hover:border-molten-500 transition-colors duration-300"
                  >
                    Inquire Now
                  </button>
                </div>

                {/* Bottom accent line */}
                <div
                  className="h-1 w-0 group-hover:w-full transition-all duration-700 ease-out absolute bottom-0 left-0"
                  style={{
                    background: `linear-gradient(to right, ${product.accentColor}, #FF4500)`,
                  }}
                />
              </div>
            </GlareCard>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Need custom specifications or bulk orders?
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 text-molten-500 hover:text-molten-400 transition-colors font-medium group"
          >
            Request a Custom Quote
            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
