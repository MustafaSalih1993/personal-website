import "./Card.css";
import Button from "./Button";
function Card(props) {
  return (
    <div className="card-container">
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
