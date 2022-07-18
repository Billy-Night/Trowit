
const ContactCard = (props) => {
    //I can map this component for each contact in the database
    //You can add style to this component
    return (
        <div>
            <img src={props.img} alt="img"/>
            <h2>{props.first_name} {props.last_name}</h2>
            <p>Job Title @ {props.company}</p>
        </div>
    );
}

export default ContactCard;