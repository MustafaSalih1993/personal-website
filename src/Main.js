import "./Main.css";
import Navbar from "./components/Navbar/Navbar";
import { useSpring, animated, config } from "react-spring";

function Main(props) {
  let { mobileNav, setMobileNav } = props;
  const spring = useSpring({
    config: config.gentle,
    from: {
      opacity: 0,
      transform: "translate3d(0,100%,0) ",
      color: "#2c003e",
      strokeDasharray: 100,
      strokeDashoffset: 100,
    },
    to: {
      opacity: 1,
      transform: "translate3d(0,0,0)",
      color: "#ffa372",
      strokeDasharray: 0,
      strokeDashoffset: 0,
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
