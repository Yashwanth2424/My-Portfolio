import './Education.css'

const educationList = [
  {
    id: 1,
    degree: 'Master of Science — Web Engineering',
    institution: 'Technische Universität Chemnitz',
    location: 'Chemnitz, Germany',
    period: 'Oct 2025 — Present',
    grade: null,
    modules: ['XML & Web Services', 'Advanced Data Management', 'Software Service Engineering (REST, SOA)', 'Media Retrieval'],
    current: true,
  },
  {
    id: 2,
    degree: 'Bachelor of Science — Computer Science',
    institution: 'Government City College, Osmania University',
    location: 'Hyderabad, India',
    period: 'Jul 2021 — May 2024',
    grade: 'CGPA: 8.85 / 10.0',
    modules: ['Data Structures', 'Database Management Systems', 'Web Technologies', 'Mathematics & Statistics'],
    current: false,
  },
]

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education__inner">
        <div className="education__label">Education</div>
        <h2 className="education__heading">Academic Background</h2>
        <div className="education__list">
          {educationList.map((item) => (
            <div key={item.id} className={`education__card ${item.current ? 'education__card--current' : ''}`}>
              <div className="education__card-left">
                <span className="education__period">{item.period}</span>
                {item.current && <span className="education__badge">Current</span>}
              </div>
              <div className="education__card-right">
                <h3 className="education__degree">{item.degree}</h3>
                <p className="education__institution">{item.institution}</p>
                <p className="education__location">{item.location}</p>
                {item.grade && <p className="education__grade">{item.grade}</p>}
                <div className="education__modules">
                  {item.modules.map((mod) => (
                    <span key={mod} className="education__module">{mod}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education