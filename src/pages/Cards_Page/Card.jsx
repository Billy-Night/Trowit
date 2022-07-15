
import { useNavigate } from "react-router-dom";


const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(id);
    if (id === 3999) {
      navigate("/cards/newcard");
    }
  };

    return (
      <div style={{borderColor: `${props.colour}`}} className="card" onClick={() => handleClick(props.id)}>
          <img src={props.img} alt="img"/>
          <p>{props.type}</p> 
      </div>
    );
};

export default Card;
