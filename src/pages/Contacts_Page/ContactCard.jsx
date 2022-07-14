
const ContactCard = (props) => {
    //I can map this component for each contact in the database
    //You can add style to this component
    return (
        <div>
            <img src={props.img} alt="img"/>
            <h2>Name</h2>
            <p>Job Title</p>
            <p>This is each individual contact</p>
        </div>
    );
}

export default ContactCard;