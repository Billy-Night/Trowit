import React from 'react'
import "./SearchCard.css"

const SearchCard = ({keyword,setKeyword}) => {

    // const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem", margin: "2%", font: 'Nunito'};
    return (
      <input 
       className="barStyling"
       key="random1"
       value={keyword}
       placeholder={"Search Card"}
       onChange={(e) => setKeyword(e.target.value)}
      />
    );  
}

export default SearchCard