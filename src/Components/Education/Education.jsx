import './Education.css'

const educationList = [
  {
    id: 1,
    degree: 'M.Sc. Web Engineering',
    institution: 'Technische Universität Chemnitz',
    location: 'Chemnitz, Germany',
    period: 'Oct 2025 – Present',
    grade: null,
    modules: ['Current Trends in Web Engineering', 'Cloud & Web Applications', 'Databases and Object Orientation', 'Advanced Management of Data', 'XML', 'Media Retrieval', 'Seminar Web Engineering'],
    current: true,
  },
  {
    id: 2,
    degree: 'B.Sc. Computer Science',
    institution: 'Government City College, Osmania University',
    location: 'Hyderabad, India',
    period: 'Jul 2021 – May 2024',
    grade: 'CGPA 8.85 / 10.0',
    modules: ['Data Structures', 'Database Management Systems', 'Web Technologies', 'Mathematics & Statistics'],
    current: false,
  },
]

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-heading">Academic background</h2>

        <ol className="education__list">
          {educationList.map((item) => (
            <li
              key={item.id}
              className={`education__card ${item.current ? 'education__card--current' : ''}`}
            >
              <div className="education__meta">
                <span className="education__period">{item.period}</span>
                {item.current && <span className="education__badge">Current</span>}
              </div>
              <div>
                <h3 className="education__degree">{item.degree}</h3>
                <p className="education__institution">
                  {item.institution}, {item.location}
                </p>
                {item.grade && <p className="education__grade">{item.grade}</p>}
                <ul className="education__modules">
                  {item.modules.map((mod) => (
                    <li key={mod} className="education__module">{mod}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Education
