'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { StaggerChildren } from './animations/StaggerChildren'

interface Testimonial {
  id: string
  name: string
  rating: number
  text: string
  date: string
  reviewLink?: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Brittany Wang',
    rating: 5,
    text: 'As an unexperienced, first time surfer in Bali, to surfing consistently for the past year with Scotty from Uluwatu Surf School, I can confidently guarantee that his strong determination, teaching abilities, and 30 years of experience will transform your surfing journey. His patience and expertise make every session both challenging and enjoyable.',
    date: '2 weeks ago',
    reviewLink: 'https://www.google.com/maps/contrib/118373111466654364692/reviews'
  },
  {
    id: '2',
    name: 'Andy Walker',
    rating: 5,
    text: 'Scotty is a straight up all round good dude, good surfer, fantastic guide, all round good guy. I had some very memorable sessions surfing with him. Days and waves I will never forget. Highly recommend.',
    date: '2 weeks ago',
    reviewLink: 'https://www.google.com/maps/contrib/113566666398213128055/reviews'
  },
  {
    id: '3',
    name: 'Asher Rous',
    rating: 5,
    text: 'This was my first time ever surfing, and I was so lucky to have Scotty as my instructor. He was patient, explained everything clearly, and made sure I felt comfortable in the water. By the end, I caught more than a couple of waves and left feeling confident and excited to surf again. I can\'t wait to come back and train with Scotty!',
    date: '2 weeks ago',
    reviewLink: 'https://www.google.com/maps/contrib/110311365983667116152/reviews'
  },
  {
    id: '4',
    name: 'alice friant',
    rating: 5,
    text: 'Scotty isn\'t just a surf teacher, he\'s a true legend of Uluwatu. His style in the water is unmistakable, and locals recognize him the moment he paddles out. Learning from him means you\'re getting tips from someone who truly knows the waves here inside out. His advice is precise, encouraging, and always delivered with a laid-back vibe that makes you feel confident and safe.',
    date: '4 days ago'
  },
  {
    id: '5',
    name: 'Jake Thompson',
    rating: 5,
    text: 'Amazing experience! The instructors are so professional and know exactly how to read the waves. They took us to the perfect spot with great conditions and few people in the water. Made such good progress in just one lesson.',
    date: '2 weeks ago'
  },
  {
    id: '6',
    name: 'Emma Rodriguez',
    rating: 5,
    text: 'I can\'t recommend Uluwatu Surf School highly enough! As a complete beginner, I was nervous but the instructor made me feel so safe and supported. The theoretical lesson on the sand was super helpful before getting in the water.',
    date: '3 weeks ago'
  },
  {
    id: '7',
    name: 'Alex Chen',
    rating: 5,
    text: 'Exceptional instruction and perfect location! The instructor was very observant and gave great feedback to help me improve my technique. They really care about your progress and make the whole experience so much fun.',
    date: '1 month ago'
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
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Handle swipe gestures
  const handleSwipe = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left' 
      ? (currentIndex + 1) % testimonials.length
      : (currentIndex - 1 + testimonials.length) % testimonials.length
    setCurrentIndex(newIndex)
    setAutoPlay(false) // Stop auto-play on user interaction
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleSwipe('left')
    } else if (isRightSwipe) {
      handleSwipe('right')
    }
  }

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

          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className="space-y-6 group">
                <div className="space-y-4">
                  {renderStars(testimonial.rating)}
                  <blockquote className="text-xl lg:text-2xl text-white font-light leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <div className="flex-1">
                    <p className="text-lg font-medium text-white">{testimonial.name}</p>
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-neutral-400">{testimonial.date}</p>
                      {testimonial.reviewLink && (
                        <a
                          href={testimonial.reviewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-400 hover:text-blue-300 underline"
                        >
                          View on Google
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="md:hidden space-y-8">
            <article 
              className="space-y-6"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="space-y-4">
                {renderStars(testimonials[currentIndex].rating)}
                <blockquote className="text-lg text-white font-light leading-relaxed">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/8">
                <div className="flex-1">
                  <p className="text-base font-medium text-white">{testimonials[currentIndex].name}</p>
                  <div className="flex items-center gap-3">
                    <p className="text-sm text-neutral-400">{testimonials[currentIndex].date}</p>
                    {testimonials[currentIndex].reviewLink && (
                      <a
                        href={testimonials[currentIndex].reviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:text-blue-300 underline"
                      >
                        View on Google
                      </a>
                    )}
                  </div>
                </div>
              </div>
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
