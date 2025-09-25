'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Check } from 'lucide-react'
import { Button } from './ui/Button'
import { StaggerChildren } from './animations/StaggerChildren'

interface Package {
  id: string
  title: string
  level: string
  duration: string
  price: string
  image: string
  features: string[]
  popular?: boolean
}

const packages: Package[] = [
  {
    id: 'beginner',
    title: 'Foundation Session',
    level: 'Beginner Progression',
    duration: '2 Hours • Land + Water',
    price: 'IDR 400K',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Structured safety briefing + reef orientation',
      'Board control and pop-up mechanics',
      'Guided whitewash to shoulder transition',
      'Premium boards + equipment included'
    ]
  },
  {
    id: 'intermediate',
    title: 'Reef Performance',
    level: 'Intermediate Refinement',
    duration: '2.5 Hours • Video Review',
    price: 'IDR 500K',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Wave selection + positioning drills',
      'On-wave communication and tactical feedback',
      'High-res video breakdown with progression map',
      'Performance tracking notes after session'
    ],
    popular: true
  },
  {
    id: 'advanced',
    title: 'Temple Mastery',
    level: 'Advanced Execution',
    duration: '3 Hours • Performance Lab',
    price: 'IDR 700K',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Secret tide windows + reef tactics',
      'Critical section management + barrel entry',
      'Heat strategy, line analysis, and playback',
      'Pro photography deliverables'
    ]
  }
]

export default function PricingSection() {
  const router = useRouter()

  const handleBookPackage = (pkgId: string) => {
    router.push(`/book?package=${pkgId}`)
  }

  return (
    <section id="pricing" className="section-spacing bg-carbon">
      <div className="container mx-auto px-4">
        <StaggerChildren className="space-y-16">
          <div className="flex flex-col items-center text-center space-y-6">
            <span className="chip">Programs</span>
            <h2 className="text-heading-1">Precision Built Packages</h2>
            <p className="max-w-3xl text-body-lg text-neutral-300">
              Modular coaching designed for measurable progression. Each program balances safety discipline, 
              reef intelligence, and technical analysis so you exit every session with tangible next steps.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`surface-panel flex flex-col overflow-hidden border border-white/8 ${
                  pkg.popular ? 'ring-1 ring-white/40' : ''
                }`}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover opacity-80 transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/85" />
                  <div className="absolute bottom-5 left-6">
                    <span className="tag-outline">{pkg.level}</span>
                  </div>
                  {pkg.popular && (
                    <div className="absolute top-5 right-6">
                      <span className="inline-flex items-center border border-white/20 bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-neutral-200 rounded-full">
                        Most Booked
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-8 p-8">
                  <div className="space-y-3">
                    <h3 className="text-heading-2">{pkg.title}</h3>
                    <p className="text-body-sm">{pkg.duration}</p>
                    <p className="text-3xl font-semibold tracking-[0.18em] text-white">{pkg.price}</p>
                  </div>

                  <ul className="space-y-4 text-body">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-neutral-300">
                        <Check className="mt-1 h-4 w-4 text-white/70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button size="md" onClick={() => handleBookPackage(pkg.id)}>
                    Book This Program
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="surface-panel px-8 py-10 text-center space-y-6">
            <h3 className="text-heading-2">Every Package Includes</h3>
            <div className="grid gap-4 md:grid-cols-2 text-body text-neutral-300">
              {["Personal coaching with Scoot","Premium quiver & safety equipment","Condition-based reef selection","Post-session notes & next steps"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-3">
                  <Check className="h-5 w-5 text-white/70" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-body-sm text-neutral-500">
              Payment on the day · Cash only · Flexible reschedule with two hours notice
            </p>
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}
