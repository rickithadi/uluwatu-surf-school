'use client'

import { useEffect, useState } from 'react'

import { Button } from './ui/Button'
import Image from 'next/image'
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
          <source src="
          /images/scootAssets/GOPR3236.MOV
          " type="video/mp4" />
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
            {/* Logo Display */}
            <div className="mb-12">
              <div className="w-24 h-24 mx-auto mb-6">
                <Image
                  src="/images/logo.jpg"
                  alt="Uluwatu Surf School"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            <h1 className="text-display-1 text-white mb-8">
              Uluwatu Surf School
              <span className="block text-white text-display-2 font-light mt-3">
                with Scoot
              </span>
            </h1>

            <p className="text-body-lg text-white/90 mb-12 max-w-3xl mx-auto">
              Master the legendary waves of Uluwatu with Bali&apos;s premier surf instructor.
              Professional coaching for all levels in paradise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="min-w-[200px]"
                onClick={() => {
                  const element = document.getElementById('book')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Book Your Session
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px] border-white text-white hover:bg-white hover:text-black"
                onClick={() => {
                  const element = document.getElementById('pricing')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                View Pricing
              </Button>
            </div>
          </StaggerChildren>
        </div>
      </div>



      {/* Stats Overlay */}
      <div className="absolute bottom-12 left-4 right-4 md:left-8 md:right-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <div className="grid grid-cols-3 gap-6 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-light mb-2">15+</div>
              <div className="text-sm md:text-base text-white/80 font-normal">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light mb-2">2000+</div>
              <div className="text-sm md:text-base text-white/80 font-normal">Students Taught</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light mb-2">5★</div>
              <div className="text-sm md:text-base text-white/80 font-normal">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
