'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Button } from './ui/Button'
import { StaggerChildren } from './animations/StaggerChildren'

interface Package {
  id: string
  title: string
  level: string
  duration: string
  price: string
  originalPrice?: string
  image: string
  features: string[]
  popular?: boolean
}

const packages: Package[] = [
  {
    id: 'beginner',
    title: 'Beginner Package',
    level: 'Perfect for First-Timers',
    duration: '2 Hours',
    price: 'IDR 400K',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=-100&con=25',
    features: [
      'Beach safety briefing',
      'Basic wave theory', 
      'Pop-up technique training',
      'First wave experience',
      'All equipment included',
      'Professional photos'
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Package',
    level: 'Ready for the Reef',
    duration: '2.5 Hours',
    price: 'IDR 500K',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=-100&con=30',
    features: [
      'Advanced positioning',
      'Turn technique mastery',
      'Paddle power development',
      'Reef break introduction',
      'Video analysis session',
      'Action shots included'
    ],
    popular: true
  },
  {
    id: 'advanced',
    title: 'Uluwatu Master',
    level: 'Conquer the Temple',
    duration: '3 Hours',
    price: 'IDR 700K',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=-100&con=35',
    features: [
      'Secret Uluwatu spots',
      'Barrel riding technique',
      'Competition coaching',
      'Mental performance training',
      'Pro photography session',
      'Personalized feedback'
    ]
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <StaggerChildren>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Pricing &amp; Packages
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Choose the perfect surf coaching package for your level. All sessions include 
              personalized instruction with Scoot at Uluwatu&apos;s world-class breaks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                  pkg.popular ? 'ring-2 ring-black scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale contrast-125"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-black px-2 py-1 rounded text-sm font-medium">
                      {pkg.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-black">
                      {pkg.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-black">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-gray-600">
                        {pkg.duration}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="w-4 h-4 text-black mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" variant={pkg.popular ? 'primary' : 'outline'}>
                    Book {pkg.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
              <h3 className="text-2xl font-bold text-black mb-4">All Packages Include</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Personal coaching with Scoot</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Premium surfboard &amp; wetsuit</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Transportation to surf spot</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Post-session feedback</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                <strong>Payment:</strong> Cash only • No deposits required • 2-hour cancellation policy
              </p>
            </div>
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}