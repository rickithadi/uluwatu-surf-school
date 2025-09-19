import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CourseOverview from '@/components/CourseOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import InstructorProfiles from '@/components/InstructorProfiles'
import Testimonials from '@/components/Testimonials'
import BookingSection from '@/components/BookingSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CourseOverview />
      <WhyChooseUs />
      <InstructorProfiles />
      <Testimonials />
      <BookingSection />
      <Footer />
    </main>
  )
}