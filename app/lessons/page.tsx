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

const includedItems = [
  { icon: Shield, title: 'Equipment & Safety', description: 'Premium boards, leashes, helmets where required, and full safety briefings.' },
  { icon: MapPin, title: 'Spot Selection', description: 'Tide, swell and wind checks to pick the best peak for your level.' },
  { icon: Camera, title: 'Documentation', description: 'Cliff and water footage for video-supported feedback.' },
  { icon: Clock, title: 'Structured Debrief', description: 'Post-session feedback with focus points for the next surf.' }
]

const progressionStages = [
  {
    step: 'Foundation',
    bullets: ['Ocean entry and exit protocol', 'Paddle strength + positioning', 'Pop-up accuracy', 'Whitewater control']
  },
  {
    step: 'Development',
    bullets: ['Reading reef sets', 'Timing and wave selection', 'Trim and speed management', 'Lineup awareness']
  },
  {
    step: 'Execution',
    bullets: ['Critical take-off management', 'Bottom/top turn mechanics', 'Tube strategy & hold line', 'Video review + action plan']
  }
]

export default function Lessons() {
  return (
    <main id="main-content" className="min-h-screen bg-carbon">
      <Header />
      <Breadcrumb items={[{ label: 'Surf Lessons' }]} />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="chip">Programs</span>
          <h1 className="text-display-2">Surf Lessons</h1>
          <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
            Professional instruction designed for measurable progression. Reef-specific coaching supported by land drills and detailed session documentation.
          </p>
        </div>
      </section>

      <LessonCards />

      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-6">
            <span className="chip">Session Coverage</span>
            <h2 className="text-heading-1">What&apos;s Included</h2>
            <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
              Every booking receives the same disciplined framework regardless of chosen package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {includedItems.map((item) => (
              <div key={item.title} className="surface-panel border border-white/10 p-6 space-y-3">
                <item.icon className="h-6 w-6 text-white/70" />
                <h3 className="text-heading-3">{item.title}</h3>
                <p className="text-body text-neutral-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-6">
            <span className="chip">Progression Map</span>
            <h2 className="text-heading-1">Structured Development</h2>
            <p className="text-body text-neutral-300 max-w-3xl mx-auto">
              We map each surfer across three clear stages. Clip reviews and notes keep you accountable between sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {progressionStages.map((stage, index) => (
              <div key={stage.step} className="surface-panel border border-white/10 p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-body-sm text-white/70">
                    {index + 1}
                  </div>
                  <h3 className="text-heading-3">{stage.step}</h3>
                </div>
                <ul className="space-y-3 text-body text-neutral-300">
                  {stage.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <CheckCircle className="h-4 w-4 text-white/60 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center surface-panel border border-white/10 p-12 space-y-6">
          <h2 className="text-heading-2">Need A Specific Plan?</h2>
          <p className="text-body text-neutral-300 max-w-2xl mx-auto">
            Custom coaching blocks and team packages available. Let us know your goals and timeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition"
          >
            Contact The Team
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
