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
    accentColor: '#1b4d3e',
  },
  {
    category: 'Long Products',
    title: 'Structural Steel',
    description: 'Complete range of structural materials for construction and fabrication.',
    specs: ['MS Angles up to 250x250x25mm', 'Channels all sizes', 'I-Beams up to 600x210mm', 'Joists & Columns'],
    image: `${import.meta.env.BASE_URL}assets/products/structural-steel.png`,
    accentColor: '#0f2b48',
  },
  {
    category: 'ERW Steel Pipes',
    title: 'Pipes & Tubes',
    description: 'High-quality ERW pipes from India\'s most trusted manufacturers.',
    specs: ['TATA Steel Pipes', 'APL Apollo', 'Round Pipes', 'SHS & RHS Tubes', 'All diameters'],
    image: `${import.meta.env.BASE_URL}assets/products/pipes-tubes.png`,
    accentColor: '#155e42',
  },
  {
    category: 'TMT Bars',
    title: 'High-Strength Rebars',
    description: 'Thermo-mechanically treated bars for superior construction strength.',
    specs: ['AMMAN-TRY 500 Guard', 'SAIL TMT', 'JINDAL TMT', 'Fe 500 / Fe 550D', 'All diameters'],
    image: `${import.meta.env.BASE_URL}assets/products/tmt-bars.png`,
    accentColor: '#10523b',
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
      <AnimatedGrid cellSize={80} opacity={0.04} color="#1b4d3e" />
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
            className="text-molten-500 text-sm uppercase tracking-widest font-bold"
          >
            Our Arsenal
          </motion.span>
          <h2
            className="text-4xl md:text-6xl font-bold text-navy-900 mt-4 mb-6 font-display uppercase tracking-tighter"
          >
            Our Heavy <span className="text-molten-500">Arsenal</span>
          </h2>
          <p className="text-xl text-navy-800/70 max-w-2xl mx-auto font-light">
            Comprehensive steel solutions for construction, manufacturing, and infrastructure projects
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <GlareCard
              key={product.title}
              className="h-full"
              glareIntensity={0.2}
            >
              <div className="relative h-full flex flex-col bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/80 hover:border-molten-500/40 shadow-md hover:shadow-xl transition-all duration-500 group">
                {/* Image Section */}
                <div className="relative h-52 md:h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 z-10" />
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/80 shadow-sm">
                    <span className="text-molten-500 text-xs uppercase tracking-wider font-bold">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between transition-transform duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3 font-display">
                      {product.title}
                    </h3>
                    <p className="text-navy-800/70 mb-6 leading-relaxed font-light">
                      {product.description}
                    </p>

                    {/* Specs List (revealed on hover) */}
                    <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <ul className="space-y-2 mb-6">
                        {product.specs.map((spec) => (
                          <motion.li
                            key={spec}
                            className="flex items-center gap-2 text-navy-800/80 text-sm font-medium"
                          >
                            <span
                              className="w-2 h-2 rounded-full flex-shrink-0"
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
                    className="w-full mt-4 py-3.5 border-2 border-navy-900/20 rounded-xl text-sm font-bold uppercase tracking-widest text-navy-900 hover:bg-molten-500 hover:border-molten-500 hover:text-white transition-all duration-300 shadow-sm"
                  >
                    Inquire Now
                  </button>
                </div>

                {/* Bottom accent line */}
                <div
                  className="h-1.5 w-0 group-hover:w-full transition-all duration-700 ease-out absolute bottom-0 left-0"
                  style={{
                    background: `linear-gradient(to right, ${product.accentColor}, #0a192f)`,
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
          <p className="text-navy-800/70 mb-6 font-medium">
            Need custom specifications or bulk orders?
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 text-molten-500 hover:text-molten-600 font-bold tracking-wider uppercase text-sm transition-colors group"
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
