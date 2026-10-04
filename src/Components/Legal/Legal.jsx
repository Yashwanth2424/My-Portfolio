import './Legal.css'
import { owner, lastUpdated } from '../../data/legal'

const renderLegal = (title, children) => (
  <section className="section legal">
    <div className="container legal__inner">
      <a href="#hero" className="legal__back">← Back to portfolio</a>
      <h1 className="section-heading">{title}</h1>
      <div className="legal__body glass">{children}</div>
    </div>
  </section>
)

export const Impressum = () =>
  renderLegal(
    'Impressum',
    <>
    <h2>Information according to § 5 DDG</h2>
    <p>
      {owner.name}
      {owner.addressLines.map((line) => (
        <span key={line}>
          <br />
          {line}
        </span>
      ))}
    </p>

    <h2>Contact</h2>
    <p>
      Email: <a href={`mailto:${owner.email}`}>{owner.email}</a>
      <br />
      Phone: <a href={`tel:${owner.phone.replace(/\s/g, '')}`}>{owner.phone}</a>
    </p>

    <h2>Responsible for content</h2>
    <p>Responsible according to § 18 (2) MStV: {owner.name}, address as above.</p>

    <h2>About this website</h2>
    <p>
      This is a personal portfolio website. It does not sell anything and has no user accounts.
    </p>
    </>,
  )

export const Datenschutz = () =>
  renderLegal(
    'Datenschutz (Privacy policy)',
    <>
    <h2>Who is responsible</h2>
    <p>
      {owner.name}, contact: <a href={`mailto:${owner.email}`}>{owner.email}</a>. The full
      address is in the <a href="#/impressum">Impressum</a>.
    </p>

    <h2>Hosting</h2>
    <p>
      This website is hosted on GitHub Pages (GitHub Inc., a Microsoft company). When you open
      the site, GitHub processes technical data such as your IP address, date and time, and the
      page requested, so that the page can be delivered and kept secure. This data may be
      processed outside the EU, for example in the USA. I have no access to these server logs.
      The legal basis is my legitimate interest in a working website (Art. 6 (1) (f) GDPR).
    </p>

    <h2>No cookies and no tracking</h2>
    <p>
      This website does not use cookies, analytics, advertising or contact forms. The font is
      stored on the same server, so no data is sent to font providers.
    </p>

    <h2>Contact by email or phone</h2>
    <p>
      If you write or call me, I use your details only to answer you. I delete them when the
      conversation is finished and no legal duty requires me to keep them (Art. 6 (1) (b) and (f)
      GDPR).
    </p>

    <h2>Links to other websites</h2>
    <p>
      The site links to GitHub, LinkedIn and to project demos hosted on Vercel and Render. These
      services have their own privacy policies and I have no influence on how they handle data.
    </p>

    <h2>Your rights</h2>
    <p>
      You have the right to access, correct, delete and restrict your data, to receive it in a
      portable format, and to object to its processing. You can also complain to the data
      protection authority responsible for your place of residence. To use your rights, write to
      me by email.
    </p>

    <p className="legal__date">Last updated: {lastUpdated}</p>
    </>,
  )
