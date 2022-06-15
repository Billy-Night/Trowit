
const Card = (props) => {

    return (
        <div className="card">
          <img src={props.src} alt={props.alt} />
        </div>
    );
};

export default Card;