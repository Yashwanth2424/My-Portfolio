import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-bar-section">
     
      <div className="navbar-logo-section"></div>


     
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-list-items ${isMenuOpen ? "open" : ""}`}>
        <li><Link className="nav-list-item" to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link className="nav-list-item" to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link className="nav-list-item" to="/skills" onClick={toggleMenu}>Skills</Link></li>
        <li><Link className="nav-list-item" to="/projects" onClick={toggleMenu}>Projects</Link></li>
        {/* <li><Link className="nav-list-item" to="/contact" onClick={toggleMenu}>Contact</Link></li> */}
      </ul>

    </nav>
  );
};

export default Header;























// import { Link } from "react-router-dom";
// import "./Header.css"

// const Header = () => {
//   return (
//     <nav className="nav-bar-section">
//       <div className="navbar-logo-section">
//       </div>
//       <ul className="nav-list-items">
//         <li><Link className="nav-list-item" to="/">Home</Link></li>
//         <li><Link className="nav-list-item" to="/about">About</Link></li>
//         <li><Link className="nav-list-item" to="/skills">Skills</Link></li>
//         <li><Link className="nav-list-item" to="/projects">Projects</Link></li>
//         <li><Link className="nav-list-item" to="/contact">Contact</Link></li>
//       </ul>
//   </nav>
//   );
// };

// export default Header;
