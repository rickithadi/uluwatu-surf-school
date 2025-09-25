'use client'

import { useState } from 'react'
import Image from 'next/image'
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'The ocean is our teacher, I’m just here to translate.',
    certifications: ['ISA Level 2', 'Water Safety', 'First Aid']
  },
  {
    id: 'kadek',
    name: 'Kadek Suryana',
    experience: '12+ years',
    specialties: ['Advanced Technique', 'Competition Prep', 'Barrel Riding'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'Every wave is a chance to express yourself.',
    certifications: ['ISA Level 3', 'Surf Coach Australia', 'Lifeguard']
  },
  {
    id: 'wayan',
    name: 'Wayan Sukerta',
    experience: '18+ years',
    specialties: ['Big Wave Preparation', 'Mental Coaching', 'Photography'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    quote: 'Respect the ocean, and it will respect you back.',
    certifications: ['ISA Level 3', 'Big Wave Safety', 'Rescue Specialist']
  },
  {
    id: 'putu',
    name: 'Putu Mahendra',
    experience: '10+ years',
    specialties: ['Youth Coaching', 'Surf Therapy', 'Equipment Specialist'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote: 'Surfing is not just a sport, it’s a way of life.',
    certifications: ['ISA Level 2', 'Youth Development', 'Surf Therapy']
  }
]

export default function InstructorProfiles() {
  const [activeInstructor, setActiveInstructor] = useState(0)

  return (
    <section id="instructors" className="section-spacing bg-carbon">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerChildren className="space-y-16">
          <div className="text-center space-y-6">
            <span className="chip">Team</span>
            <h2 className="text-heading-1">Instructor Bench</h2>
            <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
              A small, disciplined group of coaches rotating across sessions. Each brings verified credentials and deep reef fluency.
            </p>
          </div>

          <div className="md:hidden space-y-6">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="surface-panel border border-white/10 p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover "
                  />
                  <div>
                    <h3 className="text-heading-3 text-white">{instructor.name}</h3>
                    <p className="text-body-sm text-neutral-400">{instructor.experience}</p>
                  </div>
                </div>
                <p className="text-body text-neutral-300">“{instructor.quote}”</p>
                <div className="flex flex-wrap gap-2">
                  {instructor.specialties.map((specialty) => (
                    <span key={specialty} className="border border-white/15 px-3 py-1 rounded-full text-xs uppercase tracking-[0.16em] text-neutral-300">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block space-y-10">
            <div className="grid grid-cols-4 gap-4">
              {instructors.map((instructor, index) => (
                <button
                  key={instructor.id}
                  type="button"
                  onClick={() => setActiveInstructor(index)}
                  className={`surface-panel border border-white/10 py-6 flex flex-col items-center gap-3 transition ${
                    activeInstructor === index ? 'border-white/40' : 'hover:border-white/25'
                  }`}
                >
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover "
                  />
                  <span className="text-body text-white">{instructor.name.split(' ')[0]}</span>
                  <span className="text-body-sm text-neutral-500">{instructor.experience}</span>
                </button>
              ))}
            </div>

            <div className="surface-panel border border-white/10 p-10 grid grid-cols-1 md:grid-cols-[0.35fr,1fr] gap-10 items-center">
              <div className="text-center md:text-left space-y-4">
                <Image
                  src={instructors[activeInstructor].image}
                  alt={instructors[activeInstructor].name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover  mx-auto md:mx-0"
                />
                <div>
                  <h3 className="text-heading-2 text-white">{instructors[activeInstructor].name}</h3>
                  <p className="text-body-sm text-neutral-400">{instructors[activeInstructor].experience}</p>
                </div>
              </div>

              <div className="space-y-6">
                <blockquote className="text-body-lg text-neutral-300">“{instructors[activeInstructor].quote}”</blockquote>

                <div>
                  <h4 className="text-body-sm text-neutral-500 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructors[activeInstructor].specialties.map((specialty) => (
                      <span key={specialty} className="border border-white/15 px-3 py-1 rounded-full text-xs uppercase tracking-[0.16em] text-neutral-300">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-body-sm text-neutral-500 mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructors[activeInstructor].certifications.map((cert) => (
                      <span key={cert} className="border border-white/15 px-3 py-1 rounded-full text-xs uppercase tracking-[0.16em] text-neutral-400">
                        {cert}
                      </span>
                    ))}
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
