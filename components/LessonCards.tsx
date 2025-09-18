import Link from 'next/link'
import { Users, Camera, Map } from 'lucide-react'
import { FadeIn, ScaleIn, StaggerChildren } from './animations'

const lessons = [
  {
    id: 'lesson-only',
    icon: Users,
    title: 'Option 1 - Lesson Only',
    description: '1.5 hours in water plus 20-30 minutes land coaching for beginners. Professional instruction tailored to your level with location selection based on conditions.',
    features: [
      '1.5 hours in water',
      '20-30 min land coaching (beginners)',
      'All equipment included',
      'Break explanation & safety briefing',
      'Level-appropriate spot selection'
    ],
    prices: {
      private: 'IDR 700k',
      semiPrivate: 'IDR 500k'
    },
    popular: false
  },
  {
    id: 'lesson-video',
    icon: Camera,
    title: 'Option 2 - Lesson + Surf Video and Analysis',
    description: 'Enhanced learning with surf video analysis. Professional coaching with video review to accelerate your improvement and technique development.',
    features: [
      '1.5 hours in water',
      '20-30 min land coaching (beginners)',
      'Surf video recording',
      'Video analysis & review',
      'All equipment included',
      'Level-appropriate spot selection'
    ],
    prices: {
      private: 'IDR 800k',
      semiPrivate: 'IDR 600k'
    },
    popular: true
  },
  {
    id: 'guiding',
    icon: Map,
    title: 'Option 3 - Guiding',
    description: 'Guided surf sessions for experienced surfers. Includes spot selection, conditions assessment, and optional video analysis for additional fee.',
    features: [
      'Experienced surfer guidance',
      'Optimal spot selection',
      'Conditions assessment',
      'Break knowledge sharing',
      'Optional surf video and review (+IDR 200k)',
      'Board rental not included'
    ],
    price: 'IDR 500k',
    note: 'Per person/session. Guiding prices do not include board rental.',
    popular: false
  }
]

export default function LessonCards() {
  return (
    <section className="py-24 bg-gradient-to-br from-storm-gray-50 via-ocean-mist/30 to-storm-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-ocean-50/20 to-transparent"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-deep-ocean-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-ocean-mist/40 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.2} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight text-charcoal mb-6 tracking-wide">
            Lesson <span className="font-serif font-light text-deep-ocean-600">Packages</span>
          </h2>
          <p className="text-xl md:text-2xl text-storm-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional surf instruction tailored to your learning style and goals. 
            All prices are per person/per session. Equipment and safety briefing included.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10" staggerDelay={0.15}>
          {lessons.map((lesson, index) => {
            const IconComponent = lesson.icon
            return (
              <ScaleIn
                key={lesson.id}
                delay={0.6 + (index * 0.2)}
                className={`group relative ${
                  lesson.popular ? 'scale-105' : ''
                }`}
              >
                <div 
                  className={`relative bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-white/90 ${
                    lesson.popular 
                      ? 'ring-2 ring-deep-ocean-400 bg-gradient-to-br from-white/90 to-deep-ocean-50/50' 
                      : 'hover:ring-1 hover:ring-deep-ocean-200'
                  }`}
                >
                  {lesson.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-deep-ocean-600 to-deep-ocean-700 text-white px-6 py-2 text-sm font-semibold rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-deep-ocean-100 to-ocean-mist rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-10 w-10 text-deep-ocean-600" />
                      <div className="absolute inset-0 bg-gradient-to-br from-deep-ocean-200/20 to-transparent rounded-2xl"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-deep-ocean-600 transition-colors duration-300">
                      {lesson.title}
                    </h3>
                    <p className="text-storm-gray-600 leading-relaxed">
                      {lesson.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-10">
                    {lesson.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-storm-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-deep-ocean-500 to-deep-ocean-600 rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center border-t border-storm-gray-200/50 pt-8">
                    {lesson.prices ? (
                      <div className="mb-6 space-y-3">
                        <div className="flex justify-between items-center py-2 px-4 bg-storm-gray-50/50 rounded-xl">
                          <span className="font-semibold text-charcoal">Private:</span>
                          <span className="text-2xl font-bold text-deep-ocean-600">{lesson.prices.private}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 px-4 bg-storm-gray-50/50 rounded-xl">
                          <span className="font-semibold text-charcoal">Semi-Private:</span>
                          <span className="text-2xl font-bold text-deep-ocean-600">{lesson.prices.semiPrivate}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-6">
                        <div className="text-4xl font-bold text-deep-ocean-600 mb-2">
                          {lesson.price}
                        </div>
                      </div>
                    )}
                    
                    {lesson.note && (
                      <p className="text-xs text-storm-gray-500 mb-6 italic bg-sand/30 p-3 rounded-lg">
                        {lesson.note}
                      </p>
                    )}
                    
                    <Link
                      href={`/book?lesson=${lesson.id}`}
                      className={`group relative overflow-hidden block w-full py-4 text-center font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                        lesson.popular
                          ? 'bg-gradient-to-r from-deep-ocean-600 to-deep-ocean-700 text-white hover:from-deep-ocean-700 hover:to-deep-ocean-800 shadow-lg'
                          : 'border-2 border-deep-ocean-600 text-deep-ocean-600 hover:bg-deep-ocean-600 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">Book Now</span>
                      {lesson.popular && (
                        <div className="absolute inset-0 bg-gradient-to-r from-deep-ocean-500/0 via-white/10 to-deep-ocean-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      )}
                    </Link>
                  </div>
                </div>
              </ScaleIn>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}