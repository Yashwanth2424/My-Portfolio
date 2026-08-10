import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__label">Contact</div>
        <h2 className="contact__heading">Let's Work Together</h2>

        <p className="contact__sub">
          I am currently looking for a Werkstudent position in web development in Germany.
          If you have an opportunity or just want to connect, I love to hear from you.
        </p>

        <div className="contact__meta">
          <span className="contact__meta-pill">German — B1</span>
          <span className="contact__meta-pill">English — B2 (Fluent)</span>
          <span className="contact__meta-pill">Available 20h/week · Remote (Germany-wide)</span>
        </div>

        <div className="contact__cards">
          <a
            href="mailto:thalka.yashwanth.dev@gmail.com"
            className="contact__card"
          >
            <div className="contact__card-icon">✉</div>
            <div className="contact__card-info">
              <span className="contact__card-label">Email</span>
              <span className="contact__card-value">
                thalka.yashwanth.dev@gmail.com
              </span>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/thalka-yashwanth"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <div className="contact__card-icon">in</div>
            <div className="contact__card-info">
              <span className="contact__card-label">LinkedIn</span>
              <span className="contact__card-value">
                linkedin.com/in/thalka-yashwanth
              </span>
            </div>
          </a>

          <a
            href="https://github.com/Yashwanth2424"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <div className="contact__card-icon">gh</div>
            <div className="contact__card-info">
              <span className="contact__card-label">GitHub</span>
              <span className="contact__card-value">
                github.com/Yashwanth2424
              </span>
            </div>
          </a>

          <a
            href="tel:+4915511314603"
            className="contact__card"
          >
            <div className="contact__card-icon">☎</div>
            <div className="contact__card-info">
              <span className="contact__card-label">Phone</span>
              <span className="contact__card-value">
                +49 155 11314603
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact