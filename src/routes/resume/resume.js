import "./resume.css";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-title">Resume/CV</div>
      <br></br>

      <div>
        <a href="https://drive.google.com/file/d/15xoMEnf9MN_cghyAuUk-UB_K4eUL9cPA/view?usp=sharing">
          Show Resume/cv
        </a>
      </div>

      <br></br>

      <div className="btn">
        <Link to="/">GO HOME</Link>
      </div>
    </div>
  );
}

export default Resume;
