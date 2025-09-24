import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Camera, Play } from 'lucide-react'

// Professional gallery using scootAssets - curated selection of best shots
const galleryImages = [
  {
    id: 1,
    src: '/images/scootAssets/IMG_4743.JPG',
    alt: 'Professional surf lesson at Uluwatu',
    caption: 'Learning proper technique with professional guidance',
    size: 'large',
    type: 'photo'
  },
  {
    id: 2,
    src: '/images/scootAssets/IMG_4755.JPG',
    alt: 'Surf coaching technique',
    caption: 'One-on-one coaching in perfect conditions',
    size: 'medium',
    type: 'photo'
  },
  {
    id: 3,
    src: '/images/scootAssets/IMG_4764.JPG',
    alt: 'Perfect wave conditions',
    caption: 'Uluwatu\'s world-class waves',
    size: 'small',
    type: 'photo'
  },
  {
    id: 4,
    src: '/images/scootAssets/IMG_4768.JPG',
    alt: 'Student progression',
    caption: 'Watching students progress and gain confidence',
    size: 'medium',
    type: 'photo'
  },
  {
    id: 5,
    src: '/images/scootAssets/IMG_2724.JPG',
    alt: 'Uluwatu surf break',
    caption: 'The legendary Uluwatu break',
    size: 'small',
    type: 'photo'
  },
  {
    id: 6,
    src: '/images/scootAssets/IMG_3250.JPG',
    alt: 'Surf school atmosphere',
    caption: 'Creating memories and building skills',
    size: 'large',
    type: 'photo'
  },
  {
    id: 7,
    src: '/images/scootAssets/IMG_4772.JPG',
    alt: 'Advanced surfing technique',
    caption: 'Perfecting advanced maneuvers',
    size: 'medium',
    type: 'photo'
  },
  {
    id: 8,
    src: '/images/scootAssets/IMG_4759.JPG',
    alt: 'Ocean safety training',
    caption: 'Safety first - comprehensive ocean awareness',
    size: 'small',
    type: 'photo'
  },
  {
    id: 9,
    src: '/images/scootAssets/GOPR3236.MOV',
    alt: 'Surf session highlight reel',
    caption: 'Action-packed session highlights',
    size: 'large',
    type: 'video',
    thumbnail: '/images/scootAssets/IMG_4746.JPG'
  },
  {
    id: 10,
    src: '/images/scootAssets/IMG_0631.JPG',
    alt: 'Sunset surf session',
    caption: 'Golden hour sessions at Uluwatu',
    size: 'medium',
    type: 'photo'
  },
  {
    id: 11,
    src: '/images/scootAssets/IMG_4551.JPG',
    alt: 'Group surf lesson',
    caption: 'Learning together in small groups',
    size: 'small',
    type: 'photo'
  },
  {
    id: 12,
    src: '/images/scootAssets/IMG_3414.JPG',
    alt: 'Professional surf photography',
    caption: 'Capturing your surfing moments',
    size: 'medium',
    type: 'photo'
  }
]

export default function StaticGallery() {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 text-charcoal mb-6">
            Gallery
          </h2>
          <p className="text-body-lg text-storm-gray max-w-2xl mx-auto">
            See our students in action and follow our journey on Instagram
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryImages.map((item) => (
            <div key={item.id} className={`bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
              item.size === 'large' ? 'md:col-span-2' : ''
            }`}>
              <div className="aspect-square relative group">
                {item.type === 'video' ? (
                  <>
                    <Image
                      src={item.thumbnail || item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="h-12 w-12 text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTAs */}
        <div className="text-center content-spacing">
          <p className="text-body-lg text-charcoal font-medium">Follow us for more updates!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://instagram.com/uluwatusurfschool_official"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-deep-ocean text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
              <span>@uluwatusurfschool_official</span>
            </Link>
            <Link
              href="https://instagram.com/scotty_dex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border border-deep-ocean text-deep-ocean px-6 py-3 rounded-lg hover:bg-deep-ocean hover:text-white transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
              <span>@scotty_dex</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}