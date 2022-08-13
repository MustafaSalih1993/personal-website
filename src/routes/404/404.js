import "./404.css";
import { Link } from "react-router-dom";
import { errorFontColor } from "../../styles";

function NotFound() {
  return (
    <div className="notfound-container">
      <div style={{ color: errorFontColor }} className="notfound-title">
        404
      </div>
      <div className="notfound-desc">page not found :(</div>
      <div className="btn">
        <Link to="/">GO HOME</Link>
      </div>
    </div>
  );
}

export default NotFound;
