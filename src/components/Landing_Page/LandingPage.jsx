import TopNavbar from '../TopNavBar/TopNavbar.jsx';
import HeroSection from './Hero_Section/HeroSection.jsx'
import ImpressYourPeers from './Impress_your_peers_section/ImpressYourPeers.jsx';
// import LandingPageFeatures from './Features_section/LandingPageFeatures.jsx';

const LandingPage = () => {

    return (
        <div>
            <TopNavbar />
            <HeroSection />
            <ImpressYourPeers />
            {/* <LandingPageFeatures /> */}

        </div>
    );
}

export default LandingPage;