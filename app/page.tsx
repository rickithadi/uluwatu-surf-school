import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StaticGallery from '@/components/StaticGallery'
import PricingSection from '@/components/PricingSection'
import ScootProfile from '@/components/ScootProfile'
import BookingSection from '@/components/BookingSection'
import FindUsSection from '@/components/FindUsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PricingSection />
      <ScootProfile />
      <StaticGallery />
      <BookingSection />
      <FindUsSection />
      <Footer />
    </main>
  )
}