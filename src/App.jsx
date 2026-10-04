import { useEffect, useRef, useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { Impressum, Datenschutz } from './Components/Legal/Legal'
import './App.css'

const LEGAL_PAGES = {
  '#/impressum': Impressum,
  '#/datenschutz': Datenschutz,
}

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const wasLegal = useRef(false)
  const LegalPage = LEGAL_PAGES[hash]

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (LegalPage) {
      window.scrollTo(0, 0)
    } else if (wasLegal.current) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }
    wasLegal.current = Boolean(LegalPage)
  }, [LegalPage, hash])

  return (
    <div className="app">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header key={LegalPage ? 'legal' : 'home'} />
      <main id="main">
        {LegalPage ? (
          <LegalPage />
        ) : (
          <>
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Education />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
