import TopNavbar from '../TopNavBar/TopNavbar.jsx';
import HeroSection from './Hero_Section/HeroSection.jsx';
import ImpressYourPeers from './Impress_your_peers_section/ImpressYourPeers.jsx';
import LPFeatures from './Features_section/LPFeatures.jsx';

const LandingPage = () => {
  return (
    <div>
      <TopNavbar />
      <HeroSection />
      <LPFeatures />
      <ImpressYourPeers />
    </div>
  );
};

export default LandingPage;
