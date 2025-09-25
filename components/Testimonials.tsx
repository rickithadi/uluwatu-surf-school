'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { StaggerChildren } from './animations/StaggerChildren'

interface Testimonial {
  id: string
  name: string
  image: string
  rating: number
  text: string
  date: string
  ownerResponse?: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Hadi Rickit',
    image: '/images/testimonials/hadi-rickit.jpg',
    rating: 5,
    text: 'Beautiful and capable surf instruction delivered with lots of care and professionalism. This is a wonderful and authentic surf school that really cares about you and your progress. Would fully recommend.',
    date: '2 weeks ago'
  },
  {
    id: '2',
    name: 'Brittany Wang',
    image: '/images/testimonials/brittany-wang.jpg',
    rating: 5,
    text: 'As a first time surfer, I can\'t speak highly enough of my experience. I went from being terrified of the ocean to confidently catching waves and having so much fun. The instructors were patient, encouraging, and made sure I felt safe at all times.',
    date: '2 weeks ago'
  },
  {
    id: '3',
    name: 'Yavar Parili',
    image: '/images/testimonials/yavar-parili.jpg',
    rating: 5,
    text: 'Excellent communication from the start. They were very responsive and accommodating to our schedule. The lesson was personalized to our skill level and the instructor provided great feedback throughout.',
    date: '2 weeks ago'
  },
  {
    id: '4',
    name: 'M S',
    image: '/images/testimonials/m-s.jpg',
    rating: 5,
    text: 'Big thank you! Was a complete beginner and the instructors made me feel confident and safe in the water. Amazing experience and would definitely recommend to anyone looking to learn surfing.',
    date: '2 weeks ago'
  }
]

const renderStars = (rating: number) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, idx) => (
      <Star key={idx} className={`h-4 w-4 ${idx < rating ? 'text-white fill-white' : 'text-white/20'}`} />
    ))}
  </div>
)

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoPlay])

  return (
    <section className="section-spacing bg-carbon">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerChildren className="space-y-16">
          <div className="text-center space-y-6">
            <span className="chip">What Surfers Say</span>
            <h2 className="text-heading-1">Surfers On Record</h2>
            <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
              Quiet validation from surfers who trained with us. Consistency, safety, and measured improvement are the benchmarks.
            </p>
          </div>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className="surface-panel border border-white/12 p-6 space-y-4 group hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-body text-white">{testimonial.name}</p>
                    <p className="text-body-sm text-neutral-500">{testimonial.date}</p>
                  </div>
                </div>
                {renderStars(testimonial.rating)}
                <p className="text-body-sm text-neutral-300 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              </article>
            ))}
          </div>

          <div className="md:hidden space-y-6">
            <article className="surface-panel border border-white/12 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-body text-white">{testimonials[currentIndex].name}</p>
                  <p className="text-body-sm text-neutral-500">{testimonials[currentIndex].date}</p>
                </div>
              </div>
              {renderStars(testimonials[currentIndex].rating)}
              <p className="text-body-sm text-neutral-300 leading-relaxed">&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
            </article>

            <div className="flex justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`h-2 w-6 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/20'}`}
                  onClick={() => {
                    setCurrentIndex(idx)
                    setAutoPlay(false)
                  }}
                />
              ))}
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm text-neutral-300">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              </div>
              <span className="text-white">5.0 on Google Reviews</span>
            </div>
            <p className="text-body-sm text-neutral-400">
              Based on authentic reviews from our surfing community
            </p>
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}
