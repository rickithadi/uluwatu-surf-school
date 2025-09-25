import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PricingSection from '@/components/PricingSection'
import Testimonials from '@/components/Testimonials'
import ScootProfile from '@/components/ScootProfile'
import StaticGallery from '@/components/StaticGallery'
import FindUsSection from '@/components/FindUsSection'
import BookingSection from '@/components/BookingSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PricingSection />
      <Testimonials />
      <ScootProfile />
      <StaticGallery />
      <FindUsSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
