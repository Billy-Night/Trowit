import TopNavbar from '../TopNavBar/TopNavbar.jsx';
import HeroSection from './Hero_Section/HeroSection.jsx';
import ImpressYourPeers from './Impress_your_peers_section/ImpressYourPeers.jsx';
import LPFeatures from './Features_Section/LPFeatures.jsx';
import CreateAndShare from './Create_And_Share/CreateAndShare.jsx';
import ManageContact from './Manage_Contact/ManageContact.jsx';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <TopNavbar />
      <HeroSection />
      <LPFeatures />
      <CreateAndShare />
      <ManageContact />
      <ImpressYourPeers />
    </div>
  );
};

export default LandingPage;
