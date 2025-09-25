import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import ContactForm from '@/components/forms/ContactForm'
import { MapPin, Phone, Mail, Clock, Instagram, MessageSquare } from 'lucide-react'
import type { Metadata } from 'next'

const WHATSAPP_NUMBER = '+62 812 3456 7890'

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
    <main id="main-content" className="min-h-screen bg-carbon">
      <Header />
      <Breadcrumb items={[{ label: 'Contact Us' }]} />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="chip">Contact</span>
          <h1 className="text-display-2">Talk To The Team</h1>
          <p className="text-body-lg text-neutral-300 max-w-2xl mx-auto">
            Reach out for availability, surf conditions, or custom coaching blocks. Responses come via WhatsApp within 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1fr,0.9fr]">
          <div className="surface-panel border border-white/10 p-10 space-y-8">
            <div className="space-y-6">
              <h2 className="text-heading-2">Get In Touch</h2>
              <div className="space-y-6 text-body text-neutral-300">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-white/60" />
                  <div>
                    <p className="text-body-sm text-white">Location</p>
                    <p>Uluwatu, Pecatu<br />Bali, Indonesia 80361</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-white/60" />
                  <div>
                    <p className="text-body-sm text-white">Phone</p>
                    <Link
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      {WHATSAPP_NUMBER}
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-white/60" />
                  <div>
                    <p className="text-body-sm text-white">Email</p>
                    <Link href="mailto:info@uluwatusurfschool.com" className="hover:text-white">
                      info@uluwatusurfschool.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-white/60" />
                  <div>
                    <p className="text-body-sm text-white">Hours</p>
                    <p>Daily: 06:00 – 18:00<br />Lessons by appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-panel border border-white/10 p-6 space-y-4">
              <h3 className="text-heading-3">Follow Updates</h3>
              <div className="flex flex-col gap-3 text-body text-neutral-300">
                <Link
                  href="https://instagram.com/uluwatusurfschool_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-white/15 px-5 py-3 rounded-full text-sm uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition"
                >
                  <Instagram className="h-4 w-4" />
                  @uluwatusurfschool_official
                </Link>
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-white/15 px-5 py-3 rounded-full text-sm uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition"
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp direct
                </Link>
              </div>
            </div>
          </div>

          <div className="surface-panel border border-white/10 p-10">
            <h3 className="text-heading-2 mb-8">Send A Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center surface-panel border border-white/10 p-12 space-y-6">
          <h2 className="text-heading-2">Ready To Lock In?</h2>
          <p className="text-body text-neutral-300 max-w-2xl mx-auto">
            Skip the contact form and go straight to the booking workflow. We&apos;ll align conditions and confirm by WhatsApp.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition"
          >
            Book Your Lesson
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
