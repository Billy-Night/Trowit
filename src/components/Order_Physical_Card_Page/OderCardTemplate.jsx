import React from 'react';

const OderCardTemplate = (props) => {
  return (
    <div className="OC__sub-container3__price-table-and-buttons">
      <div className="OC__sub-container3__price-frame">
        <h3 className="OC__sub-container3___header">{props.header}</h3>
        <p className="OC__sub-container3__price-frame__cta">{props.cta}</p>
        <ul className="OC__sub-container3__price-frame__benefits">
          <li className="OC__sub-container3__price-frame__single-benefit"></li>
          <li className="OC__sub-container3__price-frame__single-benefit">
            {props.benefit1}
          </li>
          <li className="OC__sub-container3__price-frame__single-benefit">
            {props.benefit2}
          </li>
          <li className="OC__sub-container3__price-frame__single-benefit">
            {props.benefit3}
          </li>
        </ul>
        <div className="OC__sub-container3__price-and-fees">
          <h4 className="OC__sub-container3__price">{props.price}</h4>
          <p className="OC__sub-container3__fee">+ {props.fee}</p>
        </div>
      </div>
      {/* price & fees part in the page  */}
      {/* btn part in the page  */}
      <button className="OC__sub-container3__button">{props.button}</button>
    </div>
  );
};

export default OderCardTemplate;
