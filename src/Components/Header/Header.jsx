import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <button className="header__logo" onClick={() => scrollToSection('hero')}>
          TY
        </button>
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          {['about', 'skills', 'projects', 'education', 'contact'].map((item) => (
            <button
              key={item}
              className="header__nav-link"
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
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