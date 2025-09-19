'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { StaggerChildren } from './animations/StaggerChildren'

interface Testimonial {
  id: string
  name: string
  location: string
  image: string
  rating: number
  text: string
  course: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Australia',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'Amazing experience! Made and his team helped me catch my first wave ever. The instructors are so patient and knowledgeable about the local conditions.',
    course: 'Wave Rider (Beginner)'
  },
  {
    id: '2', 
    name: 'Marcus Schmidt',
    location: 'Germany',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'Best surf school in Bali! The intermediate course really pushed my skills to the next level. Uluwatu is incredible and these guys know every spot.',
    course: 'Ocean Explorer (Intermediate)'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    location: 'UK',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'Incredible journey from complete beginner to confidently surfing Uluwatu! The safety standards are top-notch and the vibes are amazing.',
    course: 'Wave Rider (Beginner)'
  },
  {
    id: '4',
    name: 'Jake Morrison',
    location: 'USA',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'The advanced course was exactly what I needed to take on bigger waves. Wayan\'s coaching on barrel technique was game-changing!',
    course: 'Uluwatu Master (Advanced)'
  },
  {
    id: '5',
    name: 'Lisa Chen',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'Such a professional and fun team! They made me feel safe while challenging me to improve. The video analysis really helped my technique.',
    course: 'Ocean Explorer (Intermediate)'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-black fill-black' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="py-20 bg-gray-50">

      <div className="container mx-auto px-4 relative">
        <StaggerChildren>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what surfers from around the world 
              say about their experience with Uluwatu Surf School.
            </p>
          </div>

          {/* Desktop: 3 Column Grid with Featured */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ${
                    index === 1 ? 'md:scale-105 ring-2 ring-black' : ''
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover grayscale contrast-110"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  <div className="text-sm text-black font-medium">
                    {testimonial.course}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional testimonials in 2 columns */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.slice(3, 5).map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover grayscale contrast-110"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  <div className="text-sm text-black font-medium">
                    {testimonial.course}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-black">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>
                
                <div className="text-sm text-black font-medium">
                  {testimonials[currentIndex].course}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-black' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-gray-50 text-black px-4 py-2 rounded-full border border-gray-200">
              <Star className="w-5 h-5 text-black fill-black mr-2" />
              <span className="font-semibold">4.9/5 Average Rating from 500+ Reviews</span>
            </div>
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}