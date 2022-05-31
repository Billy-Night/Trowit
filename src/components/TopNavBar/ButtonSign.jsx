

import React from "react";
import { Link } from 'react-router-dom';
import './ButtonSign.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--outline-in'];

const SIZES = ['btn--medium', 'btn--large'];

const ButtonSign= ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) 
  ? buttonStyle 
  : STYLES(0)

  const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize
  : SIZES[0]


  return (
      
    <Link to='/sign-in' className="btn-mobile">
         <div>
            <p>This is the sign up page</p>
        </div>
      <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      >
        {children}
   
      </button>
    </Link>
  )
};

export default ButtonSign;
