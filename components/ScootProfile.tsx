'use client'

import Image from 'next/image'
import { Award, Users, Calendar, Trophy } from 'lucide-react'
import { Button } from './ui/Button'
import { StaggerChildren } from './animations/StaggerChildren'

const accomplishments = [
  {
    icon: Award,
    title: 'Professional Certification',
    description: 'ISA Level 2 Surf Instructor',
    detail: 'International Surfing Association certified professional'
  },
  {
    icon: Users,
    title: '2000+ Students Taught',
    description: 'Successful surf coaching',
    detail: 'From complete beginners to competitive surfers'
  },
  {
    icon: Calendar,
    title: '15+ Years Experience',
    description: 'Surfing Uluwatu waters',
    detail: 'Deep knowledge of local conditions and breaks'
  },
  {
    icon: Trophy,
    title: 'Local Champion',
    description: 'Competitive achievements',
    detail: 'Multiple local and regional surf competitions'
  }
]

export default function ScootProfile() {
  return (
    <section id="scoot" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <StaggerChildren>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Meet Scoot
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Your head instructor and guide to mastering Uluwatu&apos;s legendary waves
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=-20&con=15"
                  alt="Scoot - Head Surf Instructor"
                  fill
                  className="object-cover grayscale contrast-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-black text-white rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">5★</div>
                  <div className="text-sm text-white/80">Average Rating</div>
                  <div className="text-xs text-white/60 mt-1">500+ Reviews</div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-black mb-4">
                  Professional Surf Instructor &amp; Local Expert
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Born and raised in Bali, Scoot has been surfing the waters around Uluwatu for over 15 years. 
                  His deep understanding of local conditions, combined with proven teaching methods, makes him 
                  the perfect guide for your surfing journey.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you&apos;re catching your first wave or perfecting your technique on the reef, 
                  Scoot&apos;s patient approach and expert knowledge will accelerate your progress while 
                  keeping you safe in the water.
                </p>
              </div>

              {/* Accomplishments Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {accomplishments.map((achievement, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-black rounded-lg p-2 flex-shrink-0">
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-black text-sm">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {achievement.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Video Analysis & Land Coaching */}
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Video Analysis &amp; Land Coaching</h4>
                <p className="text-white/90 mb-4">
                  Improve faster with detailed video analysis of your surfing technique. 
                  Scoot provides personalized feedback and land-based coaching to perfect your form.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-white/10 rounded-lg p-3">
                    <div className="text-sm font-semibold">On-Water Recording</div>
                    <div className="text-xs text-white/80">Professional surf footage</div>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-lg p-3">
                    <div className="text-sm font-semibold">Technique Analysis</div>
                    <div className="text-xs text-white/80">Frame-by-frame breakdown</div>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-lg p-3">
                    <div className="text-sm font-semibold">Land Practice</div>
                    <div className="text-xs text-white/80">Pop-up & balance drills</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  Book Session with Scoot
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>

          {/* Beginner & Intermediate Examples */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-black mb-4">
                Beginner &amp; Intermediate Examples
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                See the progression journey from first waves to confident reef surfing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Beginner Example */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=-30&con=20"
                    alt="Beginner surfer learning basics"
                    fill
                    className="object-cover grayscale contrast-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Beginner Level
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-black mb-3">First Wave Success</h4>
                  <p className="text-gray-700 mb-4">
                    Watch complete beginners catch their first waves in the safe whitewash. 
                    Focus on safety, basic positioning, and building confidence in the water.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Duration: 2 hours</span>
                    <Button variant="outline" size="sm">View Gallery</Button>
                  </div>
                </div>
              </div>

              {/* Intermediate Example */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=-30&con=25"
                    alt="Intermediate surfer on reef break"
                    fill
                    className="object-cover grayscale contrast-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Intermediate Level
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-black mb-3">Reef Break Mastery</h4>
                  <p className="text-gray-700 mb-4">
                    Advanced techniques on Uluwatu&apos;s reef breaks. Learn positioning, 
                    timing, and how to read the waves for longer, more exciting rides.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Duration: 2.5 hours</span>
                    <Button variant="outline" size="sm">View Gallery</Button>
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