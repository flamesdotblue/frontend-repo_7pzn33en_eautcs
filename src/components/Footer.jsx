export default function Footer() {
  const links = [
    { label: 'Home', href: '#/' },
    { label: 'Menu', href: '#/menu' },
    { label: 'Pricing', href: '#/pricing' },
    { label: 'About Us', href: '#/about' },
    { label: 'Contact', href: '#/contact' },
    { label: 'Privacy Policy', href: '#/privacy' },
  ]
  return (
    <footer className="bg-black text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/nosh-logo.png"
              alt="Nosh Foods"
              className="h-9 w-9 object-contain"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <div>
              <p className="font-extrabold text-lg">Nosh Foods</p>
              <p className="text-white/70 text-sm">Homemade Food, Delivered Fresh</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm hover:text-[#FFD43B] font-semibold">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Nosh Foods. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
