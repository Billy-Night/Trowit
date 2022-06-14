import './Settings.css';
import EditProfile from './EditProfile.jsx';
import SideNavBar from '../Side_NavBar/SideNavBar';

const Settings = () => {

    return (
        <div className="settings">

            <SideNavBar />
            <p>This is the settings component</p>
            <EditProfile />
        </div>
    );
};

export default Settings;