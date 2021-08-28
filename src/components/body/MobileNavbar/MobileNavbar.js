import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";

function MobileNavbar(props) {
  let { mobileNav, setMobileNav } = props;
  const animation = useSpring({ y: mobileNav ? 0 : -100 });
  return (
    <animated.nav
      className="mobile-nav"
      style={{
        transform: animation.y.to((y) => `translate(0%, ${y}%)`),
      }}
    >
      <ul className="mobile-nav-links">
        <Link to="/projects">
          <li onClick={() => setMobileNav(!mobileNav)}>PROJECTS</li>
        </Link>
        <Link to="/about">
          <li onClick={() => setMobileNav(!mobileNav)}>ABOUT</li>
        </Link>
        <Link to="/contact">
          <li onClick={() => setMobileNav(!mobileNav)}>CONTACT</li>
        </Link>
      </ul>
    </animated.nav>
  );
}

export default MobileNavbar;
