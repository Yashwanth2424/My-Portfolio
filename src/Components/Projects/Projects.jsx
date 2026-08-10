import './Projects.css'
import mockmentorImage from '../../assets/ProjectsPhotos/mockmentor.png'

const featuredProject = {
  tag: 'Featured Project',
  title: 'MockMentor',
  image: mockmentorImage,
  desc: 'A production-grade full-stack interview booking platform connecting students with mentors. Features role-based access for Student, Mentor, and Admin roles, real-time slot conflict detection, automated email notifications via Resend, and a complete interview lifecycle management system.',
  highlights: ['20+ API Endpoints', 'JWT + HTTP-only Cookies', 'Rate Limiting & Zod Validation', 'Deployed on Vercel'],
  stack: ['Next.js 16', 'React', 'PostgreSQL', 'Prisma', 'SWR', 'Resend', 'Neon', 'Zod'],
  links: [
    { label: 'Live Demo', href: 'https://mockmentor-flame.vercel.app/', variant: 'primary' },
    { label: 'View Code', href: 'https://github.com/Yashwanth2424/mockmentor', variant: 'secondary' },
  ],
}

const projectList = [
  {
    id: 'job-tracker',
    title: 'Job Application Tracker',
    desc: 'A full-stack application built entirely in TypeScript with type-safe API routes, JWT authentication, and middleware-level route protection. Features a 7-state status workflow with automated status-history tracking and a real-time analytics dashboard validated with Zod. Actively used to track 15+ of my own job applications — including diagnosing and fixing a production PostgreSQL connectivity failure on Vercel Edge Runtime by migrating to a Prisma driver-adapter pattern.',
    stack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT', 'Zod'],
    links: [
      { label: 'Live →', href: 'https://job-tracker-puce-eight-95.vercel.app/' },
      { label: 'GitHub →', href: 'https://github.com/Yashwanth2424/job-tracker' },
    ],
  },
  {
    id: 'road-accidents',
    title: 'Open Data Road Accidents Platform',
    desc: 'An ETL pipeline transforming German open road-accident datasets into a structured PostgreSQL database, with a REST API and dashboard for querying, filtering, and visualizing the data.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'ETL', 'REST APIs'],
    links: [
      { label: 'GitHub →', href: 'https://github.com/Yashwanth2424/open-data-road-accidents' },
    ],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <div className="projects__label">Projects</div>
        <h2 className="projects__heading">Things I've Built</h2>

        <div className="projects__featured">
          {featuredProject.image && (
            <div className="projects__featured-media">
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} landing page`}
                className="projects__featured-image"
              />
            </div>
          )}
          <div className="projects__featured-content">
            <span className="projects__featured-tag">{featuredProject.tag}</span>
            <h3 className="projects__featured-title">{featuredProject.title}</h3>
            <p className="projects__featured-desc">{featuredProject.desc}</p>

            <div className="projects__featured-highlights">
              {featuredProject.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>

            <div className="projects__featured-stack">
              {featuredProject.stack.map((tech) => (
                <span key={tech} className="projects__tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="projects__featured-links">
              {featuredProject.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`projects__link projects__link--${link.variant}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="projects__grid">
          {projectList.map((project) => (
            <div key={project.id} className="projects__card">
              <div className="projects__card-header">
                <h3 className="projects__card-title">{project.title}</h3>

                <div className="projects__card-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <p className="projects__card-desc">{project.desc}</p>

              <div className="projects__card-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="projects__card-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
