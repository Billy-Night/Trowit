import ImpressYourPeers from '../Impress_your_peers_section/ImpressYourPeers';
import LandingPageFeatures from '../features_section/LandingPageFeatures';

const LandingPageHeroSection = () => {

    return (
        <div>
            <div>
                <p>This is the landing page hero section</p>
            </div>
            <div>
                <ImpressYourPeers />
                <LandingPageFeatures />
            </div>
        </div>
    );
};

export default LandingPageHeroSection;