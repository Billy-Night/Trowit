import React from 'react';
import './Scroll_Down_Arrow.css';

const Scroll_Down_Arrow = () => {
  return (
    <div className="HS__scroll-arrow">
      <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  );
};

export default Scroll_Down_Arrow;
