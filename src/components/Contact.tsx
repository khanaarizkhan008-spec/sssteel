import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { MagneticButton } from './ui/MagneticButton'
import { AnimatedGrid } from './ui/AnimatedGrid'

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    material: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Google Apps Script Webhook
      await fetch('https://script.google.com/macros/s/AKfycby_PLACEHOLDER_KEY/exec', {
        method: 'POST',
        mode: 'no-cors', // Needed for Google Forms/Apps script without CORS setup
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
    } catch (err) {
      console.error('Error submitting form', err)
    }

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', material: '', message: '' })
    }, 3000)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-midnight-950 overflow-hidden"
      id="contact"
    >
      {/* Background effects */}
      <AnimatedGrid cellSize={60} opacity={0.05} color="#FF4500" />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-molten-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-molten-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
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
            Get In Touch
          </motion.span>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            LET'S TALK <span className="text-molten-500">METRICS.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Ready to forge something great? Get a free quote for your steel requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="glass-dark rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact <span className="text-molten-500">Information</span>
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <a href="https://www.google.com/maps/search/SS+Steel+India+Corporation,+756%2F6-B,+Krishnagiri+Main+Road,+Hosur,+Tamil+Nadu+635109" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-midnight-800 border border-white/10 flex items-center justify-center group-hover:border-molten-500/50 transition-colors" >
                    <svg className="w-6 h-6 text-molten-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                    <p className="text-white/60 group-hover:text-white transition-colors">
                      Near ashwin Mahal opposite to anand electricals<br />Hosur,Tamil Nadu
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+916382085337" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-midnight-800 border border-white/10 flex items-center justify-center group-hover:border-molten-500/50 transition-colors">
                    <svg className="w-6 h-6 text-molten-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Call Us</h4>
                    <p className="text-white/60 group-hover:text-white transition-colors">+91 6382085337</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:sales@sssteelindia.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-midnight-800 border border-white/10 flex items-center justify-center group-hover:border-molten-500/50 transition-colors">
                    <svg className="w-6 h-6 text-molten-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email Us</h4>
                    <p className="text-white/60 group-hover:text-white transition-colors">sales@sssteelindia.com</p>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-midnight-800 border border-white/10 flex items-center justify-center group-hover:border-molten-500/50 transition-colors">
                    <svg className="w-6 h-6 text-molten-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-white/60">
                      Mon - Sat: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="glass-dark rounded-2xl p-6 border border-white/5 overflow-hidden">
              <div className="relative h-48 rounded-xl bg-midnight-800">
                {/* Grid map effect */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255, 69, 0, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 69, 0, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />
                {/* Location marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 bg-molten-500 rounded-full molten-glow" />
                    <div className="absolute inset-0 w-4 h-4 bg-molten-500 rounded-full animate-ping" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white/60 text-sm">
                  <div className="font-semibold text-white">NH-7, Hosur</div>
                  <div>40 KM from Bengaluru</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-dark rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">
                Request a <span className="text-molten-500">Free Quote</span>
              </h3>
              <p className="text-white/60 mb-8">Fill in your details and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-molten-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-molten-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-white/60">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-white/70 font-medium mb-2 text-sm uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-midnight-800/50 border border-white/10 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-white placeholder-white/30"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white/70 font-medium mb-2 text-sm uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-midnight-800/50 border border-white/10 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-white placeholder-white/30"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  {/* Phone & Company */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 font-medium mb-2 text-sm uppercase tracking-wider">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl bg-midnight-800/50 border border-white/10 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-white placeholder-white/30"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 font-medium mb-2 text-sm uppercase tracking-wider">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl bg-midnight-800/50 border border-white/10 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-white placeholder-white/30"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  {/* Required Material Dropdown */}
                  <div>
                    <label className="block text-white/70 font-medium mb-2 text-sm uppercase tracking-wider">
                      Required Material
                    </label>
                    <select
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-midnight-800/50 border border-white/10 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-white placeholder-white/30 appearance-none"
                      required
                    >
                      <option value="" disabled>Select Material...</option>
                      <option value="TMT Bars">TMT Bars</option>
                      <option value="Structural Steel">Structural Steel</option>
                      <option value="ERW Pipes & Tubes">ERW Pipes & Tubes</option>
                      <option value="Flat Products">Flat Products (HR/CR/GP)</option>
                      <option value="Other">Other / Unsure</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white/70 font-medium mb-2 text-sm uppercase tracking-wider">
                      Project Details
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-4 rounded-xl bg-midnight-800/50 border border-white/10 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-white placeholder-white/30 resize-none"
                      placeholder="Tell us about your steel requirements..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <MagneticButton variant="primary" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </MagneticButton>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
