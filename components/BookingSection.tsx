'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from './ui/Button'
import { StaggerChildren } from './animations/StaggerChildren'
// WhatsApp-based booking form

interface FormData {
  fullName: string
  numberOfPeople: string
  whatsappNumber: string
  email: string
  preferredDateTime: string
  surfLevel: string
  message: string
}

const initialFormState: FormData = {
  fullName: '',
  numberOfPeople: '1',
  whatsappNumber: '',
  email: '',
  preferredDateTime: '',
  surfLevel: '',
  message: ''
}

const WHATSAPP_NUMBER = '6281999885826'
const WHATSAPP_DISPLAY = '+62 812 3456 7890'

// Utility function to format datetime-local input to readable format
const formatDateTime = (datetimeString: string): string => {
  if (!datetimeString) return 'Not specified'
  
  try {
    const date = new Date(datetimeString)
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }
    return date.toLocaleDateString('en-US', options)
  } catch (error) {
    return datetimeString
  }
}

// Enhanced WhatsApp message formatting
const formatWhatsAppMessage = (data: FormData): string => {
  const formattedDateTime = formatDateTime(data.preferredDateTime)
  const surfLevel = data.surfLevel || 'Not specified'
  const notes = data.message.trim() || 'No additional notes'
  
  return `🏄‍♂️ SURF LESSON BOOKING REQUEST

👤 Name: ${data.fullName}
👥 Group Size: ${data.numberOfPeople} surfer${data.numberOfPeople === '1' ? '' : 's'}
📞 WhatsApp: ${data.whatsappNumber || 'Not provided'}
📧 Email: ${data.email}
📅 Preferred Date/Time: ${formattedDateTime}
🌊 Surf Level: ${surfLevel}

💬 Additional Notes:
${notes}

📍 Ready to book! Please confirm availability and pricing.`
}

export default function BookingSection() {
  const [formData, setFormData] = useState<FormData>(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Generate enhanced WhatsApp message
      const message = formatWhatsAppMessage(formData)
      
      // Create WhatsApp URL with encoded message
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
      
      console.log('Opening WhatsApp with message:', message)
      
      // Open WhatsApp with pre-populated message
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      
      // Brief delay for better UX, then reset form
      await new Promise((resolve) => setTimeout(resolve, 400))
      setFormData(initialFormState)
      
    } catch (error) {
      console.error('Error generating WhatsApp URL:', error)
    }

    setIsSubmitting(false)
  }


  return (
    <section id="book" className="section-spacing bg-carbon">
      <div className="container mx-auto px-4">
        <StaggerChildren className="space-y-16">
          <div className="text-center space-y-6">
            <span className="chip">Bookings</span>
            <h2 className="text-heading-1">Reserve Your Session</h2>
            <p className="text-body-lg text-neutral-300 max-w-2xl mx-auto">
              Fill out your details below and we&apos;ll open WhatsApp with your booking request pre-filled. Direct communication for instant confirmation!
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="surface-panel border border-white/10 p-10">
              <h3 className="text-heading-2 mb-10">Booking Form</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-body-sm text-neutral-500" htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm text-neutral-500" htmlFor="numberOfPeople">Number of People *</label>
                    <select
                      id="numberOfPeople"
                      name="numberOfPeople"
                      required
                      value={formData.numberOfPeople}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      {['1','2','3','4','5','6+'].map(option => (
                        <option key={option} value={option}>{option} Surfer{option === '1' ? '' : 's'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-body-sm text-neutral-500" htmlFor="whatsappNumber">WhatsApp Number *</label>
                    <input
                      id="whatsappNumber"
                      type="tel"
                      name="whatsappNumber"
                      required
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm text-neutral-500" htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-body-sm text-neutral-500" htmlFor="preferredDateTime">Preferred Date / Time *</label>
                    <input
                      id="preferredDateTime"
                      type="datetime-local"
                      name="preferredDateTime"
                      required
                      value={formData.preferredDateTime}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm text-neutral-500" htmlFor="surfLevel">Surf Level *</label>
                    <select
                      id="surfLevel"
                      name="surfLevel"
                      required
                      value={formData.surfLevel}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      <option value="">Select level</option>
                      <option value="complete-beginner">Complete beginner</option>
                      <option value="beginner">Beginner (1-10 sessions)</option>
                      <option value="intermediate">Intermediate (unbroken waves)</option>
                      <option value="advanced">Advanced (comfortable on reef)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-body-sm text-neutral-500" htmlFor="message">Additional Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Goals, concerns, travel schedule..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Opening WhatsApp…' : '🏄‍♂️ Book via WhatsApp'}
                </Button>

                <p className="text-body-sm text-neutral-500 text-center">
                  Payment is cash on the day. Please give two hours notice for reschedules.
                </p>
              </form>
            </div>

            <div className="space-y-8">
              <div className="surface-panel border border-white/10 p-8 space-y-6">
                <h3 className="text-heading-2">Direct Contact</h3>

                <div className="space-y-5 text-body text-neutral-300">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full border border-white/20 p-3 text-white/70">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-body-sm text-white">Location</p>
                      <p>Jalan Pantai Suluban<br />Uluwatu, Bali 80361</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full border border-white/20 p-3 text-white/70">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-body-sm text-white">WhatsApp</p>
                      <Link
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        {WHATSAPP_DISPLAY}
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full border border-white/20 p-3 text-white/70">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-body-sm text-white">Email</p>
                      <Link href="mailto:dexscott04@gmail.com" className="hover:text-white">
                        dexscott04@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full border border-white/20 p-3 text-white/70">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-body-sm text-white">Hours</p>
                      <p>Daily 06:00 – 18:00<br />Dawn and dusk recommended</p>
                    </div>
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition"
                >
                  Message on WhatsApp
                </Link>
              </div>

              <div className="relative h-64 rounded-[28px] overflow-hidden border border-white/8">
                <Image
                  src="/images/surf/1V0A6058.JPG"
                  alt="Uluwatu location overview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-4 text-center">
                  <p className="text-body-sm text-neutral-400">View precise pin</p>
                  <Link
                    href="https://maps.app.goo.gl/hb1GTmGar8rwiRvG9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition"
                  >
                    Open Google Maps
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}
