import logo from "./logo.svg";
import "./Logo.css";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
function Logo(props) {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="logo" />
      <div
        onClick={() => props.setMobileNav(!props.mobileNav)}
        className="burger-btn"
      >
        {props.mobileNav ? <GrClose /> : <FaBars />}
      </div>
    </div>
  );
}

export default Logo;
