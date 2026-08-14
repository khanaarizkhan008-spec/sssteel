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
        mode: 'no-cors',
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

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', material: '', message: '' })
    }, 3000)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-midnight-950 overflow-hidden text-navy-900"
      id="contact"
    >
      {/* Background effects */}
      <AnimatedGrid cellSize={60} opacity={0.04} color="#1b4d3e" />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-molten-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-500/10 rounded-full blur-3xl pointer-events-none" />

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
            className="text-molten-500 text-sm uppercase tracking-widest font-bold"
          >
            Get In Touch
          </motion.span>
          <h2
            className="text-4xl md:text-6xl font-bold text-navy-900 mt-4 mb-6 font-display"
          >
            LET'S TALK <span className="text-molten-500">METRICS.</span>
          </h2>
          <p className="text-xl text-navy-800/70 max-w-2xl mx-auto font-light">
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
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-slate-200/80 shadow-md">
              <h3 className="text-2xl font-bold text-navy-900 mb-8 font-display">
                Contact <span className="text-molten-500">Information</span>
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <a href="https://www.google.com/maps/search/SS+Steel+India+Corporation,+756%2F6-B,+Krishnagiri+Main+Road,+Hosur,+Tamil+Nadu+635109" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center group-hover:bg-molten-500 group-hover:border-molten-500 transition-colors duration-300 flex-shrink-0">
                    <svg className="w-6 h-6 text-molten-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Visit Us</h4>
                    <p className="text-navy-800/70 group-hover:text-molten-500 transition-colors font-light">
                      Near ashwin Mahal opposite to anand electricals<br />Hosur, Tamil Nadu
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+916382085337" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center group-hover:bg-molten-500 group-hover:border-molten-500 transition-colors duration-300 flex-shrink-0">
                    <svg className="w-6 h-6 text-molten-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Call Us</h4>
                    <p className="text-navy-800/70 group-hover:text-molten-500 transition-colors font-light">+91 6382085337</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:sales@sssteelindia.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center group-hover:bg-molten-500 group-hover:border-molten-500 transition-colors duration-300 flex-shrink-0">
                    <svg className="w-6 h-6 text-molten-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Email Us</h4>
                    <p className="text-navy-800/70 group-hover:text-molten-500 transition-colors font-light">sales@sssteelindia.com</p>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-molten-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Business Hours</h4>
                    <p className="text-navy-800/70 font-light">
                      Mon - Sat: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-md overflow-hidden">
              <div className="relative h-48 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(27, 77, 62, 0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(27, 77, 62, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-5 h-5 bg-molten-500 rounded-full molten-glow" />
                    <div className="absolute inset-0 w-5 h-5 bg-molten-500 rounded-full animate-ping" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-navy-800 text-sm">
                  <div className="font-bold text-navy-900">NH-7, Hosur</div>
                  <div className="font-light">40 KM from Bengaluru</div>
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
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-md">
              <h3 className="text-2xl font-bold text-navy-900 mb-2 font-display">
                Request a <span className="text-molten-500">Free Quote</span>
              </h3>
              <p className="text-navy-800/70 mb-8 font-light">Fill in your details and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6 border border-emerald-300">
                    <svg className="w-10 h-10 text-molten-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-navy-900 mb-2 font-display">Message Sent!</h4>
                  <p className="text-navy-800/70">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-navy-900 font-semibold mb-2 text-xs uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-navy-900 placeholder-slate-400 font-medium"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-navy-900 font-semibold mb-2 text-xs uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-navy-900 placeholder-slate-400 font-medium"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  {/* Phone & Company */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy-900 font-semibold mb-2 text-xs uppercase tracking-wider">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-navy-900 placeholder-slate-400 font-medium"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-900 font-semibold mb-2 text-xs uppercase tracking-wider">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-navy-900 placeholder-slate-400 font-medium"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  {/* Required Material Dropdown */}
                  <div>
                    <label className="block text-navy-900 font-semibold mb-2 text-xs uppercase tracking-wider">
                      Required Material
                    </label>
                    <select
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-navy-900 font-medium"
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
                    <label className="block text-navy-900 font-semibold mb-2 text-xs uppercase tracking-wider">
                      Project Details
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-molten-500 focus:ring-2 focus:ring-molten-500/20 outline-none transition-all text-navy-900 placeholder-slate-400 font-medium resize-none"
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
