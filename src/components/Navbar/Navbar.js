import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTrail, animated, config } from "react-spring";
import { blackColor } from "../../styles";

const navLinks = [
  { name: "PROJECTS", to: "/projects" },
  { name: "ABOUT", to: "/about" },
  { name: "CONTACT", to: "/contact" },
  { name: "Resume/CV", to: "/resume" },
];

function Navbar() {
  const trails = useTrail(navLinks.length, {
    config: config.gentle,
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
  });
  return (
    <nav className="nav-container">
      <ul>
        {trails.map((styles, i) => (
          <animated.li style={styles} key={i}>
            <Link style={{ color: blackColor }} to={navLinks[i].to}>
              {navLinks[i].name}
            </Link>
          </animated.li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
