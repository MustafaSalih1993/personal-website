import "./Main.css";
import { animated, useSpring } from "react-spring";
function Main(props) {
  let { mobileNav, setMobileNav } = props;
  const animation = useSpring({ y: mobileNav ? 0 : -100 });
  return (
    <div className="main-container">
      {mobileNav ? (
        <animated.nav
          className="mobile-nav"
          style={{
            transform: animation.y.to((y) => `translate(0%, ${y}%)`),
          }}
        >
          <ul className="mobile-nav-links">
            <li onClick={() => setMobileNav(!mobileNav)}>PROJECTS</li>
            <li onClick={() => setMobileNav(!mobileNav)}>ABOUT</li>
            <li onClick={() => setMobileNav(!mobileNav)}>CONTACT</li>
          </ul>
        </animated.nav>
      ) : (
        <nav className="nav-container">
          <ul>
            <li>PROJECTS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      )}

      <div className="text-container">
        <div className="main-text">MUSTAFA</div>
        <div className="sub-text">A SOFTWARE AND A WEB DEVELOPER</div>
      </div>
    </div>
  );
}

export default Main;
