import './About.css'

const facts = [
  { label: 'Studying', value: 'M.Sc. Web Engineering, TU Chemnitz' },
  { label: 'Based in', value: 'Chemnitz, originally from Hyderabad' },
  { label: 'Languages', value: 'English B2, German B1' },
  { label: 'Availability', value: '20 h/week from 15 Oct 2026' },
  { label: 'Relocation', value: 'Open to relocate within Germany' },
]

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-heading">I build web apps and ship them</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I am a Web Engineering master&apos;s student at TU Chemnitz. I enjoy working on the
              whole application, from the database and API to the interface, and I deploy what
              I build so it can be used, not only run on my laptop.
            </p>
            <p>
              My three projects cover different sides of the job. MockMentor is a booking
              platform with login, user roles and email notifications. The road accidents
              project imports about 1.5 million public records into PostgreSQL. The job tracker
              is a TypeScript app I use for my own applications.
            </p>
            <p>
              I am looking for a Werkstudent or internship role in frontend or full-stack web
              development, where I can learn from a team and contribute from the first weeks.
            </p>
          </div>

          <dl className="about__facts glass">
            {facts.map((fact) => (
              <div key={fact.label} className="about__fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
