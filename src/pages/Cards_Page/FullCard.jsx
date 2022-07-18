
const FullCard = (props) => {

    return (
        <div>
            <h2>This is the full card component</h2>
            <img src="" alt="img"/>
            <h1>First Name: {props.first_name}</h1>
            <h2>Last Name: {props.last_name}</h2>
        </div>
    )
}

export default FullCard;