import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">Thalka Yashwanth</span>
        <nav className="footer__links" aria-label="Legal">
          <a href="#/impressum">Impressum</a>
          <a href="#/datenschutz">Datenschutz</a>
        </nav>
        <span className="footer__copy">
          © {new Date().getFullYear()} · Built with React and Vite
        </span>
      </div>
    </footer>
  )
}

export default Footer
