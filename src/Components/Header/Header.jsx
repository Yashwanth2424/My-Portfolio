// import { FaLaptopCode } from "react-icons/fa";
import "./Header.css"

const Header = () => {
  return (
    <nav className="nav-bar-section">
      <div className="navbar-logo-section">
      </div>
      <ul className="nav-list-items">
        <li><a href="#about" className="nav-list-item">Home</a></li>
        <li><a href="#about" className="nav-list-item">About</a></li>
        <li><a href="#skills" className="nav-list-item">Skills</a></li>
        <li><a href="#projects" className="nav-list-item">Projects</a></li>
        <li><a href="#contact" className="nav-list-item">Contact</a></li>
      </ul>
  </nav>
  );
};

export default Header;
