import React, { useState } from 'react'

const links = [
  { href: '#home', label: '#home' },
  { href: '#projects', label: '#projects' },
  { href: '#about-me', label: '#about-me' },
  { href: '#contacts', label: '#contacts' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 bg-[var(--clr-foreground)] border-b border-gray-700">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="text-green-var font-bold tracking-wide">dev.eugenio</a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-teal-var hover:text-orange-var transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-2 text-sm">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="px-2 text-teal-var hover:text-orange-var transition cursor-pointer">
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-700">
          <nav className="mx-auto max-w-6xl px-6 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="px-2 py-1 rounded hover:bg-gray-800/50 text-teal-var hover:text-orange-var transition">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar


