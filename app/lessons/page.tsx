import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LessonCards from '@/components/LessonCards'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { Clock, Users, Camera, Shield, MapPin, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Surf Lessons - Professional Instruction in Uluwatu',
  description: 'Professional surf lessons in Uluwatu, Bali. Group lessons IDR 400k, semi-private IDR 500k, private + video analysis IDR 700k. Learn from 15+ years local expertise with modern coaching technology.',
  keywords: ['surf lessons uluwatu', 'bali surf instruction', 'private surf coaching', 'group surf lessons', 'semi-private surf lessons', 'video surf analysis', 'uluwatu surf school', 'reef break lessons'],
  alternates: {
    canonical: '/lessons',
  },
  openGraph: {
    title: 'Surf Lessons - Professional Instruction in Uluwatu',
    description: 'Professional surf lessons in Uluwatu, Bali. Group lessons IDR 400k, semi-private IDR 500k, private + video analysis IDR 700k.',
    url: '/lessons',
    type: 'website',
    images: ['/og-lessons.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surf Lessons - Professional Instruction in Uluwatu',
    description: 'Professional surf lessons in Uluwatu, Bali. Group lessons IDR 400k, semi-private IDR 500k, private + video analysis IDR 700k.',
    images: ['/og-lessons.jpg'],
  },
}

export default function Lessons() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <Breadcrumb items={[{ label: 'Surf Lessons' }]} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-clean-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-charcoal mb-6">
              Surf Lessons
            </h1>
            <p className="text-xl text-storm-gray max-w-2xl mx-auto">
              Professional instruction designed for measurable progress. 1.5 hours in water plus land coaching for beginners.
            </p>
          </div>
        </div>
      </section>

      {/* Lesson Cards */}
      <LessonCards />

      {/* What's Included */}
      <section className="py-20 bg-clean-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-charcoal text-center mb-16">
            What&rsquo;s Included
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-deep-ocean" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">All Equipment Provided</h3>
              <p className="text-storm-gray text-sm">
                Premium surfboards, leashes, and all safety equipment sized for your ability level
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-deep-ocean" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Conditions-Based Spot Selection</h3>
              <p className="text-storm-gray text-sm">
                Location and timing based on tide, swell, and weather conditions matched to your individual level
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-deep-ocean" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Photo Documentation</h3>
              <p className="text-storm-gray text-sm">
                Action shots to review technique and track progress
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-deep-ocean" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Break Explanation & Review</h3>
              <p className="text-storm-gray text-sm">
                Beginning session break explanation plus technical feedback and improvement recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Progression */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-charcoal mb-6">
              Learning Progression
            </h2>
            <p className="text-lg text-storm-gray">
              Systematic development from fundamentals to advanced reef surfing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-deep-ocean text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-charcoal">Foundation</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Ocean safety and awareness</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Paddling technique</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Popup mechanics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Whitewater practice</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-deep-ocean text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-charcoal">Development</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Wave selection and timing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Trim and balance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Basic turns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Lineup positioning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-deep-ocean text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-charcoal">Advanced</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Reef break navigation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Bottom turn mechanics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Cutback and carving</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                  <span className="text-storm-gray text-sm">Video analysis review</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-charcoal text-clean-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Ready to Improve Your Surfing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional instruction focused on technique, safety, and skill improvement with individual level matching
          </p>
          <Link
            href="/book"
            className="inline-block bg-deep-ocean text-white px-8 py-4 font-medium hover:bg-blue-800 transition-colors duration-200 text-lg"
          >
            Book Your Lesson
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}