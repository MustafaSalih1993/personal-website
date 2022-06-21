import "./Button.css";

function Button(props) {
  return (
    <a href={props.to}>
      <div className="button-container" /*onClick={props.onClick}*/>
        <div className="button-title">{props.title}</div>
      </div>
    </a>
  );
}

export default Button;
