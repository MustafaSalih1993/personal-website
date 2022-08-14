import "./Projects.css";
import Card from "./Card";
import { SiRust, SiJavascript } from "react-icons/si";
import { animated, config, useTrail } from "react-spring";
import { blueColor } from "../../styles";
import BottomToTop from "../../components/BottomToTop/BottomToTop";

function Projects() {
  const myProjects = [
    {
      title: "TAI",
      description:
        "TAI stands for Terminal ascii images this project’s main goal is to convert images and gif animations into a text inside the terminal. this project used some algorithms i implemented like ostu’s image thresholding algorithm, braille text parsing etc. ",
      link: "https://github.com/MustafaSalih1993/tai",
      logo: <SiRust />,
    },

    {
      title: "RSBLOCKS",
      description:
        "rsblocks is a usable status bar on linux showing system information and fetches weather, bitcoin prices and many more, it's configurable with a YAML configuration file, it's written in Rust programming language",
      link: "https://github.com/MustafaSalih1993/rsblocks",
      logo: <SiRust />,
    },
    {
      title: "SNOTIFY",
      description:
        "a very simple tool that pushs song notifications from spotify client to desktop",
      link: "https://github.com/MustafaSalih1993/snotify",
      logo: <SiRust />,
    },
    {
      title: "FSI",
      description:
        "FSI (Fetch System Information) a cli tool to print useful informations about your system",
      link: "https://github.com/MustafaSalih1993/fsi",
      logo: <SiRust />,
    },
    {
      title: "SORTING VISUALIZER",
      description:
        "Sorting visualizer is a web application written in javascript it shows how sorting algorithms work! i learned alot about sorting with this project",
      link: "https://github.com/MustafaSalih1993/sorting-visualizer",
      logo: <SiJavascript />,
    },
    {
      title: "MAZE-GENERATION",
      description:
        "A fun maze generator web application using backtracking, stacks with a solve button",
      link: "https://github.com/MustafaSalih1993/maze-generation",
      logo: <SiJavascript />,
    },
  ];
  const cards = myProjects.map((project) => {
    return (
      <Card
        title={project.title}
        to={project.link}
        logo={project.logo}
        description={project.description}
        linkTitle="View Source Code"
      />
    );
  });
  const trails = useTrail(myProjects.length, {
    config: config.gentle,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
  });

  return (
    <div className="projects-container">
      <animated.div style={trails[0]} className="projects-title">
        Things i made !
      </animated.div>
      <div className="cards-container">
        {trails.map((animation, i) => {
          return (
            <animated.div key={i} style={animation}>
              {cards[i]}
            </animated.div>
          );
        })}
      </div>
      <div className="cards-end">
        <div className="cards-end-title">Want to see more projects?</div>
        <div className="cards-end-text">
          Check my Github account{" "}
          <a
            style={{ color: blueColor }}
            href="https://github.com/MustafaSalih1993"
          >
            HERE
          </a>
        </div>
      </div>
      <BottomToTop/>
    </div>
  );
}

export default Projects;
