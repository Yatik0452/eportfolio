import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#landing', label: 'Home' },
  { href: '#resume', label: 'Resume' },
  { href: '#reflection', label: 'Reflection' },
  { href: '#cover', label: 'Cover Letter' },
]

export default function Navbar() {
  const [active, setActive] = useState('#landing')
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const ids = ['landing', 'resume', 'reflection', 'cover']
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive('#' + id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  const close = () => setDrawerOpen(false)

  return (
    <>
      <header className="topnav">
        <span className="topnav-logo">Yatik Juneja</span>
        <nav className="topnav-links">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={active === href ? 'active' : ''}>
              {label}
            </a>
          ))}
        </nav>
        <button className="hamburger" onClick={() => setDrawerOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </header>

      <nav className={`mob-drawer${drawerOpen ? ' open' : ''}`}>
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} className={active === href ? 'active' : ''} onClick={close}>
            {label}
          </a>
        ))}
      </nav>
    </>
  )
}
