import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";
import { mobileNavBackground, mobileNavColor } from "../../styles";

function MobileNavbar(props) {
  let { mobileNav, setMobileNav } = props;
  const animation = useSpring({ y: mobileNav ? 0 : -100 });
  return (
    <animated.nav
      className="mobile-nav"
      style={{
        background: mobileNavBackground,
        transform: animation.y.to((y) => `translate(0%, ${y}%)`),
      }}
    >
      <ul className="mobile-nav-links">
        <Link style={{ color: mobileNavColor }} to="/projects">
          <li onClick={() => setMobileNav(!mobileNav)}>PROJECTS</li>
        </Link>
        <Link style={{ color: mobileNavColor }} to="/about">
          <li onClick={() => setMobileNav(!mobileNav)}>ABOUT</li>
        </Link>
        <Link style={{ color: mobileNavColor }} to="/contact">
          <li onClick={() => setMobileNav(!mobileNav)}>CONTACT</li>
        </Link>
        <Link style={{ color: mobileNavColor }} to="/resume">
          <li onClick={() => setMobileNav(!mobileNav)}>Resume/CV</li>
        </Link>
      </ul>
    </animated.nav>
  );
}

export default MobileNavbar;
