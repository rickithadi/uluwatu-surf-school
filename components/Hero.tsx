'use client'

import Link from 'next/link'
import { Play, Instagram, Waves } from 'lucide-react'
import { FadeIn, FloatingElement } from './animations'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-ocean-600/30 via-charcoal/20 to-deep-ocean-800/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-20000 hover:scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
        }}
      ></div>
      
      {/* Animated wave elements */}
      <div className="absolute inset-0 z-15">
        <FloatingElement className="absolute top-20 left-10" amplitude={15} duration={4}>
          <Waves className="h-8 w-8 text-white/20" />
        </FloatingElement>
        <FloatingElement className="absolute top-32 right-16" amplitude={12} duration={5} delay={1}>
          <Waves className="h-6 w-6 text-white/15" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-40 left-1/4" amplitude={10} duration={6} delay={2}>
          <Waves className="h-5 w-5 text-white/10" />
        </FloatingElement>
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
        <FadeIn delay={0.2} direction="up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight mb-6 tracking-wider leading-none">
            Welcome to{' '}
            <span className="block font-serif font-light text-ocean-mist">
              Uluwatu Surf School
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-light text-sunset/90 block mt-2">
              Bali
            </span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.6} direction="up">
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">
            Professional surf instruction in the heart of Uluwatu's legendary breaks
          </p>
        </FadeIn>
        
        <FadeIn delay={1.0} direction="up">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/book"
              className="group relative overflow-hidden bg-deep-ocean-600 hover:bg-deep-ocean-700 text-white px-10 py-5 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Book Your Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-deep-ocean-500 to-deep-ocean-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/lessons"
              className="group flex items-center space-x-3 border-2 border-white/80 hover:border-white text-white px-10 py-5 font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg rounded-full transform hover:scale-105"
            >
              <span>Explore Lessons</span>
              <Play className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </FadeIn>
      </div>


      {/* Instagram Handles - Bottom Right */}
      <FadeIn delay={1.6} direction="right" className="absolute bottom-8 right-8 z-20">
        <div className="space-y-3">
          <Link 
            href="https://instagram.com/uluwatusurfschool_official"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-black/30 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 hover:bg-black/40 transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="h-5 w-5 text-coral group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium">@uluwatusurfschool_official</span>
          </Link>
          <Link 
            href="https://instagram.com/scotty_dex"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-black/30 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 hover:bg-black/40 transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="h-5 w-5 text-coral group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium">@scotty_dex</span>
          </Link>
        </div>
      </FadeIn>
    </section>
  )
}