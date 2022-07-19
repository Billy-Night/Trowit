import React from "react";
import CustomizedInputBox from "../../components/CustomizedInputBox/CustomizedInputBox";

const SearchCard = ({ keyword, setKeyword }) => {
  return (
    <form>
      <CustomizedInputBox
        faButtonClass="fa-search"
        inputComponent={
          <input
            // className="barStyling"
            key="random1"
            type="search"
            value={keyword}
            placeholder="Search"
            //  aria-describedby="basic-addon2"
            onChange={(e) => setKeyword(e.target.value)}
          />
        }
      >
        {/* <span class="input-group-addon fa fa-search" id="basic-addon2"></span> */}
        {/* <button class="fa fa-search">     </button> */}
      </CustomizedInputBox>
    </form>
  );
};

export default SearchCard;
