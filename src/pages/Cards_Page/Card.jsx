// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const Card = (props) => {

//     return (
//         <div className="card">
//           <Link to={props.address}>
//           <img src={props.src} alt={props.alt} />
//           </Link>
//         </div>
//     );
// };

// export default Card;

//ToDo Billys approach to selecting an individual card.
//This gives the id of each individual card
//I think now we would need to do a request to the Database to show the card in regards to the id
const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(id);
    if (id === 3) {
      navigate("/cards/newcard");
    }
  };

  return (
    <div className="card">
      <img
        onClick={() => handleClick(props.id)}
        src={props.src}
        alt={props.alt}
        id={props.id}
      />
    </div>
  );
};

export default Card;
