import './Hero.css'

import profileImage from '/HeaderSectionPhotos/yash_Profile_image.jpeg'

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid"></div>
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">M.Sc. Web Engineering · TU Chemnitz</span>
          <span className="hero__status">
            <span className="hero__status-dot"></span>
            Open to Werkstudent roles · Germany
          </span>
          <h1 className="hero__name">Thalka<br />Yashwanth</h1>
          <h2 className="hero__title">Full-Stack Developer</h2>
          <p className="hero__bio">
            Building production-grade web applications with modern tools.
            Currently developing at the intersection of clean architecture,
            scalable APIs, and responsive interfaces.
          </p>
          <div className="hero__ctas">
            <button className="hero__cta hero__cta--primary" onClick={() => scrollToSection('projects')}>
              View Projects
            </button>
            <button className="hero__cta hero__cta--secondary" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </button>
          </div>
          <div className="hero__links">
            <a href="https://github.com/Yashwanth2424" target="_blank" rel="noopener noreferrer" className="hero__link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/thalka-yashwanth" target="_blank" rel="noopener noreferrer" className="hero__link">
              LinkedIn
            </a>
            <a href="mailto:thalka.yashwanth.dev@gmail.com" className="hero__link">
              Email
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Thalka_Yashwanth_Resume.pdf`}
              download="Thalka_Yashwanth_Resume.pdf"
              className="hero__link"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="hero__image-wrap">
          <div className="hero__image-ring"></div>
          <img
            src={profileImage}
            alt="Thalka Yashwanth"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero