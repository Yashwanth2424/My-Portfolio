import './Contact.css'

const svgProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const MailIcon = () => (
  <svg {...svgProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const LinkedInIcon = () => (
  <svg {...svgProps}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3" />
  </svg>
)

const GitHubIcon = () => (
  <svg {...svgProps}>
    <path d="M9 19c-4 1.3-4-2-6-2.5m12 4.5v-3.2a2.8 2.8 0 0 0-.8-2.2c2.6-.3 5.3-1.3 5.3-5.8a4.5 4.5 0 0 0-1.2-3.1 4.2 4.2 0 0 0-.1-3.1s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C6.0 4.2 5.0 4.5 5.0 4.5a4.2 4.2 0 0 0-.1 3.1A4.5 4.5 0 0 0 3.7 10.7c0 4.5 2.7 5.5 5.3 5.8a2.8 2.8 0 0 0-.8 2.2V21" />
  </svg>
)

const PhoneIcon = () => (
  <svg {...svgProps}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

const links = [
  {
    label: 'Email',
    value: 'thalka.yashwanth.dev@gmail.com',
    href: 'mailto:thalka.yashwanth.dev@gmail.com',
    Icon: MailIcon,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/thalka-yashwanth',
    href: 'https://linkedin.com/in/thalka-yashwanth',
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/Yashwanth2424',
    href: 'https://github.com/Yashwanth2424',
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: 'Phone',
    value: '+49 155 11314603',
    href: 'tel:+4915511314603',
    Icon: PhoneIcon,
    external: false,
  },
]

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-heading">Let&apos;s talk</h2>
        <p className="contact__sub">
          I am looking for a Werkstudent or internship role in web development in Germany.
          Write to me about an open position or just to connect. My CV is available on request
          and I can tailor it to your role.
        </p>

        <ul className="contact__tags">
          <li>20 h/week from 15 Oct 2026</li>
          <li>Open to relocate</li>
          <li>English B2 · German B1</li>
        </ul>

        <ul className="contact__cards">
          {links.map(({ label, value, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                className="contact__card"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact__icon">
                  <Icon />
                </span>
                <span className="contact__info">
                  <span className="contact__card-label">{label}</span>
                  <span className="contact__card-value">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
