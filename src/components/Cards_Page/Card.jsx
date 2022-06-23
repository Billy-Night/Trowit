import { Link } from "react-router-dom";


const Card = (props) => {

    return (
        <div className="card">
          <Link to={props.address}>
          <img src={props.src} alt={props.alt} />
          </Link>
        </div>
    );
};

export default Card;