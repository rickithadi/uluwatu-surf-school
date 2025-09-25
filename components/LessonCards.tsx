'use client'

import { Users, Camera, Map } from 'lucide-react'
import { FadeIn, ScaleIn, StaggerChildren } from './animations'

const lessons = [
  {
    id: 'lesson-only',
    icon: Users,
    title: 'Option 1 — Lesson Only',
    description: '1.5 hours in-water plus structured land drills for foundational mechanics and safety briefings.',
    features: [
      'Focus on entry, stance, and trimming fundamentals',
      'All boards and safety gear provided',
      'Reef walkthrough + safe exit plans'
    ],
    prices: {
      private: 'IDR 700K',
      semiPrivate: 'IDR 500K'
    }
  },
  {
    id: 'lesson-video',
    icon: Camera,
    title: 'Option 2 — Lesson + Video Analysis',
    description: 'Video capture throughout session with detailed post-surf breakdown and technical corrections.',
    features: [
      '4K capture from cliff + water level',
      'Session notes delivered post review',
      'Refined action plan for next surf'
    ],
    prices: {
      private: 'IDR 800K',
      semiPrivate: 'IDR 600K'
    }
  },
  {
    id: 'guiding',
    icon: Map,
    title: 'Option 3 — Guiding',
    description: 'Experienced surfers led through optimal tides, entry points, and lineup positioning. Coaching optional.',
    features: [
      'Condition-based spot selection',
      'Briefing on currents + hazards',
      'Optional video add-on (+IDR 200K)'
    ],
    price: 'IDR 500K',
    note: 'Per surfer, per session. Boards not included.'
  }
]

export default function LessonCards() {
  const handleBookLesson = (lessonTitle: string) => {
    const message = `Hi Scotty Dex! I'd like to book a ${lessonTitle}. Can you help me with availability and pricing?`
    const whatsappUrl = `https://wa.me/6281999885826?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }
  return (
    <section className="section-spacing bg-carbon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.2} className="text-center space-y-6 mb-20">
          <span className="chip">Lesson Options</span>
          <h2 className="text-heading-1">Structured Pathways</h2>
          <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
            Select the format that aligns with your current goals. Each option integrates safety, progression discipline, and clear feedback loops.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {lessons.map((lesson, index) => {
            const IconComponent = lesson.icon
            return (
              <ScaleIn
                key={lesson.id}
                delay={0.4 + index * 0.2}
                className="surface-panel border border-white/12 h-full flex flex-col"
              >
                <div className="space-y-5 p-8 flex-1">
                  <div className="inline-flex items-center gap-3 border border-white/15 rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/70">
                    <IconComponent className="h-4 w-4" />
                    {lesson.title}
                  </div>
                  <p className="text-body text-neutral-300">{lesson.description}</p>
                  <div className="space-y-3 text-neutral-300">
                    {lesson.features.map((feature) => (
                      <div key={feature} className="flex gap-3">
                        <span className="h-1 w-8 bg-white/40 mt-3" />
                        <p className="text-body">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 px-8 py-6 space-y-4">
                  {lesson.prices ? (
                    <div className="space-y-3 text-body-sm text-neutral-400">
                      <div className="flex items-center justify-between">
                        <span>Private</span>
                        <span className="text-white text-body">{lesson.prices.private}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Semi-private</span>
                        <span className="text-white text-body">{lesson.prices.semiPrivate}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-body text-white">{lesson.price}</p>
                  )}

                  {lesson.note && (
                    <p className="text-body-sm text-neutral-500 uppercase tracking-[0.16em]">{lesson.note}</p>
                  )}

                  <button
                    onClick={() => handleBookLesson(lesson.title)}
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition"
                  >
                    Book Now
                  </button>
                </div>
              </ScaleIn>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
