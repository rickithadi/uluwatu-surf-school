import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { Instagram, MapPin, Award, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Scotty - 15 Years Uluwatu Surf Expertise',
  description: 'Meet Scotty, ISA certified surf instructor with 15+ years local knowledge of Uluwatu and Bali reef breaks. Professional surf coaching with traditional expertise and modern video analysis technology.',
  keywords: ['scotty surf instructor', 'uluwatu surf expert', 'ISA certified instructor', 'bali surf coach', 'reef break specialist', 'professional surf instructor', 'uluwatu local knowledge'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Scotty - 15 Years Uluwatu Surf Expertise',
    description: 'Meet Scotty, ISA certified surf instructor with 15+ years local knowledge of Uluwatu and Bali reef breaks.',
    url: '/about',
    type: 'profile',
    images: ['/og-about-scotty.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Scotty - 15 Years Uluwatu Surf Expertise',
    description: 'Meet Scotty, ISA certified surf instructor with 15+ years local knowledge of Uluwatu and Bali reef breaks.',
    images: ['/og-about-scotty.jpg'],
  },
}

export default function About() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <Breadcrumb items={[{ label: 'About Scotty' }]} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-clean-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-charcoal mb-6">
              About Scotty
            </h1>
            <p className="text-xl text-storm-gray max-w-2xl mx-auto">
              Professional surf instruction through local expertise and modern methodology
            </p>
          </div>
        </div>
      </section>

      {/* Scotty's Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-light text-charcoal">
                15 Years of Local Knowledge
              </h2>
              
              <div className="space-y-6 text-storm-gray leading-relaxed">
                <p>
                  Scotty moved to Uluwatu in 2009, drawn by the consistency and power 
                  of the Bukit Peninsula&rsquo;s reef breaks. What started as a personal 
                  surfing journey evolved into a deep understanding of Bali&rsquo;s most 
                  technical waves.
                </p>
                
                <p>
                  After years of studying the reef, tides, and seasonal patterns, 
                  Scotty began teaching other surfers the nuances that separate 
                  surviving these waves from truly surfing them. His approach 
                  combines traditional local knowledge with video analysis technology.
                </p>
                
                <p>
                  Today, Uluwatu Surf School represents the evolution of surf 
                  instruction—respecting the break&rsquo;s power while using modern 
                  tools to accelerate learning and ensure safety.
                </p>
              </div>

              <Link
                href="https://instagram.com/scotty_dex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-deep-ocean hover:text-blue-800 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-medium">Follow @scotty_dex</span>
              </Link>
            </div>

            <div className="lg:order-first">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gray-200">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-clean-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-charcoal text-center mb-16">
            Professional Credentials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Award className="h-12 w-12 text-deep-ocean mx-auto mb-4" />
              <h3 className="font-semibold text-charcoal mb-2">ISA Certified</h3>
              <p className="text-storm-gray text-sm">
                International Surfing Association Level 2 Instructor
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Clock className="h-12 w-12 text-deep-ocean mx-auto mb-4" />
              <h3 className="font-semibold text-charcoal mb-2">Water Safety</h3>
              <p className="text-storm-gray text-sm">
                Advanced lifeguard and first aid certified
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <MapPin className="h-12 w-12 text-deep-ocean mx-auto mb-4" />
              <h3 className="font-semibold text-charcoal mb-2">Local Expert</h3>
              <p className="text-storm-gray text-sm">
                15+ years surfing Bali&rsquo;s most challenging breaks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-charcoal mb-6">
              Teaching Methodology
            </h2>
            <p className="text-lg text-storm-gray">
              Quality instruction through systematic progression and technical analysis
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  1. Local Knowledge Transfer
                </h3>
                <p className="text-storm-gray">
                  Understanding reef breaks, reading conditions, and positioning 
                  based on years of observing Uluwatu&rsquo;s patterns.
                </p>
              </div>
              <div className="bg-clean-white p-6 rounded-lg">
                <div className="text-sm text-storm-gray">
                  Tide charts, wind analysis, crowd management, safety protocols
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  2. Video Analysis Technology
                </h3>
                <p className="text-storm-gray">
                  Modern coaching tools that provide immediate feedback on 
                  technique, timing, and wave selection.
                </p>
              </div>
              <div className="bg-clean-white p-6 rounded-lg md:order-1">
                <div className="text-sm text-storm-gray">
                  Slow-motion review, technique breakdown, progress tracking
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  3. Systematic Progression
                </h3>
                <p className="text-storm-gray">
                  Building competence through measured steps, not rushing 
                  students beyond their current ability level.
                </p>
              </div>
              <div className="bg-clean-white p-6 rounded-lg">
                <div className="text-sm text-storm-gray">
                  Skill assessment, progressive challenges, safety margins
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}