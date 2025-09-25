'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Award, Users, Calendar, Trophy } from 'lucide-react'
import { Button } from './ui/Button'
import { StaggerChildren } from './animations/StaggerChildren'

const accomplishments = [
  {
    icon: Trophy,
    title: 'Competition Winner',
    description: 'Single Fin Classic 2019 • Uluwatu Boardriders 2024'
  },
  {
    icon: Award,
    title: 'ISA Certified',
    description: 'Surf Instructor • Competition Judge'
  },
  {
    icon: Users,
    title: 'Safety Certified',
    description: 'Balawista Bali Life Saving'
  },
  {
    icon: Calendar,
    title: 'Local Expert',
    description: '30 years surfing • 8 years coaching • Born in Uluwatu'
  }
]

export default function ScootProfile() {
  const router = useRouter()

  const goToGallery = () => router.push('/#gallery')

  return (
    <section id="scoot" className="section-spacing bg-carbon">
      <div className="container mx-auto px-4">
        <StaggerChildren className="space-y-16">
          <div className="text-center space-y-6">
            <span className="chip">Meet the Coach</span>
            <h2 className="text-heading-1">Scotty Dex, Lead Instructor</h2>
            <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
              Local knowledge across the Bukit paired with disciplined coaching. Scotty Dex keeps ratios tight, feedback clear, and safety first.
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="relative h-[520px] rounded-[32px] overflow-hidden border border-white/10">
                <Image
                  src="/images/surf/1V0A9213.JPG"
                  alt="Scotty Dex preparing boards for the next session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-[-28px] right-[-28px] surface-panel border border-white/15 px-8 py-6 text-center">
                <p className="text-heading-3">5.0</p>
                <p className="text-body-sm text-neutral-500">Google rating</p>
                <p className="text-body-sm text-neutral-600">500+ verified reviews</p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-heading-2">Understated. Professional. Consistent.</h3>
                <p className="text-body text-neutral-300">
                  Temple, Padang Padang, Bingin and surrounding reefs form the daily circuit. Scotty Dex logs tides, crowd shifts and swell consistency every morning before any surfer paddles out.
                </p>
                <p className="text-body text-neutral-300">
                  Sessions run with small ratios, structured drills and straight feedback. Expect notes in your inbox, clips for analysis, and a clear plan for the next booking.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {accomplishments.map((achievement) => (
                  <div key={achievement.title} className="surface-panel border border-white/10 p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full border border-white/15 p-3 text-white/80 flex-shrink-0">
                        <achievement.icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-white">{achievement.title}</h4>
                        <p className="text-sm text-neutral-300 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="surface-panel border border-white/12 p-6 space-y-4">
                <h4 className="text-heading-3">Video Analysis & Land Lab</h4>
                <p className="text-body text-neutral-300">
                  Every session includes land mechanics, filmed water time and a debrief. Clips are reviewed frame-by-frame with practical notes emailed post-surf.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 border border-white/12 rounded-xl px-4 py-3 text-body-sm text-neutral-400">
                    4K capture • Temple + Padang angles
                  </div>
                  <div className="flex-1 border border-white/12 rounded-xl px-4 py-3 text-body-sm text-neutral-400">
                    Playback • Key stills + timestamps
                  </div>
                  <div className="flex-1 border border-white/12 rounded-xl px-4 py-3 text-body-sm text-neutral-400">
                    Land drills • Custom progression map
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" onClick={() => router.push('/book?instructor=scoot')}>
                  Book With Scotty Dex
                </Button>
                <Button variant="secondary" size="lg" onClick={goToGallery}>
                  View Sessions
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="surface-panel border border-white/10 overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/surf/IMG_0631.JPG"
                  alt="Padang Padang beginner session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="chip text-white/80 border-white/30">Padang Padang</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-heading-3">Beginner Framework</h4>
                <p className="text-body text-neutral-300">Sand-bottom take-offs and controlled whitewater at Padang Padang before stepping onto the reef.</p>
              </div>
            </div>

            <div className="surface-panel border border-white/10 overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/surf/0U4A8561.JPG"
                  alt="Temple reef set"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="chip text-white/80 border-white/30">Temple Reef</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-heading-3">Advanced Execution</h4>
                <p className="text-body text-neutral-300">Tide windows, positioning and barrel sequencing tailored around Temple and Bingin peaks.</p>
              </div>
            </div>
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}
