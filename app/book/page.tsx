import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { Calendar, Clock, Users, Camera } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Surf Lesson - Uluwatu Surf School Online Booking',
  description: 'Book your surf lesson online at Uluwatu Surf School. Choose from group lessons (IDR 400k), semi-private (IDR 500k), or private + video analysis (IDR 700k). Professional instruction with immediate availability.',
  keywords: ['book surf lesson uluwatu', 'online surf booking bali', 'reserve surf lesson', 'uluwatu surf school booking', 'private surf lesson booking', 'group surf lesson booking'],
  alternates: {
    canonical: '/book',
  },
  openGraph: {
    title: 'Book Surf Lesson - Uluwatu Surf School Online Booking',
    description: 'Book your surf lesson online at Uluwatu Surf School. Choose from group lessons (IDR 400k), semi-private (IDR 500k), or private + video analysis (IDR 700k).',
    url: '/book',
    type: 'website',
    images: ['/og-booking.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Surf Lesson - Uluwatu Surf School Online Booking',
    description: 'Book your surf lesson online at Uluwatu Surf School. Choose from group lessons (IDR 400k), semi-private (IDR 500k), or private + video analysis (IDR 700k).',
    images: ['/og-booking.jpg'],
  },
}

export default function Book() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <Breadcrumb items={[{ label: 'Book Lesson' }]} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-clean-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-charcoal mb-6">
              Book Your Lesson
            </h1>
            <p className="text-xl text-storm-gray max-w-2xl mx-auto">
              Professional surf instruction with immediate availability
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-8">
              
              {/* Lesson Selection */}
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-6">Choose Your Lesson</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="relative">
                    <input
                      type="radio"
                      name="lessonType"
                      value="group"
                      className="sr-only"
                    />
                    <div className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-deep-ocean transition-colors duration-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <Users className="h-6 w-6 text-deep-ocean" />
                        <span className="font-semibold text-charcoal">Group Lesson</span>
                      </div>
                      <p className="text-storm-gray text-sm mb-2">Max 4 students</p>
                      <p className="text-2xl font-bold text-charcoal">IDR 400k</p>
                    </div>
                  </label>
                  
                  <label className="relative">
                    <input
                      type="radio"
                      name="lessonType"
                      value="semi-private"
                      className="sr-only"
                    />
                    <div className="border-2 border-deep-ocean rounded-lg p-6 cursor-pointer bg-blue-50">
                      <div className="flex items-center space-x-3 mb-3">
                        <Users className="h-6 w-6 text-deep-ocean" />
                        <span className="font-semibold text-charcoal">Semi-Private</span>
                      </div>
                      <p className="text-storm-gray text-sm mb-2">Max 2 students</p>
                      <p className="text-2xl font-bold text-charcoal">IDR 500k</p>
                      <div className="mt-2 text-xs text-deep-ocean font-medium">Most Popular</div>
                    </div>
                  </label>
                  
                  <label className="relative">
                    <input
                      type="radio"
                      name="lessonType"
                      value="private"
                      className="sr-only"
                    />
                    <div className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-deep-ocean transition-colors duration-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <Camera className="h-6 w-6 text-deep-ocean" />
                        <span className="font-semibold text-charcoal">Private + Tech</span>
                      </div>
                      <p className="text-storm-gray text-sm mb-2">1-on-1 + Video</p>
                      <p className="text-2xl font-bold text-charcoal">IDR 700k</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-6">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Experience & Preferences */}
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-6">Experience & Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-charcoal mb-2">
                      Surfing Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                    >
                      <option value="">Select your level</option>
                      <option value="never">Never surfed before</option>
                      <option value="beginner">Beginner (1-10 sessions)</option>
                      <option value="intermediate">Intermediate (can catch waves)</option>
                      <option value="advanced">Advanced (can surf overhead waves)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="participants" className="block text-sm font-medium text-charcoal mb-2">
                      Number of Participants
                    </label>
                    <select
                      id="participants"
                      name="participants"
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                    >
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Date/Time */}
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-6">Preferred Schedule</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-charcoal mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                    >
                      <option value="">No preference</option>
                      <option value="dawn-patrol">Dawn Patrol (6:00 AM)</option>
                      <option value="morning">Morning (8:00 AM)</option>
                      <option value="mid-morning">Mid-Morning (10:00 AM)</option>
                      <option value="afternoon">Afternoon (2:00 PM)</option>
                      <option value="late-afternoon">Late Afternoon (4:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-charcoal mb-2">
                  Special Requests or Goals
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-ocean focus:border-transparent"
                  placeholder="Tell us about any specific goals, concerns, or requests..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="w-full bg-deep-ocean text-white py-4 px-6 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200 text-lg"
                >
                  Book Lesson
                </button>
                <p className="text-center text-sm text-storm-gray mt-4">
                  We&rsquo;ll contact you within 24 hours to confirm your booking and discuss conditions
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}