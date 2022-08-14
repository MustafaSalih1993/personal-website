import "./About.css";
import image from "./mustafa.jpg";
import { useSpring, animated, config } from "react-spring";
import BottomToTop from "../../components/BottomToTop/BottomToTop";

function About() {
  const fromLeft = useSpring({
    config: config.gentle,
    from: { transform: "translate3d(-100%,0,0)", opacity: 0 },
    to: { transform: "translate3d(0,0,0)", opacity: 1 },
  });
  const fromRight = useSpring({
    config: config.gentle,
    from: { transform: "translate3d(100%,0,0)", opacity: 0 },
    to: { transform: "translate3d(0,0,0)", opacity: 1 },
  });

  return (
    <div className="about-container">
      <div className="about-hero-container">
        <animated.div style={fromLeft} className="about-hero-text">
          <div className="about-hero-title">MUSTAFA</div>
          <p>
            An Iraqi dev based in Helsinki, Hard working problem solver, found
            the passion for programming a couple years ago and currently trying
            to make this hobby into a productive career.
          </p>
        </animated.div>

        <animated.div style={fromRight} className="about-image-container">
          <div className="image-overlay"></div>
          <img className="img" src={image} alt="The Man" />
        </animated.div>
      </div>

      <div className="skills-card-container">
        <div className="skills-title">Skills</div>
        <div className="skills-content-container">
          <div className="skills">
            <div>Rust</div>
            <div>Javascript</div>
            <div>C</div>
          </div>
          <div className="skills">
            <div>React.js</div>
            <div>Vue.js</div>
            <div>Node.js</div>
          </div>
          <div className="skills">
            <div>SQL</div>
            <div>Postgresql</div>
            <div>MongoDB</div>
          </div>
          <div className="skills">
            <div>Linux</div>
            <div>Html</div>
            <div>Css</div>
          </div>
        </div>
      </div>
      <BottomToTop/>
    </div>
  );
}

export default About;
