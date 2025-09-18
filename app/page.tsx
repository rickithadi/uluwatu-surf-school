import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WelcomeInfo from '@/components/WelcomeInfo'
import Authority from '@/components/Authority'
import LessonCards from '@/components/LessonCards'
import Testimonials from '@/components/Testimonials'
import StaticGallery from '@/components/StaticGallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <Hero />
      <WelcomeInfo />
      <Authority />
      <LessonCards />
      <Testimonials />
      <StaticGallery />
      <Footer />
    </main>
  )
}