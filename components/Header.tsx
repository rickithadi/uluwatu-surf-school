'use client'

import { useEffect, useState } from 'react'

import { Button } from './ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const navItems = [
  { name: 'Pricing', href: '#pricing' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Book', href: '#book' },
  { name: 'Find Us', href: '#find-us' }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePrimaryCta = () => {
    const whatsappUrl = `https://wa.me/6281999885826?text=${encodeURIComponent('Hi Scotty Dex! I\'d like to book a surf lesson. Can you help me with availability and pricing?')}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setIsMobileMenuOpen(false)
  }

  const handleScrollLink = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-black/80 border-b border-white/10 backdrop-blur-xl shadow-[0_20px_40px_-30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-white/15 group-hover:border-white/40 transition-colors">
              <Image
                src="/images/logo.jpg"
                alt="Uluwatu Surf School - Bali"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <span className="text-sm md:text-base uppercase tracking-[0.6em] text-slate-200 group-hover:text-white transition-colors">
              Uluwatu Surf School
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleScrollLink(item.href)}
                className="text-xs tracking-[0.5em] uppercase text-slate-300 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button size="md" onClick={handlePrimaryCta}>
              Book Now
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 text-white"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
            type="button"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="w-5 h-5 relative">
              <span
                className={`absolute left-0 top-1 h-0.5 w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              />
              <span
                className={`absolute left-0 bottom-1 h-0.5 w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10">
          <div className="container mx-auto px-4 py-10 space-y-6">
            <div className="grid gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleScrollLink(item.href)}
                  className="w-full text-left uppercase tracking-[0.5em] text-slate-200 border border-white/15 rounded-2xl px-6 py-4 hover:border-white/40 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <Button className="w-full" size="lg" onClick={handlePrimaryCta}>
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
