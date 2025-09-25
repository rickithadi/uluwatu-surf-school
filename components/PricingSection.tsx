'use client'

import { Check, User, Users } from 'lucide-react'

import { Button } from './ui/Button'
import Image from 'next/image'
import { StaggerChildren } from './animations/StaggerChildren'
import { useRouter } from 'next/navigation'

interface Package {
  id: string
  title: string
  level: string
  duration: string
  price: string | { semiPrivate: string; private: string }
  image: string
  features: string[]
  popular?: boolean
}

const packages: Package[] = [
  {
    id: 'lesson-only',
    title: 'Surf Lessons',
    level: 'FOUNDATION',
    duration: '1.5hr water + 30min land',
    price: { semiPrivate: '500K', private: '700K' },

    image: '/images/courses/intermediate.jpg',
    features: [
      'Equipment included',
      'Safety briefing',
      'Skill progression',
      'Best spot selection'
    ]
  },
  {
    id: 'lesson-video',
    title: 'Lesson + Video Analysis',
    level: 'PERFORMANCE',
    duration: '1.5hr water + 30min land + video analysis',
    price: { semiPrivate: '600K', private: '900K' },

    image: '/images/courses/advanced.jpg',
    features: [
      'HD video capture & analysis',
      'Technical video feedback',
      'Keep all videos & images',
      'Equipment included'
    ],
    popular: true
  },
  {
    id: 'guiding',
    title: 'Surf Guiding',
    level: 'EXPLORATION',
    duration: 'Custom session length',
    price: '500K',

    image: '/images/courses/beginner.jpg',
    features: [
      'Reef knowledge',
      'Spot selection',
      'Video option (+200K)',
      'Equipment NOT included'
    ]
  }
]

export default function PricingSection() {
  const router = useRouter()

  const handleBookPackage = (pkgId: string) => {
    const packageName = packages.find(p => p.id === pkgId)?.title || 'surf lesson'
    const whatsappUrl = `https://wa.me/6281999885826?text=${encodeURIComponent(`Hi Scotty Dex! I'd like to book a ${packageName}. Can you help me with availability and pricing?`)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="pricing" className="section-spacing bg-carbon">
      <div className="container mx-auto px-4">
        <StaggerChildren className="space-y-16">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <span className="chip">Programs</span>
              <h2 className="text-heading-1">Choose Your Path</h2>
            </div>
            <p className="max-w-2xl text-body text-neutral-400 leading-relaxed">
              Three focused approaches. From foundation building to performance analysis to reef exploration.
              Each designed around Uluwatu conditions and your progression goals.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`surface-panel flex flex-col overflow-hidden border border-white/8 ${pkg.popular ? 'ring-1 ring-white/40' : ''
                  }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                      {pkg.level}
                    </span>
                  </div>
                  {pkg.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-black bg-white px-3 py-1 rounded-md">
                        Most Popular
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="space-y-6 mb-8">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{pkg.title}</h3>
                      <p className="text-sm text-neutral-500 uppercase tracking-wide">{pkg.duration}</p>
                    </div>

                    <div className="space-y-3">
                      {typeof pkg.price === 'object' ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/10">
                            <Users className="h-4 w-4 text-white/80" />
                            <span className="text-sm text-neutral-300">Semi-Private</span>
                            <span className="ml-auto text-lg font-bold text-white">{pkg.price.semiPrivate}</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/10">
                            <User className="h-4 w-4 text-white/80" />
                            <span className="text-sm text-neutral-300">Private</span>
                            <span className="ml-auto text-lg font-bold text-white">{pkg.price.private}</span>
                          </div>
                          <p className="text-xs text-neutral-500 text-center">IDR</p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-2xl font-bold text-white tracking-tight">{pkg.price}</p>
                          <p className="text-xs text-neutral-500">IDR per person</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-neutral-300">
                        <Check className="mt-0.5 h-3.5 w-3.5 text-white/80 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button size="md" onClick={() => handleBookPackage(pkg.id)} className="w-full">
                    Book Now
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="surface-panel px-8 py-10 text-center space-y-6">
            <h3 className="text-heading-2">Every Package Includes</h3>
            <div className="grid gap-4 md:grid-cols-2 text-body text-neutral-300">
              {["Personal coaching with Scotty Dex", "All surf equipment provided", "Location based on conditions & skill level", "Break explanation at start of each session"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-3">
                  <Check className="h-5 w-5 text-white/70" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-body-sm text-neutral-500">
              <p>Payment on the day · Cash only · No deposit or cancellation fee</p>
              <p>Cancellations or rescheduling: 2 hours notice required</p>
              <p><strong>Note:</strong> Guiding prices do not include board rental</p>
            </div>
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}
