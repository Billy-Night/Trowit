import TopNavbar from '../TopNavBar/TopNavbar.jsx';
import HeroSection from './Hero_Section/HeroSection.jsx'
import ImpressYourPeers from '../Landing_Page/Impress_your_peers_section/ImpressYourPeers';
import LandingPageFeatures from '../Landing_Page/Features_section/LandingPageFeatures';

const LandingPage = () => {

    return (
        <div>
            <TopNavbar />
            <HeroSection />
            <ImpressYourPeers />
            <LandingPageFeatures />
        </div>
    );
}

export default LandingPage;