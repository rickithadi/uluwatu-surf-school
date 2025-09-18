import Link from 'next/link'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

// Placeholder gallery data - can be updated with actual Instagram content
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Uluwatu surf lesson in action',
    caption: 'Perfect waves at Uluwatu 🏄‍♂️'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Student learning to surf',
    caption: 'Another successful lesson! 🤙'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Scotty coaching a student',
    caption: 'Technique improvement with video analysis'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Sunset surf session',
    caption: 'Golden hour sessions 🌅'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1465188035480-a4d29da2845a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Group surf lesson',
    caption: 'Semi-private lessons for friends'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Uluwatu waves',
    caption: 'Reading the waves like a local'
  }
]

export default function StaticGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4">
            Gallery
          </h2>
          <p className="text-lg text-storm-gray max-w-2xl mx-auto">
            See our students in action and follow our journey on Instagram
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-storm-gray">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTAs */}
        <div className="text-center space-y-4">
          <p className="text-lg text-charcoal font-medium">Follow us for more updates!</p>
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