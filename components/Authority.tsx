import Link from 'next/link'
import { Instagram, MapPin, Users, Star, Clock } from 'lucide-react'

export default function Authority() {
  return (
    <section className="py-20 bg-clean-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Scotty's Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-light text-charcoal mb-4">
                Local Expertise
              </h2>
              <p className="text-lg text-storm-gray leading-relaxed">
                Professional surf instruction backed by years of local knowledge 
                and modern analysis techniques. Quality education over quick results.
              </p>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-deep-ocean" />
                </div>
                <div className="text-2xl font-semibold text-charcoal">500+</div>
                <div className="text-sm text-storm-gray">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-deep-ocean" />
                </div>
                <div className="text-2xl font-semibold text-charcoal">15</div>
                <div className="text-sm text-storm-gray">Years Local</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-deep-ocean" />
                </div>
                <div className="text-2xl font-semibold text-charcoal">4.9</div>
                <div className="text-sm text-storm-gray">Rating</div>
              </div>
            </div>

            {/* Local Knowledge */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="h-5 w-5 text-deep-ocean" />
                <h3 className="font-medium text-charcoal">Surf Spots Mastered</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-storm-gray">
                <div>• Uluwatu</div>
                <div>• Padang Padang</div>
                <div>• Bingin</div>
                <div>• Impossibles</div>
                <div>• Dreamland</div>
                <div>• Balangan</div>
              </div>
            </div>
          </div>

          {/* Right: Scotty's Photo & Instagram */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gray-200">
                {/* Placeholder for Scotty's photo */}
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')"
                  }}
                ></div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div>
                <h3 className="text-2xl font-medium text-charcoal">Scotty</h3>
                <p className="text-storm-gray">Head Instructor & Founder</p>
              </div>
              
              <Link 
                href="https://instagram.com/scotty_dex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-deep-ocean hover:text-blue-800 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-medium">@scotty_dex</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}