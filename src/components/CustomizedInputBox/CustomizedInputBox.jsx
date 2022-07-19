import React from "react";
import "./CustomizedInputBox.css";

const CustomizedInputBox = (props) => (
  <span className="customized-input-box">
    {props.inputComponent ?? <input />}
    {props.faButtonClass && (
      <button
        type="submit"
        className={"fa ".concat(props.faButtonClass)}
      ></button>
    )}
  </span>
);

export default CustomizedInputBox;
