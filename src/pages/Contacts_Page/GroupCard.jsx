
import './GroupCard.css'
import CustomizedInputBox from '../../components/CustomizedInputBox/CustomizedInputBox';
import Layout from '../../components/Layout/Layout';

const GroupCard = () => {

//Todo this component size, shape and position can be defined, then I will add the content. If you need to check how then interact on the page just render multiple components

    return (

        <div className='group_card_container'>
            <CustomizedInputBox />
            <div className='gc_image_container'>
            </div>
            <h1>This is the group card component</h1>
        </div>

    )
};

export default GroupCard;