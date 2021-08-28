import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
