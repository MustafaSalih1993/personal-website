import "./Button.css";
import { buttonFont } from "../../styles";
function Button(props) {
  return (
    <a href={props.to}>
      <div className="button-container" /*onClick={props.onClick}*/>
        <div
          style={{
            color: buttonFont,
            border: "1px solid",
            borderRadius: "5px",
            padding: "5px",
          }}
          className="button-title"
        >
          {props.title}
        </div>
      </div>
    </a>
  );
}

export default Button;
