'use client'

import Image from 'next/image'
import { MapPin, Instagram, Star, Phone, Clock, Car } from 'lucide-react'
import { Button } from './ui/Button'
import { StaggerChildren } from './animations/StaggerChildren'
import InstagramFeed from './InstagramFeed'

const schoolInfo = {
  bio: "Located at the legendary Uluwatu surf break, our surf school offers an authentic Balinese surfing experience. With crystal-clear waters, consistent waves, and breathtaking clifftop views, Uluwatu provides the perfect backdrop for your surfing journey. Our local knowledge and passion for the ocean create an unforgettable learning environment.",
  location: {
    name: "Uluwatu Beach",
    address: "Jl. Labuan Sait, Uluwatu, Pecatu, Badung Regency, Bali 80361",
    coordinates: { lat: -8.8212, lng: 115.0849 }
  },
  contact: {
    phone: "+62 123 456 7890",
    whatsapp: "+62 123 456 7890",
    instagram: "@uluwatusurf_scoot"
  },
  schedule: {
    daily: "6:00 AM - 6:00 PM",
    bestTimes: "Dawn patrol (6-8 AM) & Evening glass (4-6 PM)"
  }
}

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Scoot is an amazing instructor! Made me feel safe and confident in the water. Caught my first wave ever at Uluwatu!",
    location: "Australia"
  },
  {
    name: "Marcus Weber",
    rating: 5,
    comment: "Perfect blend of safety and adventure. The video analysis really helped improve my technique. Highly recommend!",
    location: "Germany"
  },
  {
    name: "Yuki Tanaka",
    rating: 5,
    comment: "Best surf experience in Bali! Scoot knows all the secret spots and when to surf them. Professional and fun!",
    location: "Japan"
  }
]

export default function FindUsSection() {
  return (
    <section id="find-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <StaggerChildren>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Where to Find Us
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Located at Bali&apos;s most iconic surf break, where legends are made
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* About Us / Bio Section */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-black mb-6">About Uluwatu Surf School</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {schoolInfo.bio}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-black" />
                    <div>
                      <div className="font-semibold text-black">Daily Hours</div>
                      <div className="text-sm text-gray-600">{schoolInfo.schedule.daily}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-black" />
                    <div>
                      <div className="font-semibold text-black">Transport</div>
                      <div className="text-sm text-gray-600">Included in packages</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <div className="font-semibold text-black mb-2">Best Surf Times</div>
                  <div className="text-sm text-gray-700">{schoolInfo.schedule.bestTimes}</div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-xl font-bold text-black mb-6">Get in Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-black" />
                    <div>
                      <div className="font-semibold text-black">WhatsApp & Phone</div>
                      <div className="text-gray-700">{schoolInfo.contact.whatsapp}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Instagram className="w-5 h-5 text-black" />
                    <div>
                      <div className="font-semibold text-black">Follow Our Adventures</div>
                      <div className="text-gray-700">{schoolInfo.contact.instagram}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-black" />
                    <div>
                      <div className="font-semibold text-black">Location</div>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        {schoolInfo.location.address}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button className="flex-1">
                    WhatsApp Us
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>

            {/* Location & Visual */}
            <div className="space-y-6">
              {/* Hero Location Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=-20&con=20"
                  alt="Uluwatu surf break aerial view"
                  fill
                  className="object-cover grayscale contrast-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold">Uluwatu Temple Break</h4>
                  <p className="text-white/90">World-class waves, legendary location</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-black">Our Location</h4>
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <div className="text-gray-600 font-medium">{schoolInfo.location.name}</div>
                    <div className="text-sm text-gray-500">Interactive map coming soon</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>

          {/* Google Reviews Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black mb-4">What Our Students Say</h3>
              <div className="flex items-center justify-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-black ml-2">5.0</span>
                <span className="text-gray-600">• 500+ Google Reviews</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-semibold text-black">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.location}</div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Read All Reviews on Google
              </Button>
            </div>
          </div>

          {/* Instagram Feed */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black mb-4">Follow Our Journey</h3>
              <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
                See daily surf conditions, student success stories, and behind-the-scenes moments
              </p>
              <Button variant="outline" className="flex items-center space-x-2 mx-auto">
                <Instagram className="w-5 h-5" />
                <span>Follow @uluwatusurf_scoot</span>
              </Button>
            </div>
            
            <InstagramFeed />
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}