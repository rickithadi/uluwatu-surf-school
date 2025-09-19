'use client'

import { useState } from 'react'
import { StaggerChildren } from './animations/StaggerChildren'

interface Instructor {
  id: string
  name: string
  experience: string
  specialties: string[]
  image: string
  quote: string
  certifications: string[]
}

const instructors: Instructor[] = [
  {
    id: 'made',
    name: 'Made Wardana',
    experience: '15+ years',
    specialties: ['Beginner Coaching', 'Wave Safety', 'Traditional Balinese Surfing'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&con=25',
    quote: "The ocean is our teacher, I'm just here to translate.",
    certifications: ['ISA Level 2', 'Water Safety', 'First Aid']
  },
  {
    id: 'kadek',
    name: 'Kadek Suryana',
    experience: '12+ years',
    specialties: ['Advanced Technique', 'Competition Prep', 'Barrel Riding'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&con=25',
    quote: "Every wave is a chance to express yourself.",
    certifications: ['ISA Level 3', 'Surf Coach Australia', 'Lifeguard']
  },
  {
    id: 'wayan',
    name: 'Wayan Sukerta',
    experience: '18+ years',
    specialties: ['Big Wave Preparation', 'Mental Coaching', 'Photography'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&con=25',
    quote: "Respect the ocean, and it will respect you back.",
    certifications: ['ISA Level 3', 'Big Wave Safety', 'Rescue Specialist']
  },
  {
    id: 'putu',
    name: 'Putu Mahendra',
    experience: '10+ years',
    specialties: ['Youth Coaching', 'Surf Therapy', 'Equipment Specialist'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&con=25',
    quote: "Surfing is not just a sport, it's a way of life.",
    certifications: ['ISA Level 2', 'Youth Development', 'Surf Therapy']
  }
]

export default function InstructorProfiles() {
  const [activeInstructor, setActiveInstructor] = useState(0)

  return (
    <section id="instructors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <StaggerChildren>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Meet Your 
              <span className="text-black">
                {' '}Instructors
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Learn from the best. Our team of certified professionals brings decades 
              of combined experience and deep local knowledge.
            </p>
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="md:hidden space-y-6">
            {instructors.map((instructor, index) => (
              <div key={instructor.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-black grayscale contrast-110"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-black">{instructor.name}</h3>
                    <p className="text-black font-medium">{instructor.experience}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{instructor.quote}"</p>
                <div className="flex flex-wrap gap-2">
                  {instructor.specialties.map((specialty, idx) => (
                    <span key={idx} className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm border border-gray-200">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Interactive Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-4 mb-8">
              {instructors.map((instructor, index) => (
                <button
                  key={instructor.id}
                  onClick={() => setActiveInstructor(index)}
                  className={`p-4 rounded-xl transition-all duration-300 text-left ${
                    activeInstructor === index 
                      ? 'bg-black text-white shadow-xl' 
                      : 'bg-white border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <img 
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-current grayscale contrast-110"
                  />
                  <h3 className="font-semibold text-center">{instructor.name.split(' ')[0]}</h3>
                  <p className="text-sm text-center opacity-80">{instructor.experience}</p>
                </button>
              ))}
            </div>

            {/* Active Instructor Details */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-left">
                  <img 
                    src={instructors[activeInstructor].image}
                    alt={instructors[activeInstructor].name}
                    className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 mb-4 border-4 border-black grayscale contrast-110"
                  />
                  <h3 className="text-2xl font-bold mb-2 text-black">
                    {instructors[activeInstructor].name}
                  </h3>
                  <p className="text-black text-lg font-medium">
                    {instructors[activeInstructor].experience}
                  </p>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <blockquote className="text-xl italic text-gray-700">
                    &quot;{instructors[activeInstructor].quote}&quot;
                  </blockquote>

                  <div>
                    <h4 className="font-semibold text-black mb-3">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructors[activeInstructor].specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-black text-white px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-black mb-3">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructors[activeInstructor].certifications.map((cert, idx) => (
                        <span key={idx} className="bg-gray-100 text-black border border-gray-200 px-3 py-1 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}