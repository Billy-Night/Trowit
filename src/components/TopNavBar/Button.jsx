
const Button = (props) => (
    <button className={props.style} onClick={props.action}>
      {props.text}
    </button>
  );
  
  export default Button;
  