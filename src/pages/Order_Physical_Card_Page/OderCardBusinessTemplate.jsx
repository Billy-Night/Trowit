const OderCardBusinessTemplate = (props) => {
  return (
    <div className="OC__sub-container3__price-table-and-buttons business">
      <div className="OC__sub-container3__price-frame business">
        <h3 className="OC__sub-container3___header business">{props.header}</h3>
        <div className="OC__sub-container3__price-frame__ctas business">
          <p className="OC__sub-container3__price-frame__cta business">
            {props.cta1}
          </p>
          <p className="OC__sub-container3__price-frame__cta business">
            {props.cta2}
          </p>
        </div>
      </div>
      {/* price & fees part in the page  */}
      {/* btn part in the page  */}
      <button className="OC__sub-container3__button business">
        {props.button}
      </button>
    </div>
  );
};

export default OderCardBusinessTemplate;
