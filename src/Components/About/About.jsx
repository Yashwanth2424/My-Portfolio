import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__label">About Me</div>
        <div className="about__content">
          <div className="about__left">
            <h2 className="about__heading">
              Turning complex problems into clean, working software.
            </h2>
          </div>
          <div className="about__right">
            <p className="about__para">
              I am a full-stack developer pursuing my Masters in Web Engineering at TU Chemnitz, Germany.
              My focus is on building production-ready web applications — not prototypes.
            </p>
            <p className="about__para">
              My most recent project, MockMentor, is a fully deployed interview booking platform
              with role-based access, JWT authentication, real-time scheduling, and automated email
              notifications. It demonstrates my ability to architect, build, and ship a complete
              full-stack application independently.
            </p>
            <p className="about__para">
              I work with Next.js, React, Node.js, PostgreSQL, and Prisma. I write clean,
              maintainable code with attention to security, performance, and scalability.
            </p>
            <p className="about__para">
              Outside of code, I enjoy cricket and reading — both teach you that consistency
              beats intensity.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">20+</span>
                <span className="about__stat-label">API Endpoints Built</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">3</span>
                <span className="about__stat-label">Roles Architected</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">1</span>
                <span className="about__stat-label">Production Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About