'use client'

import { useState } from 'react'
import { Instagram, Heart, MessageCircle, ExternalLink, Archive } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Real Instagram posts data using actual surf school assets
const instagramPosts = [
  {
    id: '1',
    image: '/images/instagram/surf-action-1.jpg',
    alt: 'Epic surf session at Uluwatu with perfect barrels and crystal clear water',
    likes: 342,
    comments: 28,
    caption: 'Epic barrels this morning! Nothing beats Uluwatu when it\'s firing 🌊',
    timestamp: '3h'
  },
  {
    id: '2',
    image: '/images/instagram/surf-action-2.jpg',
    alt: 'Professional surf coaching session analyzing wave selection and positioning',
    likes: 267,
    comments: 19,
    caption: 'Coaching session: perfecting wave selection and timing',
    timestamp: '6h'
  },
  {
    id: '3',
    image: '/images/instagram/surf-landscape-1.jpg',
    alt: 'Breathtaking sunset view over the Uluwatu surf break with golden hour lighting',
    likes: 489,
    comments: 35,
    caption: 'Golden hour magic at our home break ✨',
    timestamp: '1d'
  },
  {
    id: '4',
    image: '/images/instagram/surf-action-3.jpg',
    alt: 'Advanced surfer demonstrating perfect bottom turn technique during lesson',
    likes: 198,
    comments: 15,
    caption: 'Student progress: mastering the bottom turn mechanics',
    timestamp: '2d'
  },
  {
    id: '5',
    image: '/images/instagram/surf-action-4.jpg',
    alt: 'Surf instructor providing real-time feedback during water coaching session',
    likes: 223,
    comments: 22,
    caption: 'In-water coaching: real-time technique feedback 🤙',
    timestamp: '3d'
  },
  {
    id: '6',
    image: '/images/instagram/surf-action-5.jpg',
    alt: 'Advanced surfer riding powerful waves with perfect form and style',
    likes: 156,
    comments: 11,
    caption: 'Style and power combined - this is what we teach!',
    timestamp: '4d'
  },
  {
    id: '7',
    image: '/images/instagram/surf-lifestyle-1.jpg',
    alt: 'Surf life vibes with professional gear and tropical Indonesian backdrop',
    likes: 289,
    comments: 17,
    caption: 'Living the surf life in paradise 🏄‍♂️ #SurfLifestyle',
    timestamp: '5d'
  },
  {
    id: '8',
    image: '/images/instagram/surf-lifestyle-2.jpg',
    alt: 'Behind the scenes of surf coaching with professional equipment and setup',
    likes: 145,
    comments: 8,
    caption: 'Behind the scenes of our coaching setup',
    timestamp: '6d'
  }
]

export default function InstagramFeed() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-wave-pattern" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Icon Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-2xl flex items-center justify-center shadow-lg shadow-ocean-500/25">
                <Archive className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-ocean-500/20 to-ocean-700/20 rounded-3xl blur-xl" />
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
              Follow Our Journey
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-gray-300 via-ocean-500 to-gray-300 mx-auto" />
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Daily insights from the break. Professional technique tips, real-time conditions updates, 
            and inspiring student progress stories from Uluwatu&rsquo;s premier surf school.
          </p>
          
          {/* CTA Button */}
          <Link
            href="https://instagram.com/uluwatusurfschool_official"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Follow on Instagram</span>
            <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className={`group cursor-pointer transform hover:-translate-y-2 transition-all duration-500 ${
                index % 4 === 1 ? 'lg:mt-6' : ''
              } ${index % 4 === 2 ? 'lg:mt-12' : ''} ${index % 4 === 3 ? 'lg:mt-8' : ''}`}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Post Card */}
              <div className="bg-white rounded-3xl shadow-lg shadow-gray-900/10 overflow-hidden border border-gray-100 group-hover:shadow-2xl group-hover:shadow-gray-900/25 transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <Image 
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Timestamp Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      {post.timestamp}
                    </div>
                  </div>

                  {/* Hover Stats Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredPost === post.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 m-6 shadow-xl">
                      <div className="flex items-center space-x-6 text-gray-700">
                        <div className="flex items-center space-x-2">
                          <Heart className="h-5 w-5 text-red-500" />
                          <span className="font-semibold">{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="h-5 w-5 text-blue-500" />
                          <span className="font-semibold">{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Handle CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm border border-gray-200 px-8 py-6 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <Link
                href="https://instagram.com/uluwatusurfschool_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-gray-900 hover:text-ocean-600 transition-colors duration-200"
              >
                @uluwatusurfschool_official
              </Link>
              <p className="text-sm text-gray-600">Join our surf community</p>
            </div>
            <ExternalLink className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  )
}