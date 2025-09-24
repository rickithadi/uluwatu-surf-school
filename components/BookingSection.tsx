'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from './ui/Button'
import { StaggerChildren } from './animations/StaggerChildren'

interface FormData {
  fullName: string
  numberOfPeople: string
  whatsappNumber: string
  email: string
  preferredDateTime: string
  surfLevel: string
  message: string
}

export default function BookingSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    numberOfPeople: '1',
    whatsappNumber: '',
    email: '',
    preferredDateTime: '',
    surfLevel: '',
    message: ''
  })

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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    
    // Generate booking confirmation message
    const confirmationMessage = `Thank you for confirming your booking with Uluwatu Surf School Bali.

Name: ${formData.fullName}
Number of people: ${formData.numberOfPeople}
WhatsApp #: ${formData.whatsappNumber}
Email: ${formData.email}
Preferred Date/Time: ${formData.preferredDateTime}
Surf Level: ${formData.surfLevel}

**Please note all payments must be made in cash. We do not take a deposit or cancellation fee, and understand any unforeseen circumstances. We ask that for any cancellations or rescheduling, please provide a notice period of 2 hours before the confirmed start time. Thank you and we look forward to surfing with you! 🤙🏼`

    console.log('Booking confirmation:', confirmationMessage)
    alert('Thank you! Your booking request has been submitted. We\'ll contact you via WhatsApp within 2 hours to confirm details.')
  }

  return (
    <section id="book" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <StaggerChildren>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Ready to Catch Your 
              <span className="text-black">
                {' '}Perfect Wave?
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Book your surf lesson today and start your journey to becoming a confident surfer 
              at one of the world's most iconic breaks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Inquiries + Bookings Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Number of People *
                    </label>
                    <select
                      name="numberOfPeople"
                      required
                      value={formData.numberOfPeople}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6+">6+ People</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      WA # (WhatsApp Number) *
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      required
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                </div>
                  
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Preferred Date / Time *
                    </label>
                    <input
                      type="datetime-local"
                      name="preferredDateTime"
                      required
                      value={formData.preferredDateTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Surf Level *
                    </label>
                    <select
                      name="surfLevel"
                      required
                      value={formData.surfLevel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    >
                      <option value="">Select surf level</option>
                      <option value="complete-beginner">Complete Beginner</option>
                      <option value="beginner">Beginner (1-10 sessions)</option>
                      <option value="intermediate">Intermediate (can catch unbroken waves)</option>
                      <option value="advanced">Advanced (comfortable on reef breaks)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
                    placeholder="Any special requirements, questions, or requests?"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book Now'}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  We&apos;ll contact you within 24 hours to confirm your booking and arrange payment.
                </p>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-black p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Location</h4>
                      <p className="text-gray-700">
                        Jalan Pantai Suluban<br />
                        Uluwatu, Bali 80361<br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-black p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Phone</h4>
                      <p className="text-gray-700">
                        +62 812 3456 7890<br />
                        +62 813 4567 8901
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-black p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Email</h4>
                      <p className="text-gray-700">
                        info@uluwatusurf.com<br />
                        booking@uluwatusurf.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-black p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Hours</h4>
                      <p className="text-gray-700">
                        Daily: 6:00 AM - 6:00 PM<br />
                        Best waves: Dawn & Dusk
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 relative overflow-hidden border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=-100&con=25"
                  alt="Uluwatu Location"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    View on Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}