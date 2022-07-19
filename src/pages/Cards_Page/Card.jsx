

const Card = (props) => {

    return (
      <div className={props.className} style={{borderColor: `${props.colour}`}} onClick={() => props.action(props.id)}>
          <img src={props.img} alt="img"/>
          <p>{props.type}</p> 
      </div>
    );
};

export default Card;
