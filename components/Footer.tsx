import Link from 'next/link'
import Image from 'next/image'
import { Instagram, MessageSquare, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-clean-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Uluwatu Surf School - Professional Surf Instruction in Bali"
                width={45}
                height={45}
                className="object-contain filter invert"
              />
              <span className="text-xl font-medium">Uluwatu Surf School</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Professional surf instruction in Uluwatu/Bukit Area, Bali. 
              Daily sessions based on tide, swell and weather conditions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Uluwatu/Bukit Area, Bali</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+62 812 3456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@uluwatusurfschool.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="space-y-3">
              <Link
                href="https://instagram.com/uluwatusurfschool_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm">@uluwatusurfschool_official</span>
              </Link>
              <Link
                href="https://instagram.com/scotty_dex"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm">@scotty_dex (Instructor)</span>
              </Link>
              <Link
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <nav className="flex flex-wrap justify-center md:justify-start space-x-8">
              <Link href="/lessons" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Lessons
              </Link>
              <Link href="/packages" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Packages
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Contact
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Privacy
              </Link>
            </nav>
            
            <div className="text-gray-400 text-sm">
              © 2024 Uluwatu Surf School. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}