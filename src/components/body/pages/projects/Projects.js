import "./Projects.css";
import Card from "./Card";
import { SiRust, SiJavascript } from "react-icons/si";
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
      title: "SORTING VISUALIZER",
      description:
        "Sorting visualizer is a web application written in javascript it shows how sorting algorithms work! i learned alot about sorting with this project",
      link: "https://github.com/MustafaSalih1993/sorting-visualizer",
      logo: <SiJavascript />,
    },
    {
      title: "RSBLOCKS",
      description:
        "rsblocks is a usable status bar on linux showing system information and fetches weather, bitcoin prices and many more, it's configurable with a YAML configuration file, it's written in Rust programming language",
      link: "https://github.com/MustafaSalih1993/rsblocks",
      logo: <SiRust />,
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-title">Things i made !</div>
      <div className="cards-container">
        {myProjects.map((project) => {
          return (
            <Card
              title={project.title}
              to={project.link}
              logo={project.logo}
              description={project.description}
              linkTitle="View Source Code"
            />
          );
        })}
      </div>
      <div className="cards-end">
        <div className="cards-end-title">Want to see more projects?</div>
        <div className="cards-end-text">
          Check my Github account{" "}
          <a
            className="cards-end-link"
            href="https://github.com/MustafaSalih1993"
          >
            HERE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
