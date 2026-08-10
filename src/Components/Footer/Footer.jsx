import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__name">Thalka Yashwanth</span>
        <span className="footer__copy">© {new Date().getFullYear()} · Built with React & Vite</span>
      </div>
    </footer>
  )
}

export default Footer