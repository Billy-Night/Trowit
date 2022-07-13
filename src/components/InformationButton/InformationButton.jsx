import "./InformationButton.css";

const InformationButton = (props) => {
  return (
    <div className="information-button-base" onClick={props.onClick}>
      {props.svg}
      <p>{props.label}</p>
    </div>
  );
};

export default InformationButton;
