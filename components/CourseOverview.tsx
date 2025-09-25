'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Button } from './ui/Button'
import { StaggerChildren } from './animations/StaggerChildren'

interface Course {
  id: string
  title: string
  level: string
  duration: string
  price: string
  image: string
  features: string[]
  popular?: boolean
}

const courses: Course[] = [
  {
    id: 'beginner',
    title: 'Wave Rider',
    level: 'Beginner',
    duration: '5 Days',
    price: '$299',
    image: '/images/courses/beginner.jpg',
    features: [
      'Beach safety & theory',
      'Wave reading basics', 
      'Pop-up technique',
      'First wave catches',
      'Equipment included'
    ]
  },
  {
    id: 'intermediate',
    title: 'Ocean Explorer',
    level: 'Intermediate',
    duration: '3 Days',
    price: '$249',
    image: '/images/courses/intermediate.jpg',
    features: [
      'Advanced positioning',
      'Turn techniques',
      'Paddle power training',
      'Reef break experience',
      'Video analysis'
    ],
    popular: true
  },
  {
    id: 'advanced',
    title: 'Uluwatu Master',
    level: 'Advanced',
    duration: '2 Days',
    price: '$199',
    image: '/images/courses/advanced.jpg',
    features: [
      'Uluwatu secret spots',
      'Barrel riding',
      'Competition prep',
      'Mental coaching',
      'Pro photographer'
    ]
  }
]

export default function CourseOverview() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <StaggerChildren>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Find Your Perfect Wave
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Whether you&apos;re catching your first wave or perfecting your barrel technique, 
              we have the perfect course for your skill level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={course.id}
                className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                  course.popular ? 'ring-2 ring-black scale-105' : ''
                }`}
              >
                {course.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale contrast-125"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-black px-2 py-1 rounded text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-black">
                      {course.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-black">
                        {course.price}
                      </div>
                      <div className="text-sm text-gray-600">
                        {course.duration}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="w-4 h-4 text-black mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" variant={course.popular ? 'primary' : 'outline'}>
                    Book {course.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6">
              Not sure which course is right for you? Let us help you choose.
            </p>
            <Button variant="outline" size="lg">
              Get Free Consultation
            </Button>
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}