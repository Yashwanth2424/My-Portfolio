import { useRef, useState } from 'react'
import './Projects.css'
import { projects } from '../../data/projects'
import { CalendarIcon, ChartIcon, BoardIcon } from './ProjectIcon'

const ICONS = { calendar: CalendarIcon, chart: ChartIcon, board: BoardIcon }

const trackPointer = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--sx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--sy', `${event.clientY - rect.top}px`)
}

const Projects = () => {
  const [activeId, setActiveId] = useState(projects[0].id)
  const tabRefs = useRef({})

  const selectTab = (id) => {
    setActiveId(id)
    tabRefs.current[id]?.focus()
  }

  const handleKeyDown = (event, index) => {
    const lastIndex = projects.length - 1
    let nextIndex

    if (event.key === 'ArrowRight') nextIndex = index === lastIndex ? 0 : index + 1
    else if (event.key === 'ArrowLeft') nextIndex = index === 0 ? lastIndex : index - 1
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = lastIndex
    else return

    event.preventDefault()
    selectTab(projects[nextIndex].id)
  }

  return (
    <section id="projects" className="section section--alt projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-heading projects__heading">Selected work</h2>
        <p className="projects__intro">
          Applications I built and deployed myself. Select one to see how it works.
        </p>

        <div className="projects__tabs" role="tablist" aria-label="Projects">
          {projects.map((project, index) => {
            const isActive = project.id === activeId
            const Icon = ICONS[project.icon]
            return (
              <button
                key={project.id}
                ref={(node) => { tabRefs.current[project.id] = node }}
                type="button"
                role="tab"
                id={`tab-${project.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${project.id}`}
                tabIndex={isActive ? 0 : -1}
                className={`projects__tab ${isActive ? 'projects__tab--active' : ''}`}
                style={{ '--g1': project.gradient[0], '--g2': project.gradient[1] }}
                onClick={() => setActiveId(project.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                onPointerMove={trackPointer}
              >
                <span className="projects__tab-icon">
                  <Icon />
                </span>
                <span className="projects__tab-text">
                  <span className="projects__tab-name">{project.tabLabel}</span>
                  <span className="projects__tab-meta">{project.tabMeta}</span>
                </span>
                <span className="projects__tab-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            )
          })}
        </div>

        {projects.map((project) => (
          <div
            key={project.id}
            role="tabpanel"
            id={`panel-${project.id}`}
            aria-labelledby={`tab-${project.id}`}
            hidden={project.id !== activeId}
            className="project"
            onPointerMove={trackPointer}
          >
            <div className="project__summary">
              <p className="project__eyebrow">Case study</p>
              <h3 className="project__title">{project.title}</h3>
              <p className="project__tagline">{project.tagline}</p>

              <div className="project__links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link project__link--primary"
                  aria-label={`${project.title}: live demo (opens in a new tab)`}
                >
                  Live demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link project__link--secondary"
                  aria-label={`${project.title}: source code on GitHub (opens in a new tab)`}
                >
                  Code
                </a>
              </div>

              <ul className="project__stats" aria-label={`${project.tabLabel} key facts`}>
                {project.stats.map((stat) => (
                  <li key={stat.label} className="project__stat">
                    <span className="project__stat-value">{stat.value}</span>
                    <span className="project__stat-label">{stat.label}</span>
                  </li>
                ))}
              </ul>

              <ul className="project__stack" aria-label={`${project.title} tech stack`}>
                {project.stack.map((tech) => (
                  <li key={tech} className="project__tag">{tech}</li>
                ))}
              </ul>
            </div>

            <div className="project__details">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project__image"
                  width="1917"
                  height="929"
                  loading="lazy"
                />
              )}
              <dl className="project__facts">
                <div>
                  <dt>What it does</dt>
                  <dd>{project.what}</dd>
                </div>
                <div>
                  <dt>What I built</dt>
                  <dd>{project.built}</dd>
                </div>
                <div>
                  <dt>Key decisions</dt>
                  <dd>{project.decision}</dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
