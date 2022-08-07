import "./resume.css";
import { Link } from "react-router-dom";
// import PdfViewer from "../../components/PdfViewer/PdfViewer";
// import pdffile from "../../assets/Al-chalabi_Mustafa.pdf";
function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-title">Resume/CV</div>
      <br></br>

      <div>
        <a href="https://drive.google.com/file/d/191phtzis2RH1Zv6Y3O8PRRhmDMXvzXQH/view?usp=sharing">
          Show Resume/cv
        </a>
      </div>

      <br></br>

      <div className="btn">
        <Link to="/">GO HOME</Link>
      </div>
      {/* <PdfViewer url={pdffile}></PdfViewer> */}
    </div>
  );
}

export default Resume;
