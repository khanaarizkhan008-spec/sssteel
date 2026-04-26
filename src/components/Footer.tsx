import { motion } from 'framer-motion'
import { MagneticButton } from './ui/MagneticButton'

interface FooterProps {
  onNavigate: (section: string) => void
}

const Footer = ({ onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-midnight-950 text-white pt-20 pb-8 border-t border-white/5 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-molten-500/50 to-transparent" />

      {/* Massive LET'S BUILD CTA */}
      <div className="container mx-auto px-6 mb-24 text-center">
        <h2 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter mb-8">
          Let's <span className="text-molten-500">Build</span>
        </h2>
        <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
          Ready to forge a partnership? Get in touch with our team for premium steel solutions and unbeatable logistics.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <MagneticButton variant="primary" onClick={() => onNavigate('contact')}>
            <span className="text-sm font-bold uppercase tracking-widest px-8 py-3 block">Get a Quote</span>
          </MagneticButton>
          <button
            onClick={() => onNavigate('contact')}
            className="text-white hover:text-molten-500 font-bold uppercase tracking-widest text-sm transition-colors border-b border-transparent hover:border-molten-500 pb-1"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3
              className="text-2xl font-bold mb-4 font-display"
            >
              SS<span className="text-molten-500">STEEL</span>INDIA
            </h3>
            <p className="text-white/50 leading-relaxed mb-6">
              Creating a Customer for Life. Your trusted partner for premium iron and steel products.
            </p>
            {/* Social icons placeholder */}
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'Email'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-midnight-800 border border-white/10 hover:border-molten-500/50 flex items-center justify-center text-white/50 hover:text-molten-500 transition-colors text-xs font-semibold"
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/80">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Quality', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/50 hover:text-molten-500 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/80">Products</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              {['HR Coils & Plates', 'Structural Steel', 'ERW Steel Pipes', 'TMT Bars', 'CR & GP Sheets'].map((item) => (
                <li key={item} className="hover:text-white/70 transition-colors cursor-default">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/80">Contact</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-molten-500 mt-0.5">📍</span>
                <a href="https://www.google.com/maps/search/SS+Steel+India+Corporation,+756%2F6-B,+Krishnagiri+Main+Road,+Hosur,+Tamil+Nadu+635109" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <span>Near ashwin Mahal opposite to anand electricals<br />Hosur,Tamil Nadu</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-molten-500 mt-0.5">📞</span>
                <a href="tel:+916382085337" className="hover:text-white transition-colors">
                  <span>+91 6382085337</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-molten-500 mt-0.5">📧</span>
                <a href="mailto:sales@sssteelindia.com" className="hover:text-white transition-colors">
                  <span>sales@sssteelindia.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-molten-500 mt-0.5">🕐</span>
                <span>Mon-Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} SS Steel India Corporation. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Forged with precision. Delivered with trust.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
