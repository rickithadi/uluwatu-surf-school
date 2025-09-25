'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Award, Users, Calendar, Trophy } from 'lucide-react'
import { Button } from './ui/Button'
import { StaggerChildren } from './animations/StaggerChildren'

const accomplishments = [
  {
    icon: Award,
    title: 'ISA Certified',
    description: 'Level 2 Instructor',
    detail: 'International Surfing Association credentials'
  },
  {
    icon: Users,
    title: '2000+ Surfers',
    description: 'Coached on reef breaks',
    detail: 'From first waves to competitive athletes'
  },
  {
    icon: Calendar,
    title: '15+ Years',
    description: 'Uluwatu reef experience',
    detail: 'Tracking Temple, Padang Padang, Bingin daily'
  },
  {
    icon: Trophy,
    title: 'Local Titles',
    description: 'Temple competitions',
    detail: 'Regional contest wins & lineup leadership'
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
            <h2 className="text-heading-1">Scoot, Lead Instructor</h2>
            <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
              Local knowledge across the Bukit paired with disciplined coaching. Scoot keeps ratios tight, feedback clear, and safety first.
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="relative h-[520px] rounded-[32px] overflow-hidden border border-white/10">
                <Image
                  src="/images/instagram/surf-lifestyle-1.jpg"
                  alt="Scoot preparing boards for the next session"
                  fill
                  className="object-cover grayscale"
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
                  Temple, Padang Padang, Bingin and surrounding reefs form the daily circuit. Scoot logs tides, crowd shifts and swell consistency every morning before any surfer paddles out.
                </p>
                <p className="text-body text-neutral-300">
                  Sessions run with small ratios, structured drills and straight feedback. Expect notes in your inbox, clips for analysis, and a clear plan for the next booking.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {accomplishments.map((achievement) => (
                  <div key={achievement.title} className="surface-panel border border-white/10 p-5">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full border border-white/15 p-2 text-white/80">
                        <achievement.icon className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-body-sm text-white">{achievement.title}</p>
                        <p className="text-body text-neutral-300">{achievement.description}</p>
                        <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">{achievement.detail}</p>
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
                  Book With Scoot
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
                  src="/images/instagram/surf-lifestyle-2.jpg"
                  alt="Padang Padang beginner session"
                  fill
                  className="object-cover grayscale"
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
                  src="/images/instagram/surf-action-4.jpg"
                  alt="Temple reef set"
                  fill
                  className="object-cover grayscale"
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
