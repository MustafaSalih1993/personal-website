import "./Main.css";
import Navbar from "./Navbar/Navbar";
import { useSpring, animated, config } from "react-spring";

function Main(props) {
  let { mobileNav, setMobileNav } = props;
  const spring = useSpring({
    config: config.gentle,
    from: {
      opacity: 0,
      transform: "perspective(600px) translate3d(100%,0,0) ",
    },
    to: {
      opacity: 1,
      transform: "perspective(600px) translate3d(0,0,0)",
    },
  });
  return (
    <div className="main-container">
      {mobileNav ? (
        <div></div>
      ) : (
        <Navbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      )}

      <div className="text-container">
        <animated.div style={spring} className="main-text">
          MUSTAFA
        </animated.div>
        <animated.div style={spring} className="sub-text">
          A SOFTWARE AND A WEB DEVELOPER
        </animated.div>
      </div>
    </div>
  );
}

export default Main;
