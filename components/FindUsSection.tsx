'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Instagram, Star, Phone, Clock, Car } from 'lucide-react'
import { StaggerChildren } from './animations/StaggerChildren'
import InstagramFeed from './InstagramFeed'

const WHATSAPP_NUMBER = '6281999885826'
const WHATSAPP_DISPLAY = '+62 812 3456 7890'

const schoolInfo = {
  bio: 'Welcome to Uluwatu Surf School Bali. Owned locally, born and raised in the heart of Uluwatu, and with 30 years of surfing experience and 8 years of teaching and coaching experience- we specialize in offering the most personalized experience for every individual surfer in the Bukit area. Our experience is reflected in the water with each and every client\'s surf experience and skill progression. We are available for surf lessons for all levels, surf guiding, and surfing packages including video/ photos and review. Our goal is to provide a positive and safe experience for our guests while improving their skills with passionate and technical guidance to help you become the surfer you want to be.',
  location: {
    name: 'Uluwatu Beach',
    address: 'Jl. Labuan Sait, Uluwatu, Pecatu, Badung Regency, Bali 80361'
  },
  schedule: {
    daily: '06:00 – 18:00',
    bestTimes: 'Dawn patrol and late afternoon glass',
    beginnerNote: 'Beginner lessons typically run at Padang Padang for the most forgiving sand-bottom take-off.'
  }
}

const reviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Scotty Dex guided me from whitewater to reef confidence in two sessions. Calm, direct, and focused on safety.',
    location: 'Australia'
  },
  {
    name: 'Marcus Weber',
    rating: 5,
    comment: 'Professional approach and video breakdown sent post surf. No hype, just real coaching.',
    location: 'Germany'
  },
  {
    name: 'Yuki Tanaka',
    rating: 5,
    comment: 'Scotty Dex knows the reef intimately and kept the session efficient. Strongly recommended for serious surfers.',
    location: 'Japan'
  }
]

export default function FindUsSection() {
  return (
    <section id="find-us" className="section-spacing bg-carbon">
      <div className="container mx-auto px-4">
        <StaggerChildren className="space-y-16">
          <div className="text-center space-y-6">
            <span className="chip">Location</span>
            <h2 className="text-heading-1">Where We Operate</h2>
            <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
              Base of operations across the Bukit Peninsula. Sessions are scheduled around Temple, Padang Padang, Bingin and surrounding reefs with local tide intel.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="tag-outline">Temple Reef</span>
              <span className="tag-outline">Padang Padang (beginner)</span>
              <span className="tag-outline">Bingin Peaks</span>
              <span className="tag-outline">Sunset Lines</span>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="space-y-6">
              <div className="surface-panel border border-white/10 p-8 space-y-6">
                <h3 className="text-heading-2">Operational Notes</h3>
                <p className="text-body text-neutral-300">{schoolInfo.bio}</p>

                <div className="grid sm:grid-cols-2 gap-4 text-body text-neutral-400">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-white/60" />
                    <div>
                      <p className="text-body-sm text-white">Daily Window</p>
                      <p>{schoolInfo.schedule.daily}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="h-5 w-5 text-white/60" />
                    <div>
                      <p className="text-body-sm text-white">Transport</p>
                      <p>Included with all bookings</p>
                    </div>
                  </div>
                </div>

                <div className="surface-panel border border-white/12 p-5">
                  <p className="text-body-sm text-neutral-500">Best Surf Times</p>
                  <p className="text-body text-neutral-300">{schoolInfo.schedule.bestTimes}</p>
                <p className="text-body-sm text-neutral-500 mt-2">{schoolInfo.schedule.beginnerNote}</p>
                </div>
              </div>

              <div className="surface-panel border border-white/10 p-8 space-y-6">
                <h4 className="text-heading-2">Direct Contact</h4>
                <div className="space-y-5 text-body text-neutral-300">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-white/60" />
                    <div>
                      <p className="text-body-sm text-white">WhatsApp & phone</p>
                      <Link
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        {WHATSAPP_DISPLAY}
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-white/60" />
                    <div>
                      <p className="text-body-sm text-white">Field updates</p>
                      <Link
                        href="https://www.instagram.com/uluwatusurfschool_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        @uluwatusurfschool_official
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-white/60" />
                    <div>
                      <p className="text-body-sm text-white">Office address</p>
                      <p>{schoolInfo.location.address}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition"
                  >
                    WhatsApp Us
                  </Link>
                  <Link
                    href="https://maps.app.goo.gl/hb1GTmGar8rwiRvG9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition"
                  >
                    Get Directions
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative h-80 rounded-[32px] overflow-hidden border border-white/10">
                <Image
                  src="/images/surf/0U4A8558.JPG"
                  alt="Uluwatu Temple Reef surf break"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-6 py-5 text-body text-neutral-300 uppercase tracking-[0.2em]">
                  Uluwatu Temple Reef
                </div>
              </div>

              <div className="surface-panel border border-white/10 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-heading-3">Our Location</h4>
                  <MapPin className="h-5 w-5 text-white/60" />
                </div>
                <div className="rounded-2xl border border-white/12 bg-black/50 h-48 flex items-center justify-center text-center">
                  <div className="space-y-1">
                    <MapPin className="mx-auto h-8 w-8 text-white/50" />
                    <p className="text-body text-neutral-300">{schoolInfo.location.name}</p>
                    <p className="text-body-sm text-neutral-500">Interactive map available on confirmation</p>
                  </div>
                </div>
                <Link
                  href="https://maps.app.goo.gl/hb1GTmGar8rwiRvG9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition"
                >
                  Open Google Maps
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h3 className="text-heading-2">What Surfers Say</h3>
              <div className="flex items-center justify-center gap-2 text-neutral-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-white" fill="currentColor" />
                  ))}
                </div>
                <span className="text-body-sm">5.0 rating • 500+ reviews</span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <div key={review.name} className="surface-panel border border-white/10 p-6 space-y-3">
                  <div>
                    <p className="text-body-sm text-white">{review.name}</p>
                    <p className="text-body-sm text-neutral-500">{review.location}</p>
                  </div>
                  <p className="text-body text-neutral-300">“{review.comment}”</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="https://maps.app.goo.gl/hb1GTmGar8rwiRvG9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition"
              >
                Read Google Reviews
              </Link>
            </div>
          </div>

        </StaggerChildren>
      </div>
    </section>
  )
}
