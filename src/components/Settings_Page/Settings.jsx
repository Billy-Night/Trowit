import './Settings.css';
import EditProfile from './EditProfile.jsx';
import SideNavBar from '../Side_NavBar/SideNavBar';

const Settings = () => {

    return (
        <div className="settings">

            <SideNavBar />
            <p className='title'> Settings</p>
            <EditProfile />
        </div>
    );
};

export default Settings;