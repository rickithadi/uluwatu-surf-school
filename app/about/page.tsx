import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { Instagram, MapPin, Award, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Scotty - 15 Years Uluwatu Surf Expertise',
  description: 'Meet Scotty, ISA certified surf instructor with 15+ years local knowledge of Uluwatu and Bali reef breaks. Professional surf coaching with traditional expertise and modern video analysis technology.',
  keywords: ['scotty surf instructor', 'uluwatu surf expert', 'ISA certified instructor', 'bali surf coach', 'reef break specialist', 'professional surf instructor', 'uluwatu local knowledge'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Scotty - 15 Years Uluwatu Surf Expertise',
    description: 'Meet Scotty, ISA certified surf instructor with 15+ years local knowledge of Uluwatu and Bali reef breaks.',
    url: '/about',
    type: 'profile',
    images: ['/og-about-scotty.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Scotty - 15 Years Uluwatu Surf Expertise',
    description: 'Meet Scotty, ISA certified surf instructor with 15+ years local knowledge of Uluwatu and Bali reef breaks.',
    images: ['/og-about-scotty.jpg'],
  },
}

const methodologyPoints = [
  {
    title: 'Local Knowledge Transfer',
    summary: 'Tide, swell, and crowd intelligence from daily reef study.',
    detail: 'Entry and exit points, safe zones, and etiquette across Temple, Peak, and Racetrack.'
  },
  {
    title: 'Video Analysis',
    summary: 'Cliff and water footage reviewed frame-by-frame after each session.',
    detail: 'Playback notes and key stills delivered with priority focus points.'
  },
  {
    title: 'Systematic Progression',
    summary: 'Deliberate drills tailored to current stage – no guesswork.',
    detail: 'Session plans recorded and iterated for returning surfers.'
  }
]

export default function About() {
  return (
    <main id="main-content" className="min-h-screen bg-carbon">
      <Header />
      <Breadcrumb items={[{ label: 'About Scotty' }]} />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="chip">About</span>
          <h1 className="text-display-2">Scotty — Head Coach</h1>
          <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
            Fifteen years of daily reef study applied to disciplined, quiet coaching. Straightforward, safety-first instruction.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="relative h-[560px] rounded-[32px] overflow-hidden border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-heading-1">Background</h2>
              <p className="text-body text-neutral-300">
                Scoot moved to Uluwatu in 2009 and logged every tide shift and swell cycle since. Coaching began organically—helping travelling surfers navigate Temple when conditions turned on.
              </p>
              <p className="text-body text-neutral-300">
                Today the approach remains low-key: maximum four surfers in the water, accountability through video, and honest feedback delivered without ego.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="surface-panel border border-white/12 p-6 space-y-2">
                <Award className="h-5 w-5 text-white/70" />
                <p className="text-body-sm text-white">ISA Level 2</p>
                <p className="text-body text-neutral-300">International Surfing Association accredited.</p>
              </div>
              <div className="surface-panel border border-white/12 p-6 space-y-2">
                <Clock className="h-5 w-5 text-white/70" />
                <p className="text-body-sm text-white">Daily Read</p>
                <p className="text-body text-neutral-300">Full condition reports tracked every morning.</p>
              </div>
              <div className="surface-panel border border-white/12 p-6 space-y-2">
                <MapPin className="h-5 w-5 text-white/70" />
                <p className="text-body-sm text-white">Temple Focus</p>
                <p className="text-body text-neutral-300">Guided entry, take-off zones, and exit plans.</p>
              </div>
            </div>

            <Link
              href="https://instagram.com/scotty_dex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 rounded-full text-sm uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition"
            >
              <Instagram className="h-4 w-4" />
              @scotty_dex
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-6">
            <span className="chip">Methodology</span>
            <h2 className="text-heading-1">How Sessions Run</h2>
          </div>

          <div className="space-y-8">
            {methodologyPoints.map((item, index) => (
              <div key={item.title} className="surface-panel border border-white/10 p-8 grid gap-6 md:grid-cols-[0.4fr,1fr]">
                <div className="space-y-2">
                  <p className="text-body-sm text-neutral-500">0{index + 1}</p>
                  <h3 className="text-heading-3">{item.title}</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-body text-neutral-300">{item.summary}</p>
                  <p className="text-body text-neutral-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
