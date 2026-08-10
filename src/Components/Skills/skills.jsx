import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'React.js', 'Next.js 16', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'SWR'],
  },
  {
    category: 'Backend & Database',
    skills: ['Node.js', 'REST APIs', 'Prisma ORM', 'PostgreSQL', 'MySQL', 'JSON', 'XML/SOAP', 'Zod'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Vercel', 'Neon', 'VS Code', 'Resend', 'JWT Auth', 'Agile/Scrum'],
  },
  {
    category: 'Currently Learning',
    skills: ['NestJS', 'Google Cloud Platform', 'Terraform'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <div className="skills__label">Technical Skills</div>
        <h2 className="skills__heading">What I Work With</h2>
        <div className="skills__groups">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__group">
              <h3 className="skills__group-title">{group.category}</h3>
              <div className="skills__pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills