import "./resume.css";
import { Link } from "react-router-dom";
import PdfViewer from "../../components/PdfViewer/PdfViewer";
import pdffile from "../../assets/Al-chalabi_Mustafa.pdf";
import { blueColor } from "../../styles";
import BottomToTop from "../../components/BottomToTop/BottomToTop";

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-title">Resume/CV</div>
      <div>
        <a
          style={{ color: blueColor }}
          href="https://drive.google.com/file/d/191phtzis2RH1Zv6Y3O8PRRhmDMXvzXQH/view?usp=sharing"
        >
          Download Resume/cv
        </a>
      </div>
      <PdfViewer url={pdffile}></PdfViewer>
      <div className="btn">
        <Link style={{ color: blueColor }} to="/">
          GO HOME
        </Link>
      </div>
      <BottomToTop/>
    </div>
  );
}

export default Resume;
