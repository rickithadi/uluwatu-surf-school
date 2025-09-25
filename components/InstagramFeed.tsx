'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react'

const instagramPosts = [
  {
    id: '1',
    image: '/images/instagram/surf-action-1.jpg',
    alt: 'Surf coaching at Uluwatu with strong bottom turn',
    likes: 342,
    comments: 28,
    caption: 'Temple section turning on a mid tide push. Solid positioning work today.',
    timestamp: '3h'
  },
  {
    id: '2',
    image: '/images/instagram/surf-action-2.jpg',
    alt: 'Coach reviewing tape on the beach',
    likes: 267,
    comments: 19,
    caption: 'Video review immediately after paddle in – adjustments are faster when fresh.',
    timestamp: '6h'
  },
  {
    id: '3',
    image: '/images/instagram/surf-landscape-1.jpg',
    alt: 'Uluwatu surf break landscape in monochrome',
    likes: 489,
    comments: 35,
    caption: 'First light read on the reef. Clean lines, light crowd.',
    timestamp: '1d'
  },
  {
    id: '4',
    image: '/images/instagram/surf-action-3.jpg',
    alt: 'Surfer carving back into the pocket',
    likes: 198,
    comments: 15,
    caption: 'Linking sections with purpose. Minimal flair, maximum hold.',
    timestamp: '2d'
  },
  {
    id: '5',
    image: '/images/instagram/surf-action-4.jpg',
    alt: 'Coach giving briefing in water',
    likes: 223,
    comments: 22,
    caption: 'Lineup briefing before switching peaks. Clear instructions keep you calm.',
    timestamp: '3d'
  },
  {
    id: '6',
    image: '/images/instagram/surf-action-5.jpg',
    alt: 'Surfer in clean barrel',
    likes: 156,
    comments: 11,
    caption: 'Barrel practice with two angles rolling for review.',
    timestamp: '4d'
  },
  {
    id: '7',
    image: '/images/instagram/surf-lifestyle-1.jpg',
    alt: 'Boards lined up at Uluwatu',
    likes: 289,
    comments: 17,
    caption: 'Quiver ready on the cliff. Each board logged after session.',
    timestamp: '5d'
  },
  {
    id: '8',
    image: '/images/instagram/surf-lifestyle-2.jpg',
    alt: 'Coach working on video analysis',
    likes: 145,
    comments: 8,
    caption: 'Evening clip breakdown. Notes go straight to your inbox.',
    timestamp: '6d'
  }
]

export default function InstagramFeed() {
  return (
    <section className="section-spacing bg-carbon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-6">
          <span className="chip">Field Log</span>
          <h2 className="text-heading-1">Instagram Updates</h2>
          <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
            Daily snapshots from the reef: lineup reads, coaching insights, and the refinement process documented.
          </p>
          <Link
            href="https://instagram.com/uluwatusurfschool_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 rounded-full text-sm uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className={`surface-panel border border-white/12 overflow-hidden transition-transform duration-500 hover:-translate-y-1 ${
                index % 4 === 1 ? 'lg:mt-6' : ''
              } ${index % 4 === 2 ? 'lg:mt-12' : ''} ${index % 4 === 3 ? 'lg:mt-8' : ''}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover grayscale transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 border border-white/20 bg-black/70 px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] text-neutral-300">
                  {post.timestamp}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-body text-neutral-200">{post.caption}</p>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-500">
                  <span className="inline-flex items-center gap-2"><Heart className="h-4 w-4" />{post.likes}</span>
                  <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" />{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 border border-white/15 rounded-full px-6 py-4 text-sm uppercase tracking-[0.24em] text-neutral-300">
            <Instagram className="h-4 w-4" />
            @uluwatusurfschool_official
          </div>
        </div>
      </div>
    </section>
  )
}
