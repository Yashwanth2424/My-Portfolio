import { useEffect, useRef } from 'react'
import './Hero.css'
import heroPhoto from '../../assets/HeroPhotos/hero-sample.webp'

const MAX_TILT = 8
const MAX_SHIFT = 14
const AVAILABLE_FROM = new Date('2026-10-15')
const MOCKMENTOR_URL = 'https://mockmentor-flame.vercel.app/'
const ACCIDENTS_URL = 'https://open-data-road-accidents.onrender.com'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const Hero = () => {
  const availability =
    new Date() >= AVAILABLE_FROM
      ? 'Available now'
      : `From ${AVAILABLE_FROM.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`
  const heroRef = useRef(null)
  const showcaseRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const showcase = showcaseRef.current
    if (!hero || !showcase) return

    const canTrack = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    )
    if (!canTrack.matches) return

    let frame = 0

    const handleMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const heroRect = hero.getBoundingClientRect()
        hero.style.setProperty('--mx', `${event.clientX - heroRect.left}px`)
        hero.style.setProperty('--my', `${event.clientY - heroRect.top}px`)

        const rect = showcase.getBoundingClientRect()
        const dx = clamp((event.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2), -1, 1)
        const dy = clamp((event.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2), -1, 1)

        showcase.style.setProperty('--tilt-x', `${-dy * MAX_TILT}deg`)
        showcase.style.setProperty('--tilt-y', `${dx * MAX_TILT}deg`)
        showcase.style.setProperty('--shift-x', `${-dx * MAX_SHIFT}px`)
        showcase.style.setProperty('--shift-y', `${-dy * MAX_SHIFT}px`)
      })
    }

    const handleLeave = () => {
      cancelAnimationFrame(frame)
      showcase.style.setProperty('--tilt-x', '0deg')
      showcase.style.setProperty('--tilt-y', '0deg')
      showcase.style.setProperty('--shift-x', '0px')
      showcase.style.setProperty('--shift-y', '0px')
    }

    hero.addEventListener('pointermove', handleMove)
    hero.addEventListener('pointerleave', handleLeave)
    return () => {
      cancelAnimationFrame(frame)
      hero.removeEventListener('pointermove', handleMove)
      hero.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__dots" aria-hidden="true"></div>
      <div className="hero__spotlight" aria-hidden="true"></div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">M.Sc. Web Engineering · TU Chemnitz</span>
          <h1 className="hero__name">Thalka<br />Yashwanth</h1>
          <p className="hero__title">Frontend &amp; Full-Stack Web Developer</p>
          <p className="hero__bio">
            I build full-stack web apps with React, Next.js, Node.js and PostgreSQL,
            from the database to the interface.
          </p>

          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true"></span>
            Open to Werkstudent and internship roles in Germany
          </p>
          <ul className="hero__facts">
            <li>20 h/week · {availability}</li>
            <li>Chemnitz · open to relocate</li>
            <li aria-label="English B2, German B1">EN B2 · DE B1</li>
          </ul>

          <div className="hero__ctas">
            <a href="#projects" className="hero__cta hero__cta--primary">View projects</a>
            <a href="mailto:thalka.yashwanth.dev@gmail.com" className="hero__cta hero__cta--secondary">Email me</a>
          </div>
          <div className="hero__links">
            <a href="https://github.com/Yashwanth2424" target="_blank" rel="noopener noreferrer" className="hero__link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/thalka-yashwanth" target="_blank" rel="noopener noreferrer" className="hero__link">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__showcase" ref={showcaseRef}>
          <a
            href={ACCIDENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__chip hero__chip--top"
          >
            1.5M records · open-data ETL
          </a>
          <div className="hero__photo">
            <img
              src={heroPhoto}
              alt="Portrait of Thalka Yashwanth"
              className="hero__photo-image"
              width="1024"
              height="987"
              fetchPriority="high"
            />
          </div>
          <a
            href={MOCKMENTOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__chip hero__chip--bottom"
          >
            <span className="hero__status-dot" aria-hidden="true"></span>
            MockMentor · live on Vercel
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
