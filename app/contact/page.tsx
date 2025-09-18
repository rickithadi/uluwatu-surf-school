import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, MessageSquare } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Uluwatu Surf School Booking & Information',
  description: 'Contact Uluwatu Surf School for lesson bookings and information. Located in Uluwatu, Pecatu, Bali. Phone: +62 812 3456 7890. Email: info@uluwatusurfschool.com. Daily 6AM-6PM.',
  keywords: ['contact uluwatu surf school', 'book surf lesson uluwatu', 'surf school phone number', 'uluwatu surf instruction contact', 'bali surf lessons booking'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us - Uluwatu Surf School Booking & Information',
    description: 'Contact Uluwatu Surf School for lesson bookings and information. Located in Uluwatu, Pecatu, Bali.',
    url: '/contact',
    type: 'website',
    images: ['/og-contact.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Uluwatu Surf School Booking & Information',
    description: 'Contact Uluwatu Surf School for lesson bookings and information. Located in Uluwatu, Pecatu, Bali.',
    images: ['/og-contact.jpg'],
  },
}

export default function Contact() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <Breadcrumb items={[{ label: 'Contact Us' }]} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-clean-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-charcoal mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-storm-gray max-w-2xl mx-auto">
              Get in touch to book your lesson or ask about our surf instruction programs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-light text-charcoal mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-deep-ocean mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Location</h3>
                    <p className="text-storm-gray">
                      Uluwatu, Pecatu<br />
                      Bali, Indonesia 80361
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-deep-ocean mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <p className="text-storm-gray">+62 812 3456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-deep-ocean mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <p className="text-storm-gray">info@uluwatusurfschool.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-deep-ocean mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Operating Hours</h3>
                    <p className="text-storm-gray">
                      Daily: 6:00 AM - 6:00 PM<br />
                      Lessons by appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-charcoal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://instagram.com/uluwatusurfschool_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-deep-ocean hover:text-blue-800 transition-colors duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>@uluwatusurfschool_official</span>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-deep-ocean hover:text-blue-800 transition-colors duration-200"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-charcoal mb-6">
                Send us a message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-charcoal mb-2">
                    Surfing Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="lessonType" className="block text-sm font-medium text-charcoal mb-2">
                    Lesson Interest
                  </label>
                  <select
                    id="lessonType"
                    name="lessonType"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                  >
                    <option value="">Select lesson type</option>
                    <option value="group">Group Lesson</option>
                    <option value="semi-private">Semi-Private</option>
                    <option value="private">Private + Tech Analysis</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                    placeholder="Tell us about your surfing goals or any questions you have..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-deep-ocean text-white py-3 px-6 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking CTA */}
      <section className="py-16 bg-charcoal text-clean-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light mb-4">
            Ready to book directly?
          </h2>
          <p className="text-gray-300 mb-6">
            Skip the form and go straight to our lesson booking page
          </p>
          <Link
            href="/book"
            className="inline-block bg-deep-ocean text-white px-8 py-3 font-medium hover:bg-blue-800 transition-colors duration-200"
          >
            Book Your Lesson
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}