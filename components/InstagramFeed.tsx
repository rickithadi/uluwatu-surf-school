'use client'

import { useState } from 'react'
import { Instagram, Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Mock Instagram posts data - in production, this would come from Instagram API
const instagramPosts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Surfer riding perfect waves at Uluwatu surf break in early morning conditions',
    likes: 234,
    comments: 18,
    caption: 'Perfect conditions at Uluwatu this morning'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Surf instructor analyzing video footage with student for technique improvement',
    likes: 189,
    comments: 12,
    caption: 'Video analysis session breakdown'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Surf student showing improved technique after professional surf lessons',
    likes: 156,
    comments: 9,
    caption: 'Student progress after 3 lessons'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1544378730-6b3c5fe5d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Professional surf instructor teaching reef break navigation and safety at Uluwatu',
    likes: 278,
    comments: 24,
    caption: 'Local knowledge: reading the reef'
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1502999890892-4708e0b7b0d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Surf instructor conducting safety briefing before dawn patrol surf session',
    likes: 167,
    comments: 15,
    caption: 'Safety briefing before dawn patrol'
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Close-up technique analysis of bottom turn mechanics during surf lesson',
    likes: 203,
    comments: 11,
    caption: 'Technique focus: bottom turn mechanics'
  }
]

export default function InstagramFeed() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-charcoal mb-4">
            Follow Our Journey
          </h2>
          <p className="text-lg text-storm-gray max-w-2xl mx-auto mb-8">
            Daily insights from the break. Technique tips, conditions updates, 
            and student progress from Uluwatu&rsquo;s most professional surf school.
          </p>
          
          <Link
            href="https://instagram.com/uluwatusurfschool_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow on Instagram</span>
          </Link>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="relative aspect-square group cursor-pointer"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <Image 
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              {hoveredPost === post.id && (
                <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center transition-opacity duration-200">
                  <div className="text-white text-center space-y-2">
                    <div className="flex items-center justify-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Heart className="h-5 w-5" />
                        <span className="font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="h-5 w-5" />
                        <span className="font-medium">{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-sm px-4 line-clamp-2">{post.caption}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instagram Handle */}
        <div className="text-center mt-12">
          <Link
            href="https://instagram.com/uluwatusurfschool_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-deep-ocean hover:text-blue-800 transition-colors duration-200"
          >
            <Instagram className="h-6 w-6" />
            <span className="text-xl font-medium">@uluwatusurfschool_official</span>
          </Link>
        </div>
      </div>
    </section>
  )
}