const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/shinbae93' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nvqhung93' },
]

export function Footer() {
  return (
    <footer className="bg-section-alt border-t border-card-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-rubik-sans font-bold text-sm tracking-widest uppercase text-text">Hung Nguyen</span>
        <span className="font-mono text-xs text-footer-text">© 2026. Hung Nguyen. Built with precision.</span>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-footer-text hover:text-text transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
