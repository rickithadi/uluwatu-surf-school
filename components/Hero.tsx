'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from './ui/Button'
import { StaggerChildren } from './animations/StaggerChildren'

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/videos/hero-surf.mp4" type="video/mp4" />
        </video>
        {/* Fallback background image */}
        <Image
          src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&sat=-100&con=20"
          alt="Dramatic black and white surf break at Uluwatu"
          fill
          className="object-cover grayscale contrast-125"
          priority
          sizes="100vw"
        />
        {/* Overlay - darker for dramatic effect */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <StaggerChildren>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Master the Waves
              <span className="block text-white">
                at Uluwatu
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience world-class surf coaching at Bali&apos;s most iconic break. 
              From beginner to pro, we&apos;ll guide your surfing journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="min-w-[200px]">
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="min-w-[200px] border-white text-white hover:bg-white hover:text-black"
              >
                ▶ Watch Video
              </Button>
            </div>
          </StaggerChildren>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-20 left-4 right-4 md:left-8 md:right-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
          <div className="grid grid-cols-3 gap-4 text-center text-white">
            <div>
              <div className="text-2xl md:text-3xl font-bold">15+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">2000+</div>
              <div className="text-sm text-white/80">Students Taught</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">5★</div>
              <div className="text-sm text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}