import React from 'react'
import "./SearchCard.css"

const SearchCard = ({keyword,setKeyword}) => {

    
    return (
      <div className='box'>
         {/* <span class="input-group-addon fa fa-search" id="basic-addon2"></span> */}
         <button class="fa fa-search">     </button>
      <input 
       className="barStyling"  
       key="random1"
       value={keyword}
       placeholder={"Search Card"}
      //  aria-describedby="basic-addon2"
       onChange={(e) => setKeyword(e.target.value)}
       
       
      />
      
   
   


      </div>
    );  
}

export default SearchCard