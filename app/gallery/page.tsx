import Image from 'next/image'
import { Metadata } from 'next'
import { StaggerChildren } from '@/components/animations/StaggerChildren'

export const metadata: Metadata = {
  title: 'Gallery - Uluwatu Surf School Bali',
  description: 'View our latest surf sessions, coaching moments, and the beauty of Uluwatu captured by professional surf photographer Scotty Dex.',
}

const assets = [
  { id: 'vid', type: 'video', src: '/images/scootAssets/hero.mp4', thumb: '/images/scootAssets/IMG_4746.JPG', alt: 'Session highlight reel', span: 'md:col-span-2 lg:col-span-3 aspect-[16/9]' },
  { id: 's1', type: 'photo', src: '/images/scootAssets/IMG_4743.JPG', alt: 'Scotty Dex coaching stance', span: 'aspect-[3/4]' },
  { id: 's2', type: 'photo', src: '/images/scootAssets/IMG_4755.JPG', alt: 'In-water feedback', span: 'aspect-square md:row-span-2' },
  { id: 's3', type: 'photo', src: '/images/scootAssets/IMG_4768.JPG', alt: 'Student progression', span: 'aspect-[4/5]' },
  { id: 's4', type: 'photo', src: '/images/scootAssets/IMG_3250.JPG', alt: 'Pre-session briefing', span: 'aspect-[16/10] md:col-span-2' },
  { id: 'ig1', type: 'photo', src: '/images/instagram/surf-action-1.jpg', alt: 'Bottom turn detail', span: 'aspect-square' },
  { id: 'ig2', type: 'photo', src: '/images/instagram/surf-action-2.jpg', alt: 'Beach review moment', span: 'aspect-[5/7]' },
  { id: 'ig3', type: 'photo', src: '/images/instagram/surf-landscape-1.jpg', alt: 'Uluwatu long view', span: 'aspect-[21/10] md:col-span-3' },
  { id: 'ig4', type: 'photo', src: '/images/instagram/surf-action-3.jpg', alt: 'Pocket carve', span: 'aspect-[3/4]' },
  { id: 'ig5', type: 'photo', src: '/images/instagram/surf-action-4.jpg', alt: 'In-water briefing', span: 'aspect-square' },
  { id: 'ig6', type: 'photo', src: '/images/instagram/surf-action-5.jpg', alt: 'Barrel moment', span: 'aspect-[4/3]' },
  { id: 'ig7', type: 'photo', src: '/images/instagram/surf-lifestyle-1.jpg', alt: 'Quiver lineup', span: 'aspect-[5/4]' },
  { id: 'ig8', type: 'photo', src: '/images/instagram/surf-lifestyle-2.jpg', alt: 'Clip logging', span: 'aspect-square' },
  { id: 's5', type: 'photo', src: '/images/scootAssets/IMG_4772.JPG', alt: 'Linking sections', span: 'aspect-[4/5]' },
  { id: 's6', type: 'photo', src: '/images/scootAssets/IMG_4764.JPG', alt: 'Clean lines', span: 'aspect-[16/9]' },
  { id: 's7', type: 'photo', src: '/images/scootAssets/IMG_3414.JPG', alt: 'Perfect barrel', span: 'aspect-[3/4]' },
  { id: 's8', type: 'photo', src: '/images/scootAssets/0U4A8560.JPG', alt: 'Cutback sequence', span: 'aspect-[16/9]' }
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-carbon">
      <div className="container mx-auto px-4">
        <StaggerChildren className="space-y-16">
          {/* Hero Section */}
          <section className="pt-32 pb-16 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="chip">Visual Stories</span>
                <h1 className="text-heading-1">Captured Moments</h1>
              </div>
              <p className="max-w-2xl mx-auto text-body text-neutral-400 leading-relaxed">
                Sessions documented, waves analyzed, progression captured. See the Uluwatu experience through our lens - from coaching moments to perfect barrels.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="https://instagram.com/uluwatusurfschool_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition"
                >
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="pb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {assets.map((asset) => (
                <div key={asset.id} className={`surface-panel border border-white/12 overflow-hidden ${asset.span}`}>
                  {asset.type === 'video' ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={asset.thumb ?? asset.src}
                        alt={asset.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white/90">
                          ▶
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full w-full">
                      <Image
                        src={asset.src}
                        alt={asset.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="pb-16 text-center">
            <div className="surface-panel px-8 py-12 space-y-8">
              <h2 className="text-heading-2">Document Your Progress</h2>
              <p className="max-w-xl mx-auto text-body text-neutral-300">
                Every lesson includes professional video analysis. Watch your technique, understand your progression, and take home memories that last.
              </p>
              <a
                href="/lessons#lesson-video"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition"
              >
                Book Video Analysis Session
              </a>
            </div>
          </section>
        </StaggerChildren>
      </div>
    </main>
  )
}