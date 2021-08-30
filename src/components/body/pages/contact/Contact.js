import "./Contact.css";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

import { animated, useTrail, config, useSpring } from "react-spring";
const myLinks = [
  { link: "mailto:mustafasalih1991@gmail.com", icon: <AiOutlineMail /> },
  { link: "https://github.com/mustafasalih1993", icon: <AiOutlineGithub /> },
  { link: "https://www.instagram.com/iq.code/", icon: <AiOutlineInstagram /> },
];
function Contact() {
  const trails = useTrail(3, {
    config: config.gentle,
    from: { color: "#ffffff", transform: "translate3d(0,-50%,0)" },
    to: { color: "#512b58", transform: "translate3d(0,0,0)" },
  });
  const opacity = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  return (
    <div className="contact-container">
      <animated.div className="contact-title" style={opacity}>
        You Can Find Me On:
      </animated.div>
      <div className="contact-box">
        {trails.map((animation, i) => {
          return (
            <animated.div className="contact-item" key={i} style={animation}>
              <animated.a style={animation} href={myLinks[i].link}>
                {myLinks[i].icon}
              </animated.a>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
