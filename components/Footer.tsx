import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.jpg"
                  alt="Uluwatu Surf School - Bali"
                  fill
                  className="object-contain rounded-full opacity-90 hover:opacity-100 transition-opacity"
                  sizes="40px"
                />
              </div>
              <span className="font-bold text-2xl">Uluwatu Surf School</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Master the waves at one of Bali&apos;s most iconic surf breaks. Professional instruction,
              local expertise, and unforgettable experiences for all skill levels.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/uluwatusurfschool_official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Uluwatu Surf School on Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/lessons" className="text-gray-400 hover:text-white transition-colors">Lessons</Link></li>
              <li><Link href="/#scoot" className="text-gray-400 hover:text-white transition-colors">Meet Scotty Dex</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/lessons#lesson-only" className="text-gray-400 hover:text-white transition-colors">Beginner Lessons</Link></li>
              <li><Link href="/lessons#lesson-video" className="text-gray-400 hover:text-white transition-colors">Intermediate Coaching</Link></li>
              <li><Link href="/lessons#guiding" className="text-gray-400 hover:text-white transition-colors">Advanced Guiding</Link></li>
              <li><Link href="/lessons" className="text-gray-400 hover:text-white transition-colors">Equipment Advice</Link></li>
              <li><Link href="/#gallery" className="text-gray-400 hover:text-white transition-colors">Surf Photography</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-sm">
              <p>&copy; {currentYear} Uluwatu Surf School. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                <Link href="mailto:info@uluwatusurfschool.com" className="hover:text-white transition-colors">Email Us</Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <span className="text-white" aria-hidden="true">❤️</span>
              <span>in Bali</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
