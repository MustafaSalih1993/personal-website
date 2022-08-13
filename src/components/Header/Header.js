import logo from "./logo-svg.svg";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header-container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <div
        onClick={() => props.setMobileNav(!props.mobileNav)}
        className="burger-btn"
      >
        {props.mobileNav ? <GrClose /> : <FaBars />}
      </div>
    </div>
  );
}

export default Header;
