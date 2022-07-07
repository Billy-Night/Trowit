import "./InformationButton.css";

const InformationButton = (props) => {
  return (
    <div className="information-button-base">
      {props.svg}
      <p>{props.label}</p>
    </div>
  );
};

export default InformationButton;
