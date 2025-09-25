'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from './ui/Button'
import { StaggerChildren } from './animations/StaggerChildren'

const stats = [
  { label: 'Years Coaching', value: '15+' },
  { label: 'Surfers Guided', value: '2000+' },
  { label: 'Google Rating', value: '5.0' }
]

export default function Hero() {
  const [mediaReady, setMediaReady] = useState(false)
  const [mediaError, setMediaError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black">
      {/* Background media */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload={isMobile ? "none" : "metadata"}
        poster="/images/scootAssets/IMG_4743.JPG"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          mediaReady && !mediaError ? 'opacity-100' : 'opacity-0'
        }`}
        onLoadedData={() => setMediaReady(true)}
        onError={() => setMediaError(true)}
      >
        <source src="/images/surf/hero-optimized.mp4" type="video/mp4" />
        <source src="/videos/hero-1080.webm" type="video/webm" media="(min-width: 1024px)" />
        <source src="/videos/hero-720.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="/videos/hero-480.mp4" type="video/mp4" />
        <source src="/images/scootAssets/hero.mp4" type="video/mp4" />
      </video>

      {(!mediaReady || mediaError) && (
        <Image
          src="/images/scootAssets/IMG_4746.JPG"
          alt="Scoot coaching at Uluwatu"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0,rgba(0,0,0,0)_45%)]" />

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="py-32 md:py-40">
            <StaggerChildren className="max-w-5xl space-y-12">
              <div className="space-y-6 text-left">
                <span className="inline-flex items-center px-5 py-2 text-xs uppercase tracking-[0.28em] text-white/70 border border-white/30 rounded-full backdrop-blur-sm">
                  Premium Surf Instruction
                </span>
                <h1 className="text-display-1 text-white drop-shadow-[0_18px_35px_rgba(0,0,0,0.65)] leading-tight">
                  Uluwatu Surf School
                </h1>
                <p className="max-w-2xl text-body-lg text-neutral-100/90 drop-shadow-[0_10px_25px_rgba(0,0,0,0.55)]">
                  Understated coaching for surfers who want results. Local reef fluency, disciplined safety protocols, and
                  video-led refinement delivered in one of Bali&apos;s most demanding lineups.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <Button size="lg" onClick={() => handleScrollTo('book')}>
                  Book A Session
                </Button>
                <Button variant="outline" size="lg" onClick={() => handleScrollTo('pricing')}>
                  View Programs
                </Button>
              </div>

              <div className="rounded-3xl border border-white/15 bg-black/50 backdrop-blur-xl px-8 py-6">
                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="space-y-1">
                      <dt className="text-body-sm text-neutral-400 uppercase">{stat.label}</dt>
                      <dd className="text-display-3 text-white tracking-[0.18em]">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  )
}
