import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import BookLessonForm from '@/components/forms/BookLessonForm'
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
    <main id="main-content" className="min-h-screen bg-carbon">
      <Header />
      <Breadcrumb items={[{ label: 'Book Lesson' }]} />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="chip">Booking</span>
          <h1 className="text-display-2">Secure Your Session</h1>
          <p className="text-body-lg text-neutral-300 max-w-2xl mx-auto">
            Choose a program, lock in your timing, and we&apos;ll confirm the optimal tide window directly via WhatsApp.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="surface-panel border border-white/10 p-10">
            <BookLessonForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
