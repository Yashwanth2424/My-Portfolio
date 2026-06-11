import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <div className="projects__label">Projects</div>
        <h2 className="projects__heading">Things Ive Built</h2>

        <div className="projects__featured">
          <div className="projects__featured-content">
            <span className="projects__featured-tag">Featured Project</span>
            <h3 className="projects__featured-title">MockMentor</h3>
            <p className="projects__featured-desc">
              A production-grade full-stack interview booking platform connecting students
              with mentors. Features role-based access for Student, Mentor, and Admin roles,
              real-time slot conflict detection, automated email notifications via Resend,
              and a complete interview lifecycle management system.
            </p>
            <div className="projects__featured-highlights">
              <span>20+ API Endpoints</span>
              <span>JWT + HTTP-only Cookies</span>
              <span>Rate Limiting & Zod Validation</span>
              <span>Deployed on Vercel</span>
            </div>

            <div className="projects__featured-stack">
              {['Next.js 16', 'React', 'PostgreSQL', 'Prisma', 'SWR', 'Resend', 'Neon', 'Zod'].map((tech) => (
                <span key={tech} className="projects__tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="projects__featured-links">
              <a
                href="https://mockmentor-flame.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link projects__link--primary"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Yashwanth2424/mockmentor"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link projects__link--secondary"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="projects__grid">
          <div className="projects__card">
            <div className="projects__card-header">
              <h3 className="projects__card-title">Text Translator</h3>

              <a
                href="https://github.com/Yashwanth2424/Text-Translator-WebPage.git"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__card-link"
              >
                GitHub →
              </a>
            </div>

            <p className="projects__card-desc">
              A React-based translation app integrating third-party REST APIs for
              real-time multilingual text translation with asynchronous data handling
              and a fully responsive interface.
            </p>

            <div className="projects__card-stack">
              {['React.js', 'REST API', 'JavaScript', 'CSS3'].map((tech) => (
                <span key={tech} className="projects__card-tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="projects__card">
            <div className="projects__card-header">
              <h3 className="projects__card-title">Memory Match Game</h3>

              <a
                href="https://yashwanth2424.github.io/Match_Game/"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__card-link"
              >
                Live →
              </a>
            </div>

            <p className="projects__card-desc">
              A browser-based memory card game built with vanilla JavaScript.
              Applies core DOM manipulation, event handling, and game logic
              without any external libraries.
            </p>

            <div className="projects__card-stack">
              {['JavaScript', 'DOM API', 'HTML5', 'CSS3'].map((tech) => (
                <span key={tech} className="projects__card-tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects