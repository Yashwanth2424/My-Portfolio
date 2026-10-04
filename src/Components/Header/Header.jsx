import { useState, useEffect, useRef } from 'react'
import './Header.css'

const NAV_ITEMS = ['projects', 'skills', 'about', 'education', 'contact']

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

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

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 769px)')
    const handleChange = (event) => {
      if (event.matches) setIsMenuOpen(false)
    }
    desktopQuery.addEventListener('change', handleChange)
    return () => desktopQuery.removeEventListener('change', handleChange)
  }, [])

  const handleNavClick = (event, id) => {
    setIsMenuOpen(false)
    if (window.location.hash.startsWith('#/')) return
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header" ref={headerRef}>
      <div className="header__inner">
        <a
          href="#hero"
          className="header__logo"
          aria-label="TY, Thalka Yashwanth, back to top"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          TY
        </a>
        <nav
          id="primary-nav"
          aria-label="Main"
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`header__nav-link ${activeSection === item ? 'header__nav-link--active' : ''}`}
              aria-current={activeSection === item ? 'location' : undefined}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
        <button
          ref={menuButtonRef}
          type="button"
          className="header__menu-btn"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
        >
          <span className={`header__menu-icon ${isMenuOpen ? 'header__menu-icon--open' : ''}`}></span>
        </button>
      </div>
    </header>
  )
}

export default Header
