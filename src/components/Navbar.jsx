import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#/' },
  { label: 'Menu', href: '#/menu' },
  { label: 'Pricing', href: '#/pricing' },
  { label: 'About', href: '#/about' },
  { label: 'Contact', href: '#/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      isScrolled ? 'bg-white/90 backdrop-blur border-b border-black/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#/" className="flex items-center gap-3">
            <img
              src="/nosh-logo.png"
              alt="Nosh Foods"
              className="h-9 w-9 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="text-xl font-extrabold tracking-tight">Nosh Foods</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-semibold hover:opacity-80">
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/919429693487?text=Hi%2C%20I%20have%20seen%20your%20website%20and%20I%20am%20interested.%20Can%20I%20get%20more%20information%20about%20it%3F"
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white rounded-full px-4 py-2 font-bold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-black/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block px-2 py-2 rounded hover:bg-black/5 font-semibold" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/919429693487?text=Hi%2C%20I%20have%20seen%20your%20website%20and%20I%20am%20interested.%20Can%20I%20get%20more%20information%20about%20it%3F"
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-black text-white rounded-full px-4 py-2 font-bold hover:bg-yellow-400 hover:text-black transition-colors"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
