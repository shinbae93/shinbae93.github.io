import CV from '../../assets/cv.pdf'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg border-b border-card-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-rubik-sans font-bold text-sm tracking-widest uppercase text-text hover:opacity-70 transition-opacity"
        >
          Hung Nguyen
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-muted hover:text-text transition-colors duration-150 font-mono"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={CV} download>
          <button className="bg-btn text-btn-text text-sm font-mono font-semibold px-5 py-2 rounded-full shadow-button transition duration-200 ease-in-out hover:opacity-90 hover:scale-105">
            Resume
          </button>
        </a>
      </div>
    </nav>
  )
}
