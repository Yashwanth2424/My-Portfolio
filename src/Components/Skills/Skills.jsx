import './Skills.css'
import { skillGroups } from '../../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-heading skills__heading">What I work with</h2>
        <p className="skills__legend">
          <span className="skills__dot" aria-hidden="true"></span>
          Marked skills are used in the projects above.
        </p>

        <div className="skills__groups">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__group">
              <h3 className="skills__group-title">{group.category}</h3>
              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={`skills__pill ${skill.used ? 'skills__pill--used' : ''}`}
                  >
                    {skill.used && <span className="skills__dot" aria-hidden="true"></span>}
                    {skill.name}
                    {skill.used && <span className="visually-hidden"> (used in my projects)</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
