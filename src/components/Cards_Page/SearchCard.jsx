import React from 'react'
import "./SearchCard.css"

const SearchCard = ({keyword,setKeyword}) => {

    
    return (
      <div>
         {/* <span class="input-group-addon fa fa-search" id="basic-addon2"></span> */}
      
      <input 
       className="barStyling"  
       key="random1"
       value={keyword}
       placeholder={"Search Card"}
      //  aria-describedby="basic-addon2"
       onChange={(e) => setKeyword(e.target.value)}
       
       
      />
      
      <button class="fa fa-search">     </button>
   


      </div>
    );  
}

export default SearchCard