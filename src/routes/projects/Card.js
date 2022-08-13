import "./Card.css";
import Button from "./Button";
import { cardBackground, cardFont } from "../../styles";

function Card(props) {
  return (
    <div
      style={{ background: cardBackground, color: cardFont }}
      className="card-container"
    >
      <div className="left">
        <div className="card-title">{props.title}</div>
        <div className="card-desc">{props.description}</div>
      </div>

      <div className="right">
        <div className="language-container">
          <div className="languages">Language used:</div>
          <div className="language-logo-container">{props.logo}</div>
        </div>
        <Button to={props.to} title={props.linkTitle} />
      </div>
    </div>
  );
}
export default Card;
