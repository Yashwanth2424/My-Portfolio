import { useState, useEffect } from 'react'
import './Header.css'

const NAV_ITEMS = ['about', 'skills', 'projects', 'education', 'contact']

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (event, id) => {
    event.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#hero" className="header__logo" onClick={(e) => handleNavClick(e, 'hero')}>
          TY
        </a>
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`header__nav-link ${activeSection === item ? 'header__nav-link--active' : ''}`}
              aria-current={activeSection === item ? 'true' : undefined}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
        <button
          className="header__menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`header__menu-icon ${isMenuOpen ? 'header__menu-icon--open' : ''}`}></span>
        </button>
      </div>
    </header>
  )
}

export default Header
